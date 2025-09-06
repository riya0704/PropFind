"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';
import { Logo } from '../layout/Logo';

export function Newsletter() {
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      if (email && email.includes('@')) {
        toast({
          title: "Subscribed!",
          description: "Thank you for subscribing to our newsletter.",
        });
        setEmail('');
      } else {
        toast({
          variant: 'destructive',
          title: "Invalid Email",
          description: "Please enter a valid email address.",
        });
      }
    }, 1000);
  };

  return (
    <section className="py-16 sm:py-24 bg-[#1E3A8ACC] text-primary-foreground">
      <div className="container">
          <div className="relative z-10 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">Get in Touch with Us</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-primary-foreground/80">
              Subscribe now for exclusive property insights and deals!
            </p>
            <form onSubmit={handleSubmit} className="mt-8 mx-auto max-w-sm flex items-center p-2 bg-white rounded-full">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent text-foreground border-none focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-muted-foreground"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading}
              />
              <Button type="submit" variant="default" disabled={loading} className="rounded-full shrink-0 bg-primary hover:bg-primary/90 text-white">
                {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : 'Submit'}
              </Button>
            </form>
          </div>
          <div className="mt-24 border-t border-primary-foreground/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
                <div className="text-primary-foreground">
                    <Logo />
                </div>
                <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
                    <Link href="/listings" className="text-primary-foreground/80 hover:text-primary-foreground">For Sale</Link>
                    <Link href="/listings" className="text-primary-foreground/80 hover:text-primary-foreground">Rentals</Link>
                    <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground">New Projects</Link>
                    <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground">Property News</Link>
                </nav>
                <div className="text-sm text-primary-foreground/80">
                    <p>©2025 Propbot. All rights reserved</p>
                </div>
            </div>
          </div>
      </div>
    </section>
  );
}
