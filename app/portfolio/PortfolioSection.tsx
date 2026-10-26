"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Category = "Male" | "Female" | "Graduation" | "Marriage" | "Maternity" | "Family";

type Photo = {
    category: Category;
    src: string;
    alt: string;
};

const filters = ["All", "Male", "Female", "Graduation", "Marriage", "Maternity", "Family"] as const;
type Filter = (typeof filters)[number];

// Map each category to its exact folder name inside public/
const folderMap: Record<Category, string> = {
    Male: "male",
    Female: "female",
    Graduation: "graduation",
    Marriage: "marriage",
    Maternity: "maternity",
    Family: "family",
};

const library: Record<Category, string[]> = {
    Male: ["boy_1.jpg", "boy_2.jpg", "boy_3.jpg", "boy_4.jpg", "boy_5.jpg", "boy_6.jpg"],
    Female: ["girl_1.jpg", "girl_2.jpg", "girl_3.jpg", "girl_4.jpg", "girl_5.jpg", "girl_6.jpg"],
    Graduation: ["grad_1.jpg", "grad_2.jpg", "grad_3.jpg", "grad_4.jpg", "grad_5.jpg", "grad_6.jpg"],
    Marriage: ["marry.jpg", "marry_1.jpg", "marry_2.jpg", "marry_3.jpg", "marry_4.jpg", "marry_5.jpg"],
    Maternity: ["maternity_1.jpg", "maternity_2.jpg", "maternity_3.jpg", "maternity_4.jpg", "maternity_5.jpg", "maternity_6.jpg"],
    Family: ["family_2.jpg", "family.jpg", "family_4.jpg", "family_3.jpg", "family_5.jpg", "family_1.jpg"],
};

const photos: Photo[] = (Object.keys(library) as Category[]).flatMap(
    (category) =>
        library[category].map((file, i) => ({
            category,
            src: `/${folderMap[category]}/${file}`,
            alt: `${category} photo ${i + 1} by Godfrey Osaki Studios`,
        })),
);

export default function PortfolioSection() {
    const [active, setActive] = useState<Filter>("All");
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const visible =
        active === "All" ? photos : photos.filter((p) => p.category === active);

    // Keyboard controls for the popup: Esc closes, arrows move
    useEffect(() => {
        if (openIndex === null) return;

        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") setOpenIndex(null);
            if (e.key === "ArrowRight")
                setOpenIndex((i) => (i === null ? i : (i + 1) % visible.length));
            if (e.key === "ArrowLeft")
                setOpenIndex((i) =>
                    i === null ? i : (i - 1 + visible.length) % visible.length,
                );
        };

        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", onKey);
        return () => {
            document.body.style.overflow = "";
            window.removeEventListener("keydown", onKey);
        };
    }, [openIndex, visible.length]);

    const current = openIndex === null ? null : visible[openIndex];

    return (
        <section
            aria-labelledby="archive-title"
            className="px-[6vw] pb-20 pt-8 md:px-[3.2vw] md:pb-28 md:pt-12"
        >
            <p className="mb-5 text-xs uppercase tracking-[0.18em] text-[#6b1423]">
                The archive / 03
            </p>
            <h1
                id="archive-title"
                className="mb-6 max-w-2xl text-[clamp(44px,8vw,88px)] font-medium leading-[0.95] tracking-[-0.06em] text-[#1d1a19]"
            >
                Scenes worth returning to.
            </h1>
            <p className="mb-10 max-w-md text-[15px] leading-7 text-[#6f6963]">
                A living index of all the ordinary and extraordinary moments we have
                been trusted to witness.
            </p>

            {/* Filter tabs */}
            <div
                role="group"
                aria-label="Filter photos"
                className="mb-6 flex flex-wrap gap-x-6 gap-y-3"
            >
                {filters.map((filter) => (
                    <button
                        key={filter}
                        type="button"
                        onClick={() => setActive(filter)}
                        aria-pressed={active === filter}
                        className={`cursor-pointer border-b pb-1.5 text-xs uppercase tracking-[0.15em] transition-colors ${active === filter
                            ? "border-[#1d1a19] text-[#6b1423]"
                            : "border-transparent text-[#8f8983] hover:text-[#1d1a19]"
                            }`}
                    >
                        {filter}
                    </button>
                ))}
            </div>

            <p className="mb-8 text-[11px] uppercase tracking-[0.15em] text-[#8f8983]">
                Select an image to enter its story
            </p>

            {/* Photo grid */}
            <ul className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5">
                {visible.map((photo, index) => (
                    <li key={photo.src}>
                        <button
                            type="button"
                            onClick={() => setOpenIndex(index)}
                            className="group relative block aspect-[0.8] w-full cursor-pointer overflow-hidden bg-[#e8d8c6]"
                            aria-label={`Open ${photo.alt}`}
                        >
                            <Image
                                src={photo.src}
                                alt={photo.alt}
                                fill
                                quality={90}
                                sizes="(max-width: 768px) 50vw, 33vw"
                                className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                            />
                        </button>
                    </li>
                ))}
            </ul>

            {/* Popup viewer */}
            {current && (
                <div
                    role="dialog"
                    aria-modal="true"
                    aria-label={current.alt}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
                    onClick={() => setOpenIndex(null)}
                >
                    <button
                        type="button"
                        onClick={() => setOpenIndex(null)}
                        className="absolute right-5 top-5 text-sm uppercase tracking-[0.15em] text-white cursor-pointer"
                    >
                        Close ✕
                    </button>

                    <button
                        type="button"
                        aria-label="Previous photo"
                        onClick={(e) => {
                            e.stopPropagation();
                            setOpenIndex((openIndex! - 1 + visible.length) % visible.length);
                        }}
                        className="absolute left-3 top-1/2 -translate-y-1/2 p-3 text-3xl text-white md:left-8 cursor-pointer"
                    >
                        ‹
                    </button>

                    <div
                        className="relative h-[82vh] w-full max-w-3xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Image
                            src={current.src}
                            alt={current.alt}
                            fill
                            quality={95}
                            sizes="(max-width: 768px) 100vw, 768px"
                            className="object-contain"
                        />
                    </div>

                    <button
                        type="button"
                        aria-label="Next photo"
                        onClick={(e) => {
                            e.stopPropagation();
                            setOpenIndex((openIndex! + 1) % visible.length);
                        }}
                        className="absolute right-3 top-1/2 -translate-y-1/2 p-3 text-3xl text-white md:right-8 cursor-pointer"
                    >
                        ›
                    </button>
                </div>
            )}
        </section>
    );
}