'use client';

import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { fadeInUp } from './animations';

interface TechStackItem {
    label: string;
    value: string | React.ReactNode;
}

const stackData: TechStackItem[] = [
    {
        label: 'Stack',
        value: (
            <>
                Next.js 16 / TypeScript <br />
                PostgreSQL / Supabase
            </>
        ),
    },
    {
        label: 'UI/UX',
        value: 'Radix UI / Tailwind CSS',
    },
    {
        label: 'Paradigm',
        value: 'Database-Centric / RPC',
    },
    {
        label: 'Client',
        value: 'Private Enterprise',
    },
];

export function StockManagerHeader() {
    return (
        <motion.section
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="container mx-auto mb-24 max-w-4xl px-6"
        >
            <Link
                href="/"
                className="text-text-secondary mb-8 inline-flex items-center gap-2 text-sm transition-colors hover:text-white"
            >
                <ArrowLeft className="h-4 w-4" />
                Back to Lab
            </Link>

            <div className="mb-6 flex gap-3">
                <span className="rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 font-mono text-xs text-indigo-300">
                    Business Operations
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs text-white/60">
                    2025 - 2026
                </span>
            </div>

            <h1 className="mb-8 text-5xl font-bold tracking-tighter text-white md:text-7xl">
                Bespoke Stock Manager
            </h1>

            <p className="text-text-secondary mb-12 text-xl leading-relaxed">
                A high-integrity logistics tool designed to eliminate human
                error. We architected a database-centric system with an
                immutable ledger that automates the complex relationship between
                physical components, digital sales bundles, and end-to-end
                financial tracking.
            </p>

            <div className="grid grid-cols-2 gap-6 border-y border-white/5 py-8 md:grid-cols-4">
                {stackData.map((item) => (
                    <div key={item.label}>
                        <div className="text-text-muted mb-2 font-mono text-xs tracking-widest uppercase">
                            {item.label}
                        </div>
                        <div className="leading-snug font-medium text-white">
                            {item.value}
                        </div>
                    </div>
                ))}
            </div>
        </motion.section>
    );
}
