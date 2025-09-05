export interface Property {
  id: string;
  createdAt: string;
  name: string;
  image: string;
  buildingNumber: string;
  cardinalDirection: string;
  city: string;
  state: string;
  country: string;
  countryCode: string;
  latitude: number;
  longitude: number;
  timeZone: string;
  ownerName: string;
  contactNumber: string;
  // Added fields
  price: number;
  type: 'sale' | 'rent';
  bedrooms: number;
  bathrooms: number;
  area: number;
}

export interface User {
  uid: string;
  email: string | null;
  displayName: string | null;
}
