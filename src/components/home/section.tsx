"use client";

import {motion} from "framer-motion";
import {cn} from "@/lib/utils";
import React from "react";

interface SectionProps {
    children: React.ReactNode;
    className?: string;
    id?: string;
}

export function Section({children, className, id}: SectionProps) {
    return (
        <motion.section
            id={id}
            initial={{opacity: 0, y: 50}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true, amount: 0.25}}
            transition={{duration: 0.6, ease: "easeOut"}}
            className={cn("w-full py-16 sm:py-20", className)}
        >
            <div className="container mx-auto max-w-5xl px-4">{children}</div>
        </motion.section>
    );
}