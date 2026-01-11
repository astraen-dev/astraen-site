'use client';

import {
    GoogleReCaptchaProvider,
    useGoogleReCaptcha,
} from 'react-google-recaptcha-v3';
import React, { useCallback, useState } from 'react';
import { getPaiaDownloadToken } from './actions';
import { FileText, Loader2, Lock } from 'lucide-react';
import { toast } from 'sonner';
import { motion, AnimatePresence } from 'framer-motion';

function PaiaAccessGate() {
    const { executeRecaptcha } = useGoogleReCaptcha();
    const [status, setStatus] = useState<'idle' | 'loading' | 'success'>(
        'idle'
    );
    const [downloadToken, setDownloadToken] = useState<string | null>(null);

    const handleVerify = useCallback(async () => {
        if (!executeRecaptcha) {
            toast.error('Security check initializing...');
            return;
        }
        setStatus('loading');
        try {
            const token = await executeRecaptcha('paia_manual_access');
            const result = await getPaiaDownloadToken(token);

            if (result.success && result.token) {
                setDownloadToken(result.token);
                setStatus('success');
                toast.success('Access granted.');
            } else {
                setStatus('idle');
                toast.error(result.error || 'Verification failed.');
            }
        } catch {
            setStatus('idle');
            toast.error('Connection failed.');
        }
    }, [executeRecaptcha]);

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

                    <div className="w-full">
                        <AnimatePresence mode="wait">
                            {status === 'idle' && (
                                <motion.button
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    onClick={handleVerify}
                                    className="h-12 w-full rounded-lg bg-white font-medium text-black transition-colors hover:bg-gray-200"
                                >
                                    Verify & Access
                                </motion.button>
                            )}
                            {status === 'loading' && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="text-text-secondary flex h-12 w-full items-center justify-center"
                                >
                                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                    Verifying...
                                </motion.div>
                            )}
                            {status === 'success' && (
                                <motion.a
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    href={`/api/paia-download?token=${downloadToken}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-green-500 font-medium text-white transition-colors hover:bg-green-600"
                                >
                                    <FileText className="h-4 w-4" />
                                    Download PDF
                                </motion.a>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function PaiaClientPage({
    siteKey,
    nonce,
}: {
    siteKey: string;
    nonce?: string;
}) {
    return (
        <GoogleReCaptchaProvider
            reCaptchaKey={siteKey}
            scriptProps={{
                nonce,
                defer: true,
                appendTo: 'head',
            }}
        >
            <PaiaAccessGate />
        </GoogleReCaptchaProvider>
    );
}
