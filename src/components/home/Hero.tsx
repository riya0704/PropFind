import Image from 'next/image';
import { PropertySearchForm } from './PropertySearchForm';

export function Hero() {
  return (
    <section className="bg-secondary/30 py-12 sm:py-16">
      <div className="container">
        <div className="relative h-[600px] rounded-3xl overflow-hidden flex items-center justify-center">
          <Image
            src="https://picsum.photos/1600/900?random=2"
            alt="Large modern house"
            fill
            className="object-cover"
            priority
            data-ai-hint="large house dusk"
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="relative z-10 text-center text-white p-4">
            <h1 className="font-headline text-5xl font-bold md:text-6xl">
              Featured Properties For Sale
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-neutral-200">
              Discover, Buy, or Rent Verified Properties with Ease.
            </p>
          </div>
          <div className="absolute bottom-10 z-20 w-full max-w-5xl px-4">
            <PropertySearchForm />
          </div>
        </div>
      </div>
    </section>
  );
}
