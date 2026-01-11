'use client';

import { ArrowRight, CodeXml, Cpu, Globe, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { Section } from '@/components/home/section';
import { MaskedIcon } from '@/components/ui/masked-icon';

const competencies = [
    {
        icon: Sparkles,
        title: 'Digital Craftsmanship',
        description:
            'Focusing on polish and fluidity. Bridging the gap between functional code and art.',
    },
    {
        icon: Globe,
        title: 'Modern Architecture',
        description:
            'Building responsive, edge-ready applications using Next.js and serverless tech.',
    },
    {
        icon: CodeXml,
        title: 'Mobile Engineering',
        description:
            'Native-feel cross-platform experiences with Flutter. Performance-first.',
    },
    {
        icon: Cpu,
        title: 'Systems Design',
        description:
            'Robust data design and API development. Scalable foundations for ambitious ideas.',
    },
];

export default function Home() {
    return (
        <>
            <Section
                id="hero"
                className="flex min-h-[80vh] flex-col justify-center pt-24 text-center sm:pt-32"
            >
                <div className="mx-auto max-w-3xl">
                    <div className="text-primary-b mb-6 font-mono text-sm font-medium tracking-widest uppercase">
                        Astraen Software Lab
                    </div>
                    <h1 className="text-5xl font-bold tracking-tight text-white sm:text-7xl">
                        Engineering logic <br />
                        <span className="text-slate-500">into reality.</span>
                    </h1>
                    <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-slate-400">
                        An independent development studio. Specializing in
                        high-performance web architecture, bespoke mobile
                        engineering, and open-source experiments.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Link
                            href="#projects"
                            className="bg-primary-a hover:bg-primary-b flex items-center gap-2 rounded-md px-6 py-3 text-sm font-semibold text-white transition-all hover:translate-y-px"
                        >
                            View Projects
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                        <Link
                            href="#about"
                            className="text-sm font-semibold text-white hover:text-slate-300"
                        >
                            Our Stack <span aria-hidden="true">→</span>
                        </Link>
                    </div>
                </div>
            </Section>

            <Section id="about">
                <div className="border-t border-white/5 py-12">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {competencies.map((item) => (
                            <div
                                key={item.title}
                                className="group relative overflow-hidden rounded-xl border border-white/5 bg-white/[0.02] p-6 transition-all hover:border-white/10 hover:bg-white/[0.05]"
                            >
                                <item.icon className="text-primary-b mb-4 h-6 w-6 opacity-80 group-hover:opacity-100" />
                                <h3 className="text-lg font-semibold text-white">
                                    {item.title}
                                </h3>
                                <p className="mt-2 text-sm text-slate-400">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            <Section id="projects">
                <div className="border-t border-white/5 pt-16">
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold tracking-tight text-white">
                            Selected Work
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 gap-8">
                        <Link
                            href="/rainvu"
                            className="group relative block overflow-hidden rounded-2xl border border-white/10 bg-slate-900/50 p-8 transition-all hover:border-white/20 hover:bg-slate-900"
                        >
                            <div className="flex flex-col gap-8 sm:flex-row sm:items-center">
                                <div className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-xl bg-slate-800 shadow-inner">
                                    <MaskedIcon
                                        src="/rainvu/rainvu-icon-mask.png"
                                        className="h-12 w-12 bg-white"
                                    />
                                </div>
                                <div className="flex-1 space-y-2">
                                    <div className="flex items-center gap-3">
                                        <h3 className="text-2xl font-bold text-white">
                                            RainVu
                                        </h3>
                                        <span className="rounded-full bg-blue-500/10 px-2.5 py-0.5 text-xs font-medium text-blue-400">
                                            iOS & Android
                                        </span>
                                    </div>
                                    <p className="max-w-2xl text-slate-400">
                                        A precision tool for meticulously
                                        logging and analyzing rainfall data.
                                        Built with Flutter and local-first
                                        architecture for privacy and speed.
                                    </p>
                                </div>
                                <div className="hidden sm:block">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition-colors group-hover:border-white/30 group-hover:bg-white/5">
                                        <ArrowRight className="h-5 w-5 text-slate-400 group-hover:text-white" />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </Section>
        </>
    );
}
