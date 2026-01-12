import Link from 'next/link';
import { Database, ArrowUpRight } from 'lucide-react';
import { SchematicVisualizer } from '@/components/home/schematic-visualizer';

export function StockManagerShowcase() {
    return (
        <section className="border-border w-full border-t px-6 py-24">
            <div className="mx-auto max-w-6xl">
                <div className="mb-12 flex items-center justify-between">
                    <h2 className="text-text-muted font-mono text-sm tracking-widest uppercase">
                        Case Studies
                    </h2>
                </div>

                <Link href="/stock-manager" className="group block">
                    <div className="bg-surface/30 border-border relative overflow-hidden rounded-3xl border transition-all duration-500 hover:border-white/20 hover:shadow-2xl hover:shadow-indigo-900/10">
                        <div className="grid md:grid-cols-2">
                            <div className="flex flex-col justify-between p-8 md:p-12">
                                <div>
                                    <div className="mb-6 flex items-center gap-3">
                                        <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-indigo-500/20 bg-indigo-500/10 text-indigo-400">
                                            <Database className="h-4 w-4" />
                                        </span>
                                        <span className="font-mono text-xs text-indigo-300">
                                            Enterprise Architecture
                                        </span>
                                    </div>
                                    <h3 className="mb-4 text-3xl font-bold tracking-tight text-white">
                                        Bespoke Stock Manager
                                    </h3>
                                    <p className="text-text-secondary mb-8 text-lg leading-relaxed">
                                        Moving a high-volume logistics operation
                                        from spreadsheets to a bespoke,
                                        immutable ledger system. We engineered a
                                        &#34;molecular&#34; inventory
                                        architecture to bridge the gap between
                                        physical stock and digital sales
                                        channels.
                                    </p>
                                </div>
                                <div className="flex items-center gap-2 text-sm font-medium text-white">
                                    Read Case Study
                                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                </div>
                            </div>

                            <div className="relative min-h-75 w-full overflow-hidden border-t border-white/5 bg-black/20 md:min-h-full md:border-t-0 md:border-l">
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(99,102,241,0.05),transparent_50%)]" />
                                <SchematicVisualizer />
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </section>
    );
}
