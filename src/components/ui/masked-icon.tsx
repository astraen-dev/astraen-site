import { cn } from '@/lib/utils';

interface MaskedIconProps {
    src: string;
    className?: string;
}

export function MaskedIcon({ src, className }: MaskedIconProps) {
    return (
        <div
            className={cn(
                'from-primary-a to-primary-b bg-gradient-to-br',
                className
            )}
            style={{
                maskImage: `url(${src})`,
                maskSize: 'contain',
                maskPosition: 'center',
                maskRepeat: 'no-repeat',
                WebkitMaskImage: `url(${src})`,
                WebkitMaskSize: 'contain',
                WebkitMaskPosition: 'center',
                WebkitMaskRepeat: 'no-repeat',
            }}
        />
    );
}
