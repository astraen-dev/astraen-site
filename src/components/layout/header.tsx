'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    motion,
    useScroll,
    useTransform,
    useMotionValue,
    useMotionValueEvent,
} from 'framer-motion';

// Segment display name mappings (for individual path segments)
const segmentDisplayNames: Record<string, string> = {
    rainvu: 'RainVu',
    paia: 'PAIA',
    privacy: 'Privacy',
    terms: 'Terms',
    'data-deletion': 'Data Deletion',
    'stock-manager': 'Stock Manager',
};

function formatSegment(segment: string): string {
    if (segmentDisplayNames[segment]) {
        return segmentDisplayNames[segment];
    }
    // Fallback: convert segment to title case
    return segment
        .split('-')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

interface BreadcrumbPart {
    label: string;
    href: string;
}

function getBreadcrumbParts(pathname: string): BreadcrumbPart[] {
    const parts: BreadcrumbPart[] = [{ label: 'ASTRAEN', href: '/' }];

    const segments = pathname.split('/').filter(Boolean);

    segments.forEach((segment, index) => {
        const href = '/' + segments.slice(0, index + 1).join('/');
        parts.push({
            label: formatSegment(segment),
            href,
        });
    });

    return parts;
}

export function Header() {
    const pathname = usePathname();
    const { scrollY } = useScroll();
    const breadcrumbParts = getBreadcrumbParts(pathname);

    // Motion value for width that switches between 100% and auto
    const width = useMotionValue<string>('100%');

    // Scroll range for the transition (0px to 100px)
    const range = [0, 100];

    // Layout Morphing - max width bar to pill around text
    const marginTop = useTransform(scrollY, range, [0, 16]);
    const paddingX = useTransform(scrollY, range, [24, 16]);
    const paddingY = useTransform(scrollY, range, [16, 10]);

    // Update width based on scroll position
    useMotionValueEvent(scrollY, 'change', (latest) => {
        if (latest <= 50) {
            width.set('100%');
        } else {
            width.set('auto');
        }
    });

    // Radii: Start as bottom-rounded bar (0,0,24,24), morph to full pill (9999,9999,9999,9999)
    const topRadius = useTransform(scrollY, range, [0, 9999]);
    const bottomRadius = useTransform(scrollY, range, [24, 9999]);

    // Visual Styles
    const backgroundColor = useTransform(scrollY, range, [
        'rgba(10, 10, 10, 0.8)',
        'rgba(10, 10, 10, 0.9)',
    ]);
    const borderColor = useTransform(scrollY, range, [
        'rgba(255, 255, 255, 0.05)',
        'rgba(255, 255, 255, 0.1)',
    ]);
    const backdropBlur = useTransform(scrollY, range, [
        'blur(12px)',
        'blur(16px)',
    ]);

    const handleClick = (
        e: React.MouseEvent<HTMLAnchorElement>,
        href: string
    ) => {
        // If clicking on current location, scroll to top
        if (href === pathname) {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        // Otherwise, the Link component will handle navigation
    };

    return (
        <header className="pointer-events-none fixed top-0 right-0 left-0 z-50 flex justify-center">
            <motion.div
                initial={false}
                style={{
                    width,
                    marginTop,
                    borderTopLeftRadius: topRadius,
                    borderTopRightRadius: topRadius,
                    borderBottomLeftRadius: bottomRadius,
                    borderBottomRightRadius: bottomRadius,
                    backgroundColor,
                    borderColor,
                    backdropFilter: backdropBlur,
                    paddingLeft: paddingX,
                    paddingRight: paddingX,
                    paddingTop: paddingY,
                    paddingBottom: paddingY,
                }}
                className="pointer-events-auto flex items-center justify-center border shadow-lg shadow-black/20"
            >
                <nav className="relative z-50 flex items-center">
                    {breadcrumbParts.map((part, index) => (
                        <span key={part.href} className="flex items-center">
                            {index > 0 && (
                                <span className="mx-0.5 text-sm text-white/40">
                                    /
                                </span>
                            )}
                            <Link
                                href={part.href}
                                onClick={(e) => handleClick(e, part.href)}
                                className="font-mono text-sm font-bold tracking-widest whitespace-nowrap text-white transition-opacity hover:opacity-80"
                            >
                                {part.label}
                            </Link>
                        </span>
                    ))}
                </nav>
            </motion.div>
        </header>
    );
}
