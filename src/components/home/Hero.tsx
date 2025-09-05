import Image from 'next/image';
import { PropertySearchForm } from './PropertySearchForm';

export function Hero() {
  return (
    <section className="relative h-[80vh] min-h-[600px] w-full flex items-center justify-center">
      <Image
        src="https://picsum.photos/1600/900?random=1"
        alt="Modern house with a pool"
        fill
        className="object-cover rounded-b-3xl"
        priority
        data-ai-hint="modern house"
      />
      <div className="absolute inset-0 bg-black/40 rounded-b-3xl" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white p-4 -mt-24">
        <h1 className="font-headline text-4xl font-bold md:text-6xl">
          Featured Properties For Sale
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-neutral-200">
          Discover, Buy, or Rent Verified Properties with Ease.
        </p>
      </div>
      <div className="absolute bottom-0 z-20 mb-[-60px]">
        <PropertySearchForm />
      </div>
    </section>
  );
}
