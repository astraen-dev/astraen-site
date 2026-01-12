import { PenTool, Microscope, Zap } from 'lucide-react';

export function Philosophy() {
    return (
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
                            technologies that allow for deep understanding, easy
                            maintenance, and performance that lasts.
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
    );
}
