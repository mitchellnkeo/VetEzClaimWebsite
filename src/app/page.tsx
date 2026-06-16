import ContactSection from "@/components/ContactSection";
import DownloadSection from "@/components/DownloadSection";
import FeaturesSection from "@/components/FeaturesSection";
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <HowItWorksSection />
        <FeaturesSection />
        <DownloadSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
