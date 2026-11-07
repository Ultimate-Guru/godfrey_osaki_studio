import type { Metadata } from 'next'
import SiteFooter from "@/components/site-footer";
import SiteHeader from "../about/SiteHeader";
import PortfolioSection from "./PortfolioSection";
import PricingSection from "@/components/pricing-section";

export const metadata: Metadata = {
    title: "Portfolio - Godfrey Osaki Studios",
    description: "Explore our portfolio of projects and creative works.",
};

export default function PortfolioPage() {
    return (
        <main id="top" className="theme-bg theme-fg min-h-screen overflow-x-hidden">
            <SiteHeader />
            <PortfolioSection />
            <PricingSection showDescriptions />
            <SiteFooter />
        </main>
    );
}