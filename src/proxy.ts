import { NextRequest, NextResponse } from 'next/server';

export function proxy(request: NextRequest) {
    const { pathname } = request.nextUrl;

    const isProtectedRoute =
        pathname.startsWith('/paia') ||
        pathname.startsWith('/api/paia-download');

    const staticCsp = `
        default-src 'self';
        script-src 'self' 'unsafe-eval' 'unsafe-inline' https://vitals.vercel-insights.com https://vercel.live https://va.vercel-scripts.com https://www.google.com/recaptcha/ https://www.gstatic.com/recaptcha/;
        style-src 'self' 'unsafe-inline';
        img-src 'self' blob: data: https://vercel.live;
        font-src 'self' data:;
        connect-src 'self' https://vitals.vercel-insights.com https://vercel.live https://www.google.com/recaptcha/ https://www.gstatic.com/recaptcha/;
        frame-src 'self' https://vercel.live https://www.google.com/recaptcha/;
        object-src 'none';
        base-uri 'self';
        form-action 'self';
        frame-ancestors 'none';
        upgrade-insecure-requests;
    `
        .replace(/\s{2,}/g, ' ')
        .trim();

    const nonce = Buffer.from(crypto.randomUUID()).toString('base64');
    const dynamicCsp = `
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
    const responseHeaders = new Headers();

    if (isProtectedRoute) {
        requestHeaders.set('x-nonce', nonce);
        requestHeaders.set('Content-Security-Policy', dynamicCsp);
        responseHeaders.set('Content-Security-Policy', dynamicCsp);
    } else {
        responseHeaders.set('Content-Security-Policy', staticCsp);
    }

    const response = NextResponse.next({
        request: {
            headers: requestHeaders,
        },
    });

    responseHeaders.forEach((value, key) => {
        response.headers.set(key, value);
    });

    return response;
}

export const config = {
    matcher: [
        '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
    ],
};
