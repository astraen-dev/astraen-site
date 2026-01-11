'use client';

import { motion, stagger, Variants } from 'framer-motion';
import Link from 'next/link';
import {
    ArrowRight,
    Smartphone,
    Zap,
    Plus,
    Droplets,
    Calendar,
    BarChart3,
    Cpu,
    Compass,
    Code2,
    PenTool,
    Signal,
    Wifi,
    Battery,
    Microscope,
} from 'lucide-react';
import { MaskedIcon } from '@/components/ui/masked-icon';

const container: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            delayChildren: stagger(0.1, { startDelay: 0.3 }),
        },
    },
};

const item: Variants = {
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
                            Lab active
                        </span>
                    </motion.div>

                    <motion.h1
                        variants={item}
                        className="mb-8 text-6xl leading-[0.9] font-bold tracking-tighter text-white sm:text-8xl md:text-9xl"
                    >
                        Software, <br />
                        <span className="text-text-muted">Refined.</span>
                    </motion.h1>

                    <motion.p
                        variants={item}
                        className="text-text-secondary max-w-xl text-lg leading-relaxed sm:text-xl"
                    >
                        Astraen is an independent software laboratory. We
                        engineer durable digital systems and craft high-fidelity
                        user experiences, prioritizing logic, performance, and
                        privacy.
                    </motion.p>
                </motion.div>
            </section>

            {/* Capabilities / Competencies Grid */}
            <section className="border-border w-full border-t px-6 py-24">
                <div className="mx-auto max-w-6xl">
                    <div className="mb-12 flex items-center justify-between">
                        <h2 className="text-text-muted font-mono text-sm tracking-widest uppercase">
                            Competencies
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                        {/* Interaction Design */}
                        <div className="bg-surface/30 border-border group hover:bg-surface/80 rounded-2xl border p-8 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-2xl hover:shadow-blue-900/10 md:col-span-2">
                            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400 transition-colors group-hover:bg-blue-500/20 group-hover:text-blue-300">
                                <Smartphone className="h-6 w-6" />
                            </div>
                            <h3 className="mb-2 text-xl font-bold text-white">
                                Digital Craftsmanship
                            </h3>
                            <p className="text-text-secondary mb-4 leading-relaxed">
                                Bridging the gap between functional code and
                                art. We build fluid, native-feel interfaces
                                where every interaction, animation, and state
                                transition is deliberate and polished.
                            </p>
                            <div className="flex gap-2">
                                <span className="rounded-md border border-white/10 bg-white/5 px-2 py-1 font-mono text-xs text-white/60">
                                    Native Mobile
                                </span>
                                <span className="rounded-md border border-white/10 bg-white/5 px-2 py-1 font-mono text-xs text-white/60">
                                    Reactive Web
                                </span>
                            </div>
                        </div>

                        {/* System Logic */}
                        <div className="bg-surface/30 border-border group hover:bg-surface/80 rounded-2xl border p-8 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-2xl hover:shadow-purple-900/10">
                            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-purple-500/10 text-purple-400 transition-colors group-hover:bg-purple-500/20 group-hover:text-purple-300">
                                <Cpu className="h-6 w-6" />
                            </div>
                            <h3 className="mb-2 text-xl font-bold text-white">
                                System Logic
                            </h3>
                            <p className="text-text-secondary mb-4 text-sm leading-relaxed">
                                Architecting the invisible. Designing robust
                                data structures, memory-safe backends, and
                                scalable infrastructure that underpin complex
                                applications.
                            </p>
                        </div>

                        {/* R&D */}
                        <div className="bg-surface/30 border-border group hover:bg-surface/80 rounded-2xl border p-8 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-2xl hover:shadow-emerald-900/10">
                            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400 transition-colors group-hover:bg-emerald-500/20 group-hover:text-emerald-300">
                                <Compass className="h-6 w-6" />
                            </div>
                            <h3 className="mb-2 text-xl font-bold text-white">
                                Technical R&D
                            </h3>
                            <p className="text-text-secondary mb-4 text-sm leading-relaxed">
                                Exploring the edge of what is possible. From
                                custom simulation engines to novel algorithm
                                implementations, we solve problems that require
                                first-principles thinking.
                            </p>
                        </div>

                        {/* Holistic Engineering */}
                        <div className="bg-surface/30 border-border group hover:bg-surface/80 rounded-2xl border p-8 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-2xl hover:shadow-orange-900/10 md:col-span-2">
                            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500/10 text-orange-400 transition-colors group-hover:bg-orange-500/20 group-hover:text-orange-300">
                                <Code2 className="h-6 w-6" />
                            </div>
                            <h3 className="mb-2 text-xl font-bold text-white">
                                Holistic Engineering
                            </h3>
                            <p className="text-text-secondary mb-4 leading-relaxed">
                                Software does not exist in a vacuum. We take
                                ownership of the entire lifecycle—architecture,
                                design, implementation, and deployment—ensuring
                                coherence from the database schema to the final
                                pixel.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* In-House Products / Output */}
            <section className="border-border w-full border-t px-6 py-24">
                <div className="mx-auto max-w-6xl">
                    <div className="mb-12">
                        <h2 className="text-text-muted mb-2 font-mono text-sm tracking-widest uppercase">
                            Lab Output
                        </h2>
                        <p className="text-text-secondary max-w-2xl text-lg">
                            We build products to test our theories on
                            architecture and user experience. RainVu is our
                            active experiment in local-first, privacy-centric
                            mobile design.
                        </p>
                    </div>

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
                                        A precision rainfall logging tool.
                                        RainVu demonstrates that complex data
                                        visualization and robust offline
                                        capabilities can exist without
                                        compromising user privacy.
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {[
                                        'iOS',
                                        'Android',
                                        'Analytics',
                                        'Offline-First',
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
                            <div className="bg-background relative min-h-100 overflow-hidden md:min-h-full">
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(59,130,246,0.1),transparent_70%)]" />

                                {/* Mobile Phone Mockup */}
                                <div className="absolute top-[10%] left-1/2 w-65 -translate-x-1/2 rounded-[2.5rem] border-[6px] border-[#1f1f1f] bg-black shadow-2xl transition-transform duration-500 group-hover:-translate-y-4">
                                    {/* Notch/Status Bar */}
                                    <div className="absolute top-0 left-1/2 h-6 w-32 -translate-x-1/2 rounded-b-xl bg-[#1f1f1f]" />
                                    <div className="flex items-center justify-between px-5 pt-3 text-[10px] text-white/40">
                                        <span>09:41</span>
                                        <div className="flex gap-1">
                                            <Signal className="h-3 w-3" />
                                            <Wifi className="h-3 w-3" />
                                            <Battery className="h-3 w-3" />
                                        </div>
                                    </div>

                                    {/* App UI Context */}
                                    <div className="flex flex-col p-4 pb-8">
                                        {/* AppBar */}
                                        <div className="mb-4 flex items-center justify-between">
                                            <span className="text-lg font-semibold text-white">
                                                RainVu
                                            </span>
                                            <div className="h-8 w-8 rounded-full bg-white/10" />
                                        </div>

                                        {/* Body (ListView) */}
                                        <div className="flex flex-col gap-4">
                                            {/* MonthlySummaryCard */}
                                            <div className="bg-surface-highlight rounded-2xl border border-white/5 p-4">
                                                <div className="mb-2 flex items-center justify-between">
                                                    <div>
                                                        <div className="text-xs font-medium text-white">
                                                            Monthly Rainfall
                                                        </div>
                                                        <div className="text-text-secondary text-[10px]">
                                                            November 2025
                                                        </div>
                                                    </div>
                                                    <Droplets className="h-4 w-4 text-blue-400" />
                                                </div>
                                                <div className="mb-4 text-3xl font-bold text-blue-400">
                                                    45.2{' '}
                                                    <span className="text-text-secondary text-sm font-normal">
                                                        mm
                                                    </span>
                                                </div>
                                                {/* Recent Entries List */}
                                                <div className="space-y-2 border-t border-white/5 pt-3">
                                                    <div className="flex justify-between text-[10px]">
                                                        <span className="text-text-secondary">
                                                            Nov 11, 2:30 PM
                                                        </span>
                                                        <span className="font-mono text-blue-300">
                                                            12.5 mm
                                                        </span>
                                                    </div>
                                                    <div className="flex justify-between text-[10px]">
                                                        <span className="text-text-secondary">
                                                            Nov 08, 9:15 AM
                                                        </span>
                                                        <span className="font-mono text-blue-300">
                                                            8.0 mm
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* YtdSummaryCard */}
                                            <div className="bg-surface-highlight rounded-2xl border border-white/5 p-4">
                                                <div className="mb-3 flex items-center justify-between">
                                                    <span className="text-xs font-medium text-white">
                                                        YTD Progress
                                                    </span>
                                                    <Calendar className="h-4 w-4 text-amber-500" />
                                                </div>
                                                <div className="mb-2 flex items-end gap-2">
                                                    <div className="text-2xl font-bold text-amber-500">
                                                        680
                                                    </div>
                                                    <div className="text-text-secondary mb-1 text-xs">
                                                        mm
                                                    </div>
                                                </div>
                                                <div className="mb-2 h-1.5 w-full rounded-full bg-white/5">
                                                    <div className="h-full w-[60%] rounded-full bg-amber-500" />
                                                </div>
                                                <div className="text-text-secondary text-right text-[9px]">
                                                    Annual Avg: 1,100 mm
                                                </div>
                                            </div>

                                            {/* MonthlyTrendChart (Abstract) */}
                                            <div className="bg-surface-highlight rounded-2xl border border-white/5 p-4">
                                                <div className="mb-4 flex items-center justify-between">
                                                    <span className="text-xs font-medium text-white">
                                                        Trends
                                                    </span>
                                                    <BarChart3 className="text-text-secondary h-4 w-4" />
                                                </div>
                                                <div className="flex h-16 items-end justify-between gap-1 px-1">
                                                    {[
                                                        20, 40, 15, 60, 30, 80,
                                                        45,
                                                    ].map((h, i) => (
                                                        <div
                                                            key={i}
                                                            className="w-full rounded-t-sm bg-blue-500/20 hover:bg-blue-500"
                                                            style={{
                                                                height: `${h}%`,
                                                            }}
                                                        />
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* FloatingActionButton */}
                                    <div className="absolute right-4 bottom-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 shadow-lg shadow-blue-900/40">
                                        <Plus className="h-6 w-6 text-white" />
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

            {/* Philosophy / Mindset */}
            <section className="border-border w-full border-t px-6 py-24">
                <div className="mx-auto max-w-6xl">
                    <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
                        <div>
                            <h2 className="text-text-muted mb-6 font-mono text-sm tracking-widest uppercase">
                                The Lab Mindset
                            </h2>
                            <h3 className="mb-4 text-3xl font-bold tracking-tight text-white">
                                Engineering, not Assembly.
                            </h3>
                            <p className="text-text-secondary text-lg leading-relaxed">
                                We believe software is an asset that should
                                appreciate over time. We favor simple, proven
                                technologies that allow for deep understanding,
                                easy maintenance, and performance that lasts.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-surface/30 border-border group hover:bg-surface/80 rounded-xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-lg hover:shadow-white/5">
                                <PenTool className="mb-3 h-6 w-6 text-white/60 transition-colors group-hover:text-white" />
                                <h4 className="mb-1 font-bold text-white">
                                    Precision
                                </h4>
                                <p className="text-text-secondary text-sm">
                                    Attention to detail in code, interface, and
                                    infrastructure.
                                </p>
                            </div>
                            <div className="bg-surface/30 border-border group hover:bg-surface/80 rounded-xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-lg hover:shadow-white/5">
                                <Microscope className="mb-3 h-6 w-6 text-white/60 transition-colors group-hover:text-white" />
                                <h4 className="mb-1 font-bold text-white">
                                    Analysis
                                </h4>
                                <p className="text-text-secondary text-sm">
                                    Decisions driven by data, testing, and core
                                    engineering principles.
                                </p>
                            </div>
                            <div className="bg-surface/30 border-border group hover:bg-surface/80 rounded-xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-lg hover:shadow-white/5">
                                <Zap className="mb-3 h-6 w-6 text-white/60 transition-colors group-hover:text-white" />
                                <h4 className="mb-1 font-bold text-white">
                                    Performance
                                </h4>
                                <p className="text-text-secondary text-sm">
                                    Efficiency is not an afterthought; it is a
                                    design constraint.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
