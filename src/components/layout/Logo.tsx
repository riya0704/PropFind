import Link from 'next/link';
import HomeIcon from '../icons/HomeIcon';
import { cn } from '@/lib/utils';

export function Logo({className}: {className?: string}) {
  return (
    <Link href="/" className={cn("flex items-center gap-2 text-2xl font-bold text-primary", className)}>
      <HomeIcon />
      <span className="font-headline text-foreground">PropBot</span>
    </Link>
  );
}
