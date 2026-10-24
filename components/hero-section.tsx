import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-[610px] h-[84svh] max-h-[790px] flex-col justify-between overflow-hidden bg-[#344d42] text-white md:min-h-[420px] md:h-[min(760px,52vw)]"
    >
      <Image
        src="/hero.jpg"
        alt="A bride in a flowing green gown"
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 -z-20 object-cover object-[55%_center] md:object-[center_34%]"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/30 via-black/5 to-black/55 md:bg-gradient-to-r md:from-black/55 md:via-black/10 md:to-black/20" />

      <header className="grid grid-cols-[1fr_auto] items-start gap-x-5 gap-y-4 px-[6vw] pt-5 md:grid-cols-[1fr_auto_1fr] md:px-[4vw]">
        <a
          className="flex w-fit flex-col font-serif text-[22px] leading-[0.94] tracking-[-1.2px]"
          href="#top"
          aria-label="Godfrey Osaki Studios home"
        >
          <span>Godfrey Osaki</span>
          <span className="mt-[5px] text-center font-sans text-[6px] tracking-[4px]">
            STUDIOS
          </span>
        </a>

        <nav
          aria-label="Main navigation"
          className="flex gap-2.5 pt-1.5 text-[6px] uppercase tracking-[0.8px] sm:gap-[15px] sm:text-[7px] md:gap-[clamp(18px,3vw,46px)] md:pt-[5px] md:text-[8px] md:tracking-[1.3px]"
        >
          <a className="transition-opacity hover:opacity-65" href="#portfolio">
            Portfolio
          </a>
          <a className="transition-opacity hover:opacity-65" href="#about">
            About
          </a>
          <a className="transition-opacity hover:opacity-65" href="#contact">
            Contact
          </a>
        </nav>

        <p className="col-start-2 row-start-2 m-0 text-right text-[7px] uppercase tracking-[1.3px] md:col-start-3 md:row-start-1 md:mt-[3px]">
          Lagos · Nigeria
          <span className="mt-1.5 block text-[6px] tracking-[1.6px]">
            Est. 2020
          </span>
        </p>
      </header>

      <div className="flex flex-col items-start justify-between gap-6 px-[6vw] pb-8 md:flex-row md:items-end md:gap-8 md:px-[3.2vw] md:pb-[34px]">
        <div>
          <p className="mb-3 text-[7px] uppercase tracking-[1.8px]">
            Godfrey Osaki Studios / 01
          </p>
          <h1
            id="hero-title"
            className="flex flex-col text-[clamp(48px,12vw,82px)] font-medium leading-[0.82] tracking-[-0.09em] md:text-[clamp(54px,8vw,116px)]"
          >
            <span>Not posed.</span>
            <span className="mt-2 text-sand">Remembered.</span>
          </h1>
        </div>

        <div className="ml-auto w-[min(230px,75%)] text-[10px] leading-[1.65] md:mb-1 md:mr-[12%] md:w-[min(185px,23%)] md:text-[9px]">
          <p className="mb-5">
            Photography for the days you want to keep feeling — not just keep
            looking at.
          </p>
          <a
            className="inline-flex items-center gap-3 text-[7px] font-bold uppercase tracking-[1.2px] transition-opacity hover:opacity-65"
            href="#portfolio"
          >
            Enter the archive <span aria-hidden="true">↘</span>
          </a>
        </div>
      </div>
    </section>
  );
}
