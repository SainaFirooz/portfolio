"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const Header = () => {
  const pathname = usePathname();

  const isHomePage = pathname === "/";

  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        <Link href={isHomePage ? "#home" : "/"} className="nav-item">
          Home
        </Link>
        <Link
          href={isHomePage ? "#projects" : "/#projects"}
          className="nav-item"
        >
          Projects
        </Link>
        <Link href={isHomePage ? "#about" : "/#about"} className="nav-item">
          About
        </Link>
        <Link
          href={isHomePage ? "#contact" : "/#contact"}
          className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
        >
          Contact
        </Link>
      </nav>
    </div>
  );
};
