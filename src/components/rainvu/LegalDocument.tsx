import React from "react";

interface LegalDocumentProps {
    title: string;
    lastUpdated: string;
    children: React.ReactNode;
}

export function LegalDocument({title, lastUpdated, children}: LegalDocumentProps) {
    return (
        <div
            className="relative w-full rounded-2xl bg-slate-900/40 p-8 shadow-2xl shadow-primary-a/10 ring-1 ring-white/10 backdrop-blur-lg sm:p-12">
            {/* Subtle Gradient Border */}
            <div
                className="absolute -inset-px rounded-2xl bg-gradient-to-br from-primary-a to-secondary-b opacity-20 blur-lg"/>

            <div className="relative z-10">
                <h1 className="text-4xl sm:text-5xl font-bold tracking-wider text-white mb-4 text-center">
                    {title}
                </h1>
                <p className="text-sm text-slate-400 mb-10 text-center">
                    Last Updated: {lastUpdated}
                </p>

                <div className="prose-styles">
                    {children}
                </div>
            </div>
        </div>
    );
}