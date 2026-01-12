import { Smartphone, Cpu, Compass, Code2 } from 'lucide-react';

export function Competencies() {
    return (
        <section className="border-border w-full border-t px-6 py-24">
            <div className="mx-auto max-w-6xl">
                <div className="mb-12 flex items-center justify-between">
                    <h2 className="text-text-muted font-mono text-sm tracking-widest uppercase">
                        Competencies
                    </h2>
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                    <div className="bg-surface/30 border-border group hover:bg-surface/80 rounded-2xl border p-8 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-2xl hover:shadow-blue-900/10 md:col-span-2">
                        <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400 transition-colors group-hover:bg-blue-500/20 group-hover:text-blue-300">
                            <Smartphone className="h-6 w-6" />
                        </div>
                        <h3 className="mb-2 text-xl font-bold text-white">
                            Digital Craftsmanship
                        </h3>
                        <p className="text-text-secondary mb-4 leading-relaxed">
                            Bridging the gap between functional code and art. We
                            build fluid, native-feel interfaces where every
                            interaction, animation, and state transition is
                            deliberate and polished.
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

                    <div className="bg-surface/30 border-border group hover:bg-surface/80 rounded-2xl border p-8 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-2xl hover:shadow-purple-900/10">
                        <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-purple-500/10 text-purple-400 transition-colors group-hover:bg-purple-500/20 group-hover:text-purple-300">
                            <Cpu className="h-6 w-6" />
                        </div>
                        <h3 className="mb-2 text-xl font-bold text-white">
                            System Logic
                        </h3>
                        <p className="text-text-secondary mb-4 text-sm leading-relaxed">
                            Architecting the invisible. Designing robust data
                            structures, memory-safe backends, and scalable
                            infrastructure that underpin complex applications.
                        </p>
                    </div>

                    <div className="bg-surface/30 border-border group hover:bg-surface/80 rounded-2xl border p-8 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-2xl hover:shadow-emerald-900/10">
                        <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400 transition-colors group-hover:bg-emerald-500/20 group-hover:text-emerald-300">
                            <Compass className="h-6 w-6" />
                        </div>
                        <h3 className="mb-2 text-xl font-bold text-white">
                            Technical R&D
                        </h3>
                        <p className="text-text-secondary mb-4 text-sm leading-relaxed">
                            Exploring the edge of what is possible. From custom
                            simulation engines to novel algorithm
                            implementations, we solve problems that require
                            first-principles thinking.
                        </p>
                    </div>

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
    );
}
