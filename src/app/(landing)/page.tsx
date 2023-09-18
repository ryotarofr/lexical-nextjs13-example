"use client"

import { LandingHero } from "../components/landing-hero";
import { LandingNavbar } from "../components/landing-navbar";
import { LandingContent } from "../components/landing-content";
import { TCanvas } from "../components/Canvas/TCanvas";
import { LandingContent2 } from "../components/landing-content2";


// export const dynamic = "force-dynamic"

const LandingPage = () => {
  return (
    <div className="">
      <div className="">

        <LandingNavbar />
        <LandingHero />

        <LandingContent />
      </div>

      <LandingContent2 />
    </div>
  );
}

export default LandingPage;
