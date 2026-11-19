"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiMenuFries } from "react-icons/ci";
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { portfolioLinks } from "./portfolioLinks";

export default function MobileNav() {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger aria-label="Open navigation" className="flex items-center justify-center">
        <CiMenuFries aria-hidden="true" className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent aria-describedby={undefined} className="flex flex-col">
        <SheetTitle className="sr-only">Main navigation</SheetTitle>
        <nav aria-label="Main navigation" className="mt-24 flex flex-col items-center gap-8">
          {portfolioLinks.map(({ name, path }) => (
            <SheetClose asChild key={path}>
              <Link
                href={path}
                aria-current={path === pathname ? "page" : undefined}
                className="text-xl transition-colors hover:text-accent aria-[current=page]:border-b-2 aria-[current=page]:border-accent aria-[current=page]:text-accent"
              >
                {name}
              </Link>
            </SheetClose>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
