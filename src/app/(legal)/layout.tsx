import React from 'react';

export default function LegalLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <div className="bg-background min-h-screen">{children}</div>;
}
