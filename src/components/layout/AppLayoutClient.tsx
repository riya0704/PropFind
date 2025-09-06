"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Logo } from './Logo';
import { Navbar } from './Navbar';

function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-20 items-center justify-between">
          <Button variant="outline" className="rounded-full" asChild>
            <Link href="/"><ArrowLeft className="mr-2 h-4 w-4" /> Back to Homepage</Link>
          </Button>
          <div className="absolute left-1/2 -translate-x-1/2">
            <Logo />
          </div>
          <Button className="rounded-full" asChild>
            <Link href="#">About Us <ArrowLeft className="ml-2 h-4 w-4 rotate-180" /></Link>
          </Button>
        </div>
      </header>
      <main className="flex-grow flex items-stretch">
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
            {children}
        </div>
        <div className="w-1/2 relative hidden lg:block">
            <div className="p-4 h-full">
              <div className="relative h-full w-full">
                <Image
                    className="h-full w-full object-cover rounded-2xl"
                    src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Modern house"
                    fill
                    data-ai-hint="modern house night"
                />
              </div>
            </div>
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
