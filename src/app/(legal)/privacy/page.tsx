import { Metadata } from 'next';
import { LegalDocument } from '@/components/ui/LegalDocument';

export const metadata: Metadata = {
    title: 'astraen | Privacy Policy',
    description: 'Privacy Policy for the astraen website.',
};

export default function PrivacyPage() {
    const policyRevisionUrl =
        'https://github.com/astraen-dev/astraen-site/commits/main/src/app/(legal)/privacy/page.tsx';

    return (
        <LegalDocument
            title="Website Privacy Policy"
            lastUpdated="November 11, 2025"
            revisionHistoryUrl={policyRevisionUrl}
        >
            <p>
                ASTRAEN (PTY) LTD (&quot;we,&quot; &quot;us,&quot; or
                &quot;our&quot;) operates the astraen website (&quot;the
                Site&quot;). This Privacy Policy outlines how we collect, use,
                and protect your information in compliance with South
                Africa&apos;s Protection of Personal Information Act (POPIA).
            </p>

            <h3 className="h3-style">1. Our Commitment to Your Privacy</h3>
            <p>
                This website is designed to be privacy-respecting. We use Vercel
                Analytics, a first-party analytics tool provided by our hosting
                platform. This service does not use cookies and does not collect
                personally identifiable information. We do not use any
                third-party marketing trackers or invasive analytics scripts
                like Google Analytics.
            </p>

            <h3 className="h3-style">2. Information We Collect</h3>
            <p>
                The only data collected is the standard, anonymous information
                automatically processed by our hosting provider, Vercel, for the
                purposes of analytics, performance monitoring, and security.
                This may include:
            </p>
            <ul className="ul-style">
                <li>Your device&apos;s IP address (in an anonymized form).</li>
                <li>Browser type, version, and operating system.</li>
                <li>
                    The pages you visit on our Site, timestamps, and referring
                    pages.
                </li>
                <li>
                    General location (city, country) derived from your IP
                    address.
                </li>
            </ul>
            <p>
                This data is aggregated and cannot be used to personally
                identify you. We do not collect any personal information such as
                your name or email address through this Site.
            </p>

            <h3 className="h3-style">3. How We Use Your Information</h3>
            <p>
                The anonymous, aggregated data provided by Vercel is used solely
                for the following legitimate purposes:
            </p>
            <ul className="ul-style">
                <li>
                    To operate, maintain, and improve the performance of our
                    Site.
                </li>
                <li>
                    To monitor for security threats and ensure the stability of
                    our services.
                </li>
                <li>
                    To understand general traffic patterns and content
                    popularity.
                </li>
            </ul>

            <h3 className="h3-style">4. Third-Party Data Processing</h3>
            <p>
                Our Site is hosted on Vercel, which acts as our data processor
                for the analytics data described above. We do not sell or share
                this information with any other third parties. We encourage you
                to review the
                <a
                    href="https://vercel.com/legal/privacy-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="a-style"
                >
                    {' '}
                    Vercel Privacy Policy{' '}
                </a>
                to understand their practices in full.
            </p>

            <h3 className="h3-style">
                5. Your Data Protection Rights under POPIA
            </h3>
            <p>
                As our company is based in South Africa, you have rights under
                POPIA. We are committed to upholding these rights for all
                visitors to our Site:
            </p>
            <ul className="ul-style">
                <li>
                    <strong>The Right to be Notified:</strong> You have the
                    right to be notified that your information is being
                    collected.
                </li>
                <li>
                    <strong>The Right to Access:</strong> You have the right to
                    request access to the personal information we hold about
                    you.
                </li>
                <li>
                    <strong>The Right to Erasure:</strong> You have the right to
                    request that we delete your personal information, under
                    certain conditions.
                </li>
                <li>
                    <strong>The Right to Object to Processing:</strong> You have
                    the right to object to our processing of your personal
                    information, under certain conditions.
                </li>
            </ul>
            <p>
                <strong>Important Limitation:</strong> Because the analytics
                data collected by our hosting provider is anonymous and
                aggregated, we cannot link this data to any specific individual.
                Therefore, it is not technically possible to fulfill individual
                requests for access, correction, or deletion of this anonymous
                data. These rights would apply if you were to provide us with
                personal information through other means, such as direct email
                correspondence.
            </p>

            <h3 className="h3-style">6. Information Officer Contact Details</h3>
            <p>
                For any questions regarding this policy or our privacy
                practices, please contact our Information Officer.
            </p>
            <ul className="ul-style list-none! pl-0!">
                <li>
                    <strong>Name:</strong> David Samuel Young
                </li>
                <li>
                    <strong>Company:</strong> ASTRAEN (PTY) LTD
                </li>
                <li>
                    <strong>Email:</strong>{' '}
                    <a href="mailto:dev@astraen.dev" className="a-style">
                        dev@astraen.dev
                    </a>
                </li>
            </ul>
            <p>
                If you have a concern that has not been resolved to your
                satisfaction, you have the right to lodge a complaint with the
                Information Regulator of South Africa.
            </p>
            <h4 className="h4-style">
                The Information Regulator (South Africa):
            </h4>
            <ul className="ul-style list-none! pl-0!">
                <li>
                    <strong>Website:</strong>{' '}
                    <a
                        href="https://inforegulator.org.za/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="a-style"
                    >
                        https://inforegulator.org.za/
                    </a>
                </li>
                <li>
                    <strong>Email for Complaints:</strong>{' '}
                    <a
                        href="mailto:POPIAComplaints@inforegulator.org.za"
                        className="a-style"
                    >
                        POPIAComplaints@inforegulator.org.za
                    </a>
                </li>
            </ul>

            <h3 className="h3-style">7. Changes to This Privacy Policy</h3>
            <p>
                We may update this Privacy Policy from time to time. We will
                notify you of any changes by posting the new policy on this page
                and updating the &quot;Last Updated&quot; date.
            </p>
        </LegalDocument>
    );
}
