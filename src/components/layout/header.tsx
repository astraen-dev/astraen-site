'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    motion,
    AnimatePresence,
    useScroll,
    useTransform,
} from 'framer-motion';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
    { name: 'Index', href: '/' },
    { name: 'RainVu', href: '/rainvu' },
];

export function Header() {
    const pathname = usePathname();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { scrollY } = useScroll();

    // Smooth transformation for header background and border
    const bgOpacity = useTransform(scrollY, [0, 50], [0, 0.8]);
    const borderOpacity = useTransform(scrollY, [0, 50], [0, 1]);
    const paddingY = useTransform(scrollY, [0, 50], [24, 16]);

    return (
        <>
            <motion.header
                style={{
                    backgroundColor: useTransform(
                        bgOpacity,
                        (v) => `rgba(5, 5, 5, ${v})`
                    ),
                    borderBottomColor: useTransform(
                        borderOpacity,
                        (v) => `rgba(38, 38, 38, ${v})`
                    ),
                    paddingTop: paddingY,
                    paddingBottom: paddingY,
                }}
                className="fixed top-0 right-0 left-0 z-50 flex items-center justify-between border-b border-transparent px-6 backdrop-blur-md transition-all duration-300"
            >
                <div className="container mx-auto flex max-w-7xl items-center justify-between">
                    <Link href="/" className="group relative z-50">
                        <span className="font-mono text-lg font-bold tracking-tighter text-white transition-opacity group-hover:opacity-80">
                            ASTRAEN
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden items-center gap-8 md:flex">
                        {navItems.map((item) => {
                            const isActive =
                                item.href === '/'
                                    ? pathname === '/'
                                    : pathname.startsWith(item.href);
                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={cn(
                                        'relative text-sm font-medium transition-all duration-200',
                                        isActive
                                            ? 'text-white'
                                            : 'text-text-secondary hover:text-white'
                                    )}
                                >
                                    {item.name}
                                    {isActive && (
                                        <motion.div
                                            layoutId="nav-underline"
                                            className="absolute right-0 -bottom-1 left-0 h-px bg-white"
                                        />
                                    )}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setMobileMenuOpen(true)}
                        className="relative z-50 rounded-md p-1 text-white transition-colors hover:bg-white/10 md:hidden"
                    >
                        <Menu className="h-5 w-5" />
                    </button>
                </div>
            </motion.header>

            {/* Mobile Navigation Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-60 flex flex-col items-center justify-center bg-black/95 backdrop-blur-xl"
                    >
                        <button
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-text-secondary absolute top-6 right-6 p-2 transition-colors hover:text-white"
                        >
                            <X className="h-6 w-6" />
                        </button>

                        <nav className="flex flex-col gap-8 text-center">
                            {navItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="text-3xl font-light tracking-tight text-white/90 transition-colors hover:text-white"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </nav>

                        <div className="text-text-muted absolute bottom-10 font-mono text-xs tracking-widest uppercase">
                            Astraen Software Lab
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
