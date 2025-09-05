import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

export function Hero() {
  return (
    <section className="relative h-[60vh] min-h-[500px] w-full">
      <Image
        src="https://picsum.photos/1600/900?random=1"
        alt="Modern house with a pool"
        fill
        className="object-cover"
        priority
        data-ai-hint="modern house"
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white p-4">
        <h1 className="font-headline text-4xl font-bold md:text-6xl">
          Find Your Dream Home
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-neutral-200">
          We provide a complete service for the sale, purchase or rental of real estate.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="/listings">View Properties</Link>
          </Button>
          <Button asChild size="lg" variant="secondary">
            <Link href="#">Contact Us</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
