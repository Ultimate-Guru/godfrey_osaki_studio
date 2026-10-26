import type { Metadata } from 'next'
import SiteFooter from "@/components/site-footer";
import SiteHeader from "../about/SiteHeader";
import PortfolioSection from "./PortfolioSection";

export const metadata: Metadata = {
    title: "Portfolio - Godfrey Osaki Studios",
    description: "Explore our portfolio of projects and creative works.",
};

export default function PortfolioPage() {
    return (
        <main id="top" className="min-h-screen overflow-x-hidden bg-[#faf8f4]">
            <SiteHeader />
            <PortfolioSection />
            <SiteFooter />
        </main>
    );
}