"use client";

import {GoogleReCaptchaProvider, useGoogleReCaptcha} from "react-google-recaptcha-v3";
import React, {useCallback, useState} from "react";
import {getPaiaManualUrl} from "./actions";
import {Download, FileText, LoaderCircle, ShieldCheck} from "lucide-react";
import {toast} from "sonner";
import {AnimatePresence, motion} from "framer-motion";

function PaiaAccessGate() {
    const {executeRecaptcha} = useGoogleReCaptcha();
    const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
    const [downloadUrl, setDownloadUrl] = useState<string | null>(null);

    const handleVerifyAndDownload = useCallback(async () => {
        if (!executeRecaptcha) {
            toast.error("reCAPTCHA not ready. Please wait and try again.");
            return;
        }
        setStatus("loading");
        try {
            const token = await executeRecaptcha("paia_manual_access");
            const result = await getPaiaManualUrl(token);

            if (result.success && result.url) {
                setDownloadUrl(result.url);
                setStatus("success");
                toast.success("Verification successful. Your download is ready.");
            } else {
                setStatus("idle");
                toast.error(result.error || "An unknown error occurred.");
            }
        } catch (error) {
            setStatus("idle");
            toast.error("Failed to contact verification server.");
        }
    }, [executeRecaptcha]);

    return (
        <div
            className="relative w-full rounded-2xl bg-slate-900/40 p-8 text-center shadow-2xl shadow-primary-a/10 ring-1 ring-white/10 backdrop-blur-lg sm:p-12">
            <div
                className="absolute -inset-px rounded-2xl bg-gradient-to-br from-primary-a to-secondary-b opacity-20 blur-lg"/>
            <div className="relative z-10 flex flex-col items-center">
                <div
                    className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary-a/20 to-secondary-b/20 ring-1 ring-primary-a/30">
                    <FileText className="h-8 w-8 text-primary-b"/>
                </div>
                <h1 className="text-3xl font-bold tracking-wider text-white">PAIA Manual Access</h1>
                <p className="mt-4 max-w-md text-slate-300">
                    To comply with South African law and prevent abuse, we require a quick verification step to access
                    this document.
                </p>
                <div className="mt-8 h-16 w-full max-w-xs">
                    <AnimatePresence mode="wait">
                        {status === "idle" ? (
                            <motion.button
                                key="verify-button"
                                initial={{opacity: 0, y: 10}} animate={{opacity: 1, y: 0}} exit={{opacity: 0, y: -10}}
                                onClick={handleVerifyAndDownload}
                                className="group flex h-14 w-full transform items-center justify-center gap-3 rounded-lg bg-slate-900/50 px-5 py-3 font-semibold text-secondary-a ring-1 ring-white/10 backdrop-blur-sm transition-all duration-300 ease-in-out hover:-translate-y-1 hover:text-white hover:shadow-lg hover:shadow-primary-a/20 hover:ring-primary-a/50"
                            >
                                <ShieldCheck
                                    className="h-6 w-6 text-secondary-b transition-colors group-hover:text-primary-b"/>
                                <span>Verify to Access Document</span>
                            </motion.button>
                        ) : status === "loading" ? (
                            <motion.div
                                key="loading"
                                initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}
                                className="flex h-14 items-center justify-center gap-3 text-secondary-a"
                            >
                                <LoaderCircle className="h-6 w-6 animate-spin"/>
                                <span>Verifying...</span>
                            </motion.div>
                        ) : (
                            <motion.a
                                key="download-button"
                                initial={{opacity: 0, y: 10}} animate={{opacity: 1, y: 0}} exit={{opacity: 0, y: -10}}
                                href={downloadUrl!}
                                download="Astraen-PAIA-Manual.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex h-14 w-full transform items-center justify-center gap-3 rounded-lg bg-gradient-to-r from-success-b to-success-a/80 px-5 py-3 font-semibold text-background-start ring-1 ring-success-a/50 backdrop-blur-sm transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg hover:shadow-success-a/30"
                            >
                                <Download className="h-6 w-6"/>
                                <span>Download PAIA Manual</span>
                            </motion.a>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}

export default function PaiaClientPage({siteKey}: { siteKey: string }) {
    return (
        <GoogleReCaptchaProvider reCaptchaKey={siteKey}>
            <PaiaAccessGate/>
        </GoogleReCaptchaProvider>
    );
}