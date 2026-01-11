'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Code, Smartphone, Terminal, Zap } from 'lucide-react';
import { MaskedIcon } from '@/components/ui/masked-icon';

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.3,
        },
    },
};

const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function Home() {
    return (
        <div className="flex w-full flex-col items-center">
            {/* Hero Section */}
            <section className="flex min-h-[90vh] w-full flex-col items-center justify-center px-6 pt-32 pb-20">
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="w-full max-w-4xl"
                >
                    <motion.div variants={item} className="mb-8">
                        <span className="border-border bg-surface/50 text-text-secondary inline-flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-xs">
                            <span className="relative flex h-2 w-2">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
                            </span>
                            Available for new projects
                        </span>
                    </motion.div>

                    <motion.h1
                        variants={item}
                        className="mb-8 text-6xl leading-[0.9] font-bold tracking-tighter text-white sm:text-8xl md:text-9xl"
                    >
                        Logic <span className="text-text-muted">into</span>
                        <br />
                        Reality.
                    </motion.h1>

                    <motion.p
                        variants={item}
                        className="text-text-secondary max-w-xl text-lg leading-relaxed sm:text-xl"
                    >
                        Astraen is an independent development studio obsessing
                        over high-performance architecture, clean code, and
                        native-feel experiences.
                    </motion.p>
                </motion.div>
            </section>

            {/* Bento Grid Competencies */}
            <section className="border-border w-full border-t px-6 py-24">
                <div className="mx-auto max-w-6xl">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                        <div className="bg-surface/30 border-border hover:bg-surface/50 rounded-2xl border p-8 transition-colors md:col-span-2">
                            <Terminal className="mb-4 h-8 w-8 text-white" />
                            <h3 className="mb-2 text-2xl font-bold text-white">
                                Full-Stack Architecture
                            </h3>
                            <p className="text-text-secondary">
                                Building scalable, edge-ready foundations using
                                Next.js, Serverless, and Redis. Robust data
                                design for ambitious ideas.
                            </p>
                        </div>
                        <div className="bg-surface/30 border-border hover:bg-surface/50 rounded-2xl border p-8 transition-colors">
                            <Smartphone className="mb-4 h-8 w-8 text-white" />
                            <h3 className="mb-2 text-2xl font-bold text-white">
                                Mobile
                            </h3>
                            <p className="text-text-secondary">
                                Native-feel Flutter engineering.
                            </p>
                        </div>
                        <div className="bg-surface/30 border-border hover:bg-surface/50 rounded-2xl border p-8 transition-colors">
                            <Zap className="mb-4 h-8 w-8 text-white" />
                            <h3 className="mb-2 text-2xl font-bold text-white">
                                Performance
                            </h3>
                            <p className="text-text-secondary">
                                Optimization is not an afterthought.
                            </p>
                        </div>
                        <div className="bg-surface/30 border-border hover:bg-surface/50 rounded-2xl border p-8 transition-colors md:col-span-2">
                            <Code className="mb-4 h-8 w-8 text-white" />
                            <h3 className="mb-2 text-2xl font-bold text-white">
                                Digital Craftsmanship
                            </h3>
                            <p className="text-text-secondary">
                                Bridging the gap between functional code and
                                art. Polished, fluid, and meticulous.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Work */}
            <section className="border-border w-full border-t px-6 py-24">
                <div className="mx-auto max-w-6xl">
                    <h2 className="text-text-muted mb-12 font-mono text-sm tracking-widest uppercase">
                        Featured Work
                    </h2>
                    <Link href="/rainvu" className="group block">
                        <div className="bg-surface border-border relative aspect-2/1 w-full overflow-hidden rounded-3xl border">
                            <div className="absolute inset-0 bg-linear-to-br from-blue-900/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                            <div className="absolute bottom-0 left-0 w-full p-8 sm:p-12">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-6">
                                        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white">
                                            <MaskedIcon
                                                src="/rainvu/rainvu-icon-mask.png"
                                                className="h-10 w-10 bg-black"
                                            />
                                        </div>
                                        <div>
                                            <h3 className="text-3xl font-bold tracking-tight text-white">
                                                RainVu
                                            </h3>
                                            <p className="text-text-secondary mt-1">
                                                Precision Rainfall Logging
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 transition-all duration-300 group-hover:bg-white group-hover:text-black">
                                        <ArrowRight className="h-5 w-5" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </section>
        </div>
    );
}
