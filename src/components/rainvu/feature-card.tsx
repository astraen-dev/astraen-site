import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
    title: string;
    description: string;
    icon: LucideIcon;
    className?: string;
    iconClassName?: string;
}

export function FeatureCard({
    title,
    description,
    icon: Icon,
    className,
    iconClassName,
}: FeatureCardProps) {
    return (
        <div
            className={cn(
                'bg-surface/20 border-border group relative overflow-hidden rounded-3xl border p-8 backdrop-blur-sm transition-colors hover:border-white/20',
                className
            )}
        >
            <Icon
                className={cn(
                    'mb-4 h-8 w-8 text-white/50 transition-colors group-hover:text-white',
                    iconClassName
                )}
            />
            <h3 className="mb-2 text-lg font-bold text-white">{title}</h3>
            <p className="text-text-secondary text-sm">{description}</p>
        </div>
    );
}

interface SmallFeatureCardProps {
    title: string;
    description: string;
    icon: LucideIcon;
}

export function SmallFeatureCard({
    title,
    description,
    icon: Icon,
}: SmallFeatureCardProps) {
    return (
        <div className="bg-surface/20 border-border group rounded-3xl border p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/30 hover:shadow-lg hover:shadow-blue-900/10">
            <Icon className="mb-4 h-6 w-6 text-blue-400 transition-transform duration-300 group-hover:scale-110" />
            <h3 className="mb-2 font-bold text-white">{title}</h3>
            <p className="text-text-secondary text-sm">{description}</p>
        </div>
    );
}
