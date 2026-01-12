'use client';

import { motion } from 'framer-motion';
import { Activity } from 'lucide-react';
import { fadeInUp, staggerContainer } from './animations';

export function StockManagerProblemSpace() {
    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="container mx-auto mb-32 max-w-4xl px-6"
        >
            <div className="grid gap-12 md:grid-cols-2">
                <motion.div variants={fadeInUp}>
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
                                <strong>Phantom Inventory:</strong> Sales made
                                on items physically out of stock due to sync
                                delays.
                            </li>
                            <li>
                                <strong>Replenishment Guesswork:</strong>{' '}
                                Ordering static amounts rather than calculating
                                dynamic deficits.
                            </li>
                            <li>
                                <strong>Data Silos:</strong> Financial
                                liabilities regarding suppliers were calculated
                                manually, leading to drift.
                            </li>
                        </ul>
                    </div>
                </motion.div>

                <motion.div
                    variants={fadeInUp}
                    className="flex flex-col items-center justify-center rounded-2xl border border-red-500/10 bg-red-900/5 p-10 text-center"
                >
                    <Activity
                        className="mb-6 h-20 w-20 text-red-400 opacity-80"
                        strokeWidth={1}
                    />
                    <h3 className="mb-4 text-xl font-bold text-white">
                        System Fragility
                    </h3>
                    <p className="leading-relaxed text-red-200/60">
                        Previous reliance on &#34;avoiding human error&#34; was
                        unsustainable at scale. A single missed spreadsheet
                        update caused cascading failures in fulfillment.
                    </p>
                </motion.div>
            </div>
        </motion.section>
    );
}
