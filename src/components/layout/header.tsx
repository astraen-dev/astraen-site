'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, useScroll, useTransform } from 'framer-motion';

// Route display name mappings
const routeDisplayNames: Record<string, string> = {
    '/': 'ASTRAEN',
    '/rainvu': 'ASTRAEN/RainVu',
    '/rainvu/privacy': 'ASTRAEN/RainVu/Privacy',
    '/rainvu/terms': 'ASTRAEN/RainVu/Terms',
    '/rainvu/data-deletion': 'ASTRAEN/RainVu/Data Deletion',
    '/paia': 'ASTRAEN/PAIA',
    '/privacy': 'ASTRAEN/Privacy',
    '/terms': 'ASTRAEN/Terms',
    '/stock-manager': 'ASTRAEN/Stock Manager',
};

function getRouteDisplayName(pathname: string): string {
    // Check for exact match first
    if (routeDisplayNames[pathname]) {
        return routeDisplayNames[pathname];
    }

    // Fallback: convert pathname to display format
    const segments = pathname.split('/').filter(Boolean);
    if (segments.length === 0) return 'ASTRAEN';

    const formatted = segments.map((segment) =>
        segment
            .split('-')
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ')
    );

    return ['ASTRAEN', ...formatted].join('/');
}

export function Header() {
    const pathname = usePathname();
    const { scrollY } = useScroll();
    const displayName = getRouteDisplayName(pathname);

    // Scroll range for the transition (0px to 100px)
    const range = [0, 100];

    // Layout Morphing - max width bar to pill around text
    const maxWidth = useTransform(scrollY, range, ['100%', 'auto']);
    const marginTop = useTransform(scrollY, range, [0, 16]);
    const paddingX = useTransform(scrollY, range, [24, 16]);
    const paddingY = useTransform(scrollY, range, [16, 10]);

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

    return (
        <header className="pointer-events-none fixed top-0 right-0 left-0 z-50 flex justify-center">
            <motion.div
                style={{
                    width: maxWidth,
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
                <Link href="/" className="group relative z-50">
                    <span className="font-mono text-sm font-bold tracking-widest whitespace-nowrap text-white transition-opacity group-hover:opacity-80">
                        {displayName}
                    </span>
                </Link>
            </motion.div>
        </header>
    );
}
