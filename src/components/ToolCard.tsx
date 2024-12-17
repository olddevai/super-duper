import React from 'react';
import { Link } from 'react-router-dom';
import * as Icons from 'lucide-react';
import { Tool } from '../types';

export default function ToolCard({ tool }: { tool: Tool }) {
  const Icon = Icons[tool.icon as keyof typeof Icons];

  return (
    <Link
      to={tool.path}
      className="block p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
    >
      <div className="flex items-center space-x-4">
        <div className="p-2 bg-indigo-100 rounded-lg">
          <Icon className="h-6 w-6 text-indigo-600" />
        </div>
        <div>
          <h3 className="text-lg font-medium text-gray-900">{tool.name}</h3>
          <p className="mt-1 text-sm text-gray-500">{tool.description}</p>
        </div>
      </div>
    </Link>
  );
}