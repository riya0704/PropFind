import Image from 'next/image';

export function Hero() {
  return (
    <div className="relative bg-background px-4 pt-4">
        <div className="relative h-[calc(100vh-120px)] min-h-[500px] md:min-h-[600px] w-full overflow-hidden rounded-2xl">
            <Image
                src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Large modern house"
                fill
                className="object-cover"
                priority
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="relative container z-10 w-full h-full flex flex-col justify-center items-center text-center">
                <div className="max-w-2xl text-white">
                    <h1 className="font-headline text-5xl font-bold md:text-6xl tracking-wide">
                        Find Your Dream Home in One Click!
                    </h1>
                    <p className="mt-4 text-lg text-neutral-200">
                        Discover, Buy, or Rent Verified Properties with Ease.
                    </p>
                </div>
            </div>
        </div>
    </div>
  );
}
