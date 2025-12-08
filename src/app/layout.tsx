import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Toaster } from 'sonner';
import { ReactNode } from 'react';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { headers } from 'next/headers';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { ScrollToTop } from '@/components/layout/scroll-to-top';
import HyperdriveBackground from '@/components/layout/hyperdrive-background';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

const siteConfig = {
    name: 'astraen',
    url: 'https://astraen.dev',
    ogImage: 'https://astraen.dev/astraen_logo_v3.png',
    description:
        'The independent development lab behind RainVu. Specializing in high-performance web architecture, mobile applications, and open-source experiments.',
    author: 'ASTRAEN (PTY) LTD',
};

export const metadata: Metadata = {
    metadataBase: new URL(siteConfig.url),
    title: {
        default: `${siteConfig.name} | Where Ideas Execute`,
        template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.description,
    authors: [{ name: siteConfig.author, url: siteConfig.url }],
    creator: siteConfig.author,
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
        },
    },
    icons: [
        {
            rel: 'icon',
            url: '/favicon.svg',
            type: 'image/svg+xml',
        },
    ],
    openGraph: {
        type: 'website',
        url: siteConfig.url,
        title: siteConfig.name,
        description: siteConfig.description,
        siteName: siteConfig.name,
        images: [
            {
                url: siteConfig.ogImage,
                width: 1024,
                height: 1024,
                alt: 'Astraen Logo',
            },
        ],
    },
    alternates: {
        canonical: '/',
    },
};

const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'astraen',
    url: 'https://astraen.dev',
    logo: 'https://astraen.dev/astraen_logo_v3.png',
    sameAs: [
        'https://github.com/astraen-dev',
        'https://www.linkedin.com/company/astraen',
    ],
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: ReactNode;
}>) {
    const headersList = await headers();
    const nonce = headersList.get('x-nonce') || '';

    return (
        <html lang="en" className="!scroll-smooth">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <ScrollToTop />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(structuredData),
                    }}
                    nonce={nonce}
                    suppressHydrationWarning
                />
                <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
                    <HyperdriveBackground />

                    <Header />
                    {children}
                    <Footer />
                </div>
                <Toaster
                    theme="dark"
                    position="bottom-right"
                    toastOptions={{
                        style: {
                            background: 'hsl(222 47.4% 11.2% / 0.8)',
                            borderColor: 'hsl(246 70% 70% / 0.2)',
                            backdropFilter: 'blur(4px)',
                        },
                        classNames: {
                            title: 'text-secondary-a',
                            description: 'text-slate-400',
                        },
                    }}
                />
                <Analytics />
                <SpeedInsights />
            </body>
        </html>
    );
}
