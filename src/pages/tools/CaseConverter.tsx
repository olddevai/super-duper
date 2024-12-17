import React, { useState } from 'react';
import { tools } from '../../data/tools';
import { convertCase } from '../../utils/textUtils';
import ToolLayout from '../../components/ToolLayout';

export default function CaseConverter() {
  const [inputText, setInputText] = useState('');
  const [output, setOutput] = useState('');

  const convert = (type: 'upper' | 'lower' | 'title' | 'sentence') => {
    setOutput(convertCase(inputText, type));
  };

  return (
    <ToolLayout tool={tools.find(t => t.id === 'case-converter')!}>
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Input Text
          </label>
          <textarea
            rows={6}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
        </div>
        <div className="flex flex-wrap gap-4">
          <button
            onClick={() => convert('upper')}
            className="px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
          >
            UPPERCASE
          </button>
          <button
            onClick={() => convert('lower')}
            className="px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
          >
            lowercase
          </button>
          <button
            onClick={() => convert('title')}
            className="px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Title Case
          </button>
          <button
            onClick={() => convert('sentence')}
            className="px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Sentence case
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