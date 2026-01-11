import type { NextConfig } from 'next';

const securityHeaders = () => {
    const cspDirectives = [
        `default-src 'self'`,
        `script-src 'self' 'unsafe-eval' 'unsafe-inline' https://vitals.vercel-insights.com https://vercel.live https://va.vercel-scripts.com https://www.google.com/recaptcha/ https://www.gstatic.com/recaptcha/`,
        `style-src 'self' 'unsafe-inline'`,
        `img-src 'self' blob: data: https://vercel.live`,
        `font-src 'self' data:`,
        `connect-src 'self' https://vitals.vercel-insights.com https://vercel.live`,
        `frame-src 'self' https://vercel.live https://www.google.com/recaptcha/`,
        `object-src 'none'`,
        `base-uri 'self'`,
        `form-action 'self'`,
        `frame-ancestors 'none'`,
        `upgrade-insecure-requests`,
    ];

    const cspHeader = cspDirectives.join('; ');

    return [
        {
            key: 'Content-Security-Policy',
            value: cspHeader,
        },
        {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
        },
        {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
        },
        {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
        },
        {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
        },
    ];
};

const nextConfig: NextConfig = {
    async headers() {
        return [
            {
                source: '/:path*',
                headers: securityHeaders(),
            },
        ];
    },
};

export default nextConfig;
