import { Metadata } from 'next';
import {
    Database,
    ShieldCheck,
    Activity,
    Landmark,
    ArrowLeft,
    Server,
    GitBranch,
    Lock,
    Scale,
} from 'lucide-react';
import Link from 'next/link';
import { LogicVisualizer } from '@/components/case-studies/logic-visualizer';

export const metadata: Metadata = {
    title: 'Case Study: Bespoke Stock Manager',
    description:
        'Architecture of a bespoke, high-integrity inventory and logistics OS.',
};

export default function StockManagerCaseStudy() {
    return (
        <div className="w-full pt-32 pb-20">
            {/* Header / Intro */}
            <section className="container mx-auto mb-24 max-w-4xl px-6">
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
                    A high-integrity logistics OS designed to eliminate human
                    error. We architected a database-centric system with an
                    immutable ledger that automates the complex relationship
                    between physical components, digital sales bundles, and
                    end-to-end financial tracking.
                </p>

                <div className="grid grid-cols-2 gap-6 border-y border-white/5 py-8 md:grid-cols-4">
                    <div>
                        <div className="text-text-muted mb-2 font-mono text-xs tracking-widest uppercase">
                            Stack
                        </div>
                        <div className="leading-snug font-medium text-white">
                            Next.js 16 / TypeScript <br />
                            PostgreSQL / Supabase
                        </div>
                    </div>
                    <div>
                        <div className="text-text-muted mb-2 font-mono text-xs tracking-widest uppercase">
                            UI/UX
                        </div>
                        <div className="font-medium text-white">
                            Radix UI / Tailwind CSS
                        </div>
                    </div>
                    <div>
                        <div className="text-text-muted mb-2 font-mono text-xs tracking-widest uppercase">
                            Paradigm
                        </div>
                        <div className="font-medium text-white">
                            Database-Centric / RPC
                        </div>
                    </div>
                    <div>
                        <div className="text-text-muted mb-2 font-mono text-xs tracking-widest uppercase">
                            Client
                        </div>
                        <div className="font-medium text-white">
                            Private Enterprise
                        </div>
                    </div>
                </div>
            </section>

            {/* The Problem Space */}
            <section className="container mx-auto mb-32 max-w-4xl px-6">
                <div className="grid gap-12 md:grid-cols-2">
                    <div>
                        <h2 className="mb-4 text-2xl font-bold text-white">
                            The Entropy Problem
                        </h2>
                        <div className="prose-styles">
                            <p>
                                Before intervention, the client operated a
                                high-volume logistics business relying solely on
                                manual synchronization between warehouse
                                spreadsheets and their e-commerce frontend.
                            </p>
                            <p>This fractured state resulted in:</p>
                            <ul className="text-text-secondary list-disc space-y-2 pl-4">
                                <li>
                                    <strong>Phantom Inventory:</strong> Sales
                                    made on items physically out of stock due to
                                    sync delays.
                                </li>
                                <li>
                                    <strong>Replenishment Guesswork:</strong>{' '}
                                    Ordering static amounts rather than
                                    calculating dynamic deficits.
                                </li>
                                <li>
                                    <strong>Data Silos:</strong> Financial
                                    liabilities regarding suppliers were
                                    calculated manually, leading to drift.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center rounded-2xl border border-red-500/10 bg-red-900/5 p-8">
                        <div className="mb-6 flex items-start gap-4">
                            <Activity className="mt-1 h-6 w-6 text-red-400" />
                            <div>
                                <h3 className="mb-1 font-bold text-white">
                                    System Fragility
                                </h3>
                                <p className="text-sm text-red-200/60">
                                    Previous reliance on &#34;avoiding human
                                    error&#34; was unsustainable at scale. A
                                    single missed spreadsheet update caused
                                    cascading failures in fulfillment.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Architecture Solution (Atoms/Molecules) */}
            <section className="bg-surface/30 mb-32 border-y border-white/5 py-24">
                <div className="container mx-auto max-w-4xl px-6">
                    <div className="mb-12">
                        <h2 className="mb-2 font-mono text-sm tracking-widest text-indigo-400 uppercase">
                            Architecture
                        </h2>
                        <h3 className="mb-6 text-3xl font-bold text-white">
                            Component Normalization
                        </h3>
                        <p className="text-text-secondary max-w-2xl text-lg">
                            We decoupled the concept of &#34;what we
                            sell&#34;from &#34;what we have&#34;. By treating
                            inventory items as atomic units and sales products
                            as molecular recipes, we achieved true data
                            integrity.
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
                                Physical entities (components) are tracked via
                                an immutable ledger. Every damage report,
                                arrival, or manual correction is a signed
                                transaction.
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
                                components. The system calculates availability
                                based on the scarcest component.
                            </p>
                        </div>
                        <div className="space-y-3">
                            <div className="bg-surface flex h-10 w-10 items-center justify-center rounded-lg border border-white/10">
                                <Server className="h-5 w-5 text-white/70" />
                            </div>
                            <h4 className="font-bold text-white">The Sync</h4>
                            <p className="text-text-secondary text-sm leading-relaxed">
                                When component stock changes, a background
                                worker recalculates all dependent recipes and
                                pushes the new &#34;Buildable Quantity&#34; to
                                the sales channel API.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Technical Highlights */}
            <section className="container mx-auto mb-24 max-w-4xl px-6">
                <h2 className="mb-12 text-3xl font-bold text-white">
                    Engineering Highlights
                </h2>

                <div className="space-y-6">
                    {/* Feature 1: Immutable Logs */}
                    <div className="group bg-surface/20 hover:bg-surface/40 rounded-2xl border border-white/5 p-8 transition-colors hover:border-white/10">
                        <div className="flex flex-col gap-6 md:flex-row">
                            <div className="shrink-0">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-blue-500/20 bg-blue-500/10">
                                    <ShieldCheck className="h-6 w-6 text-blue-400" />
                                </div>
                            </div>
                            <div>
                                <h3 className="mb-2 text-xl font-bold text-white">
                                    Immutable Audit Ledger
                                </h3>
                                <p className="text-text-secondary mb-4">
                                    Stock levels are never
                                    simply&#34;overwritten&#34;. Every change is
                                    recorded via a transactional RPC that
                                    creates an entry in an immutable log table,
                                    complete with a reason code, user ID, and a
                                    before/after snapshot. This creates a
                                    forensic audit trail for every item.
                                </p>
                                <div className="flex gap-2">
                                    <span className="rounded border border-white/5 bg-black/50 px-2 py-1 font-mono text-[10px] text-white/50">
                                        Transactional RPCs
                                    </span>
                                    <span className="rounded border border-white/5 bg-black/50 px-2 py-1 font-mono text-[10px] text-white/50">
                                        Data Integrity
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Feature 2: Automated Replenishment */}
                    <div className="group bg-surface/20 hover:bg-surface/40 rounded-2xl border border-white/5 p-8 transition-colors hover:border-white/10">
                        <div className="flex flex-col gap-6 md:flex-row">
                            <div className="shrink-0">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-emerald-500/20 bg-emerald-500/10">
                                    <Scale className="h-6 w-6 text-emerald-400" />
                                </div>
                            </div>
                            <div>
                                <h3 className="mb-2 text-xl font-bold text-white">
                                    Algorithmic Replenishment
                                </h3>
                                <p className="text-text-secondary mb-4">
                                    A core database function analyzes target
                                    stock levels against real-time component
                                    deficits to automatically generate draft
                                    procurement requests. The system manages the
                                    entire multi-stage procurement lifecycle,
                                    updating stock and financial ledgers only
                                    upon final receipt validation.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Feature 3: Automated Financial Ledgers */}
                    <div className="group bg-surface/20 hover:bg-surface/40 rounded-2xl border border-white/5 p-8 transition-colors hover:border-white/10">
                        <div className="flex flex-col gap-6 md:flex-row">
                            <div className="shrink-0">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-purple-500/20 bg-purple-500/10">
                                    <Landmark className="h-6 w-6 text-purple-400" />
                                </div>
                            </div>
                            <div>
                                <h3 className="mb-2 text-xl font-bold text-white">
                                    Automated Financial Ledgers
                                </h3>
                                <p className="text-text-secondary mb-4">
                                    The system links physical operations to
                                    financial data. Upon receiving goods, it
                                    automatically calculates and accrues the
                                    corresponding financial liabilities into a
                                    dedicated ledger. This provides a real-time,
                                    auditable view of outstanding debts, which
                                    can be settled through a secure,
                                    transactional reconciliation process.
                                </p>
                                <div className="flex gap-2">
                                    <span className="rounded border border-white/5 bg-black/50 px-2 py-1 font-mono text-[10px] text-white/50">
                                        PL/pgSQL Functions
                                    </span>
                                    <span className="rounded border border-white/5 bg-black/50 px-2 py-1 font-mono text-[10px] text-white/50">
                                        Financial Reporting
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* REVISED Feature 4: Security */}
                    <div className="group bg-surface/20 hover:bg-surface/40 rounded-2xl border border-white/5 p-8 transition-colors hover:border-white/10">
                        <div className="flex flex-col gap-6 md:flex-row">
                            <div className="shrink-0">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-amber-500/20 bg-amber-500/10">
                                    <Lock className="h-6 w-6 text-amber-400" />
                                </div>
                            </div>
                            <div>
                                <h3 className="mb-2 text-xl font-bold text-white">
                                    Database-Level Security (RLS)
                                </h3>
                                <p className="text-text-secondary mb-4">
                                    Leveraging PostgreSQL&#39;s native Row Level
                                    Security, access control is enforced at the
                                    data layer itself, not just in the API. A
                                    custom permissions system allows granular
                                    control, ensuring warehouse staff can update
                                    stock counts but are physically prevented by
                                    the database from viewing sensitive
                                    financial data like cost prices or liability
                                    ledgers.
                                </p>
                                <div className="flex gap-2">
                                    <span className="rounded border border-white/5 bg-black/50 px-2 py-1 font-mono text-[10px] text-white/50">
                                        PostgreSQL RLS
                                    </span>
                                    <span className="rounded border border-white/5 bg-black/50 px-2 py-1 font-mono text-[10px] text-white/50">
                                        Custom Permissions
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
