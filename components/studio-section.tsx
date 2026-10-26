import CollectionCard, { type Collection } from "./collection-card";
import Link from "next/link";

const collections: Collection[] = [
  {
    title: "Family",
    number: "01",
    image: "/family_1.jpg",
    desktopPosition: "md:col-start-2 md:row-start-1",
  },
  {
    title: "Male",
    number: "02",
    image: "/boy_1.jpg",
    imagePosition: "object-[54%_30%]",
    desktopPosition: "md:col-start-3 md:row-start-1 md:mt-[25px]",
  },
  {
    title: "Female",
    number: "03",
    image: "/girl_1.jpg",
    imagePosition: "object-[55%_68%]",
    desktopPosition: "md:col-start-2 md:row-start-2",
  },
  {
    title: "Marriage",
    number: "04",
    image: "/marry_1.jpg",
    desktopPosition: "md:col-start-3 md:row-start-2 md:mt-[25px]",
  },
];

export default function StudioSection() {
  return (
    <section
      aria-labelledby="studio-title"
      className="grid grid-cols-2 gap-x-3 gap-y-9 px-[6vw] py-14 md:grid-cols-[1.05fr_1fr_1fr] md:gap-x-4 md:gap-y-10 md:px-[3.2vw] md:pb-23 md:pt-16 xl:gap-x-6 xl:gap-y-13 xl:pb-28 xl:pt-20"
      id="portfolio"
    >
      <div
        className="col-span-2 pb-1 md:col-span-1 md:row-span-2 md:pb-0 md:pr-5"
        id="about"
      >
        <p className="mb-5 text-xs uppercase tracking-[0.18em] text-clay">
          The studio / 02
        </p>
        <h2
          className="mb-4 max-w-sm text-[clamp(30px,8vw,42px)] font-semibold leading-[1.05] tracking-tighter md:text-[clamp(28px,3.4vw,44px)]"
          id="studio-title"
        >
          Two photographers.
          <br />
          One shared point of view.
        </h2>
        <p className="mb-5 max-w-sm text-sm leading-7 text-[#514b46] md:text-[15px]">
          Emmanuel and Onella make images with room to breathe — attentive to
          the tiny, electric things that happen when people forget the camera
          is there.
        </p>
        <Link href="/about" className="inline-flex items-center gap-2 border-b border-clay pb-1 text-xs uppercase tracking-[0.15em] text-clay transition-opacity hover:opacity-65">
          Meet the photographers <span aria-hidden="true">↗</span>
        </Link>
      </div>

      {collections.map((collection) => (
        <CollectionCard collection={collection} key={collection.number} />
      ))}

      {/* See More Button */}
      <div className="col-span-2 md:col-span-3 flex justify-center pt-2">
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-3 border border-clay px-8 py-4 text-xs uppercase tracking-[0.2em] transition-colors hover:bg-clay hover:text-[#f7f2ec] font-bold">
          See more collections <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </section>
  );
}