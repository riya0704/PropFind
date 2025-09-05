import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Home, Building, Search, Handshake } from 'lucide-react';

const services = [
  {
    icon: <Search className="h-8 w-8 text-primary" />,
    title: 'Property Discovery',
    description: 'Find your perfect property with our advanced search filters and personalized recommendations.'
  },
  {
    icon: <Home className="h-8 w-8 text-primary" />,
    title: 'Sell Your Home',
    description: 'We help you sell your home faster and at the best price with our expert marketing and network.'
  },
  {
    icon: <Building className="h-8 w-8 text-primary" />,
    title: 'Rent a Home',
    description: 'Discover a wide range of rental properties that fit your lifestyle and budget.'
  },
  {
    icon: <Handshake className="h-8 w-8 text-primary" />,
    title: 'Expert Agents',
    description: 'Connect with our experienced agents who are dedicated to guiding you through every step.'
  }
];

export function WhatWeDo() {
  return (
    <section className="py-16 sm:py-24 bg-secondary">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">What We Do</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Our mission is to make your real estate journey seamless and successful.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <Card key={index} className="text-center">
              <CardHeader>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  {service.icon}
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle className="text-xl font-semibold mb-2">{service.title}</CardTitle>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
