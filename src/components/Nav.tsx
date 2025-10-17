"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const active = useMemo(() => pathname || "/", [pathname]);

  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 dark:supports-[backdrop-filter]:bg-black/30 border-b border-black/10 dark:border-white/10">
      <nav className="mx-auto max-w-6xl px-4 md:px-6 h-14 flex items-center justify-between">
        <Link href="/" className="font-bold tracking-tight">
          Ankit Ranjan DMS
        </Link>
        <div className="flex items-center gap-1">
          {links.map(({ href, label }) => {
            const isActive = active === href;
            return (
              <Link
                key={href}
                href={href}
                prefetch={false}
                className={
                  "px-3 py-1.5 text-sm rounded-md transition-colors " +
                  (isActive
                    ? "bg-sky-500 text-white"
                    : "hover:bg-black/5 dark:hover:bg-white/10")
                }
                aria-current={isActive ? "page" : undefined}
              >
                {label}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}


