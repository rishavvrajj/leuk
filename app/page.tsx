"use client";

import { NavBar } from "@/components/page/NavBar";
import { Hero } from "@/components/page/Hero";
import { SocialProof } from "@/components/page/SocialProof";
import { Problem } from "@/components/page/Problem";
import { HowItWorks } from "@/components/page/HowItWorks";
import { Features } from "@/components/page/Features";
import { Beliefs } from "@/components/page/Beliefs";
import { FinalCta } from "@/components/page/FinalCta";
import { Footer } from "@/components/page/Footer";
import { Pattern } from "@/components/ui/Pattern";
import { SectionSeparator } from "@/components/ui/SectionSeparator";

export default function Home() {
  return (
    <main className="relative flex w-full flex-col items-center">
      <Pattern />

      <div className="z-10 flex w-full flex-col items-center">
        <SectionSeparator />
        <NavBar />
        <SectionSeparator />
        <Hero />
        <SectionSeparator />
        <SocialProof />
        <SectionSeparator />
        <Problem />
        <SectionSeparator />
        <HowItWorks />
        <SectionSeparator />
        <Features />
        <SectionSeparator />
        <Beliefs />
        <SectionSeparator />
        <FinalCta />
        <SectionSeparator />
        <Footer />
        <SectionSeparator />
      </div>
    </main>
  );
}
