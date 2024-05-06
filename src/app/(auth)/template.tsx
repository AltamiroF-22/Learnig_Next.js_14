"use client";
import { ChildrenProps } from "@/interfaces/children";
import { NavLinksProps } from "@/interfaces/nav-links";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks: NavLinksProps[] = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forgot Password", href: "/forgot-password" },
];

export default function AuthLayout({ children }: ChildrenProps) {
  const Pathname = usePathname();
  const [input, setInput] = useState<string>("");
  return (
    <div className="w-full p-4">
      <div className="">
        <input
          className="border-2 border-blue-500 p-2 w-1/2 rounded-lg"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      {navLinks.map((link) => {
        const isActive = Pathname.startsWith(link.href);
        return (
          <Link
            className={`p-2 ${isActive ? "font-bold" : "text-blue-400"}`}
            href={link.href}
            key={link.name}
          >
            {link.name}
          </Link>
        );
      })}
      {children}
    </div>
  );
}
