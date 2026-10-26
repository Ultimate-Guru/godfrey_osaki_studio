"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const links = [
    { label: "About", href: "/about" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Contact", href: "/contact" },
];

export default function SiteHeader() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="relative z-20 flex items-center justify-between px-[6vw] py-4 md:px-[3vw]">
            <Link href="/" className="flex items-center">
                <Image
                    src="/logo-dark.png"
                    alt="Godfrey Osaki Studios"
                    width={180}
                    height={40}
                    className="h-auto w-36 md:w-45"
                    priority
                />
            </Link>

            <button
                type="button"
                aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={isMenuOpen}
                aria-controls="main-navigation"
                onClick={() => setIsMenuOpen((open) => !open)}
                className="flex h-11 w-11 items-center justify-center text-[#1d1a19] md:hidden cursor-pointer"
            >
                <span className="sr-only">
                    {isMenuOpen ? "Close menu" : "Open menu"}
                </span>
                <div className="transition-transform duration-300">
                    {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                </div>
            </button>

            <nav
                id="main-navigation"
                aria-label="Main navigation"
                className={`absolute left-0 right-0 top-full flex-col items-stretch gap-0 border-t border-[#e8e2dc] bg-[#faf8f4] px-[6vw] py-3 text-xs font-semibold uppercase tracking-[0.15em] text-[#1d1a19] shadow-md transition-all duration-300 ease-in-out md:static md:flex md:flex-row md:items-center md:justify-center md:gap-8 md:border-0 md:bg-transparent md:px-0 md:py-0 md:shadow-none ${isMenuOpen
                        ? "opacity-100 translate-y-0 pointer-events-auto flex"
                        : "opacity-0 -translate-y-2 pointer-events-none hidden md:opacity-100 md:translate-y-0 md:pointer-events-auto"
                    }`}
            >
                {links.map((link) => (
                    <Link
                        key={link.label}
                        href={link.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="py-3 transition-opacity hover:opacity-60 md:py-0"
                    >
                        {link.label}
                    </Link>
                ))}
            </nav>
        </header>
    );
}