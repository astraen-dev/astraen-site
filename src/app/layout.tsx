import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { Toaster } from 'sonner';
import { ReactNode } from 'react';
import { Analytics } from '@vercel/analytics/next';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

const fontSans = Inter({
    variable: '--font-sans',
    subsets: ['latin'],
    display: 'swap',
});

const fontMono = JetBrains_Mono({
    variable: '--font-mono',
    subsets: ['latin'],
    display: 'swap',
});

const siteConfig = {
    name: 'astraen',
    url: 'https://astraen.dev',
    description: 'Independent software laboratory.',
};

export const metadata: Metadata = {
    metadataBase: new URL(siteConfig.url),
    title: {
        default: siteConfig.name,
        template: `%s | ${siteConfig.name}`,
    },
    description:
        'Astraen is an independent software laboratory dedicated to engineering high-fidelity digital systems.',
    icons: [{ rel: 'icon', url: '/favicon.svg', type: 'image/svg+xml' }],
    openGraph: {
        title: siteConfig.name,
        description:
            'Astraen is an independent software laboratory dedicated to engineering high-fidelity digital systems.',
        url: siteConfig.url,
        siteName: siteConfig.name,
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: siteConfig.name,
        description: 'Independent software laboratory.',
    },
};

export default function RootLayout({
    children,
}: Readonly<{ children: ReactNode }>) {
    return (
        <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth">
            <body
                className={`${fontSans.variable} ${fontMono.variable} antialiased selection:bg-white selection:text-black`}
            >
                <div className="bg-noise z-0" />
                <Header />
                <main className="relative z-10 flex min-h-screen flex-col">
                    {children}
                </main>
                <Footer />
                <Toaster theme="dark" position="bottom-center" />
                <Analytics />
            </body>
        </html>
    );
}
