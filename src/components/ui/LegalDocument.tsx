import React from 'react';
import { History } from 'lucide-react';

interface LegalDocumentProps {
    title: string;
    lastUpdated: string;
    children: React.ReactNode;
    revisionHistoryUrl?: string;
}

export function LegalDocument({
    title,
    lastUpdated,
    children,
    revisionHistoryUrl,
}: LegalDocumentProps) {
    return (
        <div className="shadow-primary-a/10 relative w-full rounded-2xl bg-slate-900/40 p-8 shadow-2xl ring-1 ring-white/10 backdrop-blur-lg sm:p-12">
            <div className="from-primary-a to-secondary-b absolute -inset-px rounded-2xl bg-gradient-to-br opacity-20 blur-lg" />

            <div className="relative z-10">
                <h1 className="mb-4 text-center text-4xl font-bold tracking-wider text-white sm:text-5xl">
                    {title}
                </h1>
                <div className="mb-10 text-center">
                    <p className="text-sm text-slate-400">
                        Last Updated: {lastUpdated}
                    </p>
                    {revisionHistoryUrl && (
                        <a
                            href={revisionHistoryUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-primary-a mt-2 inline-flex items-center gap-2 text-xs text-slate-500 transition-colors hover:underline"
                        >
                            <History className="h-3 w-3" />
                            View revision history
                        </a>
                    )}
                </div>

                <div className="prose-styles">{children}</div>
            </div>
        </div>
    );
}
