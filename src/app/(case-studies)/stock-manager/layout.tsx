import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Case Study: Bespoke Stock Manager',
    description:
        'Architecture of a bespoke, high-integrity inventory and logistics tool.',
};

export default function CaseStudyLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="relative flex min-h-screen flex-col">
            <div className="via-background to-background pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-indigo-900/20" />
            <div className="relative z-10">{children}</div>
        </div>
    );
}
