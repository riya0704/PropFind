"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';
import Image from 'next/image';

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
    <section className="py-16 sm:py-24">
      <div className="container">
        <div className="relative overflow-hidden rounded-2xl bg-primary text-primary-foreground p-8 md:p-16">
          <div className="absolute inset-0 z-0">
             <Image 
                src="https://picsum.photos/1200/400?random=2" 
                alt="Abstract background"
                fill
                className="object-cover opacity-10"
                data-ai-hint="abstract texture"
            />
          </div>
          <div className="relative z-10 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">Stay Updated</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-primary-foreground/80">
              Subscribe to our newsletter to get the latest updates on new properties, market trends, and exclusive deals.
            </p>
            <form onSubmit={handleSubmit} className="mt-8 mx-auto max-w-sm flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-primary-foreground/90 text-primary placeholder:text-muted-foreground"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading}
              />
              <Button type="submit" variant="secondary" disabled={loading}>
                {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : 'Subscribe'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
