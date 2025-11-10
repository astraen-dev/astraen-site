import {Metadata} from "next";
import {LegalDocument} from "@/components/ui/LegalDocument";

export const metadata: Metadata = {
    title: "Website Terms of Service | astraen.dev",
    description: "Terms of Service for the astraen.dev website.",
};

export default function TermsPage() {
    const termsRevisionUrl = "https://github.com/astraen-dev/astraen-site/commits/main/src/app/(legal)/terms/page.tsx";

    return (
        <LegalDocument
            title="Website Terms of Service"
            lastUpdated="November 2, 2025"
            revisionHistoryUrl={termsRevisionUrl}
        >
            <p>
                Welcome to astraen.dev. This website is owned and operated by ASTRAEN (PTY) LTD (Registration No.
                2025/845626/07). By accessing and using this website (&quot;the Site&quot;), you agree to be bound by
                the
                following Terms of Service (&quot;Terms&quot;). If you do not agree to these Terms, please do not use
                the Site.
            </p>

            <h3 className="h3-style">1. Use of the Site</h3>
            <p>
                This Site provides information about our company, our services, and our projects. It is intended for
                informational purposes only. You agree to use the Site in a lawful manner and not for any purpose that
                is prohibited by these Terms.
            </p>

            <h3 className="h3-style">2. Intellectual Property</h3>
            <p>
                All content on this Site, including but not limited to text, graphics, logos, images, and software, is
                the property of ASTRAEN (PTY) LTD or its content suppliers and is protected by South African and
                international copyright laws. The ASTRAEN name and logo are trademarks of ASTRAEN (PTY) LTD. You may not
                use, reproduce, or distribute any content from this Site without our prior written permission.
            </p>

            <h3 className="h3-style">3. Disclaimer of Warranties</h3>
            <p>
                The Site and its content are provided <strong>&quot;AS IS&quot;</strong> and <strong>&quot;AS
                AVAILABLE&quot;</strong> without any warranties of any kind, express or implied. We do not warrant that
                the
                Site will be error-free, uninterrupted, or free of viruses or other harmful components. While we strive
                to provide accurate information, we make no representation or warranty as to the completeness, accuracy,
                or reliability of any information on the Site.
            </p>

            <h3 className="h3-style">4. Limitation of Liability</h3>
            <p>
                To the fullest extent permitted by applicable law, ASTRAEN (PTY) LTD shall not be liable for any direct,
                indirect, incidental, special, or consequential damages resulting from the use or inability to use the
                Site or from any information obtained from the Site.
            </p>

            <h3 className="h3-style">5. Links to Third-Party Websites</h3>
            <p>
                The Site may contain links to third-party websites (e.g., GitHub, LinkedIn). These links are provided
                for your convenience only. We have no control over the content of these external sites and are not
                responsible for their content or privacy practices.
            </p>

            <h3 className="h3-style">6. Governing Law</h3>
            <p>
                These Terms shall be governed by and construed in accordance with the laws of the Republic of South
                Africa, without regard to its conflict of law principles.
            </p>

            <h3 className="h3-style">7. Changes to These Terms</h3>
            <p>
                We reserve the right to modify these Terms at any time. Any changes will be effective immediately upon
                posting to the Site. Your continued use of the Site after such changes constitutes your acceptance of
                the new Terms.
            </p>

            <h3 className="h3-style">8. Contact Us</h3>
            <p>
                If you have any questions about these Terms, please contact us at <a href="mailto:dev@astraen.dev"
                                                                                     className="a-style">dev@astraen.dev</a>.
            </p>
        </LegalDocument>
    );
}