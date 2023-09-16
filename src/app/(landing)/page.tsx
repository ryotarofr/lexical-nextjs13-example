// import { LandingNavbar } from "@/components/landing-navbar";
// import { LandingHero } from "@/components/landing-hero";
// import { LandingContent } from "@/components/landing-content";

import { LandingHero } from "../components/landing-hero";
import { LandingNavbar } from "../components/landing-navbar";


// export const dynamic = "force-dynamic"

const LandingPage = () => {
  return (
    <div className="h-full">
      <LandingNavbar />
      <LandingHero />
      LP page
      {/* <LandingContent /> */}
    </div>
  );
}

export default LandingPage;
