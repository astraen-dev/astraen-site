'use client';

import { motion } from 'framer-motion';
import { Box, Database } from 'lucide-react';

export function SchematicVisualizer() {
    return (
        <div className="absolute inset-0 flex items-center justify-center p-8">
            <div className="relative flex w-full max-w-sm items-center justify-between gap-4">
                <div className="flex flex-col gap-6">
                    <motion.div
                        initial={{ x: -20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="bg-surface/50 relative flex items-center gap-3 rounded-lg border border-white/10 p-3 pr-6 backdrop-blur-sm"
                    >
                        <div className="flex h-8 w-8 items-center justify-center rounded bg-blue-500/10 text-blue-400">
                            <Box className="h-4 w-4" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[10px] tracking-wider text-white/40 uppercase">
                                Component A
                            </span>
                            <span className="font-mono text-sm font-bold text-white">
                                150
                            </span>
                        </div>
                        <div className="absolute top-1/2 -right-1 h-2 w-2 -translate-y-1/2 rounded-full bg-white/20" />
                    </motion.div>

                    <motion.div
                        initial={{ x: -20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="bg-surface/50 relative flex items-center gap-3 rounded-lg border border-orange-500/20 p-3 pr-6 backdrop-blur-sm"
                    >
                        <div className="flex h-8 w-8 items-center justify-center rounded bg-orange-500/10 text-orange-400">
                            <Box className="h-4 w-4" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[10px] tracking-wider text-orange-200/60 uppercase">
                                Component B
                            </span>
                            <span className="font-mono text-sm font-bold text-orange-200">
                                12
                            </span>
                        </div>
                        <div className="absolute top-1/2 -right-1 h-2 w-2 -translate-y-1/2 rounded-full bg-orange-500/50" />
                    </motion.div>
                </div>

                <div className="relative flex h-32 w-16 items-center justify-center">
                    <svg
                        className="absolute inset-0 h-full w-full overflow-visible"
                        viewBox="0 0 64 128"
                    >
                        <motion.path
                            d="M 0 32 C 32 32, 32 64, 64 64"
                            fill="none"
                            stroke="rgba(255,255,255,0.1)"
                            strokeWidth="2"
                            initial={{ pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            transition={{ duration: 1, ease: 'easeInOut' }}
                        />
                        <motion.path
                            d="M 0 96 C 32 96, 32 64, 64 64"
                            fill="none"
                            stroke="rgba(249, 115, 22, 0.4)"
                            strokeWidth="2"
                            initial={{ pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            transition={{ duration: 1, ease: 'easeInOut' }}
                        />
                    </svg>
                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: 0.8, type: 'spring' }}
                        className="z-10 flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-black text-white/60 shadow-xl"
                    >
                        <div className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
                    </motion.div>
                </div>

                <div className="flex flex-col">
                    <motion.div
                        initial={{ x: 20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="bg-surface/80 relative flex flex-col items-center gap-2 rounded-xl border border-white/10 p-4 shadow-2xl backdrop-blur-md"
                    >
                        <div className="absolute top-1/2 -left-1 h-2 w-2 -translate-y-1/2 rounded-full bg-white/20" />

                        <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500/20 text-indigo-300">
                            <Database className="h-5 w-5" />
                        </div>
                        <div className="text-center">
                            <div className="text-[10px] tracking-wider text-white/40 uppercase">
                                Available
                            </div>
                            <div className="flex items-baseline justify-center gap-1">
                                <span className="font-mono text-2xl font-bold text-white">
                                    12
                                </span>
                                <span className="text-[10px] text-white/40">
                                    units
                                </span>
                            </div>
                        </div>
                        <div className="mt-2 w-full rounded-full bg-white/5 px-2 py-1 text-center text-[9px] text-white/30">
                            Synced to Store
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
