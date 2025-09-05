import type { Property } from './types';

const API_URL = 'https://68b826bcb715405043274639.mockapi.io/api/properties/PropertyListing';

// Helper function to generate more realistic property data
const augmentPropertyData = (property: any): Property => {
  const id = parseInt(property.id, 10);
  return {
    ...property,
    price: Math.floor(Math.random() * (1500000 - 200000 + 1)) + 200000,
    type: id % 2 === 0 ? 'sale' : 'rent',
    bedrooms: Math.floor(Math.random() * 4) + 2, // 2 to 5 bedrooms
    bathrooms: Math.floor(Math.random() * 3) + 1, // 1 to 3 bathrooms
    area: Math.floor(Math.random() * (3000 - 1000 + 1)) + 1000, // 1000 to 3000 sqft
    image: `https://picsum.photos/seed/${property.id}/600/400`,
  };
};

export async function getProperties(): Promise<Property[]> {
  try {
    const response = await fetch(API_URL, {
      next: { revalidate: 3600 } // Revalidate every hour
    });
    if (!response.ok) {
      throw new Error('Failed to fetch properties');
    }
    const data = await response.json();
    return data.map(augmentPropertyData);
  } catch (error) {
    console.error('API Error:', error);
    return [];
  }
}

export async function getPropertyById(id: string): Promise<Property | null> {
    try {
        const properties = await getProperties();
        const property = properties.find(p => p.id === id);
        return property || null;
    } catch (error) {
        console.error('API Error:', error);
        return null;
    }
}
