"use client";

import { useState, useEffect } from "react";
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
  const [isOpen, setIsOpen] = useState(false);

  // Close modal on 'Escape' key press and lock background scroll
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      <div
        onClick={() => setIsOpen(true)}
        className={`group block min-w-0 cursor-pointer ${collection.desktopPosition}`}
      >
        <div className="relative aspect-[0.78] overflow-hidden bg-[#e8d8c6] md:aspect-[0.87]">
          <Image
            src={collection.image}
            alt={`${collection.title} photography by Godfrey Osaki Studios`}
            fill
            quality={90}
            sizes="(max-width: 768px) 50vw, 40vw"
            className={`object-cover transition-transform duration-500 ease-out group-hover:scale-[1.035] ${collection.imagePosition ?? ""
              }`}
          />
        </div>
        <div className="mt-3 flex items-baseline justify-between border-t border-[#d6cec6] pt-3 text-sm md:text-base">
          <span>{collection.title}</span>
          <span className="text-xs text-[#6f6963]">{collection.number}</span>
        </div>
      </div>

      {/* Lightbox Overlay Modal */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${collection.title} enlargement`}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm md:p-8"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative max-h-[90vh] max-w-[95vw] w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image container
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-black/60 text-white transition-colors hover:bg-black/90 cursor-pointer"
              aria-label="Close overlay"
            >
              ✕
            </button>

            {/* Enlarged Image Container */}
            <div className="relative w-full h-[85vh]">
              <Image
                src={collection.image}
                alt={`${collection.title} photography enlargement`}
                fill
                quality={95}
                sizes="95vw"
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}