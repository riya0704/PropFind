import Image from 'next/image';
import { MapPin, Star, Bookmark } from 'lucide-react';
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
  const rating = (Math.random() * (5 - 4) + 4).toFixed(1);

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
            <Button variant="ghost" size="icon" className="absolute top-2 right-2 bg-white/30 backdrop-blur-sm text-primary hover:bg-white/50 hover:text-primary">
              <Bookmark className="h-5 w-5" />
            </Button>
          </div>
        </CardHeader>
        <CardContent className="p-4 space-y-3 flex-grow">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 shrink-0 text-muted-foreground" />
            <span className="truncate text-muted-foreground text-sm">{property.city}, {property.state}</span>
          </div>
          <p className="font-semibold text-lg">{property.name}</p>
          <p className="text-sm text-muted-foreground">
            Spacious {property.bedrooms}BHK apartment in a prime location with modern amenities.
          </p>
        </CardContent>
        <CardFooter className="p-4 flex justify-between items-center bg-white mt-auto">
          <p className="text-lg font-bold text-primary">
            ${property.price.toLocaleString()}
            {property.type === 'rent' && <span className="text-sm font-normal text-muted-foreground">/ month</span>}
          </p>
          <Button size="sm" asChild={false} className="rounded-full">
            Know More
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
}
