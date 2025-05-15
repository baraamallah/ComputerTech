
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { ComponentsSection } from "@/components/sections/ComponentsSection";
import { TryItSection } from "@/components/sections/TryItSection";
import { SafetyWellbeingSection } from "@/components/sections/SafetyWellbeingSection";
import { AboutSection } from "@/components/sections/AboutSection";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <ComponentsSection />
        <TryItSection />
        <SafetyWellbeingSection />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}
