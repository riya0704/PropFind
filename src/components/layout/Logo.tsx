import Link from 'next/link';
import { Home } from 'lucide-react';

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-primary">
      <Home className="h-8 w-8" />
      <span className="font-headline">PropBot</span>
    </Link>
  );
}
