import React, { useState } from 'react';
import { tools } from '../../data/tools';
import ToolLayout from '../../components/ToolLayout';

export default function CommaSeparator() {
  const [inputText, setInputText] = useState('');
  const [output, setOutput] = useState('');
  const [action, setAction] = useState<'add' | 'remove'>('add');

  const process = () => {
    if (action === 'add') {
      const words = inputText.split(/\s+/).filter(word => word.trim());
      setOutput(words.join(', '));
    } else {
      setOutput(inputText.replace(/,\s*/g, ' ').trim());
    }
  };

  return (
    <ToolLayout tool={tools.find(t => t.id === 'comma-separator')!}>
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Enter Text
          </label>
          <textarea
            rows={6}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder={action === 'add' ? 'Enter words separated by spaces...' : 'Enter comma-separated text...'}
          />
        </div>
        <div className="flex items-center space-x-4">
          <select
            value={action}
            onChange={(e) => setAction(e.target.value as 'add' | 'remove')}
            className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          >
            <option value="add">Add Commas</option>
            <option value="remove">Remove Commas</option>
          </select>
          <button
            onClick={process}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Process Text
          </button>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Output
          </label>
          <textarea
            rows={6}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm bg-gray-50"
            value={output}
            readOnly
          />
        </div>
      </div>
    </ToolLayout>
  );
}