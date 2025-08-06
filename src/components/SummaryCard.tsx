import React from 'react';
import { MoreHorizontal } from 'lucide-react';

interface SummaryCardProps {
  title: string;
  amount: number;
  change: number;
  currency?: string;
  isCount?: boolean;
}

const SummaryCard: React.FC<SummaryCardProps> = React.memo(({ 
  title, 
  amount, 
  change, 
  currency = '$', 
  isCount = false 
}) => {
  const isPositive = change >= 0;
  const formattedAmount = isCount 
    ? amount.toLocaleString() 
    : `${currency}${Math.abs(amount).toLocaleString()}`;

  return (
    <div className="bg-gray-100 p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-medium text-gray-700">{title}</h3>
        <button 
          className="text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-full hover:bg-gray-100" 
          aria-label="More options"
        >
          <MoreHorizontal className="h-4 w-4" />
        </button>
      </div>
      <div>
        <p className="text-2xl font-bold text-gray-900 mb-2">{formattedAmount}</p>
        <div className="flex items-center space-x-1">
          <span className={`text-sm font-medium ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
            {isPositive ? '+' : ''}{change}%
          </span>
          <div className={`w-1 h-1 rounded-full ${isPositive ? 'bg-green-500' : 'bg-red-500'}`}></div>
        </div>
      </div>
    </div>
  );
});

SummaryCard.displayName = 'SummaryCard';

export default SummaryCard; 