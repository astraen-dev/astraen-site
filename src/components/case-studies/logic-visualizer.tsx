'use client';

import { motion } from 'framer-motion';
import { RefreshCw, Package, Box, AlertCircle } from 'lucide-react';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

export function LogicVisualizer() {
    // We simulate a recipe: 1 Bundle = 1 Entity A + 1 Entity B.
    // Therefore, the total bundles available is the Minimum of A and B.
    const [stockA, setStockA] = useState(150);
    const [stockB, setStockB] = useState(80);

    // Computed value - strictly mathematical to ensure accuracy in the visual
    const bundleStock = Math.min(stockA, stockB);

    useEffect(() => {
        const interval = setInterval(() => {
            // Randomly fluctuate stock to demonstrate the logic live
            // We ensure they cross thresholds so the "limiting factor" switches
            setStockA(Math.floor(Math.random() * 100) + 20); // 20 - 120
            setStockB(Math.floor(Math.random() * 100) + 20); // 20 - 120
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full rounded-2xl border border-white/10 bg-black/40 p-6 backdrop-blur-md">
            <div className="mb-6 flex items-center justify-between border-b border-white/5 pb-4">
                <h4 className="font-mono text-xs tracking-widest text-indigo-300 uppercase">
                    Dependency Logic Engine
                </h4>
                <div className="flex items-center gap-2 text-[10px] text-white/40">
                    <RefreshCw className="h-3 w-3 animate-spin" />
                    <span>Real-time Calculation</span>
                </div>
            </div>

            <div className="grid items-center gap-8 md:grid-cols-3">
                {/* Inputs (Atoms) */}
                <div className="space-y-4">
                    {/* Entity A */}
                    <div
                        className={cn(
                            'group relative overflow-hidden rounded-xl border p-4 transition-colors duration-500',
                            stockA === bundleStock
                                ? 'border-amber-500/30 bg-amber-500/5'
                                : 'bg-surface border-white/5'
                        )}
                    >
                        <div className="mb-2 flex items-center justify-between text-white/60">
                            <div className="flex items-center gap-2">
                                <Box className="h-4 w-4" />
                                <span className="font-mono text-xs">
                                    Component A
                                </span>
                            </div>
                            {stockA === bundleStock && (
                                <span className="flex items-center gap-1 text-[9px] font-bold tracking-wider text-amber-400 uppercase">
                                    <AlertCircle className="h-3 w-3" /> Limiting
                                </span>
                            )}
                        </div>
                        <div className="text-2xl font-bold text-white transition-all duration-500">
                            {stockA}
                        </div>
                        <div className="text-[10px] text-white/30">
                            Physical Stock
                        </div>
                    </div>

                    {/* Entity B */}
                    <div
                        className={cn(
                            'group relative overflow-hidden rounded-xl border p-4 transition-colors duration-500',
                            stockB === bundleStock
                                ? 'border-amber-500/30 bg-amber-500/5'
                                : 'bg-surface border-white/5'
                        )}
                    >
                        <div className="mb-2 flex items-center justify-between text-white/60">
                            <div className="flex items-center gap-2">
                                <Box className="h-4 w-4" />
                                <span className="font-mono text-xs">
                                    Component B
                                </span>
                            </div>
                            {stockB === bundleStock && (
                                <span className="flex items-center gap-1 text-[9px] font-bold tracking-wider text-amber-400 uppercase">
                                    <AlertCircle className="h-3 w-3" /> Limiting
                                </span>
                            )}
                        </div>
                        <div className="text-2xl font-bold text-white transition-all duration-500">
                            {stockB}
                        </div>
                        <div className="text-[10px] text-white/30">
                            Physical Stock
                        </div>
                    </div>
                </div>

                {/* Logic Pipes */}
                <div className="relative flex h-full min-h-12.5 items-center justify-center">
                    {/* Visual connection lines */}
                    <svg
                        className="absolute inset-0 h-full w-full text-indigo-500/20"
                        preserveAspectRatio="none"
                    >
                        <path
                            d="M0,25 C50,25 50,50 100,50"
                            vectorEffect="non-scaling-stroke"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="none"
                        />
                        <path
                            d="M0,75 C50,75 50,50 100,50"
                            vectorEffect="non-scaling-stroke"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="none"
                        />
                    </svg>
                    <div className="bg-surface-highlight relative z-10 rounded-full border border-indigo-500/30 px-3 py-1 font-mono text-xs text-indigo-300 shadow-[0_0_15px_-3px_rgba(99,102,241,0.3)]">
                        fn(min)
                    </div>
                </div>

                {/* Output (Molecule) */}
                <div>
                    <motion.div
                        // Animate when the number changes
                        key={bundleStock}
                        initial={{ scale: 0.95 }}
                        animate={{ scale: 1 }}
                        className="rounded-xl border border-indigo-500/30 bg-indigo-500/5 p-6 shadow-2xl shadow-indigo-500/10"
                    >
                        <div className="mb-3 flex items-center gap-2 text-indigo-300">
                            <Package className="h-5 w-5" />
                            <span className="font-mono text-xs">
                                Digital Bundle
                            </span>
                        </div>
                        <div className="mb-1 text-4xl font-bold text-white">
                            {bundleStock}
                        </div>
                        <div className="text-xs text-indigo-200/50">
                            Available for Sale
                        </div>
                        <div className="mt-4 border-t border-indigo-500/20 pt-4 text-[10px] leading-relaxed text-indigo-300/60">
                            System ensures digital availability never exceeds
                            the lowest common denominator of physical
                            components.
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
