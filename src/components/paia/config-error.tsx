import { AlertCircle } from 'lucide-react';

export function ConfigError() {
    return (
        <div className="shadow-danger-a/10 relative w-full rounded-2xl bg-slate-900/40 p-8 text-center shadow-2xl ring-1 ring-white/10 backdrop-blur-lg sm:p-12">
            <div className="from-danger-a to-danger-b absolute -inset-px rounded-2xl bg-linear-to-br opacity-20 blur-lg" />
            <div className="relative z-10 flex flex-col items-center">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-500/10">
                    <AlertCircle className="h-6 w-6 text-red-500" />
                </div>
                <h1 className="text-danger-a text-2xl font-bold text-white">
                    Configuration Error
                </h1>
                <p className="mt-4 text-slate-300">
                    The reCAPTCHA service is not configured correctly on the
                    server.
                </p>
            </div>
        </div>
    );
}
