'use client';

import { motion } from 'framer-motion';
import { Database, GitBranch, Server } from 'lucide-react';
import { LogicVisualizer } from '@/components/case-studies/logic-visualizer';
import { fadeInUp } from './animations';

export function StockManagerArchitecture() {
    return (
        <section className="bg-surface/30 mb-32 border-y border-white/5 py-24">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
                variants={fadeInUp}
                className="container mx-auto max-w-4xl px-6"
            >
                <div className="mb-12">
                    <h2 className="mb-2 font-mono text-sm tracking-widest text-indigo-400 uppercase">
                        Architecture
                    </h2>
                    <h3 className="mb-6 text-3xl font-bold text-white">
                        Component Normalization
                    </h3>
                    <p className="text-text-secondary max-w-2xl text-lg">
                        We decoupled the concept of &#34;what we sell&#34; from
                        &#34;what we have&#34;. By treating inventory items as
                        atomic units and sales products as molecular recipes, we
                        achieved true data integrity.
                    </p>
                </div>

                <div className="mb-16">
                    <LogicVisualizer />
                </div>

                <div className="grid gap-8 md:grid-cols-3">
                    <div className="space-y-3">
                        <div className="bg-surface flex h-10 w-10 items-center justify-center rounded-lg border border-white/10">
                            <Database className="h-5 w-5 text-white/70" />
                        </div>
                        <h4 className="font-bold text-white">The Source</h4>
                        <p className="text-text-secondary text-sm leading-relaxed">
                            Physical entities (components) are tracked via an
                            immutable ledger. Every damage report, arrival, or
                            manual correction is a signed transaction.
                        </p>
                    </div>
                    <div className="space-y-3">
                        <div className="bg-surface flex h-10 w-10 items-center justify-center rounded-lg border border-white/10">
                            <GitBranch className="h-5 w-5 text-white/70" />
                        </div>
                        <h4 className="font-bold text-white">The Recipe</h4>
                        <p className="text-text-secondary text-sm leading-relaxed">
                            Logic layers that define relationships. A single
                            digital product may require multiple physical
                            components. The system calculates availability based
                            on the scarcest component.
                        </p>
                    </div>
                    <div className="space-y-3">
                        <div className="bg-surface flex h-10 w-10 items-center justify-center rounded-lg border border-white/10">
                            <Server className="h-5 w-5 text-white/70" />
                        </div>
                        <h4 className="font-bold text-white">The Sync</h4>
                        <p className="text-text-secondary text-sm leading-relaxed">
                            When component stock changes, a background worker
                            recalculates all dependent recipes and pushes the
                            new &#34;Buildable Quantity&#34; to the sales
                            channel API.
                        </p>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
