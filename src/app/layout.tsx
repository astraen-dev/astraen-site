import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import {Toaster} from "sonner";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "astraen.dev | Coming Soon",
    description: "astraen.dev: where ideas execute.",
    icons: [
        {
            rel: "icon",
            url: "/favicon.svg",
            type: "image/svg+xml",
        },
    ],
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        {children}
        <Toaster
            theme="dark"
            position="bottom-right"
            toastOptions={{
                style: {
                    background: "hsl(222 47.4% 11.2% / 0.8)",
                    borderColor: "hsl(246 70% 70% / 0.2)",
                    backdropFilter: "blur(4px)",
                },
                classNames: {
                    title: "text-secondary-a",
                    description: "text-slate-400",
                },
            }}
        />
        </body>
        </html>
    );
}