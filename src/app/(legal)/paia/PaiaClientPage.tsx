'use client';

import { RecaptchaWrapper } from '@/components/paia/recaptcha-wrapper';
import { VerificationFlow } from '@/components/paia/verification-flow';
import { PaiaCard } from '@/components/paia/paia-card';

interface PaiaClientPageProps {
    siteKey: string;
    nonce?: string;
}

export default function PaiaClientPage({
    siteKey,
    nonce,
}: PaiaClientPageProps) {
    return (
        <RecaptchaWrapper siteKey={siteKey} nonce={nonce}>
            <PaiaCard>
                <VerificationFlow />
            </PaiaCard>
        </RecaptchaWrapper>
    );
}
