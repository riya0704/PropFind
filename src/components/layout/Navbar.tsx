"use client";

import Link from 'next/link';
import { Menu, X, ArrowRight, ArrowLeft } from 'lucide-react';
import { useState } from 'react';

import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Logo } from './Logo';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Skeleton } from '../ui/skeleton';

export function Navbar() {
  const { user, logout, loading } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/listings', label: 'Listings' },
    { href: '/image-analyzer', label: 'AI Analyzer' },
  ];
  
  const NavLink = ({ href, label, className }: { href: string; label: string; className?: string; }) => (
    <Link
      href={href}
      className={cn(
        "text-sm font-medium transition-colors hover:text-primary",
        pathname === href ? "text-primary" : "text-foreground/60",
        className
      )}
      onClick={() => setMobileMenuOpen(false)}
    >
      {label}
    </Link>
  );

  const isAuthPage = pathname === '/login' || pathname === '/signup';

  if (isAuthPage) {
    return (
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
           <div className="flex items-center gap-6">
            <Button variant="outline" size="sm" asChild>
                <Link href="/"><ArrowLeft className="mr-2 h-4 w-4" /> Back to Homepage</Link>
            </Button>
           </div>

          <div className="flex-1 flex justify-center">
              <Logo />
          </div>
          
          <div className="flex items-center gap-4">
             <Button variant="default" size="sm" asChild>
                  <Link href="#">About Us <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
          </div>
        </div>
      </header>
    )
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Logo />
        </div>
        <div className="flex items-center gap-6 text-sm">
          <nav className="hidden gap-6 md:flex">
            {navLinks.map(link => <NavLink key={link.href} {...link} />)}
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          {loading ? (
            <Skeleton className="h-8 w-20" />
          ) : user ? (
            <>
              <span className="hidden text-sm font-medium md:block">
                Welcome, {user.displayName || user.email?.split('@')[0]}
              </span>
              <Button variant="outline" size="sm" onClick={logout}>
                Logout
              </Button>
            </>
          ) : (
            <nav className="hidden md:flex items-center space-x-2">
              <Button variant="ghost" size="sm" asChild>
                <Link href="/login">Log In</Link>
              </Button>
              <Button size="sm" asChild>
                <Link href="/signup">Sign Up</Link>
              </Button>
            </nav>
          )}
        </div>
        <div className="md:hidden">
           <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col h-full">
                <div className="flex justify-between items-center mb-6">
                    <Logo />
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon">
                            <X className="h-6 w-6" />
                            <span className="sr-only">Close menu</span>
                        </Button>
                    </SheetTrigger>
                </div>
                <nav className="flex flex-col gap-4">
                  {navLinks.map(link => <NavLink key={link.href} {...link} />)}
                </nav>
                <div className="mt-auto flex flex-col gap-4 pt-6">
                  {loading ? null : user ? (
                      <>
                          <span className="text-sm font-medium text-center">Welcome, {user.displayName || user.email?.split('@')[0]}</span>
                          <Button variant="outline" onClick={() => { logout(); setMobileMenuOpen(false); }}>Logout</Button>
                      </>
                  ) : (
                      <>
                          <Button variant="ghost" asChild>
                              <Link href="/login" onClick={() => setMobileMenuOpen(false)}>Log In</Link>
                          </Button>
                          <Button asChild>
                              <Link href="/signup" onClick={() => setMobileMenuOpen(false)}>Sign Up</Link>
                          </Button>
                      </>
                  )}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
