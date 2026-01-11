import { Metadata } from 'next';
import { MaskedIcon } from '@/components/ui/masked-icon';
import {
    BarChart3,
    Smartphone,
    Shield,
    Download,
    Database,
    Zap,
    Layers,
    Github,
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'RainVu',
    description: 'Modern rainfall logging.',
};

export default function RainVuPage() {
    return (
        <div className="w-full pt-32 pb-20">
            {/* Hero */}
            <section className="container mx-auto mb-32 max-w-5xl px-6">
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

            {/* Feature Grid */}
            <section className="container mx-auto mb-32 max-w-6xl px-6">
                <div className="mb-16 border-b border-white/5 pb-4">
                    <h2 className="font-mono text-sm tracking-widest text-white uppercase">
                        Capabilities
                    </h2>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    <div className="bg-surface/20 border-border rounded-2xl border p-8 backdrop-blur-sm">
                        <BarChart3 className="mb-4 h-8 w-8 text-blue-400" />
                        <h3 className="mb-2 text-xl font-bold text-white">
                            Powerful Analytics
                        </h3>
                        <p className="text-text-secondary leading-relaxed">
                            Visualize trends with MTD and YTD charts. Compare
                            seasons and analyze daily breakdowns instantly.
                        </p>
                    </div>
                    <div className="bg-surface/20 border-border rounded-2xl border p-8 backdrop-blur-sm">
                        <Shield className="mb-4 h-8 w-8 text-blue-400" />
                        <h3 className="mb-2 text-xl font-bold text-white">
                            Local & Private
                        </h3>
                        <p className="text-text-secondary leading-relaxed">
                            Zero cloud dependency. Your data lives in a secure
                            SQL database on your device. No accounts required.
                        </p>
                    </div>
                    <div className="bg-surface/20 border-border rounded-2xl border p-8 backdrop-blur-sm">
                        <Database className="mb-4 h-8 w-8 text-blue-400" />
                        <h3 className="mb-2 text-xl font-bold text-white">
                            Data Portability
                        </h3>
                        <p className="text-text-secondary leading-relaxed">
                            You own your data. Export logs to CSV or JSON
                            formats for external analysis or backups.
                        </p>
                    </div>
                </div>
            </section>

            {/* Technical Specifications */}
            <section className="bg-surface/30 border-y border-white/5 py-24">
                <div className="container mx-auto max-w-6xl px-6">
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
                                className="inline-flex items-center gap-2 border-b border-white/30 pb-1 text-white hover:border-white"
                            >
                                <Github className="h-4 w-4" />
                                View Source Code
                            </a>
                        </div>

                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <div className="border-l border-white/10 pl-6">
                                <Layers className="mb-3 h-6 w-6 text-white/60" />
                                <h4 className="font-mono text-sm font-bold text-white">
                                    Architecture
                                </h4>
                                <p className="text-text-secondary text-sm">
                                    Riverpod + GoRouter + Drift
                                </p>
                            </div>
                            <div className="border-l border-white/10 pl-6">
                                <Smartphone className="mb-3 h-6 w-6 text-white/60" />
                                <h4 className="font-mono text-sm font-bold text-white">
                                    Framework
                                </h4>
                                <p className="text-text-secondary text-sm">
                                    Flutter & Dart
                                </p>
                            </div>
                            <div className="border-l border-white/10 pl-6">
                                <Zap className="mb-3 h-6 w-6 text-white/60" />
                                <h4 className="font-mono text-sm font-bold text-white">
                                    Performance
                                </h4>
                                <p className="text-text-secondary text-sm">
                                    120fps Rendering
                                </p>
                            </div>
                            <div className="border-l border-white/10 pl-6">
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
