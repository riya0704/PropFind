import Image from 'next/image';
import { PropertySearchForm } from './PropertySearchForm';

export function Hero() {
  return (
    <section className="relative h-[80vh] min-h-[700px] w-full flex items-center justify-center">
      <Image
        src="https://picsum.photos/1600/900?random=2"
        alt="Large barn-style house at dusk"
        fill
        className="object-cover"
        priority
        data-ai-hint="large house dusk"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white p-4 -mt-32">
        <h1 className="font-headline text-5xl font-bold md:text-6xl tracking-wider">
          Find Your Dream Home in One Click!
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-neutral-200">
          Discover, Buy, or Rent Verified Properties with Ease.
        </p>
      </div>
      <div className="absolute bottom-0 z-20 mb-[-80px] w-full max-w-6xl px-4">
        <PropertySearchForm />
      </div>
    </section>
  );
}
