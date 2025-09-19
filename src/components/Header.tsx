'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  return (
    <header className={`bg-white shadow-sm border-b ${className || ''}`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-travel-blue rounded-full flex items-center justify-center">
              <Globe className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-montserrat font-bold text-travel-blue">
              Wander Deals
            </span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-travel-blue font-medium transition-colors"
            >
              Flights
            </Link>
            <Link
              href="/vacations"
              className="text-gray-700 hover:text-travel-blue font-medium transition-colors"
            >
              Vacations
            </Link>
            <Link
              href="/hotels"
              className="text-gray-700 hover:text-travel-blue font-medium transition-colors"
            >
              Hotels
            </Link>
            <Link
              href="/cars"
              className="text-gray-700 hover:text-travel-blue font-medium transition-colors"
            >
              Cars
            </Link>
            <Link
              href="/blog"
              className="text-gray-700 hover:text-travel-blue font-medium transition-colors"
            >
              Blog
            </Link>
          </nav>

          {/* Sign Up Button */}
          <Button
            variant="outline"
            className="border-travel-blue text-travel-blue hover:bg-travel-blue hover:text-white"
          >
            Sign Up
          </Button>
        </div>
      </div>
    </header>
  );
}