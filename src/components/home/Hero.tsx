import Image from 'next/image';

export function Hero() {
  return (
    <section className="relative bg-secondary/30">
      <div className="container py-12">
        <div className="relative h-[600px] rounded-3xl overflow-hidden">
          <Image
            src="https://picsum.photos/1600/900?random=2"
            alt="Large modern house"
            fill
            className="object-cover"
            priority
            data-ai-hint="large house dusk"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
          <div className="relative z-10 w-full h-full flex flex-col justify-end p-8 md:p-12">
            <div className="max-w-2xl text-white">
              <h1 className="font-headline text-5xl font-bold md:text-6xl tracking-wide">
                Featured Properties For Sale
              </h1>
              <p className="mt-4 text-lg text-neutral-200">
                Discover, Buy, or Rent Verified Properties with Ease.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
