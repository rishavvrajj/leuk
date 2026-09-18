import Features from "@/components/Features";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import LogoCarousel from "@/components/LogoCarousel";
import UserCarousel from "@/components/UserCarousel";
import Beliefs from "@/components/Beliefs";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col bg-neutral-950">

      {/* Hero */}
      <HeroSection />

      {/* Carousel */}
      <LogoCarousel />
      <UserCarousel />

      {/* others */}
      <Features />
      <Beliefs />

      {/* Footer */}
      <Footer/>
    </main>
  );
}