"use server";

import {head} from "@vercel/blob";
import {z} from "zod";

const recaptchaResponseSchema = z.object({
    success: z.boolean(),
    score: z.number().optional(),
    "error-codes": z.array(z.string()).optional(),
});

export async function getPaiaManualUrl(
    token: string | undefined,
): Promise<{ success: boolean; url?: string; error?: string }> {
    if (!token) {
        return {success: false, error: "reCAPTCHA token is missing."};
    }

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

        await head(paiaManualUrl); // Verify the blob exists

        return {success: true, url: paiaManualUrl};
    } catch (error) {
        if (error instanceof Error && (error as any).statusCode === 404) {
            console.error("PAIA manual blob not found.", error);
            return {success: false, error: "The requested document could not be found."};
        }
        console.error("An unexpected error occurred in PAIA action:", error);
        return {success: false, error: "An unexpected error occurred."};
    }
}