'use client';

import Image from 'next/image';
import { ArrowRight, CodeXml, Cpu, Globe, Sparkles } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';
import Link from 'next/link';
import { Section } from '@/components/home/section';
import { MaskedIcon } from '@/components/ui/masked-icon';

const competencies = [
    {
        icon: Sparkles,
        title: 'Digital Craftsmanship',
        description:
            'A focus on polish, fluidity, and user experience. bridging the gap between functional code and art.',
    },
    {
        icon: Globe,
        title: 'Modern Web Architecture',
        description:
            'Building responsive, edge-ready applications using Next.js and serverless technologies.',
    },
    {
        icon: CodeXml,
        title: 'Mobile Engineering',
        description:
            'Creating native-feel cross-platform experiences with Flutter. Performance-first mobile development.',
    },
    {
        icon: Cpu,
        title: 'Systems & Backend',
        description:
            'Robust data design and API development. Ensuring scalable foundations for ambitious ideas.',
    },
];

export default function Home() {
    return (
        <>
            {/* --- Hero Section --- */}
            <Section id="hero" className="pt-24 text-center sm:pt-32">
                <Image
                    src="/astraen_logo_v3.png"
                    alt="Astraen Logo"
                    width={120}
                    height={120}
                    priority
                    className="shadow-primary-a/30 mx-auto mb-8 rounded-full shadow-2xl"
                />
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                    <span className="relative inline-block">
                        astraen
                        <span className="from-primary-a to-secondary-b absolute -bottom-2 left-0 h-1 w-full bg-gradient-to-r" />
                    </span>
                </h1>
                <div className="text-secondary-a mt-6 h-7 text-lg sm:text-xl">
                    <TypeAnimation
                        sequence={[
                            'the digital lab;',
                            2000,
                            'building open source;',
                            2000,
                            'engineering ideas;',
                            2000,
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                    />
                </div>
                <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                    An independent development studio and umbrella for personal
                    projects. Specializing in high-performance architecture and
                    bespoke freelance engineering.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <Link
                        href="#projects"
                        className="group from-primary-a to-secondary-b text-background-start ring-primary-a/50 hover:shadow-primary-b/30 flex transform items-center justify-center gap-2 rounded-full bg-gradient-to-r px-6 py-3 font-semibold ring-1 backdrop-blur-sm transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg"
                    >
                        Explore The Lab
                        <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>
            </Section>

            {/* --- Competencies Section --- */}
            <Section id="about">
                <div className="text-center">
                    <h2 className="text-primary-b text-3xl font-bold tracking-tight sm:text-4xl">
                        The Technical Foundation
                    </h2>
                    <p className="mt-4 text-lg leading-8 text-slate-300">
                        The principles and stack that power my projects and
                        freelance work.
                    </p>
                </div>
                <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {competencies.map((item) => (
                        <div
                            key={item.title}
                            className="hover:ring-primary-a/50 hover:shadow-secondary-b/10 relative overflow-hidden rounded-2xl bg-slate-900/40 p-8 ring-1 ring-white/10 backdrop-blur-lg transition-all duration-300 hover:shadow-2xl"
                        >
                            <div className="from-primary-a/20 to-secondary-b/20 ring-primary-a/30 mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br ring-1">
                                <item.icon className="text-primary-b h-6 w-6" />
                            </div>
                            <h3 className="text-lg font-semibold text-white">
                                {item.title}
                            </h3>
                            <p className="mt-2 text-sm text-slate-400">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </Section>

            {/* --- Projects Section --- */}
            <Section id="projects">
                <div className="text-center">
                    <h2 className="text-primary-b text-3xl font-bold tracking-tight sm:text-4xl">
                        Lab Projects
                    </h2>
                    <p className="mt-4 text-lg leading-8 text-slate-300">
                        Public applications and open-source tools born from the
                        studio.
                    </p>
                </div>
                <div className="mt-16 grid grid-cols-1 gap-8">
                    <Link
                        href="/rainvu"
                        className="group hover:ring-primary-a/50 hover:shadow-secondary-b/10 relative block overflow-hidden rounded-2xl bg-slate-900/40 p-8 ring-1 ring-white/10 backdrop-blur-lg transition-all duration-300 hover:shadow-2xl"
                    >
                        <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
                            <div className="from-primary-a/20 to-secondary-b/20 ring-primary-a/30 flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br p-2 ring-1">
                                <MaskedIcon
                                    src="/rainvu/rainvu-icon-mask.png"
                                    className="h-10 w-10"
                                />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-semibold text-white">
                                    RainVu
                                </h3>
                                <p className="mt-2 text-slate-400">
                                    A modern, open-source Flutter app for
                                    meticulously logging and analyzing rainfall
                                    data. Built for farmers, gardeners, and
                                    weather enthusiasts.
                                </p>
                            </div>
                            <ArrowRight className="group-hover:text-primary-b h-6 w-6 text-slate-400 transition-transform group-hover:translate-x-1 sm:ml-auto" />
                        </div>
                    </Link>
                </div>
            </Section>
        </>
    );
}
