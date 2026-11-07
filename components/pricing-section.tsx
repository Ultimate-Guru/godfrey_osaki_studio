import Image from "next/image";
import { photographyPackages } from "./pricing-data";

type PricingSectionProps = {
  showDescriptions?: boolean;
};

export default function PricingSection({
  showDescriptions = false,
}: PricingSectionProps) {
  return (
    <section
      aria-labelledby="starting-prices-title"
      className="px-[6vw] pb-20 md:px-[5vw] md:pb-28"
    >
      <div className="theme-border border-t pt-12 md:pt-16">
        <p className="mb-4 text-xs uppercase tracking-[0.22em] text-clay">
          Thoughtfully made for your story
        </p>
        <h2
          id="starting-prices-title"
          className="theme-fg mb-8 font-serif text-[clamp(2.5rem,5vw,4.5rem)] leading-[0.95] tracking-[-0.06em]"
        >
          Stories We&apos;ve Told
        </h2>

        <ul
          className={
            showDescriptions
              ? "grid gap-3 md:grid-cols-2 md:gap-4"
              : "grid gap-x-8 md:grid-cols-2"
          }
        >
          {photographyPackages.map((item, index) => (
            <li
              key={`${item.name}-${item.subtitle ?? item.ageRange ?? index}`}
              className={
                showDescriptions
                  ? "group relative aspect-[0.8] overflow-hidden"
                  : "theme-border flex items-center justify-between gap-4 border-b py-4"
              }
            >
              {showDescriptions && (
                <>
                  <Image
                    src={item.image}
                    alt={`${item.name} photography`}
                    fill
                    quality={100}
                    sizes="(max-width: 768px) 88vw, 45vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-linear-to-t from-black/90 via-black/15 to-transparent"
                  />
                </>
              )}
              <div className={showDescriptions ? "absolute inset-x-0 bottom-0 p-5 text-white md:p-6" : "contents"}>
                <div>
                  <h3 className={`${showDescriptions ? "text-white" : "theme-fg"} text-base font-medium md:text-lg`}>
                    {item.name}
                    {item.subtitle && (
                      <span className={showDescriptions ? "text-white/80" : "theme-muted"}> ({item.subtitle})</span>
                    )}
                  </h3>
                  {item.ageRange && (
                    <p className={`${showDescriptions ? "text-white/80" : "theme-muted"} mt-1 text-xs`}>{item.ageRange}</p>
                  )}
                  {showDescriptions && (
                    <p className="mt-2 max-w-lg text-xs leading-5 text-white/90 md:mt-3 md:text-sm md:leading-6">
                      {item.description}
                    </p>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
