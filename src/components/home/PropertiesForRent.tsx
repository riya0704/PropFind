import { PropertyCard } from "@/components/properties/PropertyCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { Property } from "@/lib/types";

export function PropertiesForRent({ properties }: { properties: Property[] }) {
  const propertiesForRent = properties.filter(p => p.type === 'rent').slice(0, 4);

  return (
    <section className="py-24 sm:py-32">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12">
            <div className="flex-1">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline text-primary">Find The Perfect Rental Home</h2>
                <p className="mt-2 text-lg text-muted-foreground max-w-3xl">
                    Browse our top-rated properties for rent, featuring premium listings tailored to your needs. Find your dream home today!
                </p>
            </div>
          <Button asChild variant="default" size="lg" className="rounded-full mt-4 md:mt-0">
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
