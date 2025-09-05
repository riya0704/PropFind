import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, Home, Search, Lock } from 'lucide-react';

const services = [
  {
    icon: <TrendingUp className="h-8 w-8 text-primary" />,
    title: 'Buy & Sell Properties',
    description: 'We provide a seamless experience for buying and selling properties at the best market prices.'
  },
  {
    icon: <Home className="h-8 w-8 text-primary" />,
    title: 'Find a New Home',
    description: 'Discover a wide range of rental properties that fit your lifestyle and budget, and find your new home.'
  },
  {
    icon: <Search className="h-8 w-8 text-primary" />,
    title: 'Smart Property Search',
    description: 'Our smart search helps you find the perfect property with advanced filters and recommendations.'
  },
  {
    icon: <Lock className="h-8 w-8 text-primary" />,
    title: 'Safe & Secure',
    description: 'Your transactions and data are safe and secure with our advanced security measures.'
  }
];

export function WhatWeDo() {
  return (
    <section className="py-24 sm:py-32 bg-secondary" style={{marginTop: '80px'}}>
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">What We Do?</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Helping you find, buy, and own the perfect property with ease.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <Card key={index} className="text-center group hover:bg-white hover:shadow-xl transition-all">
              <CardHeader>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary group-hover:text-white transition-all">
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
