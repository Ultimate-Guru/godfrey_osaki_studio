import Image from "next/image";

export type Collection = {
  title: string;
  number: string;
  image: string;
  imagePosition?: string;
  desktopPosition: string;
};

type CollectionCardProps = {
  collection: Collection;
};

export default function CollectionCard({ collection }: CollectionCardProps) {
  return (
    <a
      className={`group block min-w-0 ${collection.desktopPosition}`}
      href="#contact"
    >
      <div className="relative aspect-[0.78] overflow-hidden bg-[#e8d8c6] md:aspect-[0.87]">
        <Image
          src={collection.image}
          alt={`${collection.title} photography by Godfrey Osaki Studios`}
          fill
          sizes="(max-width: 700px) 44vw, (max-width: 1100px) 38vw, 28vw"
          className={`object-cover transition-transform duration-500 ease-out group-hover:scale-[1.035] ${collection.imagePosition ?? ""}`}
        />
      </div>
      <div className="mt-[7px] flex items-baseline justify-between border-t border-[#d6cec6] pt-[7px] text-[11px] md:text-[10px]">
        <span>{collection.title}</span>
        <span className="text-[6px] text-[#8f8983]">{collection.number}</span>
      </div>
    </a>
  );
}
