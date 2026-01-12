'use client';

import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import { ReactNode } from 'react';

interface RecaptchaWrapperProps {
    siteKey: string;
    nonce?: string;
    children: ReactNode;
}

export function RecaptchaWrapper({
    siteKey,
    nonce,
    children,
}: RecaptchaWrapperProps) {
    return (
        <GoogleReCaptchaProvider
            reCaptchaKey={siteKey}
            scriptProps={{
                nonce,
                defer: true,
                appendTo: 'head',
            }}
        >
            {children}
        </GoogleReCaptchaProvider>
    );
}
