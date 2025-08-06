import React, { useMemo } from 'react';
import { ChevronDown, MoreHorizontal } from 'lucide-react';
import Image from 'next/image';

const Header: React.FC = React.memo(() => {
  // Array of avatar SVG files from your public/images folder
  const avatarSvgs = useMemo(() => [
    '/images/avatar-1.svg',
    '/images/avatar-2.svg',
    '/images/Avatar-3.svg', // Note the capital A
    '/images/avatar-4.svg',
  ], []);

  return (
    <div className="bg-white px-4 sm:px-8 py-6 font-public-sans">
      <div className="flex items-center justify-between mb-6 sm:mb-8">
        <div className="flex items-center space-x-2">

          <h1 className="text-xl sm:text-2xl font-semibold text-gray-900">Wallet Ledger</h1>
          <ChevronDown className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
          <span className="inline-flex items-center px-2 py-1 text-xs font-medium text-green-700 bg-green-50 rounded-full">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-1.5"></div>
            Active
          </span>
        </div>
        
        <div className="flex items-center space-x-2 sm:space-x-3">
          <button className="bg-cyan-700 text-white px-3 sm:px-4 py-2 rounded-lg text-sm font-medium hover:bg-cyan-800 transition-colors">
            Share
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors" aria-label="More options">
            <MoreHorizontal className="h-4 w-4 sm:h-5 sm:w-5 text-gray-500" />
          </button>
          
   
        </div>
      </div>
      
      <div className="flex items-center space-x-3 mb-6 sm:mb-8">
        <div className="flex -space-x-2 sm:-space-x-3">
          {avatarSvgs.map((svgPath, index) => (
            <div 
              key={index}
              className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 sm:border-3 border-white bg-white shadow-sm overflow-hidden hover:scale-110 transition-transform"
              style={{ zIndex: avatarSvgs.length - index }}
            >
              <Image
                src={svgPath}
                alt={`Avatar ${index + 1}`}
                width={40}
                height={40}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        <span className="text-sm text-gray-500">Ava, Liam, Noah +12 others</span>
      </div>
      
      <div className="flex space-x-6 sm:space-x-8 border-b border-gray-200 bg-white">
        <button className="pb-3 text-blue-600 border-b-2 border-blue-600 font-medium hover:text-blue-700 transition-colors">
          Overview
        </button>
        <button className="pb-3 text-gray-500 hover:text-gray-700 hover:border-b-2 hover:border-gray-300 transition-colors">
          Transactions
        </button>
      </div>
    </div>
  );
});

Header.displayName = 'Header';

export default Header;