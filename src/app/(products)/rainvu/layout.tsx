import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'RainVu',
    description: 'Advanced data visualization and analytics platform.',
    openGraph: {
        title: 'RainVu | Astraen',
        description: 'Advanced data visualization and analytics platform.',
        images: [
            {
                url: '/rainvu/rainvu-og.png',
                width: 1200,
                height: 630,
                alt: 'RainVu Platform',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        images: ['/rainvu/rainvu-og.png'],
    },
};

export default function RainVuLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="relative z-10 mx-auto max-w-5xl px-4">
            <main>{children}</main>
        </div>
    );
}
