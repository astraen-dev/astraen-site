'use client';

import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Menu, X } from 'lucide-react';

const navItems = [
    { name: 'Home', href: '/' },
    { name: 'RainVu', href: '/rainvu' },
];

export function Header() {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    return (
        <motion.header
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="bg-background-start/80 fixed top-0 right-0 left-0 z-50 border-b border-white/5 backdrop-blur-md"
        >
            <div className="container mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
                <Link
                    href="/"
                    aria-label="Go to homepage"
                    className="flex items-center gap-3"
                >
                    <Image
                        src="/astraen_logo_v3.png"
                        alt="Astraen Logo"
                        width={32}
                        height={32}
                        className="rounded-full opacity-90 grayscale transition-all hover:grayscale-0"
                    />
                    <span className="font-mono text-lg font-semibold tracking-tight text-white">
                        astraen
                    </span>
                </Link>

                <nav className="hidden md:flex md:items-center md:gap-8">
                    {navItems.map((item) => {
                        const parentSegment = `/${pathname.split('/')[1] ?? ''}`;
                        const isActive =
                            item.href === '/'
                                ? pathname === '/'
                                : item.href === parentSegment;

                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    'text-sm font-medium transition-colors',
                                    isActive
                                        ? 'text-primary-b'
                                        : 'text-slate-400 hover:text-white'
                                )}
                            >
                                {item.name}
                            </Link>
                        );
                    })}
                </nav>

                <div className="md:hidden">
                    <Dialog.Root open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                        <Dialog.Trigger asChild>
                            <button className="text-slate-300 transition-colors hover:text-white">
                                <Menu className="h-6 w-6" />
                            </button>
                        </Dialog.Trigger>
                        <AnimatePresence>
                            {isMenuOpen && (
                                <Dialog.Portal forceMount>
                                    <Dialog.Overlay asChild>
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            className="bg-background-start/90 fixed inset-0 z-50 backdrop-blur-sm"
                                        />
                                    </Dialog.Overlay>
                                    <Dialog.Content asChild>
                                        <motion.div
                                            initial={{ x: '100%' }}
                                            animate={{ x: 0 }}
                                            exit={{ x: '100%' }}
                                            transition={{
                                                ease: 'easeInOut',
                                                duration: 0.2,
                                            }}
                                            className="bg-background-end fixed inset-y-0 right-0 z-50 w-full max-w-xs border-l border-white/10 p-6 shadow-2xl"
                                        >
                                            <div className="flex items-center justify-end">
                                                <Dialog.Close asChild>
                                                    <button className="text-slate-400 hover:text-white">
                                                        <X className="h-6 w-6" />
                                                    </button>
                                                </Dialog.Close>
                                            </div>
                                            <div className="mt-8 flex flex-col gap-6">
                                                {navItems.map((item) => (
                                                    <Link
                                                        key={item.href}
                                                        href={item.href}
                                                        onClick={() =>
                                                            setIsMenuOpen(false)
                                                        }
                                                        className="hover:text-primary-b text-2xl font-medium text-slate-200"
                                                    >
                                                        {item.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        </motion.div>
                                    </Dialog.Content>
                                </Dialog.Portal>
                            )}
                        </AnimatePresence>
                    </Dialog.Root>
                </div>
            </div>
        </motion.header>
    );
}
