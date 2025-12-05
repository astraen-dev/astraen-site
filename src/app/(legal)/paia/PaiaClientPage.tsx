'use client';

import {
    GoogleReCaptchaProvider,
    useGoogleReCaptcha,
} from 'react-google-recaptcha-v3';
import React, { useCallback, useState } from 'react';
import { getPaiaDownloadToken } from './actions';
import { FileText, LoaderCircle, ShieldCheck } from 'lucide-react';
import { toast } from 'sonner';
import { AnimatePresence, motion } from 'framer-motion';

function PaiaAccessGate() {
    const { executeRecaptcha } = useGoogleReCaptcha();
    const [status, setStatus] = useState<'idle' | 'loading' | 'success'>(
        'idle'
    );
    const [downloadToken, setDownloadToken] = useState<string | null>(null);

    const handleVerifyAndRequest = useCallback(async () => {
        if (!executeRecaptcha) {
            toast.error('reCAPTCHA not ready. Please wait and try again.');
            return;
        }
        setStatus('loading');
        try {
            const token = await executeRecaptcha('paia_manual_access');
            const result = await getPaiaDownloadToken(token);

            if (result.success && result.token) {
                setDownloadToken(result.token);
                setStatus('success');
                toast.success(
                    'Verification successful. The document is ready to view.'
                );
            } else {
                setStatus('idle');
                toast.error(result.error || 'An unknown error occurred.');
            }
        } catch {
            setStatus('idle');
            toast.error('Failed to contact verification server.');
        }
    }, [executeRecaptcha]);

    return (
        <div className="shadow-primary-a/10 relative w-full rounded-2xl bg-slate-900/40 p-8 text-center shadow-2xl ring-1 ring-white/10 backdrop-blur-lg sm:p-12">
            <div className="from-primary-a to-secondary-b absolute -inset-px rounded-2xl bg-gradient-to-br opacity-20 blur-lg" />
            <div className="relative z-10 flex flex-col items-center">
                <div className="from-primary-a/20 to-secondary-b/20 ring-primary-a/30 mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br ring-1">
                    <FileText className="text-primary-b h-8 w-8" />
                </div>
                <h1 className="text-3xl font-bold tracking-wider text-white">
                    PAIA Manual Access
                </h1>
                <p className="mt-4 max-w-md text-slate-300">
                    To comply with South African law and prevent abuse, we
                    require a quick verification step to access this document.
                </p>
                <div className="mt-8 h-16 w-full max-w-xs">
                    <AnimatePresence mode="wait">
                        {status === 'idle' ? (
                            <motion.button
                                key="verify-button"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                onClick={handleVerifyAndRequest}
                                className="group text-secondary-a hover:shadow-primary-a/20 hover:ring-primary-a/50 flex h-14 w-full transform items-center justify-center gap-3 rounded-lg bg-slate-900/50 px-5 py-3 font-semibold ring-1 ring-white/10 backdrop-blur-sm transition-all duration-300 ease-in-out hover:-translate-y-1 hover:text-white hover:shadow-lg"
                            >
                                <ShieldCheck className="text-secondary-b group-hover:text-primary-b h-6 w-6 transition-colors" />
                                <span>Verify to Access Document</span>
                            </motion.button>
                        ) : status === 'loading' ? (
                            <motion.div
                                key="loading"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="text-secondary-a flex h-14 items-center justify-center gap-3"
                            >
                                <LoaderCircle className="h-6 w-6 animate-spin" />
                                <span>Verifying...</span>
                            </motion.div>
                        ) : (
                            <motion.a
                                key="view-button"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                href={`/api/paia-download?token=${downloadToken!}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group from-success-b to-success-a/80 text-background-start ring-success-a/50 hover:shadow-success-a/30 flex h-14 w-full transform items-center justify-center gap-3 rounded-lg bg-gradient-to-r px-5 py-3 font-semibold ring-1 backdrop-blur-sm transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg"
                            >
                                <FileText className="h-6 w-6" />
                                <span>View PAIA Manual</span>
                            </motion.a>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}

export default function PaiaClientPage({ siteKey }: { siteKey: string }) {
    return (
        <GoogleReCaptchaProvider reCaptchaKey={siteKey}>
            <PaiaAccessGate />
        </GoogleReCaptchaProvider>
    );
}
