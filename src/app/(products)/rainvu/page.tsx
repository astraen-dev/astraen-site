import { Metadata } from 'next';
import { MaskedIcon } from '@/components/ui/masked-icon';
import {
    Download,
    Smartphone,
    Shield,
    Zap,
    Layers,
    WifiOff,
    FileJson,
    Calendar,
    ArrowUpRight,
} from 'lucide-react';
import Link from 'next/link';
import { GithubIcon } from '@/components/icons/GithubIcon';

export const metadata: Metadata = {
    title: 'RainVu',
    description: 'Modern rainfall logging.',
};

export default function RainVuPage() {
    return (
        <div className="w-full pt-32 pb-20">
            {/* Hero */}
            <section className="container mx-auto mb-24 max-w-5xl px-6">
                <div className="flex flex-col items-center text-center">
                    <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-3xl bg-linear-to-tr from-blue-600 to-cyan-500 shadow-[0_0_50px_-12px_rgba(37,99,235,0.5)]">
                        <MaskedIcon
                            src="/rainvu/rainvu-icon-mask.png"
                            className="h-14 w-14 bg-white"
                        />
                    </div>
                    <h1 className="mb-6 text-5xl font-bold tracking-tighter text-white md:text-8xl">
                        RainVu
                    </h1>
                    <p className="text-text-secondary mx-auto mb-10 max-w-2xl text-xl leading-relaxed">
                        Meticulous rainfall logging for farmers and weather
                        enthusiasts. Privacy-focused, offline-capable, and
                        engineered for speed.
                    </p>

                    <div className="flex flex-wrap justify-center gap-4">
                        <a
                            href="https://apps.apple.com/us/app/rainvu/id6754812264"
                            className="flex h-12 items-center gap-2 rounded-full bg-white px-8 font-semibold text-black transition-transform hover:scale-105"
                        >
                            <Download className="h-4 w-4" />
                            App Store
                        </a>
                        <a
                            href="https://play.google.com/store/apps/details?id=com.astraen.rainvu"
                            className="bg-surface/50 border-border hover:bg-surface flex h-12 items-center gap-2 rounded-full border px-8 font-semibold text-white transition-all hover:scale-105 hover:border-white/30"
                        >
                            <Download className="h-4 w-4" />
                            Google Play
                        </a>
                    </div>
                </div>
            </section>

            {/* Visual Bento Grid */}
            <section className="container mx-auto mb-32 max-w-5xl px-6">
                <div className="mb-12 border-b border-white/5 pb-4">
                    <h2 className="font-mono text-sm tracking-widest text-white uppercase">
                        Capabilities
                    </h2>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-6 md:grid-rows-2">
                    {/* Card 1: Analytics (Large) - Visualizing MonthlyTrendChart.dart */}
                    <div className="group bg-surface/20 border-border relative flex flex-col overflow-hidden rounded-3xl border px-8 pt-8 pb-0 backdrop-blur-sm transition-colors hover:border-white/20 md:col-span-4 md:row-span-2">
                        <div className="relative z-10 mb-6 shrink-0">
                            <h3 className="mb-2 text-2xl font-bold text-white">
                                Actionable Insights
                            </h3>
                            <p className="text-text-secondary max-w-sm">
                                Visualize trends with beautiful, interactive
                                charts. Analyze monthly totals and
                                year-over-year comparisons instantly.
                            </p>
                        </div>

                        <div className="relative mt-auto h-48 w-full translate-y-4 transition-transform duration-500 group-hover:translate-y-2 sm:h-64 sm:translate-y-8 sm:group-hover:translate-y-4">
                            <div className="bg-surface-highlight h-full w-full rounded-t-2xl border-x border-t border-white/10 p-4 shadow-2xl sm:p-6">
                                <div className="mb-4 flex items-center justify-between sm:mb-6">
                                    <div className="h-2 w-16 rounded-full bg-white/10 sm:w-24" />
                                    <div className="h-2 w-12 rounded-full bg-white/10 sm:w-16" />
                                </div>
                                <div className="flex h-28 items-end justify-between gap-1 sm:h-40 sm:gap-2">
                                    {[
                                        30, 45, 25, 60, 80, 50, 70, 40, 90, 55,
                                        35, 65,
                                    ].map((h, i) => (
                                        <div
                                            key={i}
                                            className="group/bar relative flex h-full w-full flex-col justify-end"
                                        >
                                            <div
                                                className="w-full rounded-t-sm bg-blue-500/20 transition-all duration-300 group-hover/bar:bg-blue-400"
                                                style={{ height: `${h}%` }}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 2: Local First (Medium) */}
                    <div className="bg-surface/20 border-border group relative overflow-hidden rounded-3xl border p-8 backdrop-blur-sm transition-colors hover:border-white/20 md:col-span-2">
                        <WifiOff className="mb-4 h-8 w-8 text-white/50 transition-colors group-hover:text-white" />
                        <h3 className="mb-2 text-lg font-bold text-white">
                            Offline Capable
                        </h3>
                        <p className="text-text-secondary text-sm">
                            No cloud dependency. Your database lives on your
                            device.
                        </p>
                    </div>

                    {/* Card 3: YTD Summary (Medium) - Visualizing YtdSummaryCard.dart */}
                    <div className="bg-surface/20 border-border group relative overflow-hidden rounded-3xl border p-8 backdrop-blur-sm transition-colors hover:border-white/20 md:col-span-2">
                        {/* Abstract YTD UI */}
                        <div className="absolute top-4 right-4 opacity-50 transition-opacity group-hover:opacity-100">
                            <Calendar className="h-16 w-16 rotate-12 text-amber-500/10" />
                        </div>

                        <div className="relative z-10">
                            <div className="mb-4 flex items-center gap-2">
                                <div className="text-3xl font-bold text-amber-500">
                                    680
                                </div>
                                <div className="text-text-secondary mb-1 text-sm font-medium">
                                    mm
                                </div>
                            </div>
                            <div className="mb-4 h-2 w-full rounded-full bg-white/5">
                                <div className="h-full w-[65%] rounded-full bg-amber-500" />
                            </div>
                            <h3 className="text-lg font-bold text-white">
                                Year to Date
                            </h3>
                            <p className="text-text-secondary text-sm">
                                Track annual progress against averages.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
                    <div className="bg-surface/20 border-border group rounded-3xl border p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/30 hover:shadow-lg hover:shadow-blue-900/10">
                        <Shield className="mb-4 h-6 w-6 text-blue-400 transition-transform duration-300 group-hover:scale-110" />
                        <h3 className="mb-2 font-bold text-white">
                            Private by Design
                        </h3>
                        <p className="text-text-secondary text-sm">
                            We don&#39;t want your data. It stays encrypted on
                            your phone.
                        </p>
                    </div>
                    <div className="bg-surface/20 border-border group rounded-3xl border p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/30 hover:shadow-lg hover:shadow-blue-900/10">
                        <Zap className="mb-4 h-6 w-6 text-blue-400 transition-transform duration-300 group-hover:scale-110" />
                        <h3 className="mb-2 font-bold text-white">
                            120fps Performance
                        </h3>
                        <p className="text-text-secondary text-sm">
                            Built with Flutter for buttery smooth native
                            interactions.
                        </p>
                    </div>
                    <div className="bg-surface/20 border-border group rounded-3xl border p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/30 hover:shadow-lg hover:shadow-blue-900/10">
                        <FileJson className="mb-4 h-6 w-6 text-blue-400 transition-transform duration-300 group-hover:scale-110" />
                        <h3 className="mb-2 font-bold text-white">
                            Data Portability
                        </h3>
                        <p className="text-text-secondary text-sm">
                            Export your logs to CSV or JSON anytime. You own it.
                        </p>
                    </div>
                </div>
            </section>

            {/* Technical Specifications */}
            <section className="bg-surface/30 border-y border-white/5 py-24">
                <div className="container mx-auto max-w-5xl px-6">
                    <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
                        <div>
                            <h2 className="mb-6 text-3xl font-bold tracking-tight text-white">
                                Engineered, <br />
                                not just built.
                            </h2>
                            <p className="text-text-secondary mb-8 text-lg">
                                RainVu is an open-source project demonstrating a
                                scalable, feature-first architecture.
                            </p>
                            <a
                                href="https://github.com/astraen-dev/RainVu"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex items-center gap-2 border-b border-white/30 pb-1 text-white hover:border-white"
                            >
                                <GithubIcon className="h-4 w-4" />
                                View Source Code
                                <ArrowUpRight className="h-3 w-3 opacity-50 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            </a>
                        </div>

                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <div className="border-l border-white/10 pl-6 transition-colors hover:border-white/30">
                                <Layers className="mb-3 h-6 w-6 text-white/60" />
                                <h4 className="font-mono text-sm font-bold text-white">
                                    Architecture
                                </h4>
                                <p className="text-text-secondary text-sm">
                                    Riverpod + GoRouter + Drift
                                </p>
                            </div>
                            <div className="border-l border-white/10 pl-6 transition-colors hover:border-white/30">
                                <Smartphone className="mb-3 h-6 w-6 text-white/60" />
                                <h4 className="font-mono text-sm font-bold text-white">
                                    Framework
                                </h4>
                                <p className="text-text-secondary text-sm">
                                    Flutter & Dart
                                </p>
                            </div>
                            <div className="border-l border-white/10 pl-6 transition-colors hover:border-white/30">
                                <Zap className="mb-3 h-6 w-6 text-white/60" />
                                <h4 className="font-mono text-sm font-bold text-white">
                                    Performance
                                </h4>
                                <p className="text-text-secondary text-sm">
                                    Impeller Rendering Engine
                                </p>
                            </div>
                            <div className="border-l border-white/10 pl-6 transition-colors hover:border-white/30">
                                <Shield className="mb-3 h-6 w-6 text-white/60" />
                                <h4 className="font-mono text-sm font-bold text-white">
                                    Safety
                                </h4>
                                <p className="text-text-secondary text-sm">
                                    Type-safe Freezed Models
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer Links */}
            <section className="container mx-auto max-w-5xl px-6 pt-24 text-center">
                <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 font-mono text-sm text-white/50">
                    <Link
                        href="/rainvu/privacy"
                        className="transition-colors hover:text-white"
                    >
                        Privacy Policy
                    </Link>
                    <Link
                        href="/rainvu/terms"
                        className="transition-colors hover:text-white"
                    >
                        Terms of Service
                    </Link>
                    <Link
                        href="/rainvu/data-deletion"
                        className="transition-colors hover:text-white"
                    >
                        Data Deletion
                    </Link>
                </div>
            </section>
        </div>
    );
}
