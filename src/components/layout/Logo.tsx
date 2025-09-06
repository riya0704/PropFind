import Link from 'next/link';
import HomeIcon from '../icons/HomeIcon';

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-primary">
      <HomeIcon />
      <span className="font-headline text-foreground">PropBot</span>
    </Link>
  );
}
