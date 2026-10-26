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
    <main id="top" className="min-h-screen overflow-x-hidden bg-[#faf8f4]">
     <SiteHeader />
     <AboutSection />
     <SiteFooter />
    </main>
  );
}