import CollectionCard, { type Collection } from "./collection-card";

const collections: Collection[] = [
  {
    title: "Family",
    number: "01",
    image: "/faces.jpg",
    desktopPosition: "md:col-start-2 md:row-start-1",
  },
  {
    title: "Boys",
    number: "02",
    image: "/hero.jpg",
    imagePosition: "object-[54%_30%]",
    desktopPosition: "md:col-start-3 md:row-start-1 md:mt-[25px]",
  },
  {
    title: "Girls",
    number: "03",
    image: "/hero.jpg",
    imagePosition: "object-[55%_68%]",
    desktopPosition: "md:col-start-2 md:row-start-2",
  },
  {
    title: "Marriage",
    number: "04",
    image: "/faces.jpg",
    desktopPosition: "md:col-start-3 md:row-start-2 md:mt-[25px]",
  },
];

export default function StudioSection() {
  return (
    <section
      aria-labelledby="studio-title"
      className="grid grid-cols-2 gap-x-3 gap-y-[34px] px-[6vw] py-[55px] md:grid-cols-[1.05fr_1fr_1fr] md:gap-x-4 md:gap-y-[43px] md:px-[3.2vw] md:pb-[92px] md:pt-16 xl:gap-x-6 xl:gap-y-[52px] xl:pb-28 xl:pt-[86px]"
      id="portfolio"
    >
      <div
        className="col-span-2 pb-1 md:col-span-1 md:row-span-2 md:pb-0 md:pr-5"
        id="about"
      >
        <p className="mb-[18px] text-[7px] uppercase tracking-[1.8px] text-clay">
          The studio / 02
        </p>
        <h2
          className="mb-[15px] max-w-[340px] text-[clamp(30px,8vw,42px)] font-semibold leading-[0.99] tracking-[-0.075em] md:max-w-[320px] md:text-[clamp(24px,3vw,38px)]"
          id="studio-title"
        >
          Two photographers.
          <br />
          One shared point of view.
        </h2>
        <p className="mb-4 max-w-[340px] text-[11px] leading-[1.8] text-[#514b46] md:max-w-[280px] md:text-[10px]">
          Emmanuel and Onella make images with room to breathe — attentive to
          the tiny, electric things that happen when people forget the camera
          is there.
        </p>
        <a
          className="inline-flex items-center gap-1.5 border-b border-clay pb-1 text-[6px] uppercase tracking-[1.3px] text-clay transition-opacity hover:opacity-65"
          href="#contact"
        >
          Meet the photographers <span aria-hidden="true">↗</span>
        </a>
      </div>

      {collections.map((collection) => (
        <CollectionCard collection={collection} key={collection.number} />
      ))}
    </section>
  );
}
