"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import ThemeToggle from "@/components/theme-toggle";

const links = [
    { label: "About", href: "/about" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Contact", href: "/contact" },
];

export default function SiteHeader({ overlay = false }: { overlay?: boolean }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const headerText = overlay ? "text-white" : "theme-fg";

    return (
        <header className={`z-20 flex items-center justify-between px-[6vw] py-4 md:px-[3vw] ${overlay ? "absolute inset-x-0 top-0" : "relative"} ${headerText}`}>
            <Link href="/" className="flex items-center">
                {overlay ? (
                    <Image
                        src="/logo2.png"
                        alt="Godfrey Osaki Studios"
                        width={180}
                        height={40}
                        className="h-auto w-36 md:w-45"
                        priority
                    />
                ) : (
                    <>
                        <Image
                            src="/logo-dark.png"
                            alt="Godfrey Osaki Studios"
                            width={180}
                            height={40}
                            className="h-auto w-36 dark:hidden md:w-45"
                            priority
                        />
                        <Image
                            src="/logo2.png"
                            alt="Godfrey Osaki Studios"
                            width={180}
                            height={40}
                            className="hidden h-auto w-36 dark:block md:w-45"
                            priority
                        />
                    </>
                )}
            </Link>

            <div className="flex items-center gap-2 md:order-3">
                <ThemeToggle />
                <button
                    type="button"
                    aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                    aria-expanded={isMenuOpen}
                    aria-controls="main-navigation"
                    onClick={() => setIsMenuOpen((open) => !open)}
                    className="flex h-11 w-11 cursor-pointer items-center justify-center md:hidden"
                >
                    <span className="sr-only">
                        {isMenuOpen ? "Close menu" : "Open menu"}
                    </span>
                    <div className="transition-transform duration-300">
                        {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                    </div>
                </button>
            </div>

            <nav
                id="main-navigation"
                aria-label="Main navigation"
                className={`absolute left-0 right-0 top-full flex-col items-stretch gap-0 border-t px-[6vw] py-3 text-xs font-semibold uppercase tracking-[0.15em] shadow-md transition-all duration-300 ease-in-out md:static md:order-2 md:flex md:flex-row md:items-center md:justify-center md:gap-8 md:border-0 md:bg-transparent md:px-0 md:py-0 md:shadow-none ${overlay ? "border-white/20 bg-ink text-white" : "theme-border theme-bg theme-fg"} ${isMenuOpen
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