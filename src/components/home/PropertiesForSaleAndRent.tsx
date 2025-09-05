"use client";

import { useMemo } from 'react';
import type { Property } from '@/lib/types';
import { PropertyCard } from '@/components/properties/PropertyCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from '../ui/button';
import Link from 'next/link';

interface PropertiesForSaleAndRentProps {
  properties: Property[];
}

export function PropertiesForSaleAndRent({ properties }: PropertiesForSaleAndRentProps) {
  const propertiesForSale = useMemo(() => properties.filter(p => p.type === 'sale').slice(0, 8), [properties]);
  const propertiesForRent = useMemo(() => properties.filter(p => p.type === 'rent').slice(0, 8), [properties]);
  
  return (
    <section className="py-24 sm:py-32">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">Explore Our Available Properties</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Discover a variety of properties tailored to your needs, whether you're looking to buy or rent.
          </p>
        </div>

        <Tabs defaultValue="sale" className="w-full">
          <TabsList className="grid w-full max-w-sm mx-auto grid-cols-2 mb-8">
            <TabsTrigger value="sale">For Sale</TabsTrigger>
            <TabsTrigger value="rent">For Rent</TabsTrigger>
          </TabsList>
          <TabsContent value="sale" className="mt-8">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {propertiesForSale.map(property => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="rent" className="mt-8">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {propertiesForRent.map(property => (
                <PropertyCard key={property.id} property={property} variant="rent"/>
              ))}
            </div>
          </TabsContent>
        </Tabs>
        <div className="text-center mt-12">
          <Button asChild size="lg" className="rounded-full">
            <Link href="/listings">Explore All Properties</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
