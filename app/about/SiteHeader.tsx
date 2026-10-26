import Image from "next/image";
import Link from "next/link";

const links = [
    { label: "About", href: "/about" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Contact", href: "/contact" },
];

export default function SiteHeader() {
    return (
        <header className="flex items-center justify-between px-[6vw] md:px-[3vw]">
            <Link href="/" className="flex items-center">
                <Image
                    src="/logo-dark.png"
                    alt="Godfrey Osaki Studios"
                    width={180}
                    height={40}
                    priority
                />
            </Link>

            <nav
                aria-label="Main navigation"
                className="flex items-center justify-center gap-5 text-xs font-semibold uppercase tracking-[0.15em] text-[#1d1a19] md:gap-8"
            >
                {links.map((link) => (
                    <Link
                        key={link.label}
                        href={link.href}
                        className="transition-opacity hover:opacity-60"
                    >
                        {link.label}
                    </Link>
                ))}
            </nav>
        </header>
    );
}