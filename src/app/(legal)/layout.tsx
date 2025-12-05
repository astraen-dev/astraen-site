import React from 'react';

export default function LegalLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="relative z-10 mx-auto max-w-5xl px-4">
            <main>{children}</main>
        </div>
    );
}
