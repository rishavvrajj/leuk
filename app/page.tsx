import Features from "@/components/Features";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import LogoCarousel from "@/components/LogoCarousel";
import UserCarousel from "@/components/UserCarousel";
import Work from "@/components/Work";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col bg-black4">

      {/* Hero */}
      <HeroSection />

      {/* Carousel */}
      <LogoCarousel />
      <UserCarousel />

      {/* others */}
      <Features />
      <Work />

      {/* Footer */}
      <Footer/>
    </main>
  );
}
