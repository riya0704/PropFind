import { PropertyCard } from "@/components/properties/PropertyCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { Property } from "@/lib/types";

export function PropertiesForSale({ properties }: { properties: Property[] }) {
  const propertiesForSale = properties.filter(p => p.type === 'sale').slice(0, 4);

  return (
    <section className="py-24 sm:py-32 bg-secondary">
      <div className="container">
        <div className="flex flex-wrap justify-between items-center gap-4 mb-12">
            <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">Best Properties Available For Sale</h2>
                <p className="mt-2 text-lg text-muted-foreground">
                    Browse our top-rated properties for sale, featuring premium listings tailored to your needs.
                </p>
            </div>
          <Button asChild variant="default" size="lg" className="rounded-full">
            <Link href="/listings">View More Properties</Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {propertiesForSale.map(property => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </section>
  );
}
