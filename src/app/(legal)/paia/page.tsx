import { Metadata } from 'next';
import { headers } from 'next/headers';
import PaiaClientPage from './PaiaClientPage';
import { ConfigError } from '@/components/paia/config-error';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
    title: 'astraen | PAIA Manual Access',
    description:
        'Access the Promotion of Access to Information Act (PAIA) manual for ASTRAEN (PTY) LTD.',
    robots: {
        index: false,
        follow: false,
    },
};

export default async function PaiaPage() {
    const headerList = await headers();
    const nonce = headerList.get('x-nonce') || '';

    const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

    if (!recaptchaSiteKey) {
        return (
            <div className="flex min-h-[60vh] items-center justify-center p-6">
                <ConfigError />
            </div>
        );
    }

    return <PaiaClientPage siteKey={recaptchaSiteKey} nonce={nonce} />;
}
