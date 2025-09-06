import { getProperties } from '@/lib/api';
import { Hero } from '@/components/home/Hero';
import { Newsletter } from '@/components/home/Newsletter';
import { WhatWeDo } from '@/components/home/WhatWeDo';
import { StartJourney } from '@/components/home/StartJourney';
import { ValuableClients } from '@/components/home/ValuableClients';
import { PropertiesForSaleAndRent } from '@/components/home/PropertiesForSaleAndRent';
import { FeaturedProperties } from '@/components/home/FeaturedProperties';

export default async function HomePage() {
  const properties = await getProperties();

  return (
    <>
      <Hero />
      <div className="mt-32">
        <WhatWeDo />
        <FeaturedProperties properties={properties} />
        <PropertiesForSaleAndRent properties={properties} />
        <ValuableClients />
        <StartJourney />
        <Newsletter />
      </div>
    </>
  );
}
