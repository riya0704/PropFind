import { getPropertyById } from '@/lib/api';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { BedDouble, Bath, LandPlot, MapPin, Phone, User as UserIcon } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

export default async function PropertyDetailPage({ params }: { params: { id: string } }) {
  const property = await getPropertyById(params.id);

  if (!property) {
    notFound();
  }

  return (
    <div className="bg-background">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="relative h-[400px] md:h-[500px] w-full overflow-hidden rounded-lg shadow-lg mb-8">
              <Image
                src={property.image}
                alt={property.name}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 1000px"
                data-ai-hint="house interior"
              />
              <Badge
                className="absolute top-4 right-4 text-sm px-3 py-1"
                variant={property.type === 'sale' ? 'default' : 'accent'}
              >
                For {property.type}
              </Badge>
            </div>
            
            <Card className="overflow-hidden">
              <CardHeader>
                <div className="flex flex-col md:flex-row justify-between md:items-start gap-4">
                    <div>
                      <CardTitle className="text-3xl lg:text-4xl font-bold font-headline">{property.name}</CardTitle>
                      <div className="flex items-center text-lg text-muted-foreground gap-2 mt-2">
                        <MapPin className="w-5 h-5 shrink-0" />
                        <span>{property.city}, {property.state}</span>
                      </div>
                    </div>
                    <div className="mt-2 md:mt-0 text-left md:text-right shrink-0">
                      <p className="text-4xl font-bold text-primary">
                        ${property.price.toLocaleString()}
                        {property.type === 'rent' && <span className="text-base font-normal text-muted-foreground">/ month</span>}
                      </p>
                    </div>
                </div>
              </CardHeader>
              <CardContent>
                <Separator className="my-6" />
                <h3 className="text-2xl font-semibold mb-4 font-headline">Property Details</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-center">
                    <div className="flex flex-col items-center gap-2 p-4 bg-secondary/50 rounded-lg">
                        <BedDouble className="w-8 h-8 text-primary" />
                        <span className="font-semibold text-lg">{property.bedrooms}</span>
                        <span className="text-muted-foreground">Bedrooms</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 p-4 bg-secondary/50 rounded-lg">
                        <Bath className="w-8 h-8 text-primary" />
                        <span className="font-semibold text-lg">{property.bathrooms}</span>
                        <span className="text-muted-foreground">Bathrooms</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 p-4 bg-secondary/50 rounded-lg col-span-2 sm:col-span-1">
                        <LandPlot className="w-8 h-8 text-primary" />
                        <span className="font-semibold text-lg">{property.area.toLocaleString()}</span>
                        <span className="text-muted-foreground">sqft</span>
                    </div>
                </div>
                <Separator className="my-6" />
                <div>
                  <h3 className="text-2xl font-semibold mb-4 font-headline">Description</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Discover this beautiful {property.name.toLowerCase()} located in the heart of {property.city}. This property boasts {property.bedrooms} spacious bedrooms and {property.bathrooms} modern bathrooms, spread across {property.area.toLocaleString()} square feet of living space. The interior features an open-concept layout perfect for entertaining, with ample natural light throughout. The exterior offers a charming facade and a well-maintained yard. Situated in a friendly neighborhood in {property.state}, you'll have easy access to local amenities, parks, and schools. This is a perfect place to call home, whether you're looking to buy or rent. Don't miss out on this fantastic opportunity!
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="lg:col-span-1 space-y-8">
              <Card>
                  <CardHeader>
                      <CardTitle className="text-2xl font-headline">Contact Agent</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                      <div className="flex items-center gap-4">
                          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary">
                             <UserIcon className="w-6 h-6" />
                          </div>
                          <div>
                              <p className="font-semibold">{property.ownerName}</p>
                              <p className="text-sm text-muted-foreground">Property Owner</p>
                          </div>
                      </div>
                       <div className="flex items-center gap-4">
                          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary">
                             <Phone className="w-6 h-6" />
                          </div>
                          <div>
                              <p className="font-semibold">{property.contactNumber}</p>
                              <p className="text-sm text-muted-foreground">Contact</p>
                          </div>
                      </div>
                      <Button className="w-full" size="lg">Request Info</Button>
                      <Button className="w-full" size="lg" variant="outline">Schedule a Tour</Button>
                  </CardContent>
              </Card>

              <Card>
                  <CardHeader>
                      <CardTitle className="text-2xl font-headline">Location</CardTitle>
                  </CardHeader>
                  <CardContent>
                     <div className="h-64 bg-muted rounded-lg flex items-center justify-center text-center text-muted-foreground p-4">
                          <p>A map showing the property location will be displayed here. Requires Google Maps API configuration.</p>
                     </div>
                  </CardContent>
              </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
