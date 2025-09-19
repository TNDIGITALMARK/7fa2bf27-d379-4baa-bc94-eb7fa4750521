export interface Deal {
  id: string;
  title: string;
  destination: string;
  image: string;
  originalPrice: number;
  currentPrice: number;
  discount: number;
  rating: number;
  reviewCount: number;
  duration: string;
  dealType: 'flight' | 'vacation' | 'hotel';
  airline?: string;
  departureCity: string;
  amenities: string[];
  highlights: string[];
  isFlashDeal: boolean;
  validUntil: string;
  includes: string[];
}

export interface Destination {
  id: string;
  name: string;
  country: string;
  image: string;
  popularAttractions: string[];
  averagePrice: number;
  bestTimeToVisit: string;
  description: string;
}

export interface SearchFilters {
  priceRange: [number, number];
  duration: string[];
  dealType: string[];
  rating: number;
  amenities: string[];
}

// Featured Destinations
export const featuredDestinations: Destination[] = [
  {
    id: '1',
    name: 'Paris',
    country: 'France',
    image: '/images/destinations/paris.jpg',
    popularAttractions: ['Eiffel Tower', 'Louvre Museum', 'Notre-Dame Cathedral'],
    averagePrice: 850,
    bestTimeToVisit: 'April-October',
    description: 'The City of Light offers world-class museums, iconic landmarks, and exquisite cuisine.'
  },
  {
    id: '2',
    name: 'Phuket',
    country: 'Thailand',
    image: '/images/destinations/phuket.jpg',
    popularAttractions: ['Patong Beach', 'Big Buddha', 'Phi Phi Islands'],
    averagePrice: 650,
    bestTimeToVisit: 'November-April',
    description: 'Paradise beaches, crystal waters, and vibrant nightlife await in Thailand\'s largest island.'
  },
  {
    id: '3',
    name: 'New York',
    country: 'USA',
    image: '/images/destinations/newyork.jpg',
    popularAttractions: ['Central Park', 'Empire State Building', 'Times Square'],
    averagePrice: 950,
    bestTimeToVisit: 'April-June, September-November',
    description: 'The city that never sleeps offers endless entertainment, culture, and culinary experiences.'
  },
  {
    id: '4',
    name: 'Rome',
    country: 'Italy',
    image: '/images/destinations/rome.jpg',
    popularAttractions: ['Colosseum', 'Vatican City', 'Trevi Fountain'],
    averagePrice: 750,
    bestTimeToVisit: 'April-October',
    description: 'Ancient history comes alive in the Eternal City with its stunning architecture and rich culture.'
  },
  {
    id: '5',
    name: 'Bali',
    country: 'Indonesia',
    image: '/images/destinations/bali.jpg',
    popularAttractions: ['Uluwatu Temple', 'Rice Terraces', 'Mount Batur'],
    averagePrice: 580,
    bestTimeToVisit: 'April-September',
    description: 'Tropical paradise with pristine beaches, ancient temples, and lush landscapes.'
  }
];

// Featured Deals (matching the design reference)
export const featuredDeals: Deal[] = [
  {
    id: '1',
    title: 'Paris Getaway',
    destination: 'Paris, France',
    image: '/images/deals/paris-deal.jpg',
    originalPrice: 899,
    currentPrice: 450,
    discount: 50,
    rating: 4.8,
    reviewCount: 324,
    duration: '5 days',
    dealType: 'vacation',
    airline: 'Air France',
    departureCity: 'New York',
    amenities: ['Free WiFi', 'Breakfast Included', 'City Tour'],
    highlights: ['Eiffel Tower Visit', 'Seine River Cruise', 'Louvre Museum'],
    isFlashDeal: true,
    validUntil: '2024-12-31',
    includes: ['Round-trip flights', 'Hotel accommodation', 'Daily breakfast', 'City tour']
  },
  {
    id: '2',
    title: 'Phuket Beach Resort',
    destination: 'Phuket, Thailand',
    image: '/images/deals/phuket-deal.jpg',
    originalPrice: 799,
    currentPrice: 640,
    discount: 20,
    rating: 4.6,
    reviewCount: 189,
    duration: '7 days',
    dealType: 'vacation',
    airline: 'Thai Airways',
    departureCity: 'Los Angeles',
    amenities: ['All-Inclusive', 'Beach Access', 'Spa Services'],
    highlights: ['Private Beach', 'Island Hopping', 'Thai Massage'],
    isFlashDeal: false,
    validUntil: '2024-11-30',
    includes: ['Round-trip flights', 'Resort accommodation', 'All meals', 'Airport transfers']
  },
  {
    id: '3',
    title: 'NYC City Break',
    destination: 'New York, USA',
    image: '/images/deals/nyc-deal.jpg',
    originalPrice: 699,
    currentPrice: 520,
    discount: 26,
    rating: 4.7,
    reviewCount: 267,
    duration: '4 days',
    dealType: 'vacation',
    airline: 'Delta Airlines',
    departureCity: 'Chicago',
    amenities: ['Central Location', 'Broadway Show', 'Metro Pass'],
    highlights: ['Empire State Building', 'Central Park', 'Broadway Show'],
    isFlashDeal: true,
    validUntil: '2024-10-15',
    includes: ['Round-trip flights', 'Hotel in Manhattan', 'Broadway show tickets', 'Metro pass']
  },
  {
    id: '4',
    title: 'Bali Escape',
    destination: 'Bali, Indonesia',
    image: '/images/deals/bali-deal.jpg',
    originalPrice: 1599,
    currentPrice: 1200,
    discount: 25,
    rating: 4.9,
    reviewCount: 412,
    duration: '10 days',
    dealType: 'vacation',
    airline: 'Garuda Indonesia',
    departureCity: 'San Francisco',
    amenities: ['Private Villa', 'Daily Yoga', 'Cooking Classes'],
    highlights: ['Temple Tours', 'Rice Terrace Trek', 'Volcano Sunrise'],
    isFlashDeal: false,
    validUntil: '2025-01-31',
    includes: ['Round-trip flights', 'Private villa', 'Daily breakfast', 'Cultural tours']
  },
  {
    id: '5',
    title: 'Alpine Ski Adventure',
    destination: 'Swiss Alps, Switzerland',
    image: '/images/deals/alps-deal.jpg',
    originalPrice: 1199,
    currentPrice: 900,
    discount: 25,
    rating: 4.5,
    reviewCount: 156,
    duration: '6 days',
    dealType: 'vacation',
    airline: 'Swiss International',
    departureCity: 'Boston',
    amenities: ['Ski Pass', 'Equipment Rental', 'Mountain Lodge'],
    highlights: ['Ski Lessons', 'Mountain Views', 'Après-ski'],
    isFlashDeal: true,
    validUntil: '2024-12-20',
    includes: ['Round-trip flights', 'Mountain lodge', 'Ski pass', 'Equipment rental']
  },
  {
    id: '6',
    title: 'Rome History Tour',
    destination: 'Rome, Italy',
    image: '/images/deals/rome-deal.jpg',
    originalPrice: 999,
    currentPrice: 750,
    discount: 25,
    rating: 4.8,
    reviewCount: 298,
    duration: '5 days',
    dealType: 'vacation',
    airline: 'Alitalia',
    departureCity: 'Miami',
    amenities: ['Historic Tours', 'Vatican Access', 'Food Tours'],
    highlights: ['Colosseum Tour', 'Vatican Museums', 'Food Tasting'],
    isFlashDeal: false,
    validUntil: '2024-11-15',
    includes: ['Round-trip flights', 'Boutique hotel', 'Guided tours', 'Skip-the-line tickets']
  }
];

// Flight Deals
export const flightDeals: Deal[] = [
  {
    id: 'f1',
    title: 'NYC to Paris',
    destination: 'Paris, France',
    image: '/images/flights/nyc-paris.jpg',
    originalPrice: 899,
    currentPrice: 549,
    discount: 39,
    rating: 4.6,
    reviewCount: 87,
    duration: '8h 30m',
    dealType: 'flight',
    airline: 'Air France',
    departureCity: 'New York',
    amenities: ['In-flight Entertainment', 'Meal Included', 'Extra Legroom'],
    highlights: ['Direct Flight', 'Premium Economy', 'Flexible Dates'],
    isFlashDeal: true,
    validUntil: '2024-10-30',
    includes: ['Round-trip flight', 'Checked baggage', 'Seat selection', 'In-flight meal']
  },
  {
    id: 'f2',
    title: 'LA to Tokyo',
    destination: 'Tokyo, Japan',
    image: '/images/flights/la-tokyo.jpg',
    originalPrice: 1299,
    currentPrice: 899,
    discount: 31,
    rating: 4.7,
    reviewCount: 134,
    duration: '11h 45m',
    dealType: 'flight',
    airline: 'Japan Airlines',
    departureCity: 'Los Angeles',
    amenities: ['Lie-flat Seats', 'Premium Meals', 'Wi-Fi'],
    highlights: ['Business Class', 'Award Winning Service', 'Latest Aircraft'],
    isFlashDeal: false,
    validUntil: '2024-12-15',
    includes: ['Round-trip business class', 'Airport lounge access', 'Premium meals', 'Extra baggage']
  }
];

// Trending Searches
export const trendingSearches = [
  'Paris vacation packages',
  'All-inclusive Phuket',
  'NYC weekend getaway',
  'European river cruise',
  'Bali honeymoon deals',
  'Swiss Alps skiing',
  'Mediterranean cruise',
  'Tokyo flight deals'
];

// Search suggestions
export const destinations = [
  'Paris, France',
  'Phuket, Thailand',
  'New York, USA',
  'Rome, Italy',
  'Bali, Indonesia',
  'Tokyo, Japan',
  'London, UK',
  'Barcelona, Spain',
  'Sydney, Australia',
  'Dubai, UAE'
];

export const popularAirlines = [
  'Air France',
  'Delta Airlines',
  'United Airlines',
  'Emirates',
  'Lufthansa',
  'British Airways',
  'Singapore Airlines',
  'Qatar Airways'
];

// Amenities and filters
export const amenitiesFilter = [
  'Free WiFi',
  'Breakfast Included',
  'All-Inclusive',
  'Beach Access',
  'Spa Services',
  'Pool',
  'Gym',
  'Room Service',
  'Airport Transfer',
  'Tour Guide'
];

export const durationOptions = [
  '1-3 days',
  '4-6 days',
  '1 week',
  '2 weeks',
  '3+ weeks'
];

export const dealTypes = [
  'All Deals',
  'Flights',
  'Vacations',
  'Hotels'
];