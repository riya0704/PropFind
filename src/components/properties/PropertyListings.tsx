"use client";

import { useState } from 'react';
import type { Property } from '@/lib/types';
import { PropertyCard } from './PropertyCard';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface PropertyListingsProps {
  properties: Property[];
}

type FilterType = 'all' | 'sale' | 'rent';

export function PropertyListings({ properties }: PropertyListingsProps) {
  const [filter, setFilter] = useState<FilterType>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('date-desc');

  const filteredProperties = properties
    .filter(p => filter === 'all' || p.type === filter)
    .filter(p => 
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.state.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      switch (sortOrder) {
        case 'price-asc': return a.price - b.price;
        case 'price-desc': return b.price - a.price;
        case 'date-desc': return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        default: return 0;
      }
    });

  return (
    <div className="container py-8 sm:py-12">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8 p-4 bg-secondary rounded-lg border">
        <Input 
          placeholder="Search by name, city, state..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-full md:max-w-sm"
        />
        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-6">
          <RadioGroup defaultValue="all" onValueChange={(value: FilterType) => setFilter(value)} className="flex items-center gap-4">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="all" id="all" />
              <Label htmlFor="all">All</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="sale" id="sale" />
              <Label htmlFor="sale">For Sale</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="rent" id="rent" />
              <Label htmlFor="rent">For Rent</Label>
            </div>
          </RadioGroup>
          <Select onValueChange={setSortOrder} defaultValue={sortOrder}>
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="date-desc">Newest</SelectItem>
              <SelectItem value="price-asc">Price: Low to High</SelectItem>
              <SelectItem value="price-desc">Price: High to Low</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {filteredProperties.length > 0 ? (
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProperties.map(property => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <h3 className="text-2xl font-semibold">No Properties Found</h3>
          <p className="text-muted-foreground mt-2">Try adjusting your filters.</p>
        </div>
      )}
    </div>
  );
}
