import { NextRequest, NextResponse } from 'next/server';

export function proxy(request: NextRequest) {
    const { pathname } = request.nextUrl;

    const isProtectedRoute =
        pathname.startsWith('/paia') ||
        pathname.startsWith('/api/paia-download');

    const isDev = process.env.NODE_ENV === 'development';

    const upgradeDirective = isDev ? '' : 'upgrade-insecure-requests;';
    const devEval = isDev ? "'unsafe-eval'" : '';

    const requestHeaders = new Headers(request.headers);
    const responseHeaders = new Headers();

    // --- Protected Routes ---
    if (isProtectedRoute) {
        const nonce = btoa(crypto.randomUUID());

        requestHeaders.set('x-nonce', nonce);

        const dynamicCsp = `
            default-src 'self';
            script-src 'self' ${devEval} 'nonce-${nonce}' 'strict-dynamic' https://www.google.com/recaptcha/ https://www.gstatic.com/recaptcha/ https://va.vercel-scripts.com https://vitals.vercel-insights.com;
            style-src 'self' 'unsafe-inline';
            img-src 'self' blob: data:;
            font-src 'self' data:;
            connect-src 'self' https://vitals.vercel-insights.com https://www.google.com/recaptcha/ https://www.gstatic.com/recaptcha/;
            frame-src 'self' https://www.google.com/recaptcha/ https://recaptcha.google.com/;
            object-src 'none';
            base-uri 'self';
            form-action 'self';
            frame-ancestors 'none';
            ${upgradeDirective}
        `
            .replace(/\s{2,}/g, ' ')
            .trim();

        responseHeaders.set('Content-Security-Policy', dynamicCsp);
    }

    // --- Public Routes ---
    else {
        const staticCsp = `
            default-src 'self';
            script-src 'self' ${devEval} 'unsafe-inline' https://va.vercel-scripts.com https://vitals.vercel-insights.com https://www.google.com/recaptcha/ https://www.gstatic.com/recaptcha/;
            style-src 'self' 'unsafe-inline';
            img-src 'self' blob: data: https://*.vercel.app;
            font-src 'self' data:;
            connect-src 'self' https://vitals.vercel-insights.com https://www.google.com/recaptcha/ https://www.gstatic.com/recaptcha/;
            frame-src 'self' https://www.google.com/recaptcha/ https://recaptcha.google.com/;
            object-src 'none';
            base-uri 'self';
            form-action 'self';
            frame-ancestors 'none';
            ${upgradeDirective}
        `
            .replace(/\s{2,}/g, ' ')
            .trim();

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
        /*
         * Match all request paths except for the ones starting with:
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         * - images (svg, png, etc)
         */
        '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
    ],
};
