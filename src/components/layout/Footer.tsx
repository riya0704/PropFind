import Link from 'next/link';
import { Logo } from './Logo';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

export function Footer() {
  return (
    <footer className="bg-secondary text-foreground">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="md:col-span-1">
                <Logo />
                <p className="text-muted-foreground mt-4 text-sm">
                    The most trusted real estate platform. Find your dream home with us.
                </p>
            </div>
             <div className="md:col-span-1">
                <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
                <nav className="flex flex-col gap-3 text-sm">
                    <Link href="/listings" className="text-muted-foreground hover:text-primary">For Sale</Link>
                    <Link href="/listings" className="text-muted-foreground hover:text-primary">For Rent</Link>
                    <Link href="#" className="text-muted-foreground hover:text-primary">New Projects</Link>
                    <Link href="#" className="text-muted-foreground hover:text-primary">About</Link>
                    <Link href="#" className="text-muted-foreground hover:text-primary">Contact</Link>
                </nav>
            </div>
             <div className="md:col-span-2">
                 <h3 className="font-semibold text-lg mb-4">Subscribe to our newsletter</h3>
                 <p className="text-muted-foreground text-sm mb-4">
                    Get the latest updates on new properties and special offers.
                 </p>
                 <form className="flex gap-2">
                    <Input placeholder="Enter your email" className="bg-white" />
                    <Button>Subscribe</Button>
                 </form>
            </div>
        </div>
        <div className="border-t mt-12 pt-8 text-center text-sm text-muted-foreground">
            <p>@2025 PropBot. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}
