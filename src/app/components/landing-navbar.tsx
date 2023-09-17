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
    <nav className="p-4 bg-transparent flex items-center justify-between">
      <Link href="/" className="flex items-center">
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
        <Link href={isSignedIn ? "/calendar" : "/sign-up"}>
          Get Started
        </Link>
      </div>
    </nav>
  )
}