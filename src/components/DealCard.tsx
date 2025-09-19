'use client';

import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Clock, Users } from 'lucide-react';
import { Deal } from '@/lib/data';

interface DealCardProps {
  deal: Deal;
  className?: string;
}

export default function DealCard({ deal, className }: DealCardProps) {
  const discountPercentage = Math.round(
    ((deal.originalPrice - deal.currentPrice) / deal.originalPrice) * 100
  );

  return (
    <Link href={`/deals/${deal.id}`}>
      <Card className={`group overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer ${className || ''}`}>
        {/* Image Container */}
        <div className="relative overflow-hidden">
          <div className="w-full h-48 bg-gradient-to-br from-travel-blue-light to-travel-blue flex items-center justify-center">
            <span className="text-white font-medium">{deal.destination}</span>
          </div>

          {/* Flash Deal Badge */}
          {deal.isFlashDeal && (
            <div className="absolute top-3 left-3">
              <Badge className="deal-badge">
                Flash Deal
              </Badge>
            </div>
          )}

          {/* Discount Badge */}
          {discountPercentage > 0 && (
            <div className="absolute top-3 right-3">
              <Badge className="bg-deal-red text-white font-semibold">
                -{discountPercentage}%
              </Badge>
            </div>
          )}
        </div>

        <CardContent className="p-4">
          {/* Destination and Title */}
          <div className="mb-3">
            <h3 className="font-montserrat font-semibold text-lg text-gray-900 group-hover:text-travel-blue transition-colors">
              {deal.title}
            </h3>
            <p className="text-sm text-gray-600 mt-1">{deal.destination}</p>
          </div>

          {/* Rating and Reviews */}
          <div className="flex items-center gap-2 mb-3">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="text-sm font-medium">{deal.rating}</span>
            </div>
            <span className="text-xs text-gray-500">({deal.reviewCount} reviews)</span>
          </div>

          {/* Duration and Type */}
          <div className="flex items-center gap-4 mb-4 text-xs text-gray-600">
            <div className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              <span>{deal.duration}</span>
            </div>
            {deal.airline && (
              <div className="flex items-center gap-1">
                <Users className="w-3 h-3" />
                <span>{deal.airline}</span>
              </div>
            )}
          </div>

          {/* Highlights */}
          <div className="mb-4">
            <div className="flex flex-wrap gap-1">
              {deal.highlights.slice(0, 2).map((highlight, index) => (
                <Badge key={index} variant="secondary" className="text-xs px-2 py-1">
                  {highlight}
                </Badge>
              ))}
            </div>
          </div>

          {/* Pricing */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500 line-through">
                ${deal.originalPrice}
              </span>
              <span className="text-xl font-bold text-travel-blue">
                ${deal.currentPrice}
              </span>
            </div>
            <div className="text-xs text-gray-500">
              From {deal.departureCity}
            </div>
          </div>

          {/* Validity */}
          <div className="mt-2 text-xs text-gray-500">
            Valid until {new Date(deal.validUntil).toLocaleDateString()}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}