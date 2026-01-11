import Link from 'next/link';
import { GithubIcon } from '@/components/icons/GithubIcon';
import { LinkedinIcon } from '@/components/icons/LinkedinIcon';

const links = [
    {
        label: 'GitHub',
        href: 'https://github.com/astraen-dev',
        icon: GithubIcon,
    },
    {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/company/astraen',
        icon: LinkedinIcon,
    },
];

const legal = [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'PAIA Manual', href: '/paia' },
];

export function Footer() {
    return (
        <footer className="border-border w-full border-t bg-black pt-24 pb-12">
            <div className="container mx-auto max-w-5xl px-6">
                <div className="mb-24 grid grid-cols-1 gap-16 md:grid-cols-2">
                    <div className="flex flex-col gap-6">
                        <Link href="/" className="w-fit">
                            <span className="font-mono text-2xl font-bold tracking-tighter text-white">
                                ASTRAEN
                            </span>
                        </Link>
                        <p className="text-text-secondary max-w-sm leading-relaxed">
                            An independent software laboratory engineering logic
                            into reality.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-8">
                        <div>
                            <h2 className="text-text-muted mb-6 font-mono text-xs tracking-widest uppercase">
                                Connect
                            </h2>
                            <div className="flex flex-col gap-4">
                                {links.map((link) => (
                                    <a
                                        key={link.label}
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group text-text-secondary flex items-center gap-2 text-sm transition-colors hover:text-white"
                                    >
                                        <link.icon className="h-4 w-4" />
                                        <span>{link.label}</span>
                                    </a>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h2 className="text-text-muted mb-6 font-mono text-xs tracking-widest uppercase">
                                Legal
                            </h2>
                            <div className="flex flex-col gap-4">
                                {legal.map((item) => (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className="text-text-secondary text-sm transition-colors hover:text-white"
                                    >
                                        {item.label}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-border flex flex-col items-start justify-between gap-4 border-t pt-8 md:flex-row md:items-center">
                    <p className="text-text-muted text-xs">
                        &copy; {new Date().getFullYear()} ASTRAEN (PTY) LTD. All
                        Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
