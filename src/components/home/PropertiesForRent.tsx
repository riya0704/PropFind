import { PropertyCard } from "@/components/properties/PropertyCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { Property } from "@/lib/types";

export function PropertiesForRent({ properties }: { properties: Property[] }) {
  const propertiesForRent = properties.filter(p => p.type === 'rent').slice(0, 4);

  return (
    <section className="py-24 sm:py-32">
      <div className="container">
        <div className="flex flex-wrap justify-between items-center gap-4 mb-12">
            <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">Find The Perfect Rental Home</h2>
                <p className="mt-2 text-lg text-muted-foreground">
                    Discover top-notch rental properties tailored to your lifestyle and budget.
                </p>
            </div>
          <Button asChild variant="default" size="lg" className="rounded-full">
            <Link href="/listings">View All Rentals</Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {propertiesForRent.map(property => (
            <PropertyCard key={property.id} property={property} variant="rent" />
          ))}
        </div>
      </div>
    </section>
  );
}
