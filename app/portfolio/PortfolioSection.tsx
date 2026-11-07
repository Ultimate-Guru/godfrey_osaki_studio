"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Category = "Wedding" | "Portrait" | "Baby Bump";

type Photo = {
    category: Category;
    src: string;
    alt: string;
};

const filters = ["All", "Portrait", "Baby Bump", "Wedding"] as const;
type Filter = (typeof filters)[number];

const library: Record<Category, string[]> = {
    Portrait: [
        "/male/boy_1.jpg",
        "/male/boy_2.jpg",
        "/male/boy_3.jpg",
        "/male/boy_4.jpg",
        "/male/boy_5.jpg",
        "/male/boy_6.jpg",
        "/female/girl_1.jpg",
        "/female/girl_2.jpg",
        "/female/girl_3.jpg",
        "/female/girl_4.jpg",
        "/female/girl_5.jpg",
        "/female/girl_6.jpg",
        "/graduation/grad_1.jpg",
        "/graduation/grad_2.jpg",
        "/graduation/grad_3.jpg",
        "/graduation/grad_4.jpg",
        "/graduation/grad_5.jpg",
        "/graduation/grad_6.jpg",
        "/family/family_2.jpg",
        "/family/family.jpg",
        "/family/family_4.jpg",
        "/family/family_3.jpg",
        "/family/family_5.jpg",
        "/family/family_1.jpg",
    ],
    Wedding: [
        "/marriage/marry.jpg",
        "/marriage/marry_1.jpg",
        "/marriage/marry_2.jpg",
        "/marriage/marry_3.jpg",
        "/marriage/marry_4.jpg",
        "/marriage/marry_5.jpg",
    ],
    "Baby Bump": [
        "/maternity/maternity_1.jpg",
        "/maternity/maternity_2.jpg",
        "/maternity/maternity_3.jpg",
        "/maternity/maternity_4.jpg",
        "/maternity/maternity_5.jpg",
        "/maternity/maternity_6.jpg",
    ],
};

const photos: Photo[] = (Object.keys(library) as Category[]).flatMap((category) =>
    library[category].map((src, index) => ({
        category,
        src,
        alt: `${category} photo ${index + 1} by Godfrey Osaki Studios`,
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
            className="px-[6vw] pb-20 pt-20 md:px-[3.2vw] md:pb-28 md:pt-20"
        >
            <p className="mb-5 text-xs uppercase tracking-[0.18em] text-clay">
                The archive / 03
            </p>
            <h1
                id="archive-title"
                className="theme-fg mb-6 max-w-2xl text-[clamp(44px,8vw,88px)] font-medium leading-[0.95] tracking-[-0.06em]"
            >
                Scenes worth returning to.
            </h1>
            <p className="theme-muted mb-10 max-w-md text-[15px] leading-7">
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
                            ? "border-clay text-clay"
                            : "border-transparent theme-muted hover:text-ink"
                            }`}
                    >
                        {filter}
                    </button>
                ))}
            </div>

            <p className="theme-muted mb-8 text-[11px] uppercase tracking-[0.15em]">
                Select an image to enter its story
            </p>

            {/* Photo grid */}
            <ul className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5">
                {visible.map((photo, index) => (
                    <li key={photo.src}>
                        <button
                            type="button"
                            onClick={() => setOpenIndex(index)}
                            className="theme-surface group relative block aspect-[0.8] w-full cursor-pointer overflow-hidden"
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