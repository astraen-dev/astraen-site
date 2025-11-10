"use client";

import Link from "next/link";
import {motion} from "framer-motion";
import Image from "next/image";
import {cn} from "@/lib/utils";
import {usePathname} from "next/navigation";

const navItems = [
    {name: "Home", href: "/"},
    {name: "RainVu", href: "/rainvu"},
];

export function Header() {
    const pathname = usePathname();

    return (
        <motion.header
            initial={{y: -100, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            transition={{duration: 0.5, ease: "easeOut"}}
            className="fixed top-0 left-0 right-0 z-50"
        >
            <div className="mx-auto mt-6 max-w-5xl px-4">
                <nav
                    className="flex items-center justify-between rounded-full bg-slate-900/40 p-2.5 shadow-lg shadow-primary-a/10 ring-1 ring-white/10 backdrop-blur-lg">
                    <Link href="/" className="flex items-center gap-3 pl-3">
                        <div className="relative">
                            <div
                                className="absolute -inset-1.5 rounded-full bg-gradient-to-br from-primary-a to-secondary-b opacity-75 blur"/>
                            <Image
                                src="/astraen_logo_v3.png"
                                alt="Astraen Logo"
                                width={36}
                                height={36}
                                className="relative rounded-full"
                            />
                        </div>
                        <span className="hidden text-xl font-bold tracking-wider text-white sm:inline">
							astraen.dev
						</span>
                    </Link>
                    <div className="flex items-center gap-1 rounded-full bg-background-start/50 p-1">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    "rounded-full px-4 py-1.5 text-sm font-medium transition-colors",
                                    pathname === item.href
                                        ? "bg-primary-a/20 text-white"
                                        : "text-slate-300 hover:bg-white/10 hover:text-white",
                                )}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </nav>
            </div>
        </motion.header>
    );
}