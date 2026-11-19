import Link from "next/link";
import { Button } from "@/components/ui/button";
import Photo from "@/components/Photo";
import Social from "@/components/Social";

export default function Home() {
  return (
    <main className="container mx-auto pb-12">
      <div className="flex flex-col items-center justify-between gap-8 xl:flex-row xl:py-8">
        <div className="order-2 text-center xl:order-none xl:text-left">
          <p className="mb-3 text-xl">Java Full Stack Developer</p>
          <h1 className="h1 text-accent">Sainath Seeram</h1>
          <p className="mx-auto mb-8 mt-5 max-w-[540px] text-white/80 xl:mx-0">
            I build Spring Boot APIs and Angular and React interfaces for banking,
            financial services, and internal enterprise tools.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-5 xl:justify-start">
            <Button asChild variant="outline" size="lg">
              <Link href="/work">View selected work</Link>
            </Button>
            <Social
              containerStyles="flex"
              iconStyles="flex h-9 w-9 items-center justify-center rounded-full border border-accent text-accent hover:bg-accent hover:text-primary"
            />
          </div>
        </div>
        <div className="order-1 xl:order-none">
          <Photo />
        </div>
      </div>
    </main>
  );
}
