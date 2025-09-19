'use client';

import { useState } from 'react';
import { featuredDeals, flightDeals } from '@/lib/data';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import {
  Star,
  MapPin,
  Clock,
  Users,
  Plane,
  Calendar,
  Check,
  Heart,
  Share,
  ArrowLeft,
  Shield,
  CreditCard,
  RefreshCw
} from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface DealDetailProps {
  params: {
    id: string;
  };
}

export default function DealDetail({ params }: DealDetailProps) {
  const allDeals = [...featuredDeals, ...flightDeals];
  const deal = allDeals.find(d => d.id === params.id);

  const [selectedTravelers, setSelectedTravelers] = useState(2);
  const [isBooking, setIsBooking] = useState(false);
  const [isFavorited, setIsFavorited] = useState(false);

  if (!deal) {
    notFound();
  }

  const discountPercentage = Math.round(
    ((deal.originalPrice - deal.currentPrice) / deal.originalPrice) * 100
  );

  const totalPrice = deal.currentPrice * selectedTravelers;
  const totalSavings = (deal.originalPrice - deal.currentPrice) * selectedTravelers;

  const handleBookNow = () => {
    setIsBooking(true);
    // Simulate booking process
    setTimeout(() => {
      setIsBooking(false);
      alert('Booking confirmed! You will receive a confirmation email shortly.');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="container mx-auto px-4 py-8">
        {/* Back Navigation */}
        <div className="mb-6">
          <Link href="/search" className="inline-flex items-center text-travel-blue hover:underline">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to search results
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Hero Image and Basic Info */}
            <Card>
              <CardContent className="p-0">
                {/* Hero Image */}
                <div className="relative h-80 bg-gradient-to-br from-travel-blue-light to-travel-blue flex items-center justify-center">
                  <div className="text-center text-white">
                    <h1 className="text-3xl font-montserrat font-bold mb-2">{deal.title}</h1>
                    <p className="text-xl opacity-90">{deal.destination}</p>
                  </div>

                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    {deal.isFlashDeal && (
                      <Badge className="deal-badge">Flash Deal</Badge>
                    )}
                    {discountPercentage > 0 && (
                      <Badge className="bg-deal-red text-white font-semibold">
                        -{discountPercentage}%
                      </Badge>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="absolute top-4 right-4 flex gap-2">
                    <Button
                      size="sm"
                      variant="secondary"
                      onClick={() => setIsFavorited(!isFavorited)}
                      className="bg-white/90 hover:bg-white"
                    >
                      <Heart className={`w-4 h-4 ${isFavorited ? 'fill-red-500 text-red-500' : ''}`} />
                    </Button>
                    <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white">
                      <Share className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                {/* Basic Info */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Star className="w-5 h-5 text-yellow-400 fill-current" />
                        <span className="text-lg font-semibold">{deal.rating}</span>
                        <span className="text-gray-600">({deal.reviewCount} reviews)</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-500 line-through">
                        ${deal.originalPrice}
                      </div>
                      <div className="text-2xl font-bold text-travel-blue">
                        ${deal.currentPrice}
                      </div>
                      <div className="text-sm text-gray-600">per person</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-gray-400" />
                      <span>{deal.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-gray-400" />
                      <span>From {deal.departureCity}</span>
                    </div>
                    {deal.airline && (
                      <div className="flex items-center gap-2">
                        <Plane className="w-4 h-4 text-gray-400" />
                        <span>{deal.airline}</span>
                      </div>
                    )}
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      <span>Valid until {new Date(deal.validUntil).toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Detailed Information */}
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="included">What's Included</TabsTrigger>
                <TabsTrigger value="amenities">Amenities</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Trip Highlights</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {deal.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-success-green" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="included" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>What's Included</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {deal.includes.map((item, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-success-green" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="amenities" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Amenities & Services</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4">
                      {deal.amenities.map((amenity, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-success-green" />
                          <span>{amenity}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="reviews" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Customer Reviews</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {/* Sample Reviews */}
                      {[
                        { name: "Sarah M.", rating: 5, comment: "Amazing experience! Everything was perfectly organized and the destinations were breathtaking." },
                        { name: "John D.", rating: 4, comment: "Great value for money. The hotel was excellent and the tours were well planned." },
                        { name: "Emma R.", rating: 5, comment: "Exceeded expectations! Will definitely book with them again." }
                      ].map((review, index) => (
                        <div key={index} className="border-b border-gray-100 pb-4 last:border-b-0">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="font-semibold">{review.name}</span>
                            <div className="flex">
                              {Array.from({ length: review.rating }).map((_, i) => (
                                <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                              ))}
                            </div>
                          </div>
                          <p className="text-gray-600">{review.comment}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Booking Sidebar */}
          <div className="space-y-6">
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle>Book This Deal</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Travelers Selection */}
                <div>
                  <label className="block text-sm font-medium mb-2">Number of Travelers</label>
                  <select
                    value={selectedTravelers}
                    onChange={(e) => setSelectedTravelers(parseInt(e.target.value))}
                    className="w-full p-2 border border-gray-200 rounded-md"
                  >
                    {Array.from({ length: 8 }, (_, i) => i + 1).map(num => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? 'Traveler' : 'Travelers'}
                      </option>
                    ))}
                  </select>
                </div>

                <Separator />

                {/* Price Breakdown */}
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Price per person</span>
                    <span>${deal.currentPrice}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Travelers × {selectedTravelers}</span>
                    <span>${totalPrice}</span>
                  </div>
                  {totalSavings > 0 && (
                    <div className="flex justify-between text-success-green font-semibold">
                      <span>Total Savings</span>
                      <span>-${totalSavings}</span>
                    </div>
                  )}
                  <Separator />
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span className="text-travel-blue">${totalPrice}</span>
                  </div>
                </div>

                <Button
                  size="lg"
                  className="w-full bg-travel-orange hover:bg-travel-orange-light text-white font-semibold"
                  onClick={handleBookNow}
                  disabled={isBooking}
                >
                  {isBooking ? (
                    <>
                      <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    'Book Now'
                  )}
                </Button>

                {/* Trust Indicators */}
                <div className="space-y-3 pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Shield className="w-4 h-4 text-success-green" />
                    <span>Secure booking guaranteed</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <CreditCard className="w-4 h-4 text-success-green" />
                    <span>No hidden fees</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <RefreshCw className="w-4 h-4 text-success-green" />
                    <span>Free cancellation within 24h</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Support */}
            <Card>
              <CardHeader>
                <CardTitle>Need Help?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Our travel experts are here to help you plan the perfect trip.
                </p>
                <Button variant="outline" className="w-full">
                  Contact Support
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}