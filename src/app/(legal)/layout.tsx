import Link from "next/link";
import {ChevronLeft} from "lucide-react";
import React from "react";

export default function LegalLayout({children}: { children: React.ReactNode }) {
    return (
        <div className="relative z-10 mx-auto max-w-5xl px-4 py-12 sm:py-20">
            <header className="mb-8">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-secondary-a transition-colors hover:text-white group"
                >
                    <ChevronLeft
                        className="h-5 w-5 transition-transform group-hover:-translate-x-1"
                    />
                    Back to Home
                </Link>
            </header>
            <main>{children}</main>
        </div>
    );
}