"use client";

import {motion} from "framer-motion";
import React from "react";

export default function Template({children}: { children: React.ReactNode }) {
    return (
        <motion.main
            initial={{opacity: 0, y: 15}}
            animate={{opacity: 1, y: 0}}
            transition={{ease: "easeInOut", duration: 0.5}}
            className="relative z-10 pt-32 pb-16"
        >
            {children}
        </motion.main>
    );
}