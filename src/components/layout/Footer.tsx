import Link from 'next/link';
import { Logo } from './Logo';

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <Logo />
            <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
                <Link href="/listings" className="text-primary-foreground/80 hover:text-white">For Sale</Link>
                <Link href="/listings" className="text-primary-foreground/80 hover:text-white">Rentals</Link>
                <Link href="#" className="text-primary-foreground/80 hover:text-white">New Projects</Link>
                <Link href="#" className="text-primary-foreground/80 hover:text-white">Property News</Link>
            </nav>
            <div className="text-sm text-primary-foreground/80">
                <p>@2025 Propbot. All rights reserved</p>
            </div>
        </div>
      </div>
    </footer>
  );
}
