import { PropertyCard } from "@/components/properties/PropertyCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Property } from "@/lib/types";

export function FeaturedProperties({ properties }: { properties: Property[] }) {
  const featuredProperties = properties.slice(0, 3);

  return (
    <section className="py-24 sm:py-32">
      <div className="container">
        <div className="flex flex-wrap justify-between items-center gap-4 mb-12">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline text-primary">Featured Property</h2>
          </div>
          <Button asChild variant="outline" className="rounded-full">
            <Link href="/listings">
              See All Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-1 lg:grid-cols-3">
          {featuredProperties.map(property => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </section>
  );
}
