import Link from 'next/link';
import { Logo } from './Logo';

export function Footer() {
  return (
    <footer className="bg-background text-foreground border-t">
      <div className="container py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <Logo />
          </div>
          <nav className="flex flex-wrap justify-center gap-6 md:gap-8 text-sm font-medium">
              <Link href="/listings" className="text-muted-foreground hover:text-primary">For Sale</Link>
              <Link href="/listings" className="text-muted-foreground hover:text-primary">For Rent</Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">New Projects</Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">About</Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">Contact</Link>
            </nav>
          <div className="text-center text-sm text-muted-foreground">
            <p>@2025 Propbot. All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
