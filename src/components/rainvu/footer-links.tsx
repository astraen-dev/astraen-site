import Link from 'next/link';

export function RainVuFooterLinks() {
    return (
        <section className="container mx-auto max-w-5xl px-6 pt-24 text-center">
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 font-mono text-sm text-white/50">
                <Link
                    href="/rainvu/privacy"
                    className="transition-colors hover:text-white"
                >
                    Privacy Policy
                </Link>
                <Link
                    href="/rainvu/terms"
                    className="transition-colors hover:text-white"
                >
                    Terms of Service
                </Link>
                <Link
                    href="/rainvu/data-deletion"
                    className="transition-colors hover:text-white"
                >
                    Data Deletion
                </Link>
            </div>
        </section>
    );
}
