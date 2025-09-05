import { getProperties } from '@/lib/api';
import { PropertyListings } from '@/components/properties/PropertyListings';

export default async function ListingsPage() {
  const properties = await getProperties();

  return <PropertyListings properties={properties} />;
}
