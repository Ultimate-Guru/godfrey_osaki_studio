"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import type { GalleryId, PhotographyPackage } from "@/components/pricing-data";

type Photo = {
    galleryIds: GalleryId[];
    src: string;
    alt: string;
};

const library: Record<GalleryId, string[]> = {
    "solo-portrait": [
        "/portrait/solo.jpg",
        "/portrait/solo_1.jpg",
        "/portrait/solo_2.jpg",
        "/portrait/solo-3.jpg",
        "/portrait/solo_4.jpg",
        "/portrait/solo_5.jpg",
        "/portrait/solo_6.jpg",
        "/portrait/solo_7.jpg",
        "/portrait/solo_8.jpg",
        "/portrait/solo_9.jpg",
        "/portrait/solo_10.jpg",
        "/portrait/solo_11.jpg",
    ],
    lovers: [
        "/lovers/lovers_1.jpg",
        "/lovers/lovers-2.jpg",
        "/lovers/lovers_3.jpg",
        "/lovers/lovers_4.jpg",
        "/lovers/lovers_5.jpg",
        "/lovers/lovers_6.jpg",
        "/lovers/lovers_7.jpg",
        "/lovers/lovers_8.jpg",
        "/lovers/lovers_9.jpg",
        "/lovers/lovers_10.jpg",
        "/lovers/lovers_11.jpg",
        "/lovers/lovers_12.jpg",
    ],
    milestone: [
        "/graduation/grad_1.jpg",
        "/graduation/grad_2.jpg",
        "/graduation/grad_3.jpg",
        "/graduation/grad_4.jpg",
        "/graduation/grad_5.jpg",
        "/graduation/grad_6.jpg",
        "/graduation/grad_7.jpg",
        "/graduation/grad_8.jpg",
        "/graduation/grad_9.jpg",
        "/graduation/grad_10.jpg",
        "/graduation/grad_11.jpg",
        "/graduation/grad_12.jpg",
    ],
    "before-arrival": [
        "/maternity/maternity_1.jpg",
        "/maternity/maternity_2.jpg",
        "/maternity/maternity_3.jpg",
        "/maternity/maternity_4.jpg",
        "/maternity/maternity_5.jpg",
        "/maternity/maternity_6.jpg",
        "/maternity/maternity_7.jpg",
        "/maternity/maternity_8.jpg",
        "/maternity/maternity_9.jpg",
    ],
    "first-days": [
        "/baby/baby.jpg",
        "/baby/baby_1.jpg",
        "/baby/baby_2.jpg",
        "/baby/baby_3.jpg",
        "/baby/baby_4.jpg",
        "/baby/baby_5.jpg",
        "/baby/baby_6.jpg",
        "/baby/baby_7.jpg",
        "/baby/last_baby.jpg",
    ],
    "growing-years": [
        "/growing/grow.jpg",
        "/growing/grow_1.jpg",
        "/growing/grow_2.jpg",
        "/growing/grow_3.jpg",
        "/growing/grow_4.jpg",
        "/growing/grow_5.jpg",
        "/growing/grow_6.jpg",
        "/growing/grow_7.jpg",
        "/growing/grow_8.jpg",
        "/growing/grow_9.jpg",
        "/growing/grow_10.jpg",
        "/growing/grow_11.jpg",
    ],
    legacy: [
        "/legacy/legacy_7.jpg",
        "/legacy/legacy-1.jpg",
        "/legacy/legacy_2.jpg",
        "/legacy/legacy_3.jpg",
        "/legacy/legacy_4.jpg",
        "/legacy/legacy_5.jpg",
        "/legacy/legacy_6.jpg",
        "/legacy/legacy-7.jpg",
        "/legacy/legacy_8.jpg",
    ],
    heritage: [
        "/family/family.jpg",
        "/family/family_1.jpg",
        "/family/family_2.jpg",
        "/family/family_3.jpg",
        "/family/family_4.jpg",
        "/family/family_5.jpg",
        "/family/family_6.jpg",
        "/family/family_7.jpg",
        "/family/family_8.jpg",
        "/family/family_9.jpg",
        "/family/family_10.jpg",
        "/family/family_11.jpg",
    ],
    "wedding-experience": [
        "/marriage/marry.jpg",
        "/marriage/marry_1.jpg",
        "/marriage/marry_2.jpg",
        "/marriage/marry_3.jpg",
        "/marriage/marry_4.jpg",
        "/marriage/marry_5.jpg",
        "/marriage/marry_7.jpg",
        "/marriage/marry_8.jpg",
        "/marriage/marry_9.jpg",
        "/marriage/marry_10.jpg",
        "/marriage/marry_11.jpg",
        "/marriage/marry-12.jpg",
    ],
};

const photos: Photo[] = (Object.keys(library) as GalleryId[]).flatMap((galleryId) =>
    library[galleryId].map((src, index) => ({
        galleryIds: [galleryId],
        src,
        alt: `${galleryId.replaceAll("-", " ")} photo ${index + 1} by Godfrey Osaki Studios`,
    })),
);

const landscapePhotoSources = new Set([
    "/marriage/marry_10.jpg",
    "/marriage/marry_11.jpg",
    "/marriage/marry-12.jpg",
    "/family/family.jpg",
    "/family/family_1.jpg",
    "/family/family_3.jpg",
    "/family/family_10.jpg",
    "/family/family_11.jpg",
]);

export default function PortfolioSection({
    activePackage,
}: {
    activePackage: PhotographyPackage;
}) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const dialogRef = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<HTMLButtonElement | null>(null);

    const visible = photos.filter((photo) =>
        photo.galleryIds.includes(activePackage.galleryId),
    );

    // Keep keyboard focus inside the popup, restore it when closed, and lock the page scroll.
    useEffect(() => {
        if (openIndex === null) return;

        const dialog = dialogRef.current;
        const previousOverflow = document.body.style.overflow;
        const focusableSelector =
            'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                e.preventDefault();
                setOpenIndex(null);
            }
            if (e.key === "ArrowRight") {
                e.preventDefault();
                setOpenIndex((i) => (i === null ? i : (i + 1) % visible.length));
            }
            if (e.key === "ArrowLeft") {
                e.preventDefault();
                setOpenIndex((i) =>
                    i === null ? i : (i - 1 + visible.length) % visible.length,
                );
            }
            if (e.key === "Tab" && dialog) {
                const focusable = Array.from(
                    dialog.querySelectorAll<HTMLElement>(focusableSelector),
                );
                const first = focusable[0];
                const last = focusable.at(-1);

                if (!first || !last) {
                    e.preventDefault();
                } else if (e.shiftKey && document.activeElement === first) {
                    e.preventDefault();
                    last.focus();
                } else if (!e.shiftKey && document.activeElement === last) {
                    e.preventDefault();
                    first.focus();
                }
            }
        };

        dialog?.querySelector<HTMLElement>("[data-dialog-close]")?.focus();
        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", onKey);
        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener("keydown", onKey);
            triggerRef.current?.focus();
        };
    }, [openIndex, visible.length]);

    const current = openIndex === null ? null : visible[openIndex];

    return (
        <section
            id="gallery"
            aria-labelledby="archive-title"
            className="px-[6vw] pb-20 pt-20 md:px-[3.2vw] md:pb-28 md:pt-20"
        >
            <p className="mb-5 text-xs uppercase tracking-[0.18em] text-clay">
                {activePackage.name} / gallery
            </p>
            <h1
                id="archive-title"
                className="theme-fg mb-6 max-w-2xl text-[clamp(44px,8vw,88px)] font-medium leading-[0.95] tracking-[-0.06em]"
            >
                {activePackage.name} stories.
            </h1>
            <p className="theme-muted mb-10 max-w-md text-[15px] leading-7">
                {activePackage.description}
            </p>

            <div className="mb-8 flex items-center justify-between gap-4">
                <p className="theme-muted text-[11px] uppercase tracking-[0.15em]">
                    Select an image to enter its story
                </p>
                <Link
                    href="/portfolio"
                    className="border-b border-clay pb-1 text-[11px] uppercase tracking-[0.15em] text-clay transition-opacity hover:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-clay"
                >
                    All stories
                </Link>
            </div>

            {/* Photo grid */}
            <ul className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5">
                {visible.map((photo, index) => (
                    <li key={photo.src}>
                        <button
                            type="button"
                            onClick={(event) => {
                                triggerRef.current = event.currentTarget;
                                setOpenIndex(index);
                            }}
                            className="theme-surface group relative block aspect-[0.8] w-full cursor-pointer overflow-hidden"
                            aria-label={`Open ${photo.alt}`}
                        >
                            <Image
                                src={photo.src}
                                alt={photo.alt}
                                fill
                                quality={90}
                                sizes={
                                    landscapePhotoSources.has(photo.src)
                                        ? "(max-width: 768px) 94vw, 62vw"
                                        : "(max-width: 768px) 50vw, 33vw"
                                }
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
                    aria-describedby="gallery-viewer-instructions"
                    ref={dialogRef}
                    tabIndex={-1}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
                    onClick={() => setOpenIndex(null)}
                >
                    <p id="gallery-viewer-instructions" className="sr-only">
                        Use the left and right arrow keys to browse images. Press Escape to close.
                    </p>
                    <button
                        type="button"
                        data-dialog-close
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
