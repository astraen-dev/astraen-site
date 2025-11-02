"use client";

import Link from "next/link";
import {ChevronLeft} from "lucide-react";
import React from "react";
import {usePathname} from "next/navigation";

export default function RainVuLayout({children}: { children: React.ReactNode }) {
    const pathname = usePathname();

    // Determine the correct "back" link destination and text based on the current path.
    const isRainVuHome = pathname === '/rainvu';
    const backHref = isRainVuHome ? '/' : '/rainvu';
    const backText = isRainVuHome ? 'Back to Home' : 'Back to RainVu';

    return (
        <div className="relative z-10 mx-auto max-w-5xl px-4 py-12 sm:py-20">
            <header className="mb-8">
                <Link
                    href={backHref}
                    className="inline-flex items-center gap-2 text-secondary-a transition-colors hover:text-white group"
                >
                    <ChevronLeft
                        className="h-5 w-5 transition-transform group-hover:-translate-x-1"
                    />
                    {backText}
                </Link>
            </header>
            <main>{children}</main>
        </div>
    );
}