import Image from 'next/image';
import { MapPin, Bookmark } from 'lucide-react';
import type { Property } from '@/lib/types';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import Link from 'next/link';
import { Button } from '../ui/button';

interface PropertyCardProps {
  property: Property;
}

export function PropertyCard({ property }: PropertyCardProps) {
  return (
    <Link href={`/listings/${property.id}`} className="group block h-full">
      <Card className="overflow-hidden transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1 flex flex-col h-full rounded-2xl">
        <CardHeader className="p-0">
          <div className="relative h-64 w-full">
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
        <CardContent className="p-6 space-y-3 flex-grow">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-bold leading-tight truncate text-primary" title={property.name}>
                  {property.name}
                </h3>
                <div className="flex items-center text-sm text-muted-foreground gap-2 mt-1">
                    <MapPin className="w-4 h-4 shrink-0" />
                    <span className="truncate">{property.city}, {property.state}</span>
                </div>
              </div>
              <Button variant="outline" size="icon" className="rounded-full border-2 text-primary hover:bg-primary/10 hover:text-primary shrink-0">
                <Bookmark className="w-5 h-5" />
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
                Spacious {property.bedrooms}BHK apartment in a prime location with modern amenities.
            </p>
        </CardContent>
        <CardFooter className="p-6 flex justify-between items-center bg-white mt-auto">
          <p className="text-2xl font-bold text-foreground">
            ${property.price.toLocaleString()}
          </p>
          <Button asChild size="lg" className="rounded-full">
            <Link href={`/listings/${property.id}`}>Know More</Link>
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
}
