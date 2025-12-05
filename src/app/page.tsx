'use client';

import Image from 'next/image';
import { ArrowRight, CodeXml, Layers, Lightbulb, Rocket } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';
import Link from 'next/link';
import { Section } from '@/components/home/section';
import { MaskedIcon } from '@/components/ui/masked-icon';

const services = [
    {
        icon: Lightbulb,
        title: 'Concept & Strategy',
        description:
            'Transforming raw ideas into actionable, technical blueprints for success.',
    },
    {
        icon: Layers,
        title: 'Architecture & Design',
        description:
            'Building robust, scalable, and maintainable foundations for modern applications.',
    },
    {
        icon: CodeXml,
        title: 'Development & Execution',
        description:
            'Writing clean, efficient, and well-documented code that brings designs to life.',
    },
    {
        icon: Rocket,
        title: 'Deployment & Quality',
        description:
            'Ensuring seamless delivery and high-quality performance from staging to production.',
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
                            'from signal to syntax;',
                            2000,
                            'from concept to clean code;',
                            2000,
                            'where ideas execute;',
                            2000,
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                    />
                </div>
                <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                    Boutique software development focusing on quality,
                    performance, and clean architecture. Shipping the future,
                    one commit at a time.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <Link
                        href="#projects"
                        className="group from-primary-a to-secondary-b text-background-start ring-primary-a/50 hover:shadow-primary-b/30 flex transform items-center justify-center gap-2 rounded-full bg-gradient-to-r px-6 py-3 font-semibold ring-1 backdrop-blur-sm transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg"
                    >
                        View Projects
                        <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>
            </Section>

            {/* --- Services Section --- */}
            <Section id="about">
                <div className="text-center">
                    <h2 className="text-primary-b text-3xl font-bold tracking-tight sm:text-4xl">
                        From Concept to Clean Code
                    </h2>
                    <p className="mt-4 text-lg leading-8 text-slate-300">
                        A philosophy of meticulous development across the entire
                        product lifecycle.
                    </p>
                </div>
                <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {services.map((service) => (
                        <div
                            key={service.title}
                            className="hover:ring-primary-a/50 hover:shadow-secondary-b/10 relative overflow-hidden rounded-2xl bg-slate-900/40 p-8 ring-1 ring-white/10 backdrop-blur-lg transition-all duration-300 hover:shadow-2xl"
                        >
                            <div className="from-primary-a/20 to-secondary-b/20 ring-primary-a/30 mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br ring-1">
                                <service.icon className="text-primary-b h-6 w-6" />
                            </div>
                            <h3 className="text-lg font-semibold text-white">
                                {service.title}
                            </h3>
                            <p className="mt-2 text-sm text-slate-400">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </Section>

            {/* --- Projects Section --- */}
            <Section id="projects">
                <div className="text-center">
                    <h2 className="text-primary-b text-3xl font-bold tracking-tight sm:text-4xl">
                        Featured Projects
                    </h2>
                    <p className="mt-4 text-lg leading-8 text-slate-300">
                        A glimpse into what&apos;s been built.
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
