"use client";
import { ChildrenProps } from "@/interfaces/children";
import { NavLinksProps } from "@/interfaces/nav-links";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks: NavLinksProps[] = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forgot Password", href: "/forgot-password" },
];

export default function AuthLayout({ children }: ChildrenProps) {
  const Pathname = usePathname();
  return (
    <div className="w-full p-4">
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
