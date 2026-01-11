'use client';

import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';

export function Header() {
    const { scrollY } = useScroll();

    // Scroll range for the transition (0px to 100px)
    const range = [0, 100];

    // Layout Morphing
    const width = useTransform(scrollY, range, ['100%', '140px']);
    const marginTop = useTransform(scrollY, range, [0, 24]);
    const padding = useTransform(scrollY, range, [20, 12]);

    // Radii: Start as bottom-rounded bar (0,0,24,24), morph to full pill (24,24,24,24)
    const topRadius = useTransform(scrollY, range, [0, 24]);
    const bottomRadius = 24; // Constant curvature for continuity

    // Visual Styles
    const backgroundColor = useTransform(scrollY, range, [
        'rgba(10, 10, 10, 0)',
        'rgba(10, 10, 10, 0.6)',
    ]);
    const borderColor = useTransform(scrollY, range, [
        'rgba(255, 255, 255, 0)',
        'rgba(255, 255, 255, 0.1)',
    ]);
    const backdropBlur = useTransform(scrollY, range, [
        'blur(0px)',
        'blur(12px)',
    ]);

    return (
        <header className="pointer-events-none fixed top-0 right-0 left-0 z-50 flex justify-center">
            <motion.div
                style={{
                    width,
                    marginTop,
                    borderTopLeftRadius: topRadius,
                    borderTopRightRadius: topRadius,
                    borderBottomLeftRadius: bottomRadius,
                    borderBottomRightRadius: bottomRadius,
                    backgroundColor,
                    borderColor,
                    backdropFilter: backdropBlur,
                    paddingTop: padding,
                    paddingBottom: padding,
                }}
                className="pointer-events-auto flex items-center justify-center border border-b-white/5 shadow-black/20"
            >
                <Link href="/" className="group relative z-50">
                    <span className="font-mono text-sm font-bold tracking-widest text-white transition-opacity group-hover:opacity-80">
                        ASTRAEN
                    </span>
                </Link>
            </motion.div>
        </header>
    );
}
