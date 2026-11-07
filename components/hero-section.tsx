import Image from "next/image";
import Link from "next/link";
import SiteHeader from "../app/about/SiteHeader";

export default function HeroSection() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-170 h-svh max-h-240 flex-col justify-between overflow-hidden bg-ink text-white"
    >
      <Image
        src="/hero.jpg"
        alt="A girl in a flowing green gown"
        fill
        priority
        quality={90}
        sizes="100vw"
        className="absolute inset-0 -z-20 object-cover object-[55%_center]"
      />
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-black/40 via-black/15 to-black/60" />

      <SiteHeader overlay />

      <div className="relative z-10 grid flex-1 content-end gap-12 px-[6vw] pb-10 pt-32 md:grid-cols-[1fr_auto] md:items-end md:px-[5vw] md:pb-14">
        <div>
          <p className="mb-6 text-[10px] font-medium uppercase tracking-[0.24em] sm:text-xs">
            Wedding &amp; portrait photography
            <span className="mx-2 text-sm">·</span>
            Available Globally
          </p>
          <h1
            id="hero-title"
            className="max-w-5xl font-serif text-[clamp(4.5rem,12vw,11rem)] font-normal leading-[0.78] tracking-[-0.075em]"
          >
            Memories
            <br />
            in a <span className="italic text-sand">frame.</span>
          </h1>
        </div>

        <div className="flex flex-col items-start gap-5 md:mb-1 md:max-w-61.25">
          <p className="max-w-xs text-sm leading-6 text-white/85">
            Honest photographs of the people, places and moments you want to keep close.
          </p>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-4 border-b border-white/70 pb-2 text-[11px] font-semibold uppercase tracking-[0.17em] transition-colors hover:border-sand hover:text-sand"
          >
            Explore selected work <span aria-hidden="true">↘</span>
          </Link>
        </div>
      </div>
    </section>
  );
}