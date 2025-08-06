'use client';

import React from 'react';
import clsx from 'clsx';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = React.memo(({ isOpen, onClose }) => {
  return (
    <>
      {/* Mobile overlay */}
      <div
        className={clsx(
          'fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden transition-opacity duration-300',
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
        onClick={onClose}
      />

      {/* Sidebar */}
      <aside
        className={clsx(
          'fixed top-0 left-0 h-full w-64 bg-white shadow-xl z-50 flex flex-col transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:shadow-md lg:z-auto',
          isOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >

        <div className="pt-20 lg:pt-6 p-6 flex-1">
          <nav className="space-y-2">
            <div className="bg-blue-50 text-blue-700 px-4 py-3 rounded-lg font-medium border border-blue-200">
              Dashboard
            </div>
            <div className="text-gray-600 px-4 py-3 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors">
              Transactions
            </div>
            <div className="text-gray-600 px-4 py-3 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors">
              Reports
            </div>
            <div className="text-gray-600 px-4 py-3 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors">
              Settings
            </div>
          </nav>
        </div>
      </aside>
    </>
  );
});

Sidebar.displayName = 'Sidebar';

export default Sidebar;