"use client";

import Link from "next/link";
import {AnimatePresence, motion} from "framer-motion";
import Image from "next/image";
import {cn} from "@/lib/utils";
import {usePathname} from "next/navigation";
import React, {useState} from "react";
import * as Dialog from "@radix-ui/react-dialog";
import {Menu, X} from "lucide-react";

const navItems = [
    {name: "Home", href: "/"},
    {name: "RainVu", href: "/rainvu"},
];

const subPageNames: Record<string, string> = {
    privacy: "Privacy",
    terms: "Terms",
    "data-deletion": "Data Deletion",
};

export function Header() {
    const pathname = usePathname();
    const pathSegments = pathname.split("/").filter(Boolean);
    const parentSegment = pathSegments[0] ? `/${pathSegments[0]}` : "/";
    const childSegment = pathSegments[1];
    const childPillName = childSegment ? subPageNames[childSegment] : null;

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const mobileLinkVariants = {
        open: {opacity: 1, y: 0},
        closed: {opacity: 0, y: 20},
    };

    const mobileNavVariants = {
        open: {
            transition: {staggerChildren: 0.1, delayChildren: 0.2},
        },
        closed: {
            transition: {staggerChildren: 0.05, staggerDirection: -1},
        },
    };

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

                    {/* --- Desktop Navigation --- */}
                    <div className="hidden items-center gap-1 rounded-full bg-background-start/50 p-1 md:flex">
                        {navItems.map((item) => {
                            const isParentActive = parentSegment === item.href && item.href !== "/";
                            const isHomeActive = item.href === "/" && pathname === "/";
                            const isActive = isParentActive || isHomeActive;

                            if (isActive) {
                                return (
                                    <motion.div
                                        key={`${item.href}-active`}
                                        layoutId={`active-pill-${item.href}`}
                                        className="flex items-center rounded-full bg-primary-a/20"
                                        transition={{
                                            type: "spring",
                                            stiffness: 350,
                                            damping: 30,
                                        }}
                                    >
                                        <Link
                                            href={item.href}
                                            className="px-4 py-1.5 text-sm font-medium text-white"
                                        >
                                            {item.name}
                                        </Link>

                                        <AnimatePresence>
                                            {isParentActive && childPillName && (
                                                <motion.div
                                                    className="flex items-center overflow-hidden"
                                                    initial={{width: 0, opacity: 0}}
                                                    animate={{width: "auto", opacity: 1}}
                                                    exit={{width: 0, opacity: 0}}
                                                    transition={{
                                                        type: "spring",
                                                        stiffness: 350,
                                                        damping: 30,
                                                        delay: 0.1,
                                                    }}
                                                >
													<span
                                                        className="text-slate-500"
                                                        aria-hidden="true"
                                                    >
														/
													</span>
                                                    <div
                                                        className="whitespace-nowrap py-1.5 pl-2 pr-4 text-sm font-medium text-white">
                                                        {childPillName}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </motion.div>
                                );
                            }

                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={cn(
                                        "rounded-full px-4 py-1.5 text-sm font-medium transition-colors",
                                        "text-slate-300 hover:bg-white/10 hover:text-white",
                                    )}
                                >
                                    {item.name}
                                </Link>
                            );
                        })}
                    </div>

                    {/* --- Mobile Navigation --- */}
                    <div className="md:hidden">
                        <Dialog.Root open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                            <Dialog.Trigger asChild>
                                <button
                                    className="rounded-full p-2.5 text-slate-300 transition-colors hover:bg-white/10 hover:text-white"
                                    aria-label="Open menu"
                                >
                                    <Menu className="h-5 w-5"/>
                                </button>
                            </Dialog.Trigger>
                            <AnimatePresence>
                                {isMenuOpen && (
                                    <Dialog.Portal forceMount>
                                        <Dialog.Overlay asChild>
                                            <motion.div
                                                initial={{opacity: 0}}
                                                animate={{opacity: 1}}
                                                exit={{opacity: 0}}
                                                transition={{duration: 0.3, ease: "easeInOut"}}
                                                className="fixed inset-0 z-50 bg-background-start/80 backdrop-blur-xl"
                                            />
                                        </Dialog.Overlay>
                                        <Dialog.Content asChild>
                                            <motion.div
                                                initial={{opacity: 0}}
                                                animate={{opacity: 1}}
                                                exit={{opacity: 0}}
                                                className="fixed inset-0 z-50"
                                            >
                                                <Dialog.Title className="sr-only">
                                                    Navigation Menu
                                                </Dialog.Title>
                                                <Dialog.Description className="sr-only">
                                                    A list of links to navigate the site, including Home and RainVu.
                                                </Dialog.Description>
                                                <div className="container mx-auto flex h-full max-w-5xl flex-col px-4">
                                                    <div className="flex h-[88px] items-center justify-between">
                                                        <Link
                                                            href="/"
                                                            onClick={() => setIsMenuOpen(false)}
                                                            className="flex items-center gap-3"
                                                        >
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
                                                        </Link>
                                                        <Dialog.Close asChild>
                                                            <button
                                                                className="rounded-full p-2.5 text-slate-300 transition-colors hover:bg-white/10 hover:text-white"
                                                                aria-label="Close menu"
                                                            >
                                                                <X className="h-5 w-5"/>
                                                            </button>
                                                        </Dialog.Close>
                                                    </div>

                                                    <motion.div
                                                        initial="closed"
                                                        animate="open"
                                                        exit="closed"
                                                        variants={mobileNavVariants}
                                                        className="flex flex-1 flex-col items-center justify-center gap-8"
                                                    >
                                                        {navItems.map((item) => (
                                                            <motion.div
                                                                key={item.href}
                                                                variants={mobileLinkVariants}
                                                            >
                                                                <Link
                                                                    href={item.href}
                                                                    onClick={() => setIsMenuOpen(false)}
                                                                    className="block text-3xl font-semibold text-secondary-a transition-colors hover:text-white hover:[filter:drop-shadow(0_0_0.5rem_var(--color-primary-b))]"
                                                                >
                                                                    {item.name}
                                                                </Link>
                                                            </motion.div>
                                                        ))}
                                                    </motion.div>
                                                </div>
                                            </motion.div>
                                        </Dialog.Content>
                                    </Dialog.Portal>
                                )}
                            </AnimatePresence>
                        </Dialog.Root>
                    </div>
                </nav>
            </div>
        </motion.header>
    );
}