import { NextRequest, NextResponse } from 'next/server';
import { head } from '@vercel/blob';
import { redis } from '@/lib/redis';

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    const token = searchParams.get('token');

    if (!token) {
        return new NextResponse('Missing verification token.', { status: 400 });
    }

    const key = `paia-token:${token}`;

    const tokenExists = await redis.get(key);

    if (!tokenExists) {
        return new NextResponse('Invalid or expired token.', { status: 403 });
    }

    await redis.del(key);

    const paiaManualUrl = process.env.PAIA_MANUAL_BLOB_URL;
    const paiaManualFilename = process.env.PAIA_MANUAL_FILENAME;

    if (!paiaManualUrl || !paiaManualFilename) {
        return new NextResponse('Server configuration error.', { status: 500 });
    }

    try {
        const blobMetadata = await head(paiaManualUrl);
        const blobResponse = await fetch(blobMetadata.downloadUrl);

        if (!blobResponse.ok || !blobResponse.body) {
            console.error(
                `Failed to download blob from storage. Status: ${blobResponse.status}`
            );
            return new NextResponse(
                'Could not retrieve the document from storage.',
                { status: 502 }
            );
        }

        return new NextResponse(blobResponse.body, {
            headers: {
                'Content-Type': 'application/pdf',
                'Content-Disposition': `inline; filename="${paiaManualFilename}"`,
            },
        });
    } catch (error) {
        // This catch block handles unexpected errors (e.g., network failures).
        console.error(
            'An unexpected error occurred while fetching the PAIA manual:',
            error
        );
        return new NextResponse('An unexpected error occurred.', {
            status: 500,
        });
    }
}
