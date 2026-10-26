import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-152.5 h-[84svh] max-h-197.5 flex-col justify-between overflow-hidden bg-[#344d42] text-white md:min-h-105 md:h-[min(760px,52vw)]"
    >
      {/* Background Image */}
      <Image
        src="/hero.jpg"
        alt="A bride in a flowing green gown"
        fill
        priority
        quality={90}
        sizes="100vw"
        className="absolute inset-0 -z-20 object-cover object-center md:object-[center_45%]"
      />

      {/* Background Overlay */}
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-black/45 via-black/10 to-black/60 md:bg-linear-to-r md:from-black/60 md:via-black/15 md:to-black/25" />

      {/* Navbar */}
      <header className="relative z-10 w-full px-[6vw] py-5 sm:py-6 md:px-[4vw] md:py-7">
        <div className="grid grid-cols-[1fr_auto] items-center gap-x-4 md:grid-cols-[1fr_auto_1fr] md:gap-x-8">

          {/* Logo */}
          <Link
            href="/"
            aria-label="Godfrey Osaki Studios homepage"
            className="relative flex h-12 w-40 items-center sm:h-14 sm:w-48 md:h-14 md:w-52 lg:w-56"
          >
            <Image
              src="/logo2.png"
              alt="Godfrey Osaki Studios"
              width={205}
              height={100}
              priority
              sizes="(max-width: 767px) 192px, 224px"
              className="object-contain object-left"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav
            aria-label="Main navigation"
            className="hidden items-center justify-center gap-6 whitespace-nowrap text-sm font-medium uppercase tracking-[0.16em] lg:gap-8 md:flex"
          >
            <Link
              href="/about"
              className="transition-opacity duration-300 hover:opacity-60"
            >
              About
            </Link>

            <Link
              href="/portfolio"
              className="transition-opacity duration-300 hover:opacity-60"
            >
              Portfolio
            </Link>

            <Link
              href="/contact"
              className="transition-opacity duration-300 hover:opacity-60"
            >
              Contact
            </Link>
          </nav>

          {/* Location Information */}
          <div className="justify-self-end text-right">
            <p className="text-xs font-medium uppercase tracking-[0.14em] sm:text-[10px] md:text-sm">
              Lagos · Nigeria
            </p>

            <span className="mt-1 block text-[11px] tracking-[0.18em] opacity-75">
              Est. 2020
            </span>
          </div>
        </div>

        {/* Mobile Navigation */}
        <nav
          aria-label="Mobile navigation"
          className="mt-5 flex items-center justify-between border-t border-white/20 pt-4 text-[10px] font-medium uppercase tracking-[0.16em] md:hidden"
        >
          <Link
            href="/about"
            className="transition-opacity duration-300 hover:opacity-60"
          >
            About
          </Link>

          <Link
            href="/portfolio"
            className="transition-opacity duration-300 hover:opacity-60"
          >
            Portfolio
          </Link>

          <Link
            href="/contact"
            className="transition-opacity duration-300 hover:opacity-60"
          >
            Contact
          </Link>
        </nav>
      </header>

      {/* Hero Content */}
      <div className="flex flex-col items-start justify-between gap-6 px-[6vw] pb-10 md:flex-row md:items-end md:gap-8 md:px-[3.2vw] md:pb-9">

        {/* Main Heading */}
        <div>
          <p className="mb-3 text-xs uppercase tracking-[0.18em]">
            Godfrey Osaki Studios / 01
          </p>

          <h1
            id="hero-title"
            className="flex flex-col text-[clamp(48px,12vw,82px)] font-medium leading-[0.9] tracking-[-0.06em] md:text-[clamp(54px,8vw,116px)]"
          >
            <span>Not posed.</span>
            <span className="mb-1 text-sand">Remembered.</span>
          </h1>
        </div>

        {/* Description and CTA */}
        <div className="w-full max-w-xs text-sm leading-relaxed md:mb-1 md:mr-[8%] md:ml-auto md:w-[min(260px,28%)] md:max-w-none md:text-base">
          <p className="mb-5">
            Photography for the days you want to keep feeling — not just keep
            looking at.
          </p>

          <Link
            href="/portfolio"
            className="mb-4 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.15em] transition-opacity hover:opacity-65"
          >
            Enter the archive
            <span aria-hidden="true">↘</span>
          </Link>
        </div>
      </div>
    </section>
  );
}