"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { portfolioLinks } from "./portfolioLinks";

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav aria-label="Main navigation" className="flex gap-8">
      {portfolioLinks.map(({ name, path }) => (
        <Link
          key={path}
          href={path}
          aria-current={path === pathname ? "page" : undefined}
          className="font-medium transition-colors hover:text-accent aria-[current=page]:border-b-2 aria-[current=page]:border-accent aria-[current=page]:text-accent"
        >
          {name}
        </Link>
      ))}
    </nav>
  );
}
