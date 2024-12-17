import React from 'react';
import { Menu } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
              >
                <Menu className="h-6 w-6" />
              </button>
              <Link to="/" className="flex items-center">
                <span className="text-xl font-bold text-indigo-600">DevTools</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          <aside className={`w-64 flex-shrink-0 ${isSidebarOpen ? 'block' : 'hidden'} md:block`}>
            <nav className="space-y-1">
              {children}
            </nav>
          </aside>
        </div>
      </div>
    </div>
  );
}