import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { Tool } from '../types';

interface ToolLayoutProps {
  tool: Tool;
  children: React.ReactNode;
}

export default function ToolLayout({ tool, children }: ToolLayoutProps) {
  const location = useLocation();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <Link
          to="/"
          className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700"
        >
          <ChevronLeft className="h-4 w-4 mr-1" />
          Back to Tools
        </Link>
        <h1 className="mt-4 text-3xl font-bold text-gray-900">{tool.name}</h1>
        <p className="mt-2 text-gray-600">{tool.description}</p>
      </div>
      {children}
    </div>
  );
}