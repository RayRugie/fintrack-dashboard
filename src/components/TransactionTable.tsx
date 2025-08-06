import React, { useState, useMemo, useCallback } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Transaction, SortField, SortDirection } from '@/types';

interface TransactionTableProps {
  transactions: Transaction[];
}

const TransactionTable: React.FC<TransactionTableProps> = ({ transactions }) => {
  const [sortField, setSortField] = useState<SortField>('date');
  const [sortDirection, setSortDirection] = useState<SortDirection>('desc');

  const sortedTransactions = useMemo(() => {
    return [...transactions].sort((a, b) => {
      let aValue: string | number = a[sortField];
      let bValue: string | number = b[sortField];

      if (sortField === 'date') {
        aValue = new Date(a.date).getTime();
        bValue = new Date(b.date).getTime();
      }

      if (typeof aValue === 'string') {
        aValue = aValue.toLowerCase();
        bValue = (bValue as string).toLowerCase();
      }

      if (sortDirection === 'asc') {
        return aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
      } else {
        return aValue > bValue ? -1 : aValue < bValue ? 1 : 0;
      }
    });
  }, [transactions, sortField, sortDirection]);

  const handleSort = useCallback((field: SortField) => {
    setSortField(prevField => {
      if (field === prevField) {
        setSortDirection(prevDir => prevDir === 'asc' ? 'desc' : 'asc');
        return prevField;
      } else {
        setSortDirection('desc');
        return field;
      }
    });
  }, []);

  const getSortIcon = useCallback((field: SortField) => {
    if (field !== sortField) {
      return <ChevronDown className="h-3 w-3 text-gray-400" />;
    }
    return sortDirection === 'asc' ? 
      <ChevronUp className="h-3 w-3 text-gray-600" /> : 
      <ChevronDown className="h-3 w-3 text-gray-600" />;
  }, [sortField, sortDirection]);

  const formatDate = useCallback((dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    }).replace(/(\d+)\/(\d+)\/(\d+)/, '$3-$1-$2');
  }, []);

  const formatAmount = useCallback((amount: number) => {
    return amount >= 0 ? `$${amount.toLocaleString()}` : `-$${Math.abs(amount).toLocaleString()}`;
  }, []);

  return (
    <div className="bg-white rounded-lg overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="">
              <th
                className="px-4 py-4 text-left text-sm font-medium text-gray-900 cursor-pointer hover:text-gray-700 transition-colors"
                onClick={() => handleSort('date')}
              >
                <div className="flex items-center space-x-1 border-b border-gray-200">
                  <span>Date</span>
                  {getSortIcon('date')}
                </div>
              </th>
              <th
                className="px-4 py-4 text-left text-sm font-medium text-gray-900 cursor-pointer hover:text-gray-700 transition-colors"
                onClick={() => handleSort('remark')}
              >
                <div className="flex items-center space-x-1 border-b border-gray-200">
                  <span>Remark</span>
                  {getSortIcon('remark')}
                </div>
              </th>
              <th
                className="px-4 py-4 text-right text-sm font-medium text-gray-900 cursor-pointer hover:text-gray-700 transition-colors"
                onClick={() => handleSort('amount')}
              >
                <div className="flex items-center justify-start space-x-1 border-b border-gray-200">
                  <span>Amount</span>
                  {getSortIcon('amount')}
                </div>
              </th>
              <th className="px-4 py-4 text-left text-sm font-medium text-gray-900">
                <div className="flex items-center space-x-1 border-b border-gray-200">
                  <span>Currency</span>
                  <ChevronDown className="h-3 w-3 text-gray-400" />
                </div>
              </th>
              <th className="px-4 py-4 text-left text-sm font-medium text-gray-900">
                <div className="flex items-center space-x-1 border-b border-gray-200">
                  <span>Type</span>
                  <ChevronDown className="h-3 w-3 text-gray-400" />
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedTransactions.map((transaction, index) => (
              <tr 
                key={transaction.id} 
                className="bg-white hover:bg-gray-50 transition-colors"
              >
                <td className="px-4 py-4 text-sm text-left text-gray-900">
                  {formatDate(transaction.date)}
                  <p className='border-b border-gray-200 mt-2.5'></p>
                </td>
                <td className="px-4 py-4 text-sm text-gray-900 font-medium ">
                  {transaction.remark}
                  <p className='border-b border-gray-200 mt-2.5'></p>
                </td>
                <td className={`px-4 py-4 text-sm font-semibold text-left ${
                  transaction.amount >= 0 ? 'text-green-600' : 'text-red-600'
                }`}>
                  {formatAmount(transaction.amount)}
                  <p className='border-b border-gray-200 mt-2.5'></p>
                </td>
                <td className="px-4 py-4 text-sm text-gray-600">
                  {transaction.currency}
                  <p className='border-b border-gray-200 mt-2.5'></p>
                </td>
                <td className="px-4 py-4 text-sm">
                  <div className="flex items-center">
                    <span>
                        <span
                          className={
                            `flex items-center gap-2 px-3 py-1 rounded-full font-medium text-xs ` +
                            `bg-gray-100 text-gray-600`
                          }
                        >
                          <span></span>
                          <span className={`w-2 h-2 rounded-full mr-1 ${transaction.type === 'Credit' ? 'bg-green-400' : 'bg-red-400'}`}></span>
                          {transaction.type}
                        </span>
                      <p className='border-b border-gray-200 mt-2.5'></p>
                      </span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionTable; 