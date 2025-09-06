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
  const rating = (Math.random() * (5 - 4) + 4).toFixed(1); // Random rating between 4.0 and 5.0

  return (
    <Link href={`/listings/${property.id}`} className="group block h-full">
      <Card className="overflow-hidden transition-all duration-300 group-hover:shadow-xl flex flex-col h-full rounded-2xl bg-white border">
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
        <CardContent className="p-4 space-y-3 flex-grow">
          <div className="flex justify-between items-center text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 shrink-0" />
              <span className="truncate">{property.city}, {property.state}</span>
            </div>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <span>{rating}/5</span>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">
            Spacious {property.bedrooms}BHK apartment in a prime location with modern amenities.
          </p>
        </CardContent>
        <CardFooter className="p-4 flex justify-between items-center bg-secondary/50 mt-auto">
          <Button size="sm" asChild={false}>
            {property.type === 'sale' ? 'Buy Now' : 'Rent Now'}
          </Button>
          <p className="text-lg font-bold text-primary">
            ${property.price.toLocaleString()}
            {property.type === 'rent' && <span className="text-sm font-normal text-muted-foreground">/ month</span>}
          </p>
        </CardFooter>
      </Card>
    </Link>
  );
}
