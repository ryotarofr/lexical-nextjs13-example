
"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const navItems = [
  {
    path: "/note",
    name: "Note",
  },
  {
    path: "/calender",
    name: "Calender",
  },
  {
    path: "/chart",
    name: "Chart",
  },
];

export default function NavBar() {
  let pathname = usePathname() || "/";

  return (
    <div className=" p-[0.4rem] rounded-lg mb-12 sticky top-4 z-[100]">
      <nav className="flex gap-2 relative justify-center w-full z-[100]  rounded-lg">
        {navItems.map((item, index) => {
          const isActive = item.path === pathname;

          return (
            <Link
              key={item.path}
              className={`px-4 py-2 rounded-md text-sm lg:text-base hover:bg-slate-200 relative no-underline duration-300 ease-in ${isActive ? "text-zinc-100" : "text-zinc-900"
                }`}
              href={item.path}
            >
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}