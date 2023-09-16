
"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { BsMenuApp } from "react-icons/bs"
import { useState } from "react";

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

export default function NavBar() {

  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(prev => !prev)
  }

  let pathname = usePathname() || "/";

  return (
    <div className=" p-[0.4rem] rounded-lg mb-12 sticky top-4 z-[100]">
      <nav className="flex gap-2 relative justify-around w-full z-[100]  rounded-lg">
        <div className="hidden sm:block">
          <Link href="/" className="flex items-center no-underline text-zinc-900">
            <Image width={30} height={30} alt="Logo" src="/logo.png" />
            <span className="text-xl">
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
        {/* <button className="sm:hidden border-none cursor-pointer" onClick={handleClick}>
          <BsMenuApp size={24} />
        </button> */}
        {/* <div>
          <button className="relative group border-none" onClick={handleClick}>
            <div className="relative flex overflow-hidden items-center justify-center rounded-full w-[36px] h-[36px] transform transition-all  ring-0 ring-gray-300 group-focus:ring-4 ring-opacity-10 duration-200">
              <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
                <div className="bg-zinc-900 h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:rotate-[42deg]"></div>
                <div className="bg-zinc-900 h-[2px] w-1/2 rounded transform transition-all duration-300 group-focus:-translate-x-10"></div>
                <div className="bg-zinc-900 h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:-rotate-[42deg]"></div>
              </div>
            </div>
          </button>
        </div>
        {open ? <>test</> : <>not open</>} */}
        {/* ここにclerkのuserIcon入れる */}
      </nav>

    </div >
  );
}