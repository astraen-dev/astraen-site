import Link from 'next/link';
import {
    ArrowRight,
    Signal,
    Wifi,
    Battery,
    Droplets,
    Calendar,
    BarChart3,
    Plus,
} from 'lucide-react';
import { MaskedIcon } from '@/components/ui/masked-icon';

export function RainVuShowcase() {
    return (
        <section className="border-border w-full border-t px-6 py-24">
            <div className="mx-auto max-w-6xl">
                <div className="mb-12">
                    <h2 className="text-text-muted mb-2 font-mono text-sm tracking-widest uppercase">
                        Lab Output
                    </h2>
                    <p className="text-text-secondary max-w-2xl text-lg">
                        We build products to test our theories on architecture
                        and user experience. RainVu is our active experiment in
                        local-first, privacy-centric mobile design.
                    </p>
                </div>

                <Link href="/rainvu" className="group block">
                    <div className="bg-surface/30 border-border relative grid w-full overflow-hidden rounded-3xl border transition-colors hover:border-white/20 md:grid-cols-2">
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
                                    A precision rainfall logging tool. RainVu
                                    demonstrates that complex data visualization
                                    and robust offline capabilities can exist
                                    without compromising user privacy.
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

                        <div className="bg-background relative min-h-100 overflow-hidden md:min-h-full">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(59,130,246,0.1),transparent_70%)]" />

                            <div className="absolute top-[10%] left-1/2 w-65 -translate-x-1/2 rounded-[2.5rem] border-[6px] border-[#1f1f1f] bg-black shadow-2xl transition-transform duration-500 group-hover:-translate-y-4">
                                <div className="absolute top-0 left-1/2 h-6 w-32 -translate-x-1/2 rounded-b-xl bg-[#1f1f1f]" />
                                <div className="flex items-center justify-between px-5 pt-3 text-[10px] text-white/40">
                                    <span>09:41</span>
                                    <div className="flex gap-1">
                                        <Signal className="h-3 w-3" />
                                        <Wifi className="h-3 w-3" />
                                        <Battery className="h-3 w-3" />
                                    </div>
                                </div>

                                <div className="flex flex-col p-4 pb-8">
                                    <div className="mb-4 flex items-center justify-between">
                                        <span className="text-lg font-semibold text-white">
                                            RainVu
                                        </span>
                                        <div className="h-8 w-8 rounded-full bg-white/10" />
                                    </div>

                                    <div className="flex flex-col gap-4">
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

                                        <div className="bg-surface-highlight rounded-2xl border border-white/5 p-4">
                                            <div className="mb-4 flex items-center justify-between">
                                                <span className="text-xs font-medium text-white">
                                                    Trends
                                                </span>
                                                <BarChart3 className="text-text-secondary h-4 w-4" />
                                            </div>
                                            <div className="flex h-16 items-end justify-between gap-1 px-1">
                                                {[
                                                    20, 40, 15, 60, 30, 80, 45,
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
    );
}
