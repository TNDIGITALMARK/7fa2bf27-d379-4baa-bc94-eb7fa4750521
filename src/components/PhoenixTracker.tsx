'use client';

import { useEffect } from 'react';

export function PhoenixTracker() {
  useEffect(() => {
    // Phoenix tracking initialization
    if (typeof window !== 'undefined') {
      // Initialize tracking if needed
      console.log('Phoenix Tracker initialized');
    }
  }, []);

  return null;
}