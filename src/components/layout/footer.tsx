"use client";

import Link from "next/link";
import {Github, Linkedin} from "lucide-react";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger,} from "@/components/ui/tooltip";

const socialLinks = [
    {
        name: "GitHub",
        url: "https://github.com/astraen-dev",
        icon: Github,
    },
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/company/astraen",
        icon: Linkedin,
    },
];

export function Footer() {
    return (
        <footer className="relative z-10 w-full border-t border-white/10 py-8">
            <div
                className="container mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 px-4 sm:flex-row">
                <div className="flex flex-col items-center gap-2 text-center sm:items-start sm:text-left">
                    <p className="text-sm text-slate-400">
                        &copy; {new Date().getFullYear()} ASTRAEN (PTY) LTD. All Rights Reserved.
                    </p>
                    <div className="flex items-center gap-4 text-xs">
                        <Link
                            href="/terms"
                            className="text-slate-400 transition-colors hover:text-primary-a hover:underline"
                        >
                            Terms
                        </Link>
                        <span className="text-slate-600">|</span>
                        <Link
                            href="/privacy"
                            className="text-slate-400 transition-colors hover:text-primary-a hover:underline"
                        >
                            Privacy
                        </Link>
                    </div>
                </div>
                <div className="flex gap-6">
                    <TooltipProvider delayDuration={0}>
                        {socialLinks.map((link) => (
                            <Tooltip key={link.name}>
                                <TooltipTrigger asChild>
                                    <a
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-slate-400 transition-all duration-300 hover:text-white hover:[filter:drop-shadow(0_0_0.5rem_var(--color-primary-b))]"
                                    >
                                        <link.icon className="h-6 w-6"/>
                                    </a>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>{link.name}</p>
                                </TooltipContent>
                            </Tooltip>
                        ))}
                    </TooltipProvider>
                </div>
            </div>
        </footer>
    );
}