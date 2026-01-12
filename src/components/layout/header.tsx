'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, useScroll, useTransform } from 'framer-motion';
import React from 'react';

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

    const range = [0, 100];

    const marginTop = useTransform(scrollY, range, [0, 16]);
    const paddingY = useTransform(scrollY, range, [16, 10]);
    const paddingX = useTransform(scrollY, range, [32, 24]);

    const minWidth = useTransform(scrollY, range, ['100%', '0%']);
    const borderRadius = useTransform(scrollY, range, [0, 100]);

    const backgroundColor = useTransform(scrollY, range, [
        'rgba(5, 5, 5, 0.8)',
        'rgba(10, 10, 10, 0.9)',
    ]);

    const borderColor = useTransform(scrollY, range, [
        'rgba(255, 255, 255, 0)',
        'rgba(255, 255, 255, 0.1)',
    ]);

    const backdropBlur = useTransform(scrollY, range, [
        'blur(0px)',
        'blur(12px)',
    ]);

    const shadow = useTransform(scrollY, range, [
        '0 0 0 0 rgba(0,0,0,0)',
        '0 8px 30px -8px rgba(0,0,0,0.5)',
    ]);

    const handleClick = (
        e: React.MouseEvent<HTMLAnchorElement>,
        href: string
    ) => {
        if (href === pathname) {
            e.preventDefault();
            window.scrollTo(0, 0);
        }
    };

    return (
        <header className="pointer-events-none fixed top-0 right-0 left-0 z-50 flex justify-center">
            <motion.div
                style={{
                    marginTop,
                    paddingTop: paddingY,
                    paddingBottom: paddingY,
                    paddingLeft: paddingX,
                    paddingRight: paddingX,
                    minWidth,
                    borderRadius,
                    backgroundColor,
                    borderColor,
                    backdropFilter: backdropBlur,
                    boxShadow: shadow,
                }}
                className="pointer-events-auto flex items-center justify-center border"
            >
                <nav className="relative z-50 flex items-center whitespace-nowrap">
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
                                className="font-mono text-sm font-bold tracking-widest text-white transition-opacity hover:opacity-80"
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
