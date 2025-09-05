import { getProperties } from '@/lib/api';
import { FeaturedProperties } from '@/components/home/FeaturedProperties';
import { Hero } from '@/components/home/Hero';
import { Newsletter } from '@/components/home/Newsletter';
import { PropertiesForSaleAndRent } from '@/components/home/PropertiesForSaleAndRent';
import { WhatWeDo } from '@/components/home/WhatWeDo';

export default async function HomePage() {
  const properties = await getProperties();

  return (
    <>
      <Hero />
      <WhatWeDo />
      <FeaturedProperties properties={properties} />
      <PropertiesForSaleAndRent properties={properties} />
      <Newsletter />
    </>
  );
}
