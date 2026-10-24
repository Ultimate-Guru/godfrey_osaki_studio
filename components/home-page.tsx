import HeroSection from "./hero-section";
import SiteFooter from "./site-footer";
import SpecialtyTicker from "./specialty-ticker";
import StudioSection from "./studio-section";

export default function HomePage() {
  return (
    <main id="top" className="min-h-screen overflow-x-hidden">
      <HeroSection />
      <SpecialtyTicker />
      <StudioSection />
      <SiteFooter />
    </main>
  );
}
