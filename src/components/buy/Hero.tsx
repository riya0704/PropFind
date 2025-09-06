import Image from 'next/image';
import { BuySearchForm } from './BuySearchForm';

export function Hero() {
  return (
    <div className="relative bg-background">
      <div className="relative h-[450px] md:h-[550px] w-full overflow-hidden">
        <Image
            src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Large modern house"
            fill
            className="object-cover rounded-3xl p-4"
            priority
        />
        <div className="absolute inset-0 bg-black/40 rounded-3xl m-4" />
        <div className="relative container z-10 w-full h-full flex flex-col justify-center items-start text-white">
            <div className="max-w-2xl px-8">
                <h1 className="font-headline text-5xl font-bold md:text-6xl tracking-wide">
                    Featured Properties For Sale
                </h1>
                <p className="mt-4 text-lg text-neutral-200">
                    Discover, Buy, or Rent Verified Properties with Ease.
                </p>
            </div>
        </div>
      </div>
      <div className="container relative z-20 -mt-16">
        <BuySearchForm />
      </div>
    </div>
  );
}
