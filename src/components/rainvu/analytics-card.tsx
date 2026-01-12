'use client';

import { motion } from 'framer-motion';

const DATA_POINTS = [30, 45, 25, 60, 80, 50, 70, 40, 90, 55, 35, 65];

export function AnalyticsCard() {
    return (
        <div className="group bg-surface/20 border-border relative flex flex-col overflow-hidden rounded-3xl border px-8 pt-8 pb-0 backdrop-blur-sm transition-colors hover:border-white/20 md:col-span-4 md:row-span-2">
            <div className="relative z-10 mb-6 shrink-0">
                <h3 className="mb-2 text-2xl font-bold text-white">
                    Actionable Insights
                </h3>
                <p className="text-text-secondary max-w-sm">
                    Visualize trends with beautiful, interactive charts. Analyze
                    monthly totals and year-over-year comparisons instantly.
                </p>
            </div>

            <div className="relative mt-auto h-48 w-full translate-y-4 transition-transform duration-500 group-hover:translate-y-2 sm:h-64 sm:translate-y-8 sm:group-hover:translate-y-4">
                <div className="bg-surface-highlight h-full w-full rounded-t-2xl border-x border-t border-white/10 p-4 shadow-2xl sm:p-6">
                    <div className="mb-4 flex items-center justify-between sm:mb-6">
                        <div className="h-2 w-16 rounded-full bg-white/10 sm:w-24" />
                        <div className="h-2 w-12 rounded-full bg-white/10 sm:w-16" />
                    </div>
                    <div className="flex h-28 items-end justify-between gap-1 sm:h-40 sm:gap-2">
                        {DATA_POINTS.map((h, i) => (
                            <div
                                key={i}
                                className="group/bar relative flex h-full w-full flex-col justify-end"
                            >
                                <motion.div
                                    initial={{ height: 0 }}
                                    whileInView={{ height: `${h}%` }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.5,
                                        delay: i * 0.05,
                                        ease: 'easeOut',
                                    }}
                                    className="w-full rounded-t-sm bg-blue-500/20 transition-all duration-300 group-hover/bar:bg-blue-400"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
