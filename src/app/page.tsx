import { getProperties } from '@/lib/api';
import { Hero } from '@/components/home/Hero';
import { Newsletter } from '@/components/home/Newsletter';
import { WhatWeDo } from '@/components/home/WhatWeDo';
import { StartJourney } from '@/components/home/StartJourney';
import { ValuableClients } from '@/components/home/ValuableClients';
import { PropertiesForSaleAndRent } from '@/components/home/PropertiesForSaleAndRent';

export default async function HomePage() {
  const properties = await getProperties();

  return (
    <>
      <Hero />
      <WhatWeDo />
      <PropertiesForSaleAndRent properties={properties} />
      <ValuableClients />
      <StartJourney />
      <Newsletter />
    </>
  );
}
