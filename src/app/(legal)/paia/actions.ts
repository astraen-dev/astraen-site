'use server';

import { z } from 'zod';
import { nanoid } from 'nanoid';
import { headers } from 'next/headers';
import { redis } from '@/lib/redis';

const RATE_LIMIT_WINDOW_SECONDS = 600;
const RATE_LIMIT_MAX_REQUESTS = 10;

function getClientIp(requestHeaders: Headers): string | null {
    const isDev = process.env.NODE_ENV === 'development';

    const vercelForwardedFor = requestHeaders.get('x-vercel-forwarded-for');
    if (vercelForwardedFor) {
        return vercelForwardedFor.split(',')[0].trim();
    }

    const forwardedFor = requestHeaders.get('x-forwarded-for');
    if (forwardedFor) {
        return forwardedFor.split(',')[0].trim();
    }

    const realIp = requestHeaders.get('x-real-ip');
    if (realIp) {
        return realIp.trim();
    }

    if (isDev) {
        return '127.0.0.1';
    }

    return null;
}

const recaptchaResponseSchema = z.object({
    success: z.boolean(),
    score: z.number().optional(),
    action: z.string().optional(),
    'error-codes': z.array(z.string()).optional(),
});

export async function getPaiaDownloadToken(
    token: string | undefined
): Promise<{ success: boolean; token?: string; error?: string }> {
    if (!token) {
        return { success: false, error: 'reCAPTCHA token is missing.' };
    }

    // --- Rate Limiting ---
    const requestHeaders = await headers();
    const ip = getClientIp(requestHeaders);

    if (!ip) {
        return { success: false, error: 'Could not identify request origin.' };
    }

    const rateLimitKey = `rate-limit:paia:${ip}`;
    try {
        const requestCount = await redis.incr(rateLimitKey);
        if (requestCount === 1) {
            await redis.expire(rateLimitKey, RATE_LIMIT_WINDOW_SECONDS);
        }

        if (requestCount > RATE_LIMIT_MAX_REQUESTS) {
            console.warn(`Rate limit exceeded for IP: ${ip}`);
            return {
                success: false,
                error: 'Too many requests. Please try again later.',
            };
        }
    } catch (error) {
        console.error('Redis error during rate limiting:', error);
    }

    // --- Validate Environment Variables ---
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;
    if (!secretKey) {
        console.error('RECAPTCHA_SECRET_KEY is not set.');
        return { success: false, error: 'Server configuration error.' };
    }

    const paiaManualUrl = process.env.PAIA_MANUAL_BLOB_URL;
    if (!paiaManualUrl) {
        console.error('PAIA_MANUAL_BLOB_URL is not set.');
        return { success: false, error: 'Server configuration error.' };
    }

    // --- Verify reCAPTCHA ---
    try {
        const response = await fetch(
            `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`,
            { method: 'POST' }
        );
        const data = await response.json();
        const validationResult = recaptchaResponseSchema.safeParse(data);

        if (!validationResult.success || !validationResult.data.success) {
            console.error(
                'reCAPTCHA validation failed:',
                validationResult.error?.issues,
                data['error-codes']
            );
            return { success: false, error: 'reCAPTCHA verification failed.' };
        }

        const { score, action } = validationResult.data;
        const expectedAction = 'paia_manual_access';

        console.log(
            `PAIA Access: reCAPTCHA score of ${score} for action '${action}'.`
        );

        if (action !== expectedAction) {
            console.warn(
                `reCAPTCHA action mismatch. Expected: '${expectedAction}', Received: '${action}'. IP: ${ip}`
            );
            return { success: false, error: 'Verification action mismatch.' };
        }

        if (score === undefined || score < 0.5) {
            console.warn(`Low reCAPTCHA score detected: ${score}. IP: ${ip}`);
            return { success: false, error: 'Bot-like behavior detected.' };
        }

        // --- Generate and Store Download Token ---
        const downloadToken = nanoid(32);
        const key = `paia-token:${downloadToken}`;
        await redis.set(key, 'valid', 'EX', 300);
        return { success: true, token: downloadToken };
    } catch (error) {
        console.error('An unexpected error occurred in PAIA action:', error);
        return { success: false, error: 'An unexpected error occurred.' };
    }
}
