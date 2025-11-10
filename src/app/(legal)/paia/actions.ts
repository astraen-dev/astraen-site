"use server";

import {z} from "zod";
import {nanoid} from "nanoid";
import {redis} from "@/lib/redis";

const recaptchaResponseSchema = z.object({
    success: z.boolean(),
    score: z.number().optional(),
    "error-codes": z.array(z.string()).optional(),
});

export async function getPaiaDownloadToken(
    token: string | undefined,
): Promise<{ success: boolean; token?: string; error?: string }> {
    if (!token) {
        return {success: false, error: "reCAPTCHA token is missing."};
    }

    // --- Validate Environment Variables ---
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;
    if (!secretKey) {
        console.error("RECAPTCHA_SECRET_KEY is not set.");
        return {success: false, error: "Server configuration error."};
    }

    const paiaManualUrl = process.env.PAIA_MANUAL_BLOB_URL;
    if (!paiaManualUrl) {
        console.error("PAIA_MANUAL_BLOB_URL is not set.");
        return {success: false, error: "Server configuration error."};
    }

    // --- Verify reCAPTCHA ---
    try {
        const response = await fetch(
            `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`,
            {method: "POST"},
        );
        const data = await response.json();
        const validationResult = recaptchaResponseSchema.safeParse(data);

        if (!validationResult.success || !validationResult.data.success) {
            console.error("reCAPTCHA validation failed:", data["error-codes"]);
            return {success: false, error: "reCAPTCHA verification failed."};
        }

        if (validationResult.data.score && validationResult.data.score < 0.5) {
            console.warn(`Low reCAPTCHA score: ${validationResult.data.score}`);
            return {success: false, error: "Bot-like behavior detected."};
        }

        // --- Generate and Store Download Token ---
        const downloadToken = nanoid(32);
        const key = `paia-token:${downloadToken}`;
        await redis.set(key, "valid", {EX: 300});
        return {success: true, token: downloadToken};
    } catch (error) {
        console.error("An unexpected error occurred in PAIA action:", error);
        return {success: false, error: "An unexpected error occurred."};
    }
}