"use client";

import Link from "next/link";
import { useAuth } from "@clerk/nextjs";

export const LandingHero = () => {
  const { isSignedIn } = useAuth();

  return (
    <div className="font-bold top-0 text-center space-y-5">

      <div className="relative bottom-80 text-sm md:text-xl font-light">
        NAISEI supports psychological wellbeing.
      </div>
      <div className="relative bottom-80">
        <Link href={isSignedIn ? "/calendar" : "/sign-up"}>
          You can start for free.
        </Link>
      </div>
      <div className="relative bottom-80 text-xs md:text-sm font-normal">
        No credit card required.
      </div>
    </div>
  );
};
