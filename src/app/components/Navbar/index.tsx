
"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { BsMenuApp } from "react-icons/bs"
import { useState } from "react";
import { UserButton } from "@clerk/nextjs";
import { ProButton } from "../ProButton";

const navItems = [
  {
    path: "/note",
    name: "Note",
  },
  {
    path: "/calendar",
    name: "Calendar",
  },
  {
    path: "/chart",
    name: "Chart",
  },
];

export default function NavBar({
  apiLimitCount = 0,
  isPro = false
}: {
  apiLimitCount: number;
  isPro: boolean;
}) {
  let pathname = usePathname() || "/";

  return (
    <div className=" p-[0.4rem] rounded-lg mb-12 sticky top-4 z-[100]">
      <nav className="flex gap-2 relative justify-around items-center w-full z-[100]  rounded-lg">
        <div className="hidden sm:block">
          <Link href="/" className="flex items-center no-underline text-zinc-900">
            <Image width={36} height={36} alt="Logo" src="/logo.png" />
            <span className="text-2xl">
              Naisei
            </span>
          </Link>
        </div>
        <div className="">
          {navItems.map((item, index) => {
            const isActive = item.path === pathname;

            return (
              <Link
                key={item.path}
                className={`px-4 py-2 rounded-md text-sm lg:text-base hover:bg-slate-200 relative no-underline duration-300 ease-in ${isActive ? "text-zinc-400" : "text-zinc-900"
                  }`}
                href={item.path}
              >
                <span>{item.name}</span>
              </Link>
            );
          })}
        </div>
        <UserButton afterSignOutUrl="/" />

      </nav>
      <div className="flex justify-end">
        <ProButton isPro={isPro} apiLimitCount={apiLimitCount} />
      </div >
    </div>
  );
}