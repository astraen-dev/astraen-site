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
                        <div className="bg-surface/30 border-border relative grid w-full overflow-hidden rounded-3xl border transition-colors hover:border-white/20 md:grid-cols-2">
                            {/* Content Side */}
                            <div className="flex flex-col justify-between p-8 md:p-12">
                                <div>
                                    <div className="mb-6 flex items-center gap-3">
                                        <div className="bg-surface-highlight flex h-12 w-12 items-center justify-center rounded-xl border border-white/10">
                                            <MaskedIcon
                                                src="/rainvu/rainvu-icon-mask.png"
                                                className="h-6 w-6 bg-white"
                                            />
                                        </div>
                                        <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-400">
                                            Live on App Stores
                                        </span>
                                    </div>
                                    <h3 className="mb-4 text-4xl font-bold tracking-tight text-white">
                                        RainVu
                                    </h3>
                                    <p className="text-text-secondary mb-8 text-lg leading-relaxed">
                                        Precision rainfall logging for farmers
                                        and enthusiasts. Built with a
                                        privacy-first local architecture and
                                        120fps Flutter rendering.
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {[
                                        'Flutter',
                                        'Dart',
                                        'Drift DB',
                                        'Riverpod',
                                    ].map((tag) => (
                                        <span
                                            key={tag}
                                            className="bg-surface border-border rounded-md border px-2 py-1 font-mono text-xs text-white/70"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Visual Side */}
                            <div className="relative min-h-75 overflow-hidden bg-linear-to-br from-blue-900/20 to-black md:min-h-full">
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(59,130,246,0.15),transparent_70%)]" />

                                {/* Abstract UI Representation */}
                                <div className="bg-background absolute top-1/2 left-1/2 h-[80%] w-[70%] -translate-x-1/2 -translate-y-1/3 rounded-t-3xl border border-white/10 shadow-2xl transition-transform duration-500 group-hover:-translate-y-[30%]">
                                    <div className="border-border flex items-center gap-2 border-b p-4">
                                        <div className="h-2 w-2 rounded-full bg-red-500/50" />
                                        <div className="h-2 w-2 rounded-full bg-yellow-500/50" />
                                        <div className="h-2 w-2 rounded-full bg-green-500/50" />
                                    </div>
                                    <div className="p-6">
                                        <div className="mb-4 h-8 w-1/2 rounded-lg bg-white/5" />
                                        <div className="space-y-3">
                                            <div className="h-24 w-full rounded-xl bg-blue-500/10" />
                                            <div className="h-24 w-full rounded-xl bg-white/5" />
                                        </div>
                                    </div>
                                </div>

                                <div className="absolute right-6 bottom-6 rounded-full border border-white/20 bg-black/50 p-3 backdrop-blur-md transition-transform duration-300 group-hover:scale-110 group-hover:bg-white group-hover:text-black">
                                    <ArrowRight className="h-5 w-5" />
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </section>
        </div>
    );
}
