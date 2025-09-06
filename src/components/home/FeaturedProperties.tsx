import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Property } from "@/lib/types";

export function FeaturedProperties({ properties }: { properties: Property[] }) {
  return (
    <section className="py-24 sm:py-32">
      <div className="container">
        <div className="flex flex-wrap justify-between items-center gap-4 mb-12">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline text-primary">Featured Property</h2>
          </div>
          <Button asChild variant="outline" className="rounded-full">
            <Link href="/listings">
              See 268 New Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-[600px]">
          <div className="relative h-full w-full rounded-2xl overflow-hidden group">
            <Image
              src="https://picsum.photos/800/1200?random=21"
              alt="Kenanga Residence"
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              data-ai-hint="modern residence exterior"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-8 left-8 text-white">
              <p className="text-sm">By Finder & Projects</p>
              <h3 className="text-2xl font-bold mt-1">Kenanga Residence</h3>
            </div>
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-6 h-full">
            <div className="relative h-full w-full rounded-2xl overflow-hidden group col-span-1 row-span-2">
                 <Image
                    src="https://picsum.photos/600/1200?random=22"
                    alt="Property 2"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    data-ai-hint="modern home exterior"
                />
            </div>
             <div className="relative h-full w-full rounded-2xl overflow-hidden group">
                 <Image
                    src="https://picsum.photos/600/600?random=23"
                    alt="Property 3"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    data-ai-hint="poolside house day"
                />
            </div>
             <div className="relative h-full w-full rounded-2xl overflow-hidden group">
                 <Image
                    src="https://picsum.photos/600/600?random=24"
                    alt="Property 4"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    data-ai-hint="modern apartment exterior"
                />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
