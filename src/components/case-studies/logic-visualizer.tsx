'use client';

import { motion, AnimatePresence } from 'framer-motion';
import {
    RefreshCw,
    Package,
    Box as BoxIcon,
    AlertCircle,
    ArrowDown,
    Activity,
    Layers,
} from 'lucide-react';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

export function LogicVisualizer() {
    const [stockA, setStockA] = useState(150);
    const [stockB, setStockB] = useState(80);
    const [isCalculating, setIsCalculating] = useState(false);

    const bundleStock = Math.min(stockA, stockB);
    const limitingFactor = stockA <= stockB ? 'A' : 'B';

    useEffect(() => {
        const interval = setInterval(() => {
            setIsCalculating(true);
            setTimeout(() => {
                setStockA(Math.floor(Math.random() * 100) + 20);
                setStockB(Math.floor(Math.random() * 100) + 20);
                setIsCalculating(false);
            }, 500);
        }, 2500);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="group relative w-full overflow-hidden rounded-xl border border-white/10 bg-slate-950/50 p-6 backdrop-blur-xl transition-colors hover:border-indigo-500/20">
            <div className="mb-8 flex items-center justify-between border-b border-white/5 pb-4">
                <div className="flex items-center gap-2">
                    <div className="flex h-6 w-6 items-center justify-center rounded bg-indigo-500/10">
                        <Activity className="h-3 w-3 text-indigo-400" />
                    </div>
                    <h4 className="font-mono text-xs font-medium tracking-widest text-slate-300 uppercase">
                        Logic Engine
                    </h4>
                </div>
                <div className="flex items-center gap-2 rounded-full border border-white/5 bg-black/20 px-2 py-1">
                    <RefreshCw
                        className={cn(
                            'h-3 w-3 text-white/40',
                            isCalculating && 'animate-spin text-indigo-400'
                        )}
                    />
                    <span className="font-mono text-[10px] text-white/40">
                        {isCalculating ? 'SYNCING' : 'LIVE'}
                    </span>
                </div>
            </div>

            <div className="flex flex-col gap-4 md:flex-row md:items-stretch">
                {/* Column 1: Inputs */}
                <div className="flex flex-1 flex-col justify-between gap-4">
                    <InputCard
                        label="Component A"
                        value={stockA}
                        isLimiting={limitingFactor === 'A'}
                        color="blue"
                    />
                    <div className="relative block h-8 md:hidden">
                        <div className="absolute top-0 bottom-0 left-1/2 w-px -translate-x-1/2 bg-linear-to-b from-white/10 to-transparent" />
                        <ArrowDown className="absolute top-1/2 left-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 text-white/20" />
                    </div>
                    <InputCard
                        label="Component B"
                        value={stockB}
                        isLimiting={limitingFactor === 'B'}
                        color="cyan"
                    />
                </div>

                {/* Column 2: The Processor (Visual Connector) */}
                {/* Desktop: Curved SVG Lines */}
                <div className="relative hidden w-24 flex-col justify-center md:flex">
                    <svg
                        className="absolute inset-0 h-full w-full text-indigo-500/20"
                        preserveAspectRatio="none"
                        viewBox="0 0 100 100"
                    >
                        {/* Top Line to Center */}
                        <path
                            d="M0,20 C50,20 50,50 100,50"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            vectorEffect="non-scaling-stroke"
                        />
                        {/* Bottom Line to Center */}
                        <path
                            d="M0,80 C50,80 50,50 100,50"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            vectorEffect="non-scaling-stroke"
                        />
                    </svg>

                    {/* Logic Node Badge */}
                    <div className="relative z-10 mx-auto flex h-8 w-fit items-center justify-center rounded-full border border-indigo-500/30 bg-slate-900 px-3 shadow-[0_0_20px_-5px_rgba(99,102,241,0.4)]">
                        <span className="font-mono text-[10px] font-bold text-indigo-300">
                            fn(min)
                        </span>
                    </div>
                </div>

                {/* Mobile: Logic Node Intermediary */}
                <div className="flex justify-center py-2 md:hidden">
                    <div className="flex h-8 items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4">
                        <span className="font-mono text-xs text-white/60">
                            fn(min)
                        </span>
                    </div>
                </div>

                <div className="relative block h-8 md:hidden">
                    <div className="absolute top-0 bottom-0 left-1/2 w-px -translate-x-1/2 bg-linear-to-b from-white/10 to-transparent" />
                    <ArrowDown className="absolute top-1/2 left-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 text-white/20" />
                </div>

                {/* Column 3: Output */}
                <div className="flex flex-1 flex-col justify-center">
                    <motion.div
                        layout
                        className="relative overflow-hidden rounded-xl border border-indigo-500/30 bg-indigo-500/10 p-6 shadow-2xl shadow-indigo-500/10"
                    >
                        <div className="absolute inset-0 bg-linear-to-br from-indigo-500/10 via-transparent to-transparent opacity-50" />

                        <div className="relative z-10 flex items-start justify-between">
                            <div className="flex items-center gap-2 text-indigo-300">
                                <Package className="h-5 w-5" />
                                <span className="font-mono text-xs font-semibold tracking-wide uppercase">
                                    Digital Bundle
                                </span>
                            </div>
                            <div className="flex items-center gap-1.5 rounded bg-indigo-500/20 px-2 py-1">
                                <Layers className="h-3 w-3 text-indigo-300" />
                                <span className="text-[10px] font-medium text-indigo-200">
                                    Composite
                                </span>
                            </div>
                        </div>

                        <div className="relative z-10 mt-6">
                            <div className="flex items-baseline gap-2">
                                <AnimatePresence mode="popLayout">
                                    <motion.span
                                        key={bundleStock}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        className="text-5xl font-bold tracking-tighter text-white"
                                    >
                                        {bundleStock}
                                    </motion.span>
                                </AnimatePresence>
                                <span className="text-sm font-medium text-indigo-200/50">
                                    units
                                </span>
                            </div>
                            <p className="mt-2 text-xs text-indigo-300/70">
                                Available for immediate fulfillment
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

function InputCard({
    label,
    value,
    isLimiting,
    color,
}: {
    label: string;
    value: number;
    isLimiting: boolean;
    color: 'blue' | 'cyan';
}) {
    return (
        <motion.div
            layout
            className={cn(
                'relative flex flex-1 flex-col justify-center rounded-xl border p-5 transition-all duration-500',
                isLimiting
                    ? 'border-amber-500/40 bg-amber-500/10'
                    : 'border-white/5 bg-white/2 hover:bg-white/4'
            )}
        >
            <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <BoxIcon
                        className={cn(
                            'h-4 w-4',
                            isLimiting ? 'text-amber-400' : 'text-slate-400'
                        )}
                    />
                    <span
                        className={cn(
                            'font-mono text-xs font-medium uppercase',
                            isLimiting ? 'text-amber-200' : 'text-slate-400'
                        )}
                    >
                        {label}
                    </span>
                </div>
                {isLimiting && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex items-center gap-1.5 rounded-full bg-amber-500/20 px-2 py-0.5"
                    >
                        <AlertCircle className="h-3 w-3 text-amber-400" />
                        <span className="text-[9px] font-bold tracking-wide text-amber-300 uppercase">
                            Limiting
                        </span>
                    </motion.div>
                )}
            </div>

            <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-white transition-all duration-300">
                    {value}
                </span>
                <span className="text-xs text-white/30">stock</span>
            </div>

            {/* Simple visual bar for stock level */}
            <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                <motion.div
                    className={cn(
                        'h-full rounded-full',
                        isLimiting ? 'bg-amber-500' : 'bg-slate-500'
                    )}
                    initial={{ width: 0 }}
                    animate={{
                        width: `${Math.min((value / 150) * 100, 100)}%`,
                    }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                />
            </div>
        </motion.div>
    );
}
