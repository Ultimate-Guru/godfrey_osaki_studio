import Image from "next/image";
import Link from "next/link";

const stories = [
  {
    title: "Wedding stories",
    note: "The beginning of everything",
    description:
      "A celebration told through joyful gatherings, quiet glances, and the moments shared between two families.",
    image: "/marry.jpg",
    alt: "A couple celebrating their marriage",
    layout: "md:col-span-7 md:row-span-2",
    ratio: "aspect-[1.05] md:aspect-auto md:min-h-[640px]",
  },
  {
    title: "Portraits",
    note: "A little more like you",
    description:
      "A considered portrait that brings personality, style, and presence into focus.",
    image: "/female/girl_4.jpg",
    alt: "A portrait from the Godfrey Osaki Studios archive",
    layout: "md:col-span-5",
    ratio: "aspect-[1.25]",
  },
  {
    title: "Maternity",
    note: "A new chapter, beautifully told",
    description:
      "A tender pause before a new arrival, capturing the anticipation of a growing family.",
    image: "/maternity/maternity_4.jpg",
    alt: "A maternity portrait by Godfrey Osaki Studios",
    layout: "md:col-span-5",
    ratio: "aspect-[1.25]",
  },
];

export default function StudioSection() {
  return (
    <>

      <section
        aria-labelledby="studio-title"
        className="theme-surface grid gap-10 px-[6vw] py-16 md:grid-cols-[1fr_0.85fr] md:items-center md:gap-16 md:px-[10vw] md:py-24"
        id="about"
      >
        <div className="max-w-xl">
          <p className="mb-5 text-xs uppercase tracking-[0.22em] text-clay">
            The people behind the pictures / 02
          </p>
          <h2
            className="mb-6 font-serif text-[clamp(2.8rem,6vw,5rem)] leading-[0.9] tracking-[-0.06em]"
            id="studio-title"
          >
            Hi, we are
            <br />
            Emmanuel &amp; Onella.
          </h2>
          <p className="theme-muted mb-5 max-w-lg text-sm leading-7 md:text-base">
            We are a husband-and-wife photography team with over six years of marriage and a shared love for timeless imagery. We make photographs in and out of the studio, guided by connection, creativity and trust.
          </p>
          <p className="theme-muted mb-7 max-w-lg text-sm leading-7 md:text-base">
            More than beautiful pictures, we want you to leave with good memories — and two more friends in your corner.
          </p>
          <Link
            href="/about"
            className="inline-flex items-center gap-3 border-b border-clay pb-2 text-xs font-semibold uppercase tracking-[0.18em] text-clay transition-opacity hover:opacity-65"
          >
            Get to know us <span aria-hidden="true">↗</span>
          </Link>
        </div>

        <div className="relative mx-auto aspect-[0.82] w-full max-w-110 overflow-hidden bg-sand md:aspect-[0.78]">
          <Image
            src="/faces.jpg"
            alt="Emmanuel and Onella, the photographers behind Godfrey Osaki Studios"
            fill
            quality={90}
            sizes="(max-width: 768px) 88vw, 440px"
            className="object-cover"
          />
        </div>
      </section>

      <section
        aria-labelledby="stories-title"
        className="px-[6vw] pb-20 pt-16 md:px-[5vw] md:pb-28 md:pt-24"
        id="stories"
      >
        <div className="mb-9 flex flex-col gap-5 md:mb-12 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.22em] text-clay">
              A few of our favourite stories / 01
            </p>
            <h2
              className="font-serif text-[clamp(2.8rem,6vw,5.5rem)] leading-[0.9] tracking-[-0.06em]"
              id="stories-title"
            >
              Stories we have told.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-[#6f6963]">
            Every frame begins with a real connection. Here are a few moments we have been trusted to keep.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-12 md:gap-x-5 md:gap-y-8">
          {stories.map((story, index) => (
            <Link
              href="/portfolio"
              key={story.title}
              className={`group block ${story.layout}`}
            >
              <figure className={`relative overflow-hidden ${story.ratio}`}>
                <Image
                  src={story.image}
                  alt={story.alt}
                  fill
                  quality={90}
                  sizes={index === 0 ? "(max-width: 768px) 88vw, 58vw" : "(max-width: 768px) 88vw, 40vw"}
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                />
                <figcaption className="absolute inset-0 flex flex-col justify-end bg-linear-to-t from-black/85 via-black/10 to-transparent p-5 text-white md:p-7">
                  <p className="mb-2 text-[9px] uppercase tracking-[0.2em] text-white/75">
                    {story.note}
                  </p>
                  <h3 className="font-serif text-3xl leading-none tracking-tight md:text-4xl">
                    {story.title}
                  </h3>
                  <p className="mt-3 max-w-md text-xs leading-5 text-white/90 md:text-sm md:leading-6">
                    {story.description}
                  </p>
                </figcaption>
              </figure>
            </Link>
          ))}
        </div>

        <div className="mt-9 flex justify-center md:mt-12">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-3 border border-ink px-7 py-4 text-[10px] font-semibold uppercase tracking-[0.18em] transition-colors hover:bg-ink hover:text-paper"
          >
            View the full portfolio <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>

      <section className="bg-[#201d1b] px-[6vw] py-16 text-center text-[#f4efe9] md:px-8 md:py-24">
        <p className="mb-5 text-xs uppercase tracking-[0.22em] text-[#e7c8a4]">
          Your story belongs here / 03
        </p>
        <h2 className="mx-auto mb-7 max-w-3xl font-serif text-[clamp(2.8rem,6vw,5.5rem)] leading-[0.9] tracking-[-0.06em]">
          Let&apos;s make something worth remembering.
        </h2>
        <Link
          href="/contact"
          className="inline-flex items-center gap-3 border border-white/70 px-7 py-4 text-[10px] font-semibold uppercase tracking-[0.18em] transition-colors hover:bg-[#f4efe9] hover:text-[#201d1b]"
        >
          Tell us what you have in mind <span aria-hidden="true">↗</span>
        </Link>
      </section>
    </>
  );
}