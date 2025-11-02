import {Metadata} from "next";
import {LegalDocument} from "@/components/ui/LegalDocument";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Terms of Service for RainVu | astraen.dev",
    description: "Terms of Service for the RainVu mobile application.",
};

export default function TermsPage() {
    return (
        <LegalDocument title="Terms of Service for RainVu" lastUpdated="November 2, 2025">
            <p>
                By downloading, installing, or using the RainVu application (&quot;the App&quot;), you agree to be bound
                by
                these Terms of Service (&quot;Terms&quot;). If you do not agree to these Terms, do not use the App.
            </p>

            <h3 className="h3-style">1. The App and Its Source Code</h3>
            <p>
                RainVu is an open-source project. The source code for the App is made available under the <a
                href="https://github.com/astraen-dev/RainVu/blob/main/LICENSE"
                target="_blank"
                rel="noopener noreferrer"
                className="a-style"
            >MIT License</a>, which grants you broad permissions to use, copy, modify, and distribute the source code.
            </p>
            <p>
                These Terms, however, govern your use of the official, compiled version of the App as distributed
                through the Apple App Store and Google Play Store.
            </p>

            <h3 className="h3-style">2. Your Data</h3>
            <p>You are in complete control of your data.</p>
            <ul className="ul-style">
                <li><strong>Ownership:</strong> You retain full ownership of all data you enter into the App, including
                    rainfall
                    entries and custom gauge names (&quot;User Content&quot;).
                </li>
                <li><strong>Local Storage:</strong> All User Content is stored exclusively on your device. We, the
                    developers, do
                    not have access to, collect, or store your User Content on any servers.
                </li>
                <li><strong>Responsibility for Backups:</strong> Because your data is stored locally, you are solely
                    responsible
                    for creating and maintaining backups. We are not liable for any loss of data. The App provides an
                    export feature to help you create your own backups.
                </li>
            </ul>

            <h3 className="h3-style">3. Disclaimer of Warranty</h3>
            <p>
                The App is provided <strong>&quot;AS IS&quot;</strong> and <strong>&quot;AS AVAILABLE&quot;</strong>,
                without warranty of any kind, express or
                implied. This includes, but is not limited to, the implied warranties of merchantability, fitness
                for a particular purpose, and non-infringement.
            </p>
            <p>
                The data, charts, and analytical insights provided by the App are for informational purposes only.
                They are generated based on the data you provide and may contain inaccuracies. You should not
                rely on this information for making financial, agricultural, business, or any other critical
                decisions. We do not warrant that the App will meet your requirements or that its operation will be
                uninterrupted or error-free.
            </p>

            <h3 className="h3-style">4. Limitation of Liability</h3>
            <p>
                To the fullest extent permitted by applicable law, in no event shall the developer of RainVu be
                liable for any claim, damages, or other liability, whether in an action of contract, tort, or
                otherwise, arising from, out of, or in connection with the App or the use or other dealings in the
                App. This includes, but is not limited to, damages for loss of profits, loss of data, or any other
                commercial damages or losses.
            </p>

            <h3 className="h3-style">5. Third-Party and Open Source Software</h3>
            <p>The App utilizes third-party services and open-source software.</p>
            <ul className="ul-style">
                <li><strong>Third-Party Services:</strong> The App may use services like Google Firebase for optional,
                    opt-in
                    analytics and crash reporting. Your use of these features is subject to the terms and privacy
                    policies of those third-party providers. Please see our <Link href="/rainvu/privacy"
                                                                                  className="a-style">Privacy
                        Policy</Link> for more details.
                </li>
                <li><strong>Open Source Licenses:</strong> The App is built using various open-source components. A list
                    of these
                    components and their respective licenses is available within the &quot;Open Source
                    Licenses&quot; section of
                    the App&apos;s settings.
                </li>
            </ul>

            <h3 className="h3-style">6. Prohibited Conduct</h3>
            <p>
                You agree not to use the App for any purpose that is illegal or prohibited by these Terms. While the <a
                    href="https://github.com/astraen-dev/RainVu/blob/main/LICENSE"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="a-style"
                >MIT License</a> grants you the right to modify the source code, you may not decompile or
                reverse-engineer the official, compiled version of the App obtained from an official app store.
            </p>

            <h3 className="h3-style">7. Termination</h3>
            <p>
                You may terminate this agreement at any time by uninstalling the App from your device.
            </p>
            <p>
                Your rights under these Terms will terminate automatically without notice if you fail to comply with
                any of its provisions.
            </p>

            <h3 className="h3-style">8. Changes to These Terms</h3>
            <p>
                We may update these Terms from time to time. Changes will be reflected in the commit history of our
                public code repository. Your continued use of the App after any such changes constitutes your
                acceptance of the new Terms.
            </p>

            <h3 className="h3-style">9. Contact Us</h3>
            <p>
                If you have any questions about these Terms, you can contact us at <a href="mailto:dev@astraen.dev"
                                                                                      className="a-style">dev@astraen.dev</a>.
            </p>
        </LegalDocument>
    );
}