import React from 'react';

export default function GridBackground() {
    return (
        <div className="bg-background-start fixed inset-0 z-[-1] h-full w-full">
            <div className="bg-grid-pattern absolute inset-0 h-full w-full" />
            <div className="from-background-start absolute inset-0 bg-gradient-to-t via-transparent to-transparent" />
            <div className="via-background-start/50 to-background-start absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10" />
        </div>
    );
}
