"use client";

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
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
import LoginRegisterIcon from '../icons/LoginRegisterIcon';

export function Navbar() {
  const { user, logout, loading } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/buy', label: 'Buy' },
    { href: '#', label: 'Rent' },
    { href: '/image-analyzer', label: 'Sell' },
    { href: '#', label: 'About Us' },
    { href: '#', label: 'Contact Us' },
  ];
  
  const NavLink = ({ href, label, className }: { href: string; label: string; className?: string; }) => (
    <Link
      href={href}
      className={cn(
        "text-sm font-medium transition-colors relative",
        "after:absolute after:bottom-[-2px] after:left-0 after:h-0.5 after:w-full after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 hover:after:scale-x-100",
        pathname === href ? "text-primary font-bold after:scale-x-100" : "text-foreground/80",
        className
      )}
      onClick={() => setMobileMenuOpen(false)}
    >
      {label}
    </Link>
  );

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container flex h-20 items-center">
        <div className="mr-auto flex-shrink-0">
          <Logo />
        </div>

        <nav className="hidden gap-8 md:flex mx-auto items-center">
          {navLinks.map(link => <NavLink key={link.label} {...link} />)}
        </nav>

        <div className="flex flex-shrink-0 items-center justify-end space-x-4">
          {loading ? (
            <Skeleton className="h-10 w-32 rounded-full" />
          ) : user ? (
            <div className='hidden md:flex items-center gap-4'>
              <span className="text-sm font-medium text-foreground">
                Welcome, {user.displayName || user.email?.split('@')[0]}
              </span>
              <Button variant="outline" size="sm" onClick={logout} className="rounded-full">
                Logout
              </Button>
            </div>
          ) : (
            <nav className="hidden md:flex items-center space-x-2">
              <Button size="lg" asChild className="rounded-full">
                <Link href="/login">Login / Register <LoginRegisterIcon /></Link>
              </Button>
            </nav>
          )}
        </div>
        <div className="md:hidden">
           <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-foreground">
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
                  {navLinks.map(link => <NavLink key={link.label} {...link} className="text-lg text-foreground/80"/>)}
                </nav>
                <div className="mt-auto flex flex-col gap-4 pt-6">
                  {loading ? null : user ? (
                      <>
                          <span className="text-sm font-medium text-center">Welcome, {user.displayName || user.email?.split('@')[0]}</span>
                          <Button variant="outline" onClick={() => { logout(); setMobileMenuOpen(false); }}>Logout</Button>
                      </>
                  ) : (
                      <>
                         <Button asChild className="rounded-full">
                            <Link href="/login" onClick={() => setMobileMenuOpen(false)}>Login / Register</Link>
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
