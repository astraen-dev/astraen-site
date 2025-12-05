import { Metadata } from 'next';
import {
    BarChart3,
    Database,
    FileJson,
    Layers3,
    Lock,
    Smartphone,
} from 'lucide-react';
import Link from 'next/link';
import { BrandIcon } from '@/components/ui/brand-icon';
import { MaskedIcon } from '@/components/ui/masked-icon';

export const metadata: Metadata = {
    title: 'RainVu App',
    description:
        'A modern Flutter app for logging and analyzing rainfall data.',
    openGraph: {
        title: 'RainVu | A Modern Rainfall Logging App',
        description: 'Built for farmers, gardeners, and weather enthusiasts.',
        images: [
            {
                url: '/rainvu/rainvu-og.png',
                width: 1200,
                height: 630,
                alt: 'RainVu App Logo and Title',
            },
        ],
    },
};

const storeLinks = [
    {
        href: 'https://apps.apple.com/us/app/rainvu/id6754812264',
        path: 'M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701',
        name: 'App Store',
        ariaLabel: 'Download on the Apple App Store',
    },
    {
        href: 'https://play.google.com/store/apps/details?id=com.astraen.rainvu',
        path: 'M22.018 13.298l-3.919 2.218-3.515-3.493 3.543-3.521 3.891 2.202a1.49 1.49 0 0 1 0 2.594zM1.337.924a1.486 1.486 0 0 0-.112.568v21.017c0 .217.045.419.124.6l11.155-11.087L1.337.924zm12.207 10.065l3.258-3.238L3.45.195a1.466 1.466 0 0 0-.946-.179l11.04 10.973zm0 2.067l-11 10.933c.298.036.612-.016.906-.183l13.324-7.54-3.23-3.21z',
        name: 'Google Play',
        ariaLabel: 'Get it on Google Play',
    },
    {
        href: 'https://github.com/astraen-dev/RainVu',
        path: 'M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12',
        name: 'GitHub',
        ariaLabel: 'View source code on GitHub',
    },
];

const features = [
    {
        icon: Database,
        title: 'Data Logging & Management',
        description:
            'Quickly log rainfall entries and manage multiple custom rain gauges.',
    },
    {
        icon: BarChart3,
        title: 'Powerful Analytics',
        description:
            'Visualize data with charts for MTD/YTD totals and analyze historical trends.',
    },
    {
        icon: FileJson,
        title: 'Data Portability',
        description:
            'Export all your data to CSV or JSON for backup or external analysis.',
    },
    {
        icon: Lock,
        title: 'Secure & Private',
        description:
            'All data is stored securely and locally on your device. No cloud account needed.',
    },
];

const techStack = [
    { icon: Smartphone, name: 'Flutter & Dart' },
    { icon: Layers3, name: 'Riverpod & Freezed' },
    { icon: Database, name: 'Drift (Local DB)' },
    { icon: BarChart3, name: 'fl_chart' },
];

export default function RainVuPage() {
    return (
        <div className="shadow-primary-a/10 relative w-full rounded-2xl bg-slate-900/40 p-8 shadow-2xl ring-1 ring-white/10 backdrop-blur-lg sm:p-12">
            {/* Subtle Gradient Border */}
            <div className="from-primary-a to-secondary-b absolute -inset-px rounded-2xl bg-gradient-to-br opacity-20 blur-lg" />

            <div className="relative z-10 flex flex-col items-center">
                <div className="from-primary-a/20 to-secondary-b/20 ring-primary-a/30 shadow-primary-a/20 mb-6 flex h-24 w-24 items-center justify-center rounded-2xl bg-gradient-to-br p-3 shadow-2xl ring-1">
                    <MaskedIcon
                        src="/rainvu/rainvu-icon-mask.png"
                        className="h-16 w-16"
                    />
                </div>
                <h1 className="text-center text-4xl font-bold tracking-wider text-white sm:text-5xl">
                    RainVu
                </h1>
                <p className="text-secondary-a mt-4 max-w-2xl text-center text-lg">
                    A modern Flutter app for farmers, gardeners, and weather
                    enthusiasts to meticulously log and analyze rainfall.
                </p>

                {/* --- App Store and GitHub Links --- */}
                <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                    {storeLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={link.ariaLabel}
                            className="group text-secondary-a hover:shadow-primary-a/20 hover:ring-primary-a/50 flex transform items-center justify-center gap-3 rounded-lg bg-slate-900/50 px-5 py-3 font-semibold ring-1 ring-white/10 backdrop-blur-sm transition-all duration-300 ease-in-out hover:-translate-y-1 hover:text-white hover:shadow-lg"
                        >
                            <BrandIcon
                                path={link.path}
                                className="group-hover:text-primary-b h-5 w-5 transition-colors"
                            />
                            <span>{link.name}</span>
                        </a>
                    ))}
                </div>

                <div className="mt-12 w-full">
                    <h2 className="text-primary-b text-center text-2xl font-semibold">
                        Key Features
                    </h2>
                    <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
                        {features.map((feature) => (
                            <div
                                key={feature.title}
                                className="bg-background-end/50 rounded-lg p-4 ring-1 ring-white/10"
                            >
                                <feature.icon className="text-secondary-b h-7 w-7" />
                                <h3 className="mt-3 font-semibold text-white">
                                    {feature.title}
                                </h3>
                                <p className="mt-1 text-sm text-slate-400">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-12 w-full">
                    <h2 className="text-primary-b text-center text-2xl font-semibold">
                        Tech Stack
                    </h2>
                    <div className="mt-6 flex flex-wrap justify-center gap-4">
                        {techStack.map((tech) => (
                            <div
                                key={tech.name}
                                className="bg-background-end/50 flex items-center gap-2 rounded-full px-4 py-2 ring-1 ring-white/10"
                            >
                                <tech.icon className="text-secondary-b h-5 w-5" />
                                <span className="text-sm text-slate-300">
                                    {tech.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-12 flex w-full flex-col items-center justify-center gap-4 border-t border-white/10 pt-6 sm:flex-row sm:gap-6">
                    <Link
                        href="/rainvu/privacy"
                        className="text-secondary-a hover:text-primary-a text-sm transition-colors hover:underline"
                    >
                        Privacy Policy
                    </Link>
                    <span className="hidden text-slate-600 sm:inline">|</span>
                    <Link
                        href="/rainvu/terms"
                        className="text-secondary-a hover:text-primary-a text-sm transition-colors hover:underline"
                    >
                        Terms of Service
                    </Link>
                    <span className="hidden text-slate-600 sm:inline">|</span>
                    <Link
                        href="/rainvu/data-deletion"
                        className="text-secondary-a hover:text-primary-a text-sm transition-colors hover:underline"
                    >
                        Data Deletion
                    </Link>
                </div>
            </div>
        </div>
    );
}
