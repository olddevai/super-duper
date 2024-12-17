import React, { useState } from 'react';
import { tools } from '../../data/tools';
import ToolLayout from '../../components/ToolLayout';

export default function TextSorter() {
  const [inputText, setInputText] = useState('');
  const [output, setOutput] = useState('');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [ignoreCase, setIgnoreCase] = useState(true);

  const sort = () => {
    const lines = inputText.split('\n').filter(line => line.trim());
    const sorted = lines.sort((a, b) => {
      if (ignoreCase) {
        a = a.toLowerCase();
        b = b.toLowerCase();
      }
      return sortOrder === 'asc' ? a.localeCompare(b) : b.localeCompare(a);
    });
    setOutput(sorted.join('\n'));
  };

  return (
    <ToolLayout tool={tools.find(t => t.id === 'text-sorter')!}>
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Enter Text (one item per line)
          </label>
          <textarea
            rows={8}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Enter text to sort..."
          />
        </div>
        <div className="flex items-center space-x-4">
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value as 'asc' | 'desc')}
            className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          >
            <option value="asc">A to Z</option>
            <option value="desc">Z to A</option>
          </select>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              checked={ignoreCase}
              onChange={(e) => setIgnoreCase(e.target.checked)}
              className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <span className="ml-2 text-sm text-gray-600">Ignore case</span>
          </label>
        </div>
        <button
          onClick={sort}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
        >
          Sort Text
        </button>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Sorted Text
          </label>
          <textarea
            rows={8}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm bg-gray-50"
            value={output}
            readOnly
          />
        </div>
      </div>
    </ToolLayout>
  );
}