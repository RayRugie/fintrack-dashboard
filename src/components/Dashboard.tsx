'use client';

import React, { useMemo, useState } from 'react';
import { sampleTransactions, dashboardSummary } from '@/data/sampleData';
import TopHeader from './ui/TopHeader';
import Sidebar from './Sidebar';
import Header from './Header';
import SummaryCard from './SummaryCard';
import TransactionTable from './TransactionTable';

const Dashboard: React.FC = React.memo(() => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const summaryCards = useMemo(
    () => [
      { title: "Total Balance", amount: dashboardSummary.totalBalance, change: dashboardSummary.balanceChange },
      { title: "Total Credits", amount: dashboardSummary.totalCredits, change: dashboardSummary.creditsChange },
      { title: "Total Debits", amount: dashboardSummary.totalDebits, change: dashboardSummary.debitsChange },
      { title: "Transactions", amount: dashboardSummary.transactionCount, change: dashboardSummary.transactionChange, currency: "", isCount: true },
    ],
    []
  );

  return (
    <div className="min-h-screen w-full bg-gray-50 flex flex-col overflow-hidden">
      <TopHeader onMenuClick={() => setIsSidebarOpen(prev => !prev)} />

      {/* Main content area */}
      <div className="flex flex-1 relative">
        <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

        {/* Main content */}
        <div className="flex-1 flex flex-col min-w-0">
          <div className="flex-1 bg-gray-50 flex flex-col overflow-hidden">
            <Header />

            <main className="flex-1 bg-white overflow-y-auto">
              <div className="px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
                {/* Summary section */}
                <div className="mb-8">
                  <h2 className="text-lg font-semibold text-gray-900 mb-6">Summary</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                    {summaryCards.map(card => (
                      <SummaryCard
                        key={card.title}
                        title={card.title}
                        amount={card.amount}
                        change={card.change}
                        currency={card.currency}
                        isCount={card.isCount}
                      />
                    ))}
                  </div>
                </div>

                {/* Transactions section */}
                <div>
                  <h2 className="text-lg font-semibold text-gray-900 mb-6">Recent Transactions</h2>
                  <TransactionTable transactions={sampleTransactions} />
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
});

Dashboard.displayName = 'Dashboard';
export default Dashboard;