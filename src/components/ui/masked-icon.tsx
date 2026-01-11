import { cn } from '@/lib/utils';

interface MaskedIconProps {
    src: string;
    className?: string;
}

export function MaskedIcon({ src, className }: MaskedIconProps) {
    return (
        <div
            className={cn('bg-current', className)}
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
