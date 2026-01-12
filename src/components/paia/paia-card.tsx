import { Lock } from 'lucide-react';
import { ReactNode } from 'react';

interface PaiaCardProps {
    children: ReactNode;
}

export function PaiaCard({ children }: PaiaCardProps) {
    return (
        <div className="flex min-h-[60vh] items-center justify-center p-6">
            <div className="bg-surface/30 border-border w-full max-w-md rounded-3xl border p-8 backdrop-blur-xl">
                <div className="flex flex-col items-center text-center">
                    <div className="bg-surface-highlight mb-6 flex h-16 w-16 items-center justify-center rounded-2xl text-white">
                        <Lock className="h-8 w-8" />
                    </div>
                    <h1 className="mb-3 text-2xl font-bold text-white">
                        PAIA Manual
                    </h1>
                    <p className="text-text-secondary mb-8 text-sm leading-relaxed">
                        Access to this document is restricted to prevent
                        automated scraping. Please verify you are human to
                        proceed.
                    </p>
                    <div className="w-full">{children}</div>
                </div>
            </div>
        </div>
    );
}
