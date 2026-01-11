import { NextRequest, NextResponse } from 'next/server';

export function proxy(request: NextRequest) {
    const nonce = Buffer.from(crypto.randomUUID()).toString('base64');

    const devScripts =
        process.env.NODE_ENV === 'development' ? "'unsafe-eval'" : '';

    const cspDirectives = [
        `default-src 'self'`,
        `script-src 'self' 'nonce-${nonce}' ${devScripts} https://vitals.vercel-insights.com https://www.google.com/recaptcha/ https://www.gstatic.com/recaptcha/ https://vercel.live`,
        `style-src 'self' 'unsafe-inline'`,
        `img-src 'self' blob: data: https://vercel.live`,
        `font-src 'self' data:`,
        `connect-src 'self' https://vitals.vercel-insights.com https://vercel.live`,
        `frame-src 'self' https://www.google.com/recaptcha/ https://vercel.live`,
        `object-src 'none'`,
        `base-uri 'self'`,
        `form-action 'self'`,
        `frame-ancestors 'none'`,
        `upgrade-insecure-requests`,
    ];

    const cspHeader = cspDirectives.join('; ');

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
    matcher: [
        {
            source: '/((?!_next/static|_next/image|favicon.svg|sitemap.xml|robots.txt).*)',
            missing: [
                { type: 'header', key: 'next-router-prefetch' },
                { type: 'header', key: 'purpose', value: 'prefetch' },
            ],
        },
    ],
};
