'use client';

import React from 'react';
import { Menu, Search } from 'lucide-react';
import Image from 'next/image';

interface TopHeaderProps {
  onMenuClick?: () => void;
}

const TopHeader: React.FC<TopHeaderProps> = React.memo(({ onMenuClick }) => {
  return (
    <header className="bg-white px-2 sm:px-6 py-4 w-screen">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-1 sm:space-x-4">
          <button
            onClick={onMenuClick}
            className="p-1 sm:p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Menu"
          >
            <Menu className="h-4 w-4 sm:h-5 sm:w-5 text-gray-600" />
          </button>

          <div className="flex items-center space-x-2">
            <Image
              src="/images/fintrack-logo.svg"
              alt="FinTrack Logo"
              width={112}
              height={33}
              priority
              className="h-6 sm:h-8 w-auto"
            />
          </div>
        </div>

        <div className="flex items-center space-x-1 sm:space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="pl-3 sm:pl-4 pr-7 sm:pr-10 py-1 sm:py-2 bg-gray-50 rounded-lg text-xs sm:text-sm focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-500 transition-all w-16 sm:w-48"
            />
            <Search className="absolute right-2 sm:right-3 top-1/2 transform -translate-y-1/2 h-3 w-3 sm:h-4 sm:w-4 text-gray-400" />
          </div>

          <button className="p-1 sm:p-2 hover:bg-gray-100 rounded-lg transition-colors" aria-label="Apps">
            <Image src="/images/app-grid.svg" alt="App Grid" width={20} height={20} className="h-4 w-4 sm:h-5 sm:w-5" />
          </button>

          <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full overflow-hidden border border-gray-200 hover:border-gray-300 transition-colors">
            <Image src="/images/avatar-1.svg" alt="User Profile" width={32} height={32} className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </header>
  );
});

TopHeader.displayName = 'TopHeader';
export default TopHeader;
