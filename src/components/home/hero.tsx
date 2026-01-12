'use client';

import { motion, stagger, Variants } from 'framer-motion';

const container: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            delayChildren: stagger(0.1, { startDelay: 0.3 }),
        },
    },
};

const item: Variants = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
};

export function Hero() {
    return (
        <section className="flex min-h-[90vh] w-full flex-col items-center justify-center px-6 pt-32 pb-20">
            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="w-full max-w-4xl"
            >
                <motion.h1
                    variants={item}
                    className="mb-8 text-6xl leading-[0.9] font-bold tracking-tighter text-white sm:text-8xl md:text-9xl"
                >
                    Software, <br />
                    <span className="text-text-muted">Refined.</span>
                </motion.h1>

                <motion.p
                    variants={item}
                    className="text-text-secondary max-w-xl text-lg leading-relaxed sm:text-xl"
                >
                    Astraen is an independent software laboratory. We engineer
                    durable digital systems and craft high-fidelity user
                    experiences, prioritizing logic, performance, and privacy.
                </motion.p>
            </motion.div>
        </section>
    );
}
