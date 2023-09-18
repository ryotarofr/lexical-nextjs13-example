"use client";

// import { Montserrat } from "next/font/google";
import Image from "next/image"
import Link from "next/link"
import { useAuth } from "@clerk/nextjs";

// const font = Montserrat({ weight: '600', subsets: ['latin'] });

export const LandingNavbar = () => {
  const { isSignedIn } = useAuth();

  return (
    <nav
      className="mx-4 my-8 bg-transparent flex items-center justify-between
      md:mx-20
    ">
      <Link href="/" className="flex items-center no-underline cursor-pointer">
        <div className="relative h-12 w-12 mr-3">
          <Image fill alt="Logo" src="/logo.png" />
        </div>
        <div
          // className={cn("text-2xl font-bold", font.className)}
          className=" text-indigo-900 text-2xl font-bold"
        >
          Naisei
        </div>
      </Link>
      <div className="flex items-center gap-x-2">
        <Link
          href={isSignedIn ? "/calendar" : "/sign-up"}
          className="no-underline text-white bg-indigo-900 px-4 py-2 rounded-full hover:bg-indigo-800"
        >
          Dashboard
        </Link>
      </div>
    </nav>
  )
}