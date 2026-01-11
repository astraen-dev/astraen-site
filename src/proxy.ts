import { NextRequest, NextResponse } from 'next/server';

export function proxy(request: NextRequest) {
    const nonce = Buffer.from(crypto.randomUUID()).toString('base64');
    const cspHeader = `
        default-src 'self';
        script-src 'self' 'nonce-${nonce}' 'strict-dynamic' https://www.google.com/recaptcha/ https://www.gstatic.com/recaptcha/;
        style-src 'self' 'unsafe-inline';
        img-src 'self' blob: data:;
        font-src 'self' data:;
        connect-src 'self' https://vitals.vercel-insights.com;
        frame-src 'self' https://www.google.com/recaptcha/;
        object-src 'none';
        base-uri 'self';
        form-action 'self';
        frame-ancestors 'none';
        upgrade-insecure-requests;
    `
        .replace(/\s{2,}/g, ' ')
        .trim();

    const requestHeaders = new Headers(request.headers);
    requestHeaders.set('x-nonce', nonce);
    requestHeaders.set('Content-Security-Policy', cspHeader);

    const response = NextResponse.next({
        request: {
            headers: requestHeaders,
        },
    });

    response.headers.set('Content-Security-Policy', cspHeader);
    response.headers.set(
        'Strict-Transport-Security',
        'max-age=63072000; includeSubDomains; preload'
    );
    response.headers.set('X-Content-Type-Options', 'nosniff');
    response.headers.set('Referrer-Policy', 'origin-when-cross-origin');
    response.headers.set(
        'Permissions-Policy',
        'camera=(), microphone=(), geolocation=()'
    );

    return response;
}

export const config = {
    matcher: ['/paia', '/api/paia-download'],
};
