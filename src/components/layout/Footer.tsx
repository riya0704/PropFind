import Link from 'next/link';
import { Logo } from './Logo';

export function Footer() {
  return (
    <footer className="bg-secondary">
      <div className="container py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <Logo />
            <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
                <Link href="/listings" className="text-muted-foreground hover:text-foreground">For Sale</Link>
                <Link href="/listings" className="text-muted-foreground hover:text-foreground">Rentals</Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground">New Projects</Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground">Property News</Link>
            </nav>
            <div className="text-sm text-muted-foreground">
                <p>©2025 Propbot. All rights reserved</p>
            </div>
        </div>
      </div>
    </footer>
  );
}
