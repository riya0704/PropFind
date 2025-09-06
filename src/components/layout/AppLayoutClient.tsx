"use client";

import { usePathname } from 'next/navigation';
import { Navbar } from '@/components/layout/Navbar';
import Image from 'next/image';

function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-grow flex">
        <div className="w-1/2 flex items-center justify-center p-8">
            {children}
        </div>
        <div className="w-1/2 relative hidden lg:block">
            <Image
                className="absolute inset-0 h-full w-full object-cover rounded-l-3xl"
                src="https://picsum.photos/1200/1600"
                alt="Modern house"
                fill
                data-ai-hint="modern house night"
            />
        </div>
      </main>
    </div>
  );
}

function DefaultLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-grow">{children}</main>
    </div>
  );
}


export function AppLayoutClient({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const authRoutes = ['/login', '/signup'];

  if (authRoutes.includes(pathname)) {
    return <AuthLayout>{children}</AuthLayout>;
  }

  return <DefaultLayout>{children}</DefaultLayout>;
}
