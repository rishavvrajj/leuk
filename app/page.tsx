"use client";

import { NavBar } from "@/components/page/NavBar";
import { Hero } from "@/components/page/Hero";
import { SocialProof } from "@/components/page/SocialProof";
import { Problem } from "@/components/page/Problem";
import { HowItWorks } from "@/components/page/HowItWorks";
import { Features } from "@/components/page/Features";
import { Beliefs } from "@/components/page/Beliefs";
import { Profiles } from "@/components/page/Profiles";
import { FinalCta } from "@/components/page/FinalCta";
import { Footer } from "@/components/page/Footer";
import { Pattern } from "@/components/ui/Pattern";

export default function Home() {
  return (
    <main className="relative flex w-full flex-col items-center">
      <Pattern />

      <div className="z-10 my-4 flex w-full max-w-7xl flex-col items-center space-y-8">
        <NavBar />
        <Hero />
        <SocialProof />
        <Problem />
        <HowItWorks />
        <Features />
        <Beliefs />
        <Profiles />
        <FinalCta />
        <Footer />
      </div>
    </main>
  );
}