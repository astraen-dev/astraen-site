import React from "react";
import {History} from "lucide-react";

interface LegalDocumentProps {
    title: string;
    lastUpdated: string;
    children: React.ReactNode;
    revisionHistoryUrl?: string; // Add this optional prop
}

export function LegalDocument({title, lastUpdated, children, revisionHistoryUrl}: LegalDocumentProps) {
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
                <div className="text-center mb-10">
                    <p className="text-sm text-slate-400">
                        Last Updated: {lastUpdated}
                    </p>
                    {revisionHistoryUrl && (
                        <a
                            href={revisionHistoryUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 mt-2 text-xs text-slate-500 transition-colors hover:text-primary-a hover:underline"
                        >
                            <History className="h-3 w-3"/>
                            View revision history
                        </a>
                    )}
                </div>

                <div className="prose-styles">
                    {children}
                </div>
            </div>
        </div>
    );
}