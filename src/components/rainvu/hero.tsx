import { Download } from 'lucide-react';
import { MaskedIcon } from '@/components/ui/masked-icon';

export function RainVuHero() {
    return (
        <section className="container mx-auto mb-24 max-w-5xl px-6">
            <div className="flex flex-col items-center text-center">
                <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-3xl bg-linear-to-tr from-blue-600 to-cyan-500 shadow-[0_0_50px_-12px_rgba(37,99,235,0.5)]">
                    <MaskedIcon
                        src="/rainvu/rainvu-icon-mask.png"
                        className="h-14 w-14 bg-white"
                    />
                </div>
                <h1 className="mb-6 text-5xl font-bold tracking-tighter text-white md:text-8xl">
                    RainVu
                </h1>
                <p className="text-text-secondary mx-auto mb-10 max-w-2xl text-xl leading-relaxed">
                    Meticulous rainfall logging for farmers and weather
                    enthusiasts. Privacy-focused, offline-capable, and
                    engineered for speed.
                </p>

                <div className="flex flex-wrap justify-center gap-4">
                    <a
                        href="https://apps.apple.com/us/app/rainvu/id6754812264"
                        className="flex h-12 items-center gap-2 rounded-full bg-white px-8 font-semibold text-black transition-transform hover:scale-105"
                    >
                        <Download className="h-4 w-4" />
                        App Store
                    </a>
                    <a
                        href="https://play.google.com/store/apps/details?id=com.astraen.rainvu"
                        className="bg-surface/50 border-border hover:bg-surface flex h-12 items-center gap-2 rounded-full border px-8 font-semibold text-white transition-all hover:scale-105 hover:border-white/30"
                    >
                        <Download className="h-4 w-4" />
                        Google Play
                    </a>
                </div>
            </div>
        </section>
    );
}
