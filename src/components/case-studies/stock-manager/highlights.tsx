'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Scale, Landmark, Lock, LucideIcon } from 'lucide-react';
import { fadeInUp, staggerContainer } from './animations';

interface HighlightItem {
    id: string;
    title: string;
    description: string;
    icon: LucideIcon;
    iconColorClass: string;
    iconBgClass: string;
    tags?: string[];
}

const highlights: HighlightItem[] = [
    {
        id: 'immutable-logs',
        title: 'Immutable Audit Ledger',
        description:
            'Stock levels are never simply "overwritten". Every change is recorded via a transactional RPC that creates an entry in an immutable log table, complete with a reason code, user ID, and a before/after snapshot. This creates a forensic audit trail for every item.',
        icon: ShieldCheck,
        iconColorClass: 'text-blue-400',
        iconBgClass: 'bg-blue-500/10 border-blue-500/20',
        tags: ['Transactional RPCs', 'Data Integrity'],
    },
    {
        id: 'auto-replenishment',
        title: 'Algorithmic Replenishment',
        description:
            'A core database function analyzes target stock levels against real-time component deficits to automatically generate draft procurement requests. The system manages the entire multi-stage procurement lifecycle, updating stock and financial ledgers only upon final receipt validation.',
        icon: Scale,
        iconColorClass: 'text-emerald-400',
        iconBgClass: 'bg-emerald-500/10 border-emerald-500/20',
    },
    {
        id: 'financial-ledgers',
        title: 'Automated Financial Ledgers',
        description:
            'The system links physical operations to financial data. Upon receiving goods, it automatically calculates and accrues the corresponding financial liabilities into a dedicated ledger. This provides a real-time, auditable view of outstanding debts, which can be settled through a secure, transactional reconciliation process.',
        icon: Landmark,
        iconColorClass: 'text-purple-400',
        iconBgClass: 'bg-purple-500/10 border-purple-500/20',
        tags: ['PL/pgSQL Functions', 'Financial Reporting'],
    },
    {
        id: 'rls-security',
        title: 'Database-Level Security (RLS)',
        description:
            "Leveraging PostgreSQL's native Row Level Security, access control is enforced at the data layer itself, not just in the API. A custom permissions system allows granular control, ensuring warehouse staff can update stock counts but are physically prevented by the database from viewing sensitive financial data like cost prices or liability ledgers.",
        icon: Lock,
        iconColorClass: 'text-amber-400',
        iconBgClass: 'bg-amber-500/10 border-amber-500/20',
        tags: ['PostgreSQL RLS', 'Custom Permissions'],
    },
];

export function StockManagerHighlights() {
    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="container mx-auto mb-24 max-w-4xl px-6"
        >
            <motion.h2
                variants={fadeInUp}
                className="mb-12 text-3xl font-bold text-white"
            >
                Engineering Highlights
            </motion.h2>

            <div className="space-y-6">
                {highlights.map((item) => (
                    <HighlightCard key={item.id} {...item} />
                ))}
            </div>
        </motion.section>
    );
}

function HighlightCard({
    title,
    description,
    icon: Icon,
    iconColorClass,
    iconBgClass,
    tags,
}: HighlightItem) {
    return (
        <motion.div
            variants={fadeInUp}
            className="group bg-surface/20 hover:bg-surface/40 rounded-2xl border border-white/5 p-8 transition-colors hover:border-white/10"
        >
            <div className="flex flex-col gap-6 md:flex-row">
                <div className="shrink-0">
                    <div
                        className={`flex h-12 w-12 items-center justify-center rounded-full border ${iconBgClass}`}
                    >
                        <Icon className={`h-6 w-6 ${iconColorClass}`} />
                    </div>
                </div>
                <div>
                    <h3 className="mb-2 text-xl font-bold text-white">
                        {title}
                    </h3>
                    <p className="text-text-secondary mb-4">{description}</p>
                    {tags && tags.length > 0 && (
                        <div className="flex gap-2">
                            {tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="rounded border border-white/5 bg-black/50 px-2 py-1 font-mono text-[10px] text-white/50"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </motion.div>
    );
}
