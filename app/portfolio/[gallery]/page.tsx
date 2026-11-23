import { Suspense } from "react";
import { notFound } from "next/navigation";
import SiteFooter from "@/components/site-footer";
import {
  galleryIds,
  getPhotographyPackageByGalleryId,
} from "@/components/pricing-data";
import SiteHeader from "../../about/SiteHeader";
import PortfolioSection from "../PortfolioSection";

export function generateStaticParams() {
  return galleryIds.map((gallery) => ({ gallery }));
}

export default function GalleryPage(
  props: PageProps<"/portfolio/[gallery]">,
) {
  return (
    <main id="top" className="theme-bg theme-fg min-h-screen overflow-x-hidden">
      <SiteHeader />
      <Suspense fallback={<GalleryFallback />}>
        <GalleryContent params={props.params} />
      </Suspense>
      <SiteFooter />
    </main>
  );
}

async function GalleryContent({
  params,
}: {
  params: PageProps<"/portfolio/[gallery]">["params"];
}) {
  const { gallery } = await params;
  const activePackage = getPhotographyPackageByGalleryId(gallery);

  if (!activePackage) {
    notFound();
  }

  return (
    <PortfolioSection activePackage={activePackage} />
  );
}

function GalleryFallback() {
  return (
    <section
      id="gallery"
      aria-label="Loading gallery"
      aria-busy="true"
      className="px-[6vw] pb-20 pt-20 md:px-[3.2vw] md:pb-28 md:pt-20"
    >
      <div className="mb-5 h-3 w-32 animate-pulse rounded bg-current/10" />
      <div className="mb-6 h-20 max-w-2xl animate-pulse rounded bg-current/10" />
      <div className="mb-10 h-14 max-w-md animate-pulse rounded bg-current/10" />
      <div className="mb-8 h-4 w-56 animate-pulse rounded bg-current/10" />
      <ul className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5">
        {Array.from({ length: 6 }, (_, index) => (
          <li
            key={index}
            aria-hidden="true"
            className="theme-surface aspect-[0.8] animate-pulse"
          />
        ))}
      </ul>
    </section>
  );
}
