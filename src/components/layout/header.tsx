"use client";

import Link from "next/link";
import {AnimatePresence, motion} from "framer-motion";
import Image from "next/image";
import {cn} from "@/lib/utils";
import {usePathname} from "next/navigation";
import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import {Menu, X} from "lucide-react";
import {Breadcrumbs} from "./breadcrumbs";

const navItems = [
    {name: "Home", href: "/"},
    {name: "RainVu", href: "/rainvu"},
];

export function Header() {
    const pathname = usePathname();
    const [activePill, setActivePill] = React.useState<{
        left: number;
        width: number;
        opacity: number;
    } | null>(null);
    const navRef = React.useRef<HTMLDivElement>(null);
    const itemRefs = React.useRef<Array<HTMLAnchorElement | null>>([]);

    React.useEffect(() => {
        const calculatePill = () => {
            const parentSegment = `/${pathname.split("/")[1] ?? ""}`;
            const activeIndex = navItems.findIndex(item =>
                item.href === "/" ? pathname === "/" : item.href === parentSegment,
            );

            const activeItem = itemRefs.current[activeIndex];
            const navContainer = navRef.current;

            if (activeItem && navContainer) {
                const navRect = navContainer.getBoundingClientRect();
                const itemRect = activeItem.getBoundingClientRect();

                setActivePill({
                    left: itemRect.left - navRect.left,
                    width: itemRect.width,
                    opacity: 1,
                });
            } else {
                setActivePill({left: 0, width: 0, opacity: 0});
            }
        };

        const timeoutId = setTimeout(calculatePill, 50);

        window.addEventListener("resize", calculatePill);
        return () => {
            clearTimeout(timeoutId);
            window.removeEventListener("resize", calculatePill);
        };
    }, [pathname]);

    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

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
                    <div className="flex shrink-0 items-center gap-3 pl-3">
                        <Link href="/" aria-label="Go to homepage">
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
                        <div className="hidden sm:inline">
                            <Breadcrumbs/>
                        </div>
                    </div>

                    {/* --- Desktop Navigation --- */}
                    <div
                        ref={navRef}
                        className="relative hidden items-center rounded-full bg-background-start/50 p-1 md:flex"
                    >
                        {/* Animated Glow Pill */}
                        <AnimatePresence>
                            {activePill && (
                                <motion.div
                                    initial={false}
                                    animate={{
                                        left: activePill.left,
                                        width: activePill.width,
                                        opacity: activePill.opacity,
                                    }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 400,
                                        damping: 35,
                                    }}
                                    className="absolute h-[calc(100%-8px)] rounded-full bg-primary-a/10"
                                    style={{
                                        boxShadow:
                                            "0 0 12px 2px var(--color-primary-a-translucent, #7989EC30)",
                                    }}
                                />
                            )}
                        </AnimatePresence>

                        {navItems.map((item, index) => {
                            const parentSegment = `/${pathname.split("/")[1] ?? ""}`;
                            const isActive =
                                item.href === "/"
                                    ? pathname === "/"
                                    : item.href === parentSegment;

                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    ref={el => {
                                        itemRefs.current[index] = el;
                                    }}
                                    className={cn(
                                        "relative z-10 rounded-full px-4 py-1.5 text-sm font-medium transition-colors",
                                        isActive
                                            ? "text-white"
                                            : "text-slate-300 hover:text-white",
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
                                                    A list of links to navigate the site, including Home
                                                    and RainVu.
                                                </Dialog.Description>
                                                <div
                                                    className="container mx-auto flex h-full max-w-5xl flex-col px-4 pt-6">
                                                    <div
                                                        className="flex items-center justify-between rounded-full bg-slate-900/40 p-2.5 shadow-lg shadow-primary-a/10 ring-1 ring-white/10 backdrop-blur-lg">
                                                        <Link
                                                            href="/"
                                                            onClick={() => setIsMenuOpen(false)}
                                                            className="flex items-center gap-3 pl-3"
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
                                                        {navItems.map(item => (
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