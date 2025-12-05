'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import React, { useMemo } from 'react';

const capitalize = (s: string) => {
    if (!s) return '';
    return s.charAt(0).toUpperCase() + s.slice(1);
};

export function Breadcrumbs() {
    const pathname = usePathname();

    const crumbs = useMemo(() => {
        // These are the main nav pages where we show the site name instead of breadcrumbs.
        if (pathname === '/' || pathname === '/rainvu') {
            return null;
        }

        const segments = pathname.split('/').filter(Boolean);
        const breadcrumbs = [];

        // Determine the root of the breadcrumb trail.
        let parentName = 'Home';
        let parentHref = '/';
        if (segments[0] === 'rainvu') {
            parentName = 'RainVu';
            parentHref = '/rainvu';
        }
        breadcrumbs.push({ name: parentName, href: parentHref });

        // Determine the subsequent path segments.
        const pathSegments =
            segments[0] === 'rainvu' ? segments.slice(1) : segments;

        // Build the full breadcrumb trail.
        let currentPath = '';
        pathSegments.forEach((segment) => {
            currentPath += `/${segment}`;
            const finalHref =
                segments[0] === 'rainvu'
                    ? `/rainvu${currentPath}`
                    : currentPath;
            breadcrumbs.push({
                name: segment.split('-').map(capitalize).join(' '),
                href: finalHref,
            });
        });

        return breadcrumbs;
    }, [pathname]);

    // If crumbs is null, we're on a main page, so show the site name.
    if (!crumbs) {
        return (
            <Link
                href="/"
                className="text-xl font-bold tracking-wider text-white"
            >
                astraen
            </Link>
        );
    }

    // Otherwise, render the breadcrumb trail.
    return (
        <div className="flex items-center gap-1.5 text-xl font-bold tracking-wider text-white">
            {crumbs.map((crumb, index) => (
                <React.Fragment key={crumb.href}>
                    <Link
                        href={crumb.href}
                        className="hover:text-primary-b transition-colors"
                    >
                        {crumb.name}
                    </Link>
                    {index < crumbs.length - 1 && (
                        <span className="text-primary-a/50">&nbsp;/&nbsp;</span>
                    )}
                </React.Fragment>
            ))}
        </div>
    );
}
