import type { Metadata } from 'next'
import SiteFooter from "@/components/site-footer";
import AboutSection from "./AboutSection";
import SiteHeader from "./SiteHeader";

export const metadata: Metadata = {
  title: "About Us - Godfrey Osaki Studios",
  description: "Learn more about our company, what we do & who we are",
};

export default function AboutPage() {
  return (
    <main id="top" className="theme-bg theme-fg min-h-screen overflow-x-hidden">
     <SiteHeader />
     <AboutSection />
     <SiteFooter />
    </main>
  );
}