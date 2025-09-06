import Image from 'next/image';

export function Hero() {
  return (
    <div className="relative bg-secondary/30 px-4 pt-4">
        <div className="relative h-[calc(100vh-120px)] min-h-[500px] md:min-h-[600px] w-full overflow-hidden rounded-2xl">
            <Image
                src="https://picsum.photos/1600/900?random=2"
                alt="Large modern house"
                fill
                className="object-cover"
                priority
                data-ai-hint="large house dusk"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
            <div className="relative container z-10 w-full h-full flex flex-col justify-end p-8 md:p-12">
                <div className="max-w-2xl text-white pb-20">
                    <h1 className="font-headline text-5xl font-bold md:text-6xl tracking-wide">
                        Find Your Perfect Home
                    </h1>
                    <p className="mt-4 text-lg text-neutral-200">
                        With the most complete and verified real estate listings.
                    </p>
                </div>
            </div>
        </div>
    </div>
  );
}
