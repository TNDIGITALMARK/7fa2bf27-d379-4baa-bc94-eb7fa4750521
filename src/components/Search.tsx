'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Calendar, MapPin, Users, Plane } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface SearchProps {
  onSearch?: (searchData: SearchFormData) => void;
  className?: string;
}

export interface SearchFormData {
  from: string;
  to: string;
  dates: string;
  travelers: string;
}

export default function Search({ onSearch, className }: SearchProps) {
  const [searchData, setSearchData] = useState<SearchFormData>({
    from: '',
    to: '',
    dates: '',
    travelers: '2 travelers'
  });

  const handleInputChange = (field: keyof SearchFormData, value: string) => {
    setSearchData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch?.(searchData);
  };

  return (
    <div className={`${className || ''}`}>
      {/* Hero Section with Search */}
      <div className="relative">
        {/* Background with world map pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-travel-blue-light to-travel-blue opacity-10"></div>
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23214984' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>

        <div className="relative container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-montserrat font-bold text-gray-900 mb-4">
              Find Your Next Adventure
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover amazing deals on flights, hotels, and vacation packages to destinations worldwide
            </p>
          </div>

          {/* Search Form */}
          <Card className="max-w-5xl mx-auto shadow-xl border-0">
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Search Type Tabs - matching design */}
                <div className="flex gap-1 bg-gray-100 rounded-lg p-1 w-fit">
                  <Button
                    type="button"
                    variant="ghost"
                    className="bg-white shadow-sm text-travel-blue font-medium px-6 py-2"
                  >
                    <Plane className="w-4 h-4 mr-2" />
                    Flights
                  </Button>
                  <Button
                    type="button"
                    variant="ghost"
                    className="text-gray-600 font-medium px-6 py-2"
                  >
                    Hotels
                  </Button>
                  <Button
                    type="button"
                    variant="ghost"
                    className="text-gray-600 font-medium px-6 py-2"
                  >
                    Vacation Packages
                  </Button>
                </div>

                {/* Search Inputs - matching design layout */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
                  {/* From */}
                  <div className="space-y-2">
                    <Label htmlFor="from" className="text-sm font-medium text-gray-700">
                      From
                    </Label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                      <Input
                        id="from"
                        placeholder="Departure city"
                        value={searchData.from}
                        onChange={(e) => handleInputChange('from', e.target.value)}
                        className="pl-10 h-12 border-gray-200 focus:border-travel-blue"
                      />
                    </div>
                  </div>

                  {/* To */}
                  <div className="space-y-2">
                    <Label htmlFor="to" className="text-sm font-medium text-gray-700">
                      To
                    </Label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                      <Input
                        id="to"
                        placeholder="Destination"
                        value={searchData.to}
                        onChange={(e) => handleInputChange('to', e.target.value)}
                        className="pl-10 h-12 border-gray-200 focus:border-travel-blue"
                      />
                    </div>
                  </div>

                  {/* Dates */}
                  <div className="space-y-2">
                    <Label htmlFor="dates" className="text-sm font-medium text-gray-700">
                      Dates
                    </Label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                      <Input
                        id="dates"
                        placeholder="Select dates"
                        value={searchData.dates}
                        onChange={(e) => handleInputChange('dates', e.target.value)}
                        className="pl-10 h-12 border-gray-200 focus:border-travel-blue"
                      />
                    </div>
                  </div>

                  {/* Search Button */}
                  <Button
                    type="submit"
                    className="bg-travel-orange hover:bg-travel-orange-light text-white font-semibold h-12 px-8"
                  >
                    Find Deals
                  </Button>
                </div>

                {/* Additional Options */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-gray-400" />
                    <Input
                      placeholder="2 travelers"
                      value={searchData.travelers}
                      onChange={(e) => handleInputChange('travelers', e.target.value)}
                      className="w-32 h-8 text-sm border-gray-200"
                    />
                  </div>

                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded" />
                      Round trip
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded" />
                      Direct flights only
                    </label>
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}