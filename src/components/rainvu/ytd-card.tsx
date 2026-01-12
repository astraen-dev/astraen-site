'use client';

import { Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

export function YtdCard() {
    return (
        <div className="bg-surface/20 border-border group relative overflow-hidden rounded-3xl border p-8 backdrop-blur-sm transition-colors hover:border-white/20 md:col-span-2">
            <div className="absolute top-4 right-4 opacity-50 transition-opacity group-hover:opacity-100">
                <Calendar className="h-16 w-16 rotate-12 text-amber-500/10" />
            </div>

            <div className="relative z-10">
                <div className="mb-4 flex items-center gap-2">
                    <div className="text-3xl font-bold text-amber-500">680</div>
                    <div className="text-text-secondary mb-1 text-sm font-medium">
                        mm
                    </div>
                </div>
                <div className="mb-4 h-2 w-full rounded-full bg-white/5">
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: '65%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                        className="h-full rounded-full bg-amber-500"
                    />
                </div>
                <h3 className="text-lg font-bold text-white">Year to Date</h3>
                <p className="text-text-secondary text-sm">
                    Track annual progress against averages.
                </p>
            </div>
        </div>
    );
}
