import { Metadata } from 'next';
import { Shield, Zap, WifiOff, FileJson } from 'lucide-react';
import { RainVuHero } from '@/components/rainvu/hero';
import { AnalyticsCard } from '@/components/rainvu/analytics-card';
import { YtdCard } from '@/components/rainvu/ytd-card';
import {
    FeatureCard,
    SmallFeatureCard,
} from '@/components/rainvu/feature-card';
import { TechSpecs } from '@/components/rainvu/tech-specs';
import { RainVuFooterLinks } from '@/components/rainvu/footer-links';

export const metadata: Metadata = {
    title: 'RainVu',
    description: 'Modern rainfall logging.',
};

export default function RainVuPage() {
    return (
        <div className="w-full pt-32 pb-20">
            <RainVuHero />

            {/* Visual Bento Grid */}
            <section className="container mx-auto mb-32 max-w-5xl px-6">
                <div className="mb-12 border-b border-white/5 pb-4">
                    <h2 className="font-mono text-sm tracking-widest text-white uppercase">
                        Capabilities
                    </h2>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-6 md:grid-rows-2">
                    <AnalyticsCard />

                    <FeatureCard
                        title="Offline Capable"
                        description="No cloud dependency. Your database lives on your device."
                        icon={WifiOff}
                        className="md:col-span-2"
                    />

                    <YtdCard />
                </div>

                <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
                    <SmallFeatureCard
                        title="Private by Design"
                        description="We don't want your data. It stays encrypted on your phone."
                        icon={Shield}
                    />
                    <SmallFeatureCard
                        title="120fps Performance"
                        description="Built with Flutter for buttery smooth native interactions."
                        icon={Zap}
                    />
                    <SmallFeatureCard
                        title="Data Portability"
                        description="Export your logs to CSV or JSON anytime. You own it."
                        icon={FileJson}
                    />
                </div>
            </section>

            <TechSpecs />
            <RainVuFooterLinks />
        </div>
    );
}
