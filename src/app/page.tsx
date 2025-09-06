import { getProperties } from '@/lib/api';
import { Hero } from '@/components/home/Hero';
import { Newsletter } from '@/components/home/Newsletter';
import { WhatWeDo } from '@/components/home/WhatWeDo';
import { StartJourney } from '@/components/home/StartJourney';
import { ValuableClients } from '@/components/home/ValuableClients';
import { PropertiesForSale } from '@/components/home/PropertiesForSale';
import { FeaturedProperties } from '@/components/home/FeaturedProperties';
import { PropertiesForRent } from '@/components/home/PropertiesForRent';

export default async function HomePage() {
  const properties = await getProperties();

  return (
    <>
      <Hero />
      <div className="mt-12">
        <WhatWeDo />
        <FeaturedProperties properties={properties} />
        <PropertiesForSale properties={properties} />
        <PropertiesForRent properties={properties} />
        <StartJourney />
        <ValuableClients />
        <Newsletter />
      </div>
    </>
  );
}
