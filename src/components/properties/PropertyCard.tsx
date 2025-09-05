import Image from 'next/image';
import { BedDouble, Bath, LandPlot, MapPin } from 'lucide-react';
import type { Property } from '@/lib/types';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

interface PropertyCardProps {
  property: Property;
}

export function PropertyCard({ property }: PropertyCardProps) {
  return (
    <Link href={`/listings/${property.id}`} className="group block h-full">
      <Card className="overflow-hidden transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1 flex flex-col h-full">
        <CardHeader className="p-0">
          <div className="relative h-56 w-full">
            <Image
              src={property.image}
              alt={property.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              data-ai-hint="house exterior"
            />
            <Badge
              className="absolute top-3 right-3 capitalize"
              variant={property.type === 'sale' ? 'default' : 'accent'}
            >
              For {property.type}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="p-4 space-y-2 flex-grow">
          <CardTitle className="text-xl font-semibold leading-tight truncate" title={property.name}>
            {property.name}
          </CardTitle>
          <div className="flex items-center text-sm text-muted-foreground gap-2">
              <MapPin className="w-4 h-4 shrink-0" />
              <span className="truncate">{property.city}, {property.state}</span>
          </div>
          <div className="flex items-center pt-2 text-sm text-foreground space-x-4">
              <div className="flex items-center gap-1.5">
                  <BedDouble className="w-4 h-4 text-muted-foreground" />
                  <span>{property.bedrooms} Beds</span>
              </div>
              <div className="flex items-center gap-1.5">
                  <Bath className="w-4 h-4 text-muted-foreground" />
                  <span>{property.bathrooms} Baths</span>
              </div>
              <div className="flex items-center gap-1.5">
                  <LandPlot className="w-4 h-4 text-muted-foreground" />
                  <span>{property.area.toLocaleString()} sqft</span>
              </div>
          </div>
        </CardContent>
        <CardFooter className="p-4 flex justify-between items-center bg-secondary/50 mt-auto">
          <p className="text-2xl font-bold text-primary">
            ${property.price.toLocaleString()}
            {property.type === 'rent' && <span className="text-sm font-normal text-muted-foreground">/ month</span>}
          </p>
        </CardFooter>
      </Card>
    </Link>
  );
}
