import { Metadata } from 'next';
import { MaskedIcon } from '@/components/ui/masked-icon';
import { ArrowDownToLine, Database, ShieldCheck, Zap } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'RainVu',
    description: 'Modern rainfall logging.',
};

export default function RainVuPage() {
    return (
        <div className="w-full pt-32 pb-20">
            {/* Hero */}
            <section className="container mx-auto mb-24 max-w-5xl px-6 text-center">
                <div className="mx-auto mb-10 flex h-24 w-24 items-center justify-center rounded-3xl bg-linear-to-tr from-blue-600 to-blue-400 shadow-2xl shadow-blue-900/20">
                    <MaskedIcon
                        src="/rainvu/rainvu-icon-mask.png"
                        className="h-14 w-14 bg-white"
                    />
                </div>
                <h1 className="mb-6 text-5xl font-bold tracking-tighter text-white md:text-7xl">
                    RainVu
                </h1>
                <p className="text-text-secondary mx-auto mb-10 max-w-2xl text-xl">
                    A precision tool for farmers and weather enthusiasts. Built
                    with local-first architecture for privacy and speed.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                    <a
                        href="https://apps.apple.com/us/app/rainvu/id6754812264"
                        className="flex h-12 items-center gap-2 rounded-full bg-white px-8 font-semibold text-black transition-colors hover:bg-gray-200"
                    >
                        App Store
                    </a>
                    <a
                        href="https://play.google.com/store/apps/details?id=com.astraen.rainvu"
                        className="bg-surface-highlight border-border hover:bg-surface-highlight/80 flex h-12 items-center gap-2 rounded-full border px-8 font-semibold text-white transition-colors"
                    >
                        Google Play
                    </a>
                </div>
            </section>

            {/* Features Grid */}
            <section className="container mx-auto mb-24 max-w-5xl px-6">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div className="bg-surface/30 border-border rounded-3xl border p-8">
                        <Database className="mb-6 h-8 w-8 text-blue-400" />
                        <h3 className="mb-3 text-xl font-bold text-white">
                            Local First
                        </h3>
                        <p className="text-text-secondary">
                            Your data lives on your device. No cloud accounts,
                            no tracking, no delays. Instant startup and offline
                            availability.
                        </p>
                    </div>
                    <div className="bg-surface/30 border-border rounded-3xl border p-8">
                        <ShieldCheck className="mb-6 h-8 w-8 text-blue-400" />
                        <h3 className="mb-3 text-xl font-bold text-white">
                            Private by Design
                        </h3>
                        <p className="text-text-secondary">
                            We don&#39;t want your data. Export your logs to CSV
                            or JSON anytime for external analysis or backup.
                        </p>
                    </div>
                    <div className="bg-surface/30 border-border rounded-3xl border p-8">
                        <ArrowDownToLine className="mb-6 h-8 w-8 text-blue-400" />
                        <h3 className="mb-3 text-xl font-bold text-white">
                            Data Portability
                        </h3>
                        <p className="text-text-secondary">
                            Complete ownership. Move your data in and out with
                            standardized formats.
                        </p>
                    </div>
                    <div className="bg-surface/30 border-border rounded-3xl border p-8">
                        <Zap className="mb-6 h-8 w-8 text-blue-400" />
                        <h3 className="mb-3 text-xl font-bold text-white">
                            Flutter Powered
                        </h3>
                        <p className="text-text-secondary">
                            Silky smooth 120fps animations and native
                            performance on both iOS and Android.
                        </p>
                    </div>
                </div>
            </section>

            {/* Links */}
            <section className="border-border container mx-auto max-w-5xl border-t px-6 pt-12 text-center">
                <div className="text-text-secondary flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm">
                    <Link href="/rainvu/privacy" className="hover:text-white">
                        Privacy Policy
                    </Link>
                    <Link href="/rainvu/terms" className="hover:text-white">
                        Terms of Service
                    </Link>
                    <Link
                        href="/rainvu/data-deletion"
                        className="hover:text-white"
                    >
                        Data Deletion
                    </Link>
                    <a
                        href="https://github.com/astraen-dev/RainVu"
                        className="hover:text-white"
                    >
                        Source Code
                    </a>
                </div>
            </section>
        </div>
    );
}
