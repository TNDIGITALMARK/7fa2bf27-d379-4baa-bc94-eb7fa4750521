'use client';

import { featuredDeals } from '@/lib/data';
import Header from '@/components/Header';
import DealCard from '@/components/DealCard';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Plane, MapPin, Star } from 'lucide-react';

export default function VacationsPage() {
  const vacationDeals = featuredDeals.filter(deal => deal.dealType === 'vacation');

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-travel-blue to-travel-blue-dark py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-montserrat font-bold text-white mb-6">
            Vacation Packages
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Discover all-inclusive vacation packages to the world's most beautiful destinations.
            Everything is taken care of so you can focus on making memories.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-travel-orange hover:bg-travel-orange-light text-white px-8">
              View All Packages
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-travel-blue">
              Custom Package
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Vacation Packages */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-montserrat font-bold text-gray-900 mb-4">
            Featured Vacation Packages
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hand-selected destinations offering the best value and unforgettable experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {vacationDeals.map((deal) => (
            <DealCard key={deal.id} deal={deal} />
          ))}
        </div>
      </section>

      {/* Why Choose Our Packages */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-montserrat font-bold text-gray-900 mb-4">
              Why Choose Our Vacation Packages?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <CardContent>
                <div className="w-16 h-16 bg-travel-blue-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <Plane className="w-8 h-8 text-travel-blue" />
                </div>
                <h3 className="text-xl font-montserrat font-semibold mb-3">All-Inclusive</h3>
                <p className="text-gray-600">
                  Flights, hotels, meals, and activities all included in one convenient package
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent>
                <div className="w-16 h-16 bg-travel-blue-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-travel-blue" />
                </div>
                <h3 className="text-xl font-montserrat font-semibold mb-3">Expert Planning</h3>
                <p className="text-gray-600">
                  Our travel experts curate every detail to ensure your perfect vacation experience
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent>
                <div className="w-16 h-16 bg-travel-blue-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-travel-blue" />
                </div>
                <h3 className="text-xl font-montserrat font-semibold mb-3">Best Value</h3>
                <p className="text-gray-600">
                  Save up to 40% compared to booking separately with our exclusive partner rates
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}