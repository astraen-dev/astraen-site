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
    const paiaManualUrl = process.env.PAIA_MANUAL_BLOB_URL;
    if (!paiaManualUrl) {
        return new NextResponse('Server configuration error.', { status: 500 });
    }

    try {
        const blobMetadata = await head(paiaManualUrl);
        return NextResponse.redirect(blobMetadata.downloadUrl);
    } catch (error) {
        console.error(
            'An unexpected error occurred while fetching the PAIA manual metadata:',
            error
        );
        return new NextResponse('An unexpected error occurred.', {
            status: 500,
        });
    }
}
