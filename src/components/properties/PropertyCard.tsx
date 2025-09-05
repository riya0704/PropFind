import Image from 'next/image';
import { MapPin, Star } from 'lucide-react';
import type { Property } from '@/lib/types';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import Link from 'next/link';
import { Button } from '../ui/button';

interface PropertyCardProps {
  property: Property;
  variant?: 'default' | 'rent';
}

export function PropertyCard({ property, variant = 'default' }: PropertyCardProps) {
  return (
    <Link href={`/listings/${property.id}`} className="group block h-full">
      <Card className="overflow-hidden transition-all duration-300 group-hover:shadow-xl flex flex-col h-full rounded-2xl bg-white">
        <CardHeader className="p-0">
          <div className="relative h-56 w-full">
            <Image
              src={property.image}
              alt={property.name}
              fill
              className="object-cover rounded-t-2xl"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              data-ai-hint="house exterior"
            />
          </div>
        </CardHeader>
        <CardContent className="p-4 space-y-2 flex-grow">
          <h3 className="text-lg font-bold leading-tight truncate text-primary" title={property.name}>
            {property.name}
          </h3>
          <div className="flex items-center text-sm text-muted-foreground gap-2">
            <MapPin className="w-4 h-4 shrink-0" />
            <span className="truncate">{property.city}, {property.state}</span>
          </div>
          <p className="text-sm text-muted-foreground line-clamp-2">
            Spacious {property.bedrooms}BHK apartment in a prime location with modern amenities.
          </p>
        </CardContent>
        <CardFooter className="p-4 flex justify-between items-center bg-white mt-auto">
          {variant === 'rent' ? (
            <p className="text-lg font-bold text-foreground">
              ${property.price.toLocaleString()} <span className="text-sm font-normal text-muted-foreground">/ month</span>
            </p>
          ) : (
            <p className="text-lg font-bold text-foreground">
              ${property.price.toLocaleString()}
            </p>
          )}
          <Button asChild size="md" className="rounded-lg">
            <Link href={`/listings/${property.id}`}>{variant === 'rent' ? 'Rent Now' : 'Buy Now'}</Link>
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
}
