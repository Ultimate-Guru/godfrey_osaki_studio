import Link from "next/link";
import Image from "next/image";
import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa";

const socials = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/godfreyosakistudios",
    Icon: FaFacebookF,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@godfreyosakistudios",
    Icon: FaYoutube,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/godfreyosakistudios/",
    Icon: FaInstagram,
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@godfreyosakistudios",
    Icon: FaTiktok,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/2349038829347",
    Icon: FaWhatsapp,
  },
];

const navLinks = [
  { name: "About", href: "/about" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#24211e] text-[#f8f4ee] font-sans">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-6 pt-14 sm:px-8 sm:pt-16 lg:px-12 lg:pt-20">

        {/* Footer Content */}
        <div className="grid grid-cols-1 gap-12 border-b border-[#f8f4ee]/15 pb-12 sm:grid-cols-2 sm:gap-10 lg:grid-cols-3 lg:gap-16">

          {/* Brand */}
          <div className="flex flex-col items-start">
            <Link
              href="/"
              aria-label="Godfrey Osaki Studios homepage"
              className="inline-flex items-center"
            >
              <Image
                src="/logo2.png"
                alt="Godfrey Osaki Studios"
                width={280}
                height={100}
                className="h-auto w-40 object-contain object-left sm:w-44"
                priority
              />
            </Link>

            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#e3ddd5]">
              Lagos, Nigeria <span className="mx-2 text-[#e3ddd5]">/</span>
              Est. 2020
            </p>
          </div>

          {/* Navigation */}
          <div className="sm:pt-2">
            <h4 className="mb-6 text-sm font-semibold uppercase tracking-[0.25em] text-clay">
              Navigation
            </h4>

            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="inline-block text-sm text-[#e3ddd5] transition-colors duration-300 hover:text-[#c18b72]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="sm:col-span-2 lg:col-span-1 lg:pt-2">
            <h4 className="mb-6 text-sm font-semibold uppercase tracking-[0.25em] text-clay">
              Follow & Connect
            </h4>

            <p className="mb-5 max-w-xs text-sm leading-6 text-[#c4bdb3]">
              Follow our work and discover the moments we capture.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit Godfrey Osaki Studios on ${label}`}
                  title={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#f8f4ee]/20 text-[#f8f4ee] transition-all duration-300 hover:border-[#c18b72] hover:bg-[#c18b72] hover:text-[#24211e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c18b72] focus-visible:ring-offset-2 focus-visible:ring-offset-[#24211e]"
                >
                  <Icon className="text-sm" />
                </a>
              ))}
            </div>

            <Link
              href="/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.15em] text-[#e3ddd5] transition-colors duration-300 hover:text-clay"
            >
              Enquire about a session
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col gap-4 py-6 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">

          <p className="text-xs leading-6 text-[#aaa197]">
            &copy; 2026 Godfrey Osaki Studios. All rights reserved.
          </p>

          <p className="text-xs leading-6 text-[#aaa197]">
            Designed by{" "}
            <Link
              href="https://oluwatosindaniel.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#e3ddd5] underline decoration-[#c18b72]/70 underline-offset-4 transition-colors duration-300 hover:text-[#c18b72]"
            >
              Oluwatosin
            </Link>
          </p>

        </div>
      </div>
    </footer>
  );
}