"use client";

import Image from "next/image";
import {CodeXml, Github, Linkedin, MapPin} from "lucide-react";
import {TypeAnimation} from "react-type-animation";
import {motion} from "framer-motion";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";

const socialLinks = [
    {
        name: "GitHub",
        url: "https://github.com/astraen-dev",
        icon: Github,
    },
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/company/astraen",
        icon: Linkedin,
    },
];

export default function Home() {
    return (
        <div className="relative min-h-screen w-full overflow-hidden">
            {/* Pure CSS Animated Background */}
            <div className="star-bg">
                <div id="stars1" className="stars"></div>
                <div id="stars2" className="stars stars2"></div>
                <div id="stars3" className="stars stars3"></div>
            </div>

            {/* Main Content */}
            <main className="relative z-10 flex min-h-screen items-center justify-center p-4">
                <motion.div
                    initial={{opacity: 0, scale: 0.9, y: 20}}
                    animate={{opacity: 1, scale: 1, y: 0}}
                    transition={{duration: 0.7, ease: "easeOut"}}
                    className="relative w-full max-w-md rounded-2xl bg-slate-900/40 p-8 text-center shadow-2xl shadow-primary-a/10 ring-1 ring-white/10 backdrop-blur-lg"
                >
                    {/* Subtle Gradient Border */}
                    <div
                        className="absolute -inset-px rounded-2xl bg-gradient-to-br from-primary-a to-secondary-b opacity-20 blur-lg"/>

                    <div className="relative z-10 flex flex-col items-center">
                        {/* Logo with Glow and Gradient Border */}
                        <div className="relative mb-6">
                            <div
                                className="absolute -inset-4 bg-gradient-to-br from-primary-a to-secondary-b rounded-full opacity-50 blur-2xl"
                                style={{
                                    filter: "drop-shadow(0 0 2rem #7989EC) drop-shadow(0 0 3rem #C3A9FB)",
                                }}
                            />
                            <div
                                className="relative z-10 rounded-full p-0.5 bg-gradient-to-br from-primary-a to-secondary-b">
                                <div className="bg-background-start rounded-full p-2">
                                    <Image
                                        className="rounded-full"
                                        src="/astraen_logo_v3.png"
                                        alt="Astraen Logo"
                                        width={100}
                                        height={100}
                                        priority
                                    />
                                </div>
                            </div>
                        </div>

                        <h1 className="text-4xl font-bold tracking-wider text-white">
                            astraen.dev
                        </h1>

                        {/* Animated Slogans */}
                        <div className="mt-4 h-12 text-lg text-secondary-a">
                            <CodeXml className="inline-block h-5 w-5 mr-2 -mt-1 text-primary-b"/>
                            <TypeAnimation
                                sequence={[
                                    "deploy(quality); // shipping the future",
                                    2000,
                                    "from concept to clean code;",
                                    2000,
                                    "from signal to syntax;",
                                    2000,
                                    "where ideas execute;",
                                    2000,
                                ]}
                                wrapper="span"
                                speed={50}
                                repeat={Infinity}
                            />
                        </div>

                        <div className="mt-8 flex items-center justify-center gap-2 text-sm text-slate-400">
                            <MapPin className="h-4 w-4"/>
                            <span>origin/za-cpt</span>
                        </div>

                        {/* Social Links */}
                        <div className="mt-8 flex gap-6">
                            <TooltipProvider delayDuration={0}>
                                {socialLinks.map((link) => (
                                    <Tooltip key={link.name}>
                                        <TooltipTrigger asChild>
                                            <motion.a
                                                href={link.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-slate-400 transition-all duration-300 hover:text-white"
                                                whileHover={{
                                                    scale: 1.2,
                                                    filter: "drop-shadow(0 0 0.75rem var(--color-primary-b))",
                                                }}
                                                whileTap={{scale: 0.9}}
                                            >
                                                <link.icon className="h-7 w-7"/>
                                            </motion.a>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>{link.name}</p>
                                        </TooltipContent>
                                    </Tooltip>
                                ))}
                            </TooltipProvider>
                        </div>
                    </div>
                </motion.div>
            </main>
        </div>
    );
}