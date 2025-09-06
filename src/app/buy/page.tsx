import { getProperties } from '@/lib/api';
import { Hero } from '@/components/buy/Hero';
import { FeaturedProperty } from '@/components/buy/FeaturedProperty';
import { Newsletter } from '@/components/home/Newsletter';

export default async function BuyPage() {
  const properties = await getProperties();
  const propertiesForSale = properties.filter(p => p.type === 'sale').slice(0, 2);

  return (
    <>
      <Hero />
      <FeaturedProperty properties={propertiesForSale} />
      <div className="mt-12">
        <Newsletter />
      </div>
    </>
  );
}
