import {Metadata} from "next";
import {LegalDocument} from "@/components/rainvu/LegalDocument";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Privacy Policy for RainVu | astraen.dev",
    description: "Privacy Policy for the RainVu mobile application.",
};

export default function PrivacyPage() {
    return (
        <LegalDocument title="Privacy Policy for RainVu" lastUpdated="November 2, 2025">
            <p>
                Thank you for using RainVu. As an open-source project, we believe in full transparency regarding
                your privacy. This policy explains how information is collected, used, and handled within our
                application. You are encouraged to inspect our source code to verify these practices for yourself.
            </p>
            <p>
                Our core principle is to protect your privacy; the app is designed to be a private, on-device tool.
            </p>

            <h3 className="h3-style">1. Information We Collect</h3>
            <p>We collect a limited amount of information, which is categorized as follows:</p>

            <h4 className="h4-style">A. Information You Provide Directly</h4>
            <p>
                This is the data you create and manage within the app. It is stored <strong>only on your device</strong>,
                and we
                do not have access to it. This can be verified by reviewing the public source code.
            </p>
            <ul className="ul-style">
                <li><strong>Rainfall Data:</strong> This includes the rainfall amount, date, time, and the specific rain
                    gauge you
                    associate with each entry.
                </li>
                <li><strong>Gauge Data:</strong> The names of the custom rain gauges you create.</li>
                <li><strong>App Preferences:</strong> Your chosen settings, such as measurement units (mm/in), theme (
                    light/dark/system), preferred hemisphere, and other in-app configurations.
                </li>
            </ul>

            <h4 className="h4-style">B. Information Collected Automatically (With Your Consent)</h4>
            <p>
                To help us improve RainVu, we use industry-standard services to collect anonymous data about app
                usage and performance. <strong>This data collection is disabled by default and is only enabled if you
                explicitly opt-in</strong> during onboarding or in the app&apos;s settings.
            </p>
            <ul className="ul-style">
                <li><strong>Usage Analytics (via Google Firebase Analytics):</strong> We collect anonymized data about
                    how you
                    interact with the app, such as which features are used most frequently. This helps us understand
                    what is valuable to our users so we can make improvements. We have configured this service to
                    operate without using your device&apos;s advertising identifier.
                </li>
                <li><strong>Crash and Performance Data (via Google Firebase Crashlytics):</strong> If the app crashes,
                    we collect
                    anonymous reports that include information about the device (e.g., model, OS version) and the
                    state of the app at the time of the crash. This is essential for us to diagnose and fix bugs.
                </li>
            </ul>

            <h3 className="h3-style">2. How We Use Your Information</h3>
            <p>We use the information we collect for the following purposes:</p>
            <ul className="ul-style">
                <li><strong>To Provide Core Functionality:</strong> Your rainfall and gauge data is used to power all
                    the features
                    of the app, such as displaying your logs and generating charts and insights.
                </li>
                <li><strong>To Improve the Application:</strong> Anonymized usage analytics help us prioritize new
                    features and
                    enhance existing ones.
                </li>
                <li><strong>To Maintain and Stabilize the App:</strong> Anonymized crash reports are crucial for
                    identifying and
                    fixing bugs, ensuring the app remains reliable.
                </li>
            </ul>

            <h3 className="h3-style">3. Data Storage, Security, and Sharing</h3>
            <h4 className="h4-style">A. Data Storage</h4>
            <p>
                Your personal rainfall data, gauge information, and preferences are stored in a local database on
                your device. We do not transmit this data to our servers, nor do we have access to it.
            </p>
            <h4 className="h4-style">B. Device Backups</h4>
            <p>
                Your device&apos;s operating system (iOS or Android) may automatically back up the app&apos;s data as
                part of
                its standard backup service (e.g., Apple iCloud Backup or Google Backup). This process is controlled
                by you through your device settings and is governed by the privacy policy of Apple or Google.
            </p>
            <h4 className="h4-style">C. Third-Party Services</h4>
            <p>
                We do not sell, trade, or rent your personal data. We share a limited amount of data with the
                following third-party services only under specific circumstances:
            </p>
            <ul className="ul-style">
                <li><strong>Google (Firebase):</strong> If you opt-in to share usage data, anonymized analytics and
                    crash reports
                    are sent to Google&apos;s Firebase platform. You can find more information
                    in <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer"
                          className="a-style">Google&apos;s Privacy Policy</a>.
                </li>
                <li><strong>Support Communications:</strong> If you contact us via email at <a href="mailto:dev@astraen.dev" className="a-style">dev@astraen.dev</a>, your email
                    address and the contents of your message will be processed by Zoho Mail&apos;s email services to
                    facilitate our communication. To help us resolve your issue, the app may pre-fill an email draft
                    with non-personal diagnostic information, such as the app version and build number.
                </li>
            </ul>
            <h4 className="h4-style">D. Scope of This Policy</h4>
            <p>
                This Privacy Policy applies only to the official version of RainVu distributed through the Apple
                App Store and Google Play Store. It does not apply to any forks, modified versions, or third-party
                builds of the application derived from our public source code.
            </p>

            <h3 className="h3-style">4. Your Rights and Choices</h3>
            <p>You have full control over your data within RainVu.</p>
            <ul className="ul-style">
                <li><strong>Opt-In/Opt-Out of Data Sharing:</strong> You can enable or disable the collection of
                    anonymous
                    analytics and crash data at any time from the app&apos;s Settings screen.
                </li>
                <li><strong>Data Portability:</strong> You can export a complete copy of your rainfall and gauge data at
                    any time
                    using the &quot;Export Data&quot; feature in the app.
                </li>
                <li><strong>Data Deletion:</strong> You can delete individual rainfall entries or gauges directly within
                    the app.
                    You can also delete all app data by using the &quot;Reset App&quot; function in Settings or by
                    uninstalling
                    the application from your device. For detailed instructions, please see our <Link
                        href="/rainvu/data-deletion" className="a-style">Data Deletion Page</Link>.
                </li>
            </ul>

            <h3 className="h3-style">5. Children&apos;s Privacy</h3>
            <p>
                RainVu is not intended for use by individuals under the age of 13 (or the equivalent minimum age
                in your jurisdiction). We do not knowingly collect any personal information from children.
            </p>

            <h3 className="h3-style">6. Your Data Protection Rights</h3>
            <p>
                ASTRAEN (PTY) LTD is a company based in South Africa, and as such, we operate under the Protection
                of Personal Information Act (POPIA). We believe in providing a high standard of privacy to all our
                users, regardless of their location. Therefore, we extend the following data protection rights to
                everyone who uses RainVu:
            </p>
            <ul className="ul-style">
                <li><strong>The Right to Access and Rectify:</strong> Since all your primary data is stored on your
                    device, you
                    have direct access to view and correct it at any time within the app.
                </li>
                <li><strong>The Right to Erasure (Right to be Forgotten):</strong> You can delete your data at any time.
                    Deleting
                    individual entries, using the &quot;Reset App&quot; function, or uninstalling the application will
                    permanently remove your data from your device.
                </li>
                <li><strong>The Right to Data Portability:</strong> You can export a complete copy of your data at any
                    time using
                    the app&apos;s &quot;Export Data&quot; feature.
                </li>
                <li><strong>The Right to Object to Processing:</strong> For the limited anonymous data we collect (with
                    your
                    consent), you can object to this processing at any time by opting out via the app&apos;s Settings
                    screen.
                </li>
            </ul>
            <p>
                For any questions about these rights or our privacy practices, you can contact our designated
                Information Officer.
            </p>
            <h4 className="h4-style">Information Officer:</h4>
            <ul className="ul-style !list-none !pl-0">
                <li>David Young</li>
                <li>ASTRAEN (PTY) LTD</li>
                <li><strong>Email:</strong> <a href="mailto:dev@astraen.dev" className="a-style">dev@astraen.dev</a>
                </li>
            </ul>
            <p>
                If you have a privacy concern that you feel has not been resolved satisfactorily, you have the right
                to contact the relevant supervisory authority. As our company is based in South Africa, our lead
                authority is the Information Regulator.
            </p>
            <h4 className="h4-style">The Information Regulator (South Africa):</h4>
            <ul className="ul-style !list-none !pl-0">
                <li><strong>Website:</strong> <a href="https://inforegulator.org.za/" target="_blank"
                                                 rel="noopener noreferrer"
                                                 className="a-style">https://inforegulator.org.za/</a></li>
                <li><strong>POPI:</strong> <a href="mailto:POPIAComplaints@inforegulator.org.za"
                                              className="a-style">POPIAComplaints@inforegulator.org.za</a></li>
                <li><strong>PAIA:</strong> <a href="mailto:PAIAComplaints@inforegulator.org.za"
                                              className="a-style">PAIAComplaints@inforegulator.org.za</a></li>
                <li><strong>General Enquiries:</strong> <a href="mailto:enquiries@inforegulator.org.za"
                                                           className="a-style">enquiries@inforegulator.org.za</a></li>
            </ul>

            <h3 className="h3-style">7. Changes to This Privacy Policy</h3>
            <p>
                We may update this Privacy Policy from time to time. Any changes will be posted on this page, and we
                will update the &quot;Last Updated&quot; date at the top. You are advised to review this Privacy Policy
                periodically for any changes.
            </p>

            <h3 className="h3-style">8. Contact Us</h3>
            <p>
                If you have any questions about this Privacy Policy, you can contact us at <a
                href="mailto:dev@astraen.dev" className="a-style">dev@astraen.dev</a>.
            </p>
            <p>
                You can also view the source code or raise an issue on our public
                repository: <a href="https://github.com/astraen-dev/RainVu" target="_blank" rel="noopener noreferrer"
                               className="a-style">https://github.com/astraen-dev/RainVu</a>
            </p>
        </LegalDocument>
    );
}