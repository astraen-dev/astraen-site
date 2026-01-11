import React from 'react';

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
        <div className="px-6 pt-32 pb-24">
            <div className="mx-auto max-w-3xl">
                <div className="border-border mb-16 border-b pb-8">
                    <h1 className="mb-6 text-4xl font-bold tracking-tighter text-white md:text-5xl">
                        {title}
                    </h1>
                    <div className="text-text-secondary flex flex-col gap-4 font-mono text-sm sm:flex-row sm:items-center">
                        <span>Last Updated: {lastUpdated}</span>
                        {revisionHistoryUrl && (
                            <>
                                <span className="text-border hidden sm:inline">
                                    /
                                </span>
                                <a
                                    href={revisionHistoryUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white hover:underline"
                                >
                                    View Git History
                                </a>
                            </>
                        )}
                    </div>
                </div>

                <div className="prose-styles">{children}</div>
            </div>
        </div>
    );
}
