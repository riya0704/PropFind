import Image from 'next/image';
import { MapPin, Bed, Bath, LandPlot } from 'lucide-react';
import type { Property } from '@/lib/types';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import Link from 'next/link';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';

interface PropertyCardProps {
  property: Property;
  variant?: 'default' | 'rent';
}

export function PropertyCard({ property, variant = 'default' }: PropertyCardProps) {
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
             <Badge className="absolute top-4 left-4" variant={property.type === 'sale' ? 'default' : 'accent'}>
                For {property.type}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="p-4 space-y-3 flex-grow">
          <h3 className="text-lg font-bold leading-tight truncate text-foreground" title={property.name}>
            {property.name}
          </h3>
          <div className="flex items-center text-sm text-muted-foreground gap-2">
            <MapPin className="w-4 h-4 shrink-0" />
            <span className="truncate">{property.city}, {property.state}</span>
          </div>
          <div className="flex justify-between text-sm text-muted-foreground pt-2 border-t border-dashed">
            <div className="flex items-center gap-1">
                <Bed className="w-4 h-4 text-primary" />
                <span>{property.bedrooms} Beds</span>
            </div>
            <div className="flex items-center gap-1">
                <Bath className="w-4 h-4 text-primary" />
                <span>{property.bathrooms} Baths</span>
            </div>
            <div className="flex items-center gap-1">
                <LandPlot className="w-4 h-4 text-primary" />
                <span>{property.area} sqft</span>
            </div>
          </div>
        </CardContent>
        <CardFooter className="p-4 flex justify-between items-center bg-secondary/50 mt-auto">
            <p className="text-lg font-bold text-primary">
              ${property.price.toLocaleString()}
              {property.type === 'rent' && <span className="text-sm font-normal text-muted-foreground">/ month</span>}
            </p>
          <Button size="sm" asChild={false}>
            View Details
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
}
