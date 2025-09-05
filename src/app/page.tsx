import { getProperties } from '@/lib/api';
import { FeaturedProperties } from '@/components/home/FeaturedProperties';
import { Hero } from '@/components/home/Hero';
import { Newsletter } from '@/components/home/Newsletter';

export default async function HomePage() {
  const properties = await getProperties();

  return (
    <>
      <Hero />
      <FeaturedProperties properties={properties} />
      <Newsletter />
    </>
  );
}
