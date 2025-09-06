import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, KeyRound, Search, Lock } from 'lucide-react';

const services = [
  {
    icon: <TrendingUp className="h-8 w-8 text-primary" />,
    title: 'Buy & Sell Properties',
    description: 'Find verified homes for sale or list your property with ease.'
  },
  {
    icon: <KeyRound className="h-8 w-8 text-primary" />,
    title: 'Find Rental Homes',
    description: 'Browse through thousands of rental options suited to your needs'
  },
  {
    icon: <Search className="h-8 w-8 text-primary" />,
    title: 'Smart AI Property Search',
    description: 'Get instant recommendations based on your budget & location'
  },
  {
    icon: <Lock className="h-8 w-8 text-primary" />,
    title: 'Safe & Secure Transactions',
    description: 'Verified listings & secure deals to ensure a smooth experience.'
  }
];

export function WhatWeDo() {
  return (
    <section>
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">What We Do?</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Helping you find, buy, and rent the perfect property with ease.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <Card key={index} className="text-center group bg-white shadow-lg transition-all rounded-2xl border-transparent hover:shadow-2xl hover:-translate-y-2">
              <CardHeader>
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-secondary transition-all">
                  {service.icon}
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle className="text-xl font-semibold mb-2 text-foreground transition-colors">{service.title}</CardTitle>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
