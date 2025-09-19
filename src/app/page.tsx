'use client';

export const dynamic = 'force-dynamic'

import { featuredDeals, trendingSearches } from '@/lib/data';
import Header from '@/components/Header';
import Search, { SearchFormData } from '@/components/Search';
import DealCard from '@/components/DealCard';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { TrendingUp, ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function Index() {
  const router = useRouter();

  const handleSearch = (searchData: SearchFormData) => {
    console.log('Search data:', searchData);
    router.push('/search');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header />

      {/* Search Section */}
      <Search onSearch={handleSearch} />

      {/* Featured Deals Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-montserrat font-bold text-gray-900 mb-4">
            Featured Deals
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Handpicked destinations and unbeatable prices just for you
          </p>
        </div>

        {/* Deals Grid - matching design reference layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {featuredDeals.slice(0, 6).map((deal) => (
            <DealCard key={deal.id} deal={deal} />
          ))}
        </div>

        <div className="text-center">
          <Button
            variant="outline"
            className="border-travel-blue text-travel-blue hover:bg-travel-blue hover:text-white px-8"
            onClick={() => router.push('/search')}
          >
            View All Deals
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </section>

      {/* Trending Searches Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <TrendingUp className="w-6 h-6 text-travel-orange" />
              <h2 className="text-3xl font-montserrat font-bold text-gray-900">
                Trending Now
              </h2>
            </div>
            <p className="text-gray-600">
              Popular destinations our travelers are booking right now
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {trendingSearches.map((search, index) => (
              <Button
                key={index}
                variant="outline"
                size="sm"
                className="rounded-full border-gray-200 hover:border-travel-blue hover:text-travel-blue"
              >
                {search}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Vacation Packages Promo - matching design reference */}
      <section className="bg-gradient-to-r from-travel-blue to-travel-blue-dark py-16">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto bg-white/95 backdrop-blur border-0 shadow-xl">
            <CardContent className="p-8 md:p-12">
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-gray-900 mb-6">
                  Unlock Exclusive Offers
                </h2>
                <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-lg">
                  Join our newsletter and get access to member-only deals,
                  flash sales, and exclusive vacation packages.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-travel-blue mb-1">50%</div>
                    <div className="text-sm text-gray-600">Average Savings</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-travel-blue mb-1">200+</div>
                    <div className="text-sm text-gray-600">Destinations</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-travel-blue mb-1">24/7</div>
                    <div className="text-sm text-gray-600">Support</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-travel-blue mb-1">4.8★</div>
                    <div className="text-sm text-gray-600">Customer Rating</div>
                  </div>
                </div>

                <Button
                  size="lg"
                  className="bg-travel-orange hover:bg-travel-orange-light text-white px-8 py-3 text-lg font-semibold"
                >
                  Get Exclusive Access
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}