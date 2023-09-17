"use client";

import { Montserrat } from "next/font/google";
import Image from "next/image"
import Link from "next/link"
import { useAuth } from "@clerk/nextjs";
import { cn } from "../utils/utils";

// const font = Montserrat({ weight: '600', subsets: ['latin'] });

export const LandingNavbar = () => {
  const { isSignedIn } = useAuth();

  return (
    <nav
      className="mx-4 my-4 bg-transparent flex items-center justify-between
      md:mx-20
    ">
      <Link href="/" className="flex items-center no-underline">
        <div className="relative h-12 w-12 mr-4">
          <Image fill alt="Logo" src="/logo.png" />
        </div>
        <h1
        // className={cn("text-2xl font-bold", font.className)}
        >
          Naisei
        </h1>
      </Link>
      <div className="flex items-center gap-x-2">
        <Link
          href={isSignedIn ? "/calendar" : "/sign-up"}
          className="no-underline text-white bg-indigo-600 px-4 py-2 rounded-full hover:bg-indigo-700"
        >
          Get Started
        </Link>
      </div>
    </nav>
  )
}