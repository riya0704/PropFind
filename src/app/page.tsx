import { getProperties } from '@/lib/api';
import { FeaturedProperties } from '@/components/home/FeaturedProperties';
import { Hero } from '@/components/home/Hero';
import { Newsletter } from '@/components/home/Newsletter';
import { WhatWeDo } from '@/components/home/WhatWeDo';
import { PropertiesForSale } from '@/components/home/PropertiesForSale';
import { PropertiesForRent } from '@/components/home/PropertiesForRent';
import { StartJourney } from '@/components/home/StartJourney';
import { ValuableClients } from '@/components/home/ValuableClients';

export default async function HomePage() {
  const properties = await getProperties();

  return (
    <>
      <Hero />
      <WhatWeDo />
      <FeaturedProperties properties={properties} />
      <PropertiesForSale properties={properties} />
      <PropertiesForRent properties={properties} />
      <StartJourney />
      <ValuableClients />
      <Newsletter />
    </>
  );
}
