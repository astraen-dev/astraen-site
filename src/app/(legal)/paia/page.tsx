import {Metadata} from "next";
import PaiaClientPage from "./PaiaClientPage";

export const metadata: Metadata = {
    title: "astraen | PAIA Manual Access",
    description: "Access the Promotion of Access to Information Act (PAIA) manual for ASTRAEN (PTY) LTD.",
    robots: {
        index: false,
        follow: false,
    },
};

export default function PaiaPage() {
    const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

    if (!recaptchaSiteKey) {
        return (
            <div
                className="relative w-full rounded-2xl bg-slate-900/40 p-8 text-center shadow-2xl shadow-danger-a/10 ring-1 ring-white/10 backdrop-blur-lg sm:p-12">
                <div
                    className="absolute -inset-px rounded-2xl bg-gradient-to-br from-danger-a to-danger-b opacity-20 blur-lg"/>
                <div className="relative z-10">
                    <h1 className="text-2xl font-bold text-danger-a">Configuration Error</h1>
                    <p className="mt-4 text-slate-300">
                        The reCAPTCHA service is not configured correctly on the server.
                    </p>
                </div>
            </div>
        );
    }

    return <PaiaClientPage siteKey={recaptchaSiteKey}/>;
}