import {Metadata} from "next";
import {LegalDocument} from "@/components/ui/LegalDocument";

export const metadata: Metadata = {
    title: "RainVu | Data Deletion Instructions",
    description: "Instructions on how to delete your data from the RainVu mobile application.",
};

export default function DataDeletionPage() {
    return (
        <LegalDocument title="RainVu Data Deletion Instructions" lastUpdated="November 10, 2025">
            <p>
                This page provides instructions on how to delete your data from the RainVu application, as required
                by the Google Play Store.
            </p>
            <p>
                RainVu is designed with privacy as a core principle. The app handles two distinct categories of
                data, and the deletion process differs for each.
            </p>

            <h3 className="h3-style">1. Personal Rainfall Data (Stored On Your Device)</h3>
            <p><strong>Types of Data:</strong></p>
            <ul className="ul-style">
                <li>All rainfall entries you have logged.</li>
                <li>All custom rain gauges you have created.</li>
                <li>All in-app preferences and settings.</li>
            </ul>
            <p>
                This data is stored <strong>exclusively on your device</strong> and is never transmitted to us or any
                third
                party. You have complete control and can delete it permanently at any time using one of the
                following methods.
            </p>

            <h4 className="h4-style">Method A: In-App Reset (Recommended)</h4>
            <p>This is the easiest way to delete all your personal data without removing the app itself.</p>
            <ol className="ol-style">
                <li>Open the RainVu app.</li>
                <li>Navigate to the <strong>Settings</strong> screen.</li>
                <li>Scroll down to the &quot;Danger Zone&quot; section.</li>
                <li>Tap on <strong>Reset App</strong>.</li>
                <li>Confirm your choice in the dialog box.</li>
            </ol>
            <p>
                <strong>Result:</strong> All of your rainfall entries, gauges, and settings will be immediately and
                permanently
                deleted, returning the app to its initial state.
            </p>

            <h4 className="h4-style">Method B: Uninstall the App</h4>
            <p>
                Uninstalling the RainVu application from your Android device will also delete all of its associated
                data.
            </p>
            <ol className="ol-style">
                <li>Find the RainVu app icon on your device&apos;s home screen or app drawer.</li>
                <li>Press and hold the icon.</li>
                <li>Select the <strong>Uninstall</strong> option.</li>
                <li>Confirm the uninstallation.</li>
            </ol>
            <p>
                <strong>Result:</strong> The app and all of its locally stored data will be permanently removed from
                your device.
            </p>

            <h3 className="h3-style">2. Anonymous Diagnostic Data (Optional & Collected by Firebase)</h3>
            <p><strong>Types of Data:</strong></p>
            <ul className="ul-style">
                <li>Anonymous app interaction events (e.g., screen views).</li>
                <li>Anonymous crash logs and performance diagnostics.</li>
                <li>An anonymous installation ID for your app instance.</li>
            </ul>
            <p>
                This data is only collected if you have <strong>explicitly opted-in</strong> within the app&apos;s
                settings or during
                onboarding. This data is fully anonymous and is not linked to you or your personal rainfall data in
                any way.
            </p>
            <p>
                Because this data is anonymous and aggregated, it is not possible to delete specific historical
                diagnostic records associated with your app installation. However, you have full control over its
                collection:
            </p>
            <ol className="ol-style">
                <li>Open the RainVu app and navigate to <strong>Settings</strong>.</li>
                <li>Under the &quot;Privacy & Data&quot; section, find the toggle for <strong>Share Usage Data</strong>.
                </li>
                <li><strong>Turn off</strong> this toggle.</li>
            </ol>
            <p>
                <strong>Result:</strong> The app will immediately stop sending any new anonymous diagnostic and crash
                data to
                Firebase.
            </p>
            <p>
                If you have any questions about this process, please contact us at <a href="mailto:dev@astraen.dev"
                                                                                      className="a-style">dev@astraen.dev</a>.
            </p>
        </LegalDocument>
    );
}