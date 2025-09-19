'use client';

import { useState, useMemo } from 'react';
import { featuredDeals, flightDeals, amenitiesFilter, durationOptions, dealTypes } from '@/lib/data';
import Header from '@/components/Header';
import DealCard from '@/components/DealCard';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Filter, SlidersHorizontal, MapPin, Calendar, Star } from 'lucide-react';
import type { Deal } from '@/lib/data';

export default function SearchResults() {
  // Combine all deals for search results
  const allDeals = [...featuredDeals, ...flightDeals];

  // Filter states
  const [searchQuery, setSearchQuery] = useState('');
  const [priceRange, setPriceRange] = useState([0, 2000]);
  const [selectedDealTypes, setSelectedDealTypes] = useState<string[]>([]);
  const [selectedDuration, setSelectedDuration] = useState<string[]>([]);
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);
  const [minRating, setMinRating] = useState(0);
  const [sortBy, setSortBy] = useState('featured');
  const [showFilters, setShowFilters] = useState(false);

  // Filter deals based on current filters
  const filteredDeals = useMemo(() => {
    let filtered = allDeals.filter((deal) => {
      // Search query filter
      if (searchQuery && !deal.destination.toLowerCase().includes(searchQuery.toLowerCase()) &&
          !deal.title.toLowerCase().includes(searchQuery.toLowerCase())) {
        return false;
      }

      // Price range filter
      if (deal.currentPrice < priceRange[0] || deal.currentPrice > priceRange[1]) {
        return false;
      }

      // Deal type filter
      if (selectedDealTypes.length > 0 && !selectedDealTypes.includes(deal.dealType)) {
        return false;
      }

      // Duration filter (simplified)
      if (selectedDuration.length > 0) {
        const dealDays = parseInt(deal.duration.match(/\d+/)?.[0] || '0');
        const matchesDuration = selectedDuration.some(duration => {
          if (duration === '1-3 days') return dealDays >= 1 && dealDays <= 3;
          if (duration === '4-6 days') return dealDays >= 4 && dealDays <= 6;
          if (duration === '1 week') return dealDays >= 7 && dealDays <= 10;
          if (duration === '2 weeks') return dealDays >= 11 && dealDays <= 17;
          if (duration === '3+ weeks') return dealDays >= 18;
          return true;
        });
        if (!matchesDuration) return false;
      }

      // Rating filter
      if (deal.rating < minRating) {
        return false;
      }

      // Amenities filter
      if (selectedAmenities.length > 0) {
        const hasAmenity = selectedAmenities.some(amenity =>
          deal.amenities.includes(amenity) || deal.highlights.includes(amenity)
        );
        if (!hasAmenity) return false;
      }

      return true;
    });

    // Sort deals
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.currentPrice - b.currentPrice);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.currentPrice - a.currentPrice);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'discount':
        filtered.sort((a, b) => b.discount - a.discount);
        break;
      default: // 'featured'
        // Keep original order
        break;
    }

    return filtered;
  }, [searchQuery, priceRange, selectedDealTypes, selectedDuration, selectedAmenities, minRating, sortBy, allDeals]);

  const handleDealTypeChange = (dealType: string, checked: boolean) => {
    if (checked) {
      setSelectedDealTypes(prev => [...prev, dealType]);
    } else {
      setSelectedDealTypes(prev => prev.filter(type => type !== dealType));
    }
  };

  const handleDurationChange = (duration: string, checked: boolean) => {
    if (checked) {
      setSelectedDuration(prev => [...prev, duration]);
    } else {
      setSelectedDuration(prev => prev.filter(d => d !== duration));
    }
  };

  const handleAmenityChange = (amenity: string, checked: boolean) => {
    if (checked) {
      setSelectedAmenities(prev => [...prev, amenity]);
    } else {
      setSelectedAmenities(prev => prev.filter(a => a !== amenity));
    }
  };

  const clearAllFilters = () => {
    setSearchQuery('');
    setPriceRange([0, 2000]);
    setSelectedDealTypes([]);
    setSelectedDuration([]);
    setSelectedAmenities([]);
    setMinRating(0);
    setSortBy('featured');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="container mx-auto px-4 py-8">
        {/* Search Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-montserrat font-bold text-gray-900 mb-4">
            Search Results
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <p className="text-gray-600">
              Found {filteredDeals.length} deals matching your criteria
            </p>
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className="md:hidden"
              >
                <Filter className="w-4 h-4 mr-2" />
                Filters
              </Button>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="discount">Best Discount</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Filters Sidebar */}
          <div className={`w-80 space-y-6 ${showFilters ? 'block' : 'hidden md:block'}`}>
            {/* Search Filter */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Search</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                  <Input
                    placeholder="Destination or deal name"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Price Range */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Price Range</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Slider
                    value={priceRange}
                    onValueChange={setPriceRange}
                    max={2000}
                    min={0}
                    step={50}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Deal Type */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Deal Type</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {['flight', 'vacation', 'hotel'].map((type) => (
                    <div key={type} className="flex items-center space-x-2">
                      <Checkbox
                        id={type}
                        checked={selectedDealTypes.includes(type)}
                        onCheckedChange={(checked) =>
                          handleDealTypeChange(type, checked as boolean)
                        }
                      />
                      <Label htmlFor={type} className="capitalize cursor-pointer">
                        {type}s
                      </Label>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Duration */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Duration</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {durationOptions.map((duration) => (
                    <div key={duration} className="flex items-center space-x-2">
                      <Checkbox
                        id={`duration-${duration}`}
                        checked={selectedDuration.includes(duration)}
                        onCheckedChange={(checked) =>
                          handleDurationChange(duration, checked as boolean)
                        }
                      />
                      <Label htmlFor={`duration-${duration}`} className="cursor-pointer">
                        {duration}
                      </Label>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Rating */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Minimum Rating</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[4, 3, 2, 1, 0].map((rating) => (
                    <div key={rating} className="flex items-center space-x-2">
                      <Checkbox
                        id={`rating-${rating}`}
                        checked={minRating === rating}
                        onCheckedChange={() => setMinRating(rating)}
                      />
                      <Label htmlFor={`rating-${rating}`} className="flex items-center cursor-pointer">
                        {rating > 0 ? (
                          <>
                            <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                            {rating}+ stars
                          </>
                        ) : (
                          'Any rating'
                        )}
                      </Label>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Clear Filters */}
            <Button
              variant="outline"
              onClick={clearAllFilters}
              className="w-full"
            >
              Clear All Filters
            </Button>
          </div>

          {/* Results */}
          <div className="flex-1">
            {filteredDeals.length === 0 ? (
              <Card className="text-center py-12">
                <CardContent>
                  <div className="text-gray-500 mb-4">
                    <SlidersHorizontal className="w-12 h-12 mx-auto mb-4 opacity-50" />
                    <h3 className="text-xl font-semibold mb-2">No deals found</h3>
                    <p>Try adjusting your filters to see more results.</p>
                  </div>
                  <Button onClick={clearAllFilters}>
                    Clear All Filters
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredDeals.map((deal) => (
                  <DealCard key={deal.id} deal={deal} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}