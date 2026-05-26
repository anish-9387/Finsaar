import WatchList from '@/components/WatchList';
import React from 'react';

export default function WatchlistPage() {
  return (
    <div className="h-full md:hidden">
      <div className="h-full border-0 w-full">
        <WatchList />
      </div>
    </div>
  );
}