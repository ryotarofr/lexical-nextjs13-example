"use client";

import Link from "next/link";
import { useAuth } from "@clerk/nextjs";
// import { TCanvas } from "./Canvas/TCanvas";

export const LandingHero = () => {
  const { isSignedIn } = useAuth();

  return (

    <div className="z-20 font-bold text-center space-y-8 mt-28 sm:mt-2 mb-16 sm:mb-10">
      <div className="text-sm md:text-xl lg:text-2xl font-light">
        NAISEI supports psychological wellbeing.
      </div>
      <div>
        <Link
          href={isSignedIn ? "/calendar" : "/sign-up"}
          className="px-4 py-3 cursor-pointer rounded-full no-underline text-white  bg-gradient-to-r from-purple-400 to-indigo-600"
        >
          Get started now !
        </Link>
      </div>
      <div className=" text-xs md:text-sm font-normal">
        No credit required.
      </div>


    </div>

  );
};
