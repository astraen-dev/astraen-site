'use client';

import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { useCallback, useState } from 'react';
import { toast } from 'sonner';
import { AnimatePresence, motion } from 'framer-motion';
import { FileText, Loader2 } from 'lucide-react';
import { getPaiaDownloadToken } from '@/app/(legal)/paia/actions';

type VerificationStatus = 'idle' | 'loading' | 'success';

export function VerificationFlow() {
    const { executeRecaptcha } = useGoogleReCaptcha();
    const [status, setStatus] = useState<VerificationStatus>('idle');
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
        <AnimatePresence mode="wait">
            {status === 'idle' && (
                <VerifyButton key="verify-btn" onClick={handleVerify} />
            )}
            {status === 'loading' && <LoadingState key="loading-state" />}
            {status === 'success' && downloadToken && (
                <DownloadButton key="download-btn" token={downloadToken} />
            )}
        </AnimatePresence>
    );
}

function VerifyButton({ onClick }: { onClick: () => void }) {
    return (
        <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            onClick={onClick}
            className="h-12 w-full rounded-lg bg-white font-medium text-black transition-colors hover:bg-gray-200"
        >
            Verify & Access
        </motion.button>
    );
}

function LoadingState() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-text-secondary flex h-12 w-full items-center justify-center"
        >
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Verifying...
        </motion.div>
    );
}

function DownloadButton({ token }: { token: string }) {
    return (
        <motion.a
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            href={`/api/paia-download?token=${token}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-green-500 font-medium text-white transition-colors hover:bg-green-600"
        >
            <FileText className="h-4 w-4" />
            Download PDF
        </motion.a>
    );
}
