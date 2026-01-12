import { ArrowUpRight, Layers, Smartphone, Zap, Shield } from 'lucide-react';
import { GithubIcon } from '@/components/icons/GithubIcon';

export function TechSpecs() {
    return (
        <section className="bg-surface/30 border-y border-white/5 py-24">
            <div className="container mx-auto max-w-5xl px-6">
                <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
                    <div>
                        <h2 className="mb-6 text-3xl font-bold tracking-tight text-white">
                            Engineered, <br />
                            not just built.
                        </h2>
                        <p className="text-text-secondary mb-8 text-lg">
                            RainVu is an open-source project demonstrating a
                            scalable, feature-first architecture.
                        </p>
                        <a
                            href="https://github.com/astraen-dev/RainVu"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center gap-2 border-b border-white/30 pb-1 text-white hover:border-white"
                        >
                            <GithubIcon className="h-4 w-4" />
                            View Source Code
                            <ArrowUpRight className="h-3 w-3 opacity-50 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </a>
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <SpecItem
                            icon={Layers}
                            label="Architecture"
                            value="Riverpod + GoRouter + Drift"
                        />
                        <SpecItem
                            icon={Smartphone}
                            label="Framework"
                            value="Flutter & Dart"
                        />
                        <SpecItem
                            icon={Zap}
                            label="Performance"
                            value="Impeller Rendering Engine"
                        />
                        <SpecItem
                            icon={Shield}
                            label="Safety"
                            value="Type-safe Freezed Models"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

function SpecItem({
    icon: Icon,
    label,
    value,
}: {
    icon: typeof Layers;
    label: string;
    value: string;
}) {
    return (
        <div className="border-l border-white/10 pl-6 transition-colors hover:border-white/30">
            <Icon className="mb-3 h-6 w-6 text-white/60" />
            <h4 className="font-mono text-sm font-bold text-white">{label}</h4>
            <p className="text-text-secondary text-sm">{value}</p>
        </div>
    );
}
