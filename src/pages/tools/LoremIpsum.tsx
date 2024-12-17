import React, { useState } from 'react';
import { tools } from '../../data/tools';
import { generateLoremIpsum } from '../../utils/textUtils';
import ToolLayout from '../../components/ToolLayout';

export default function LoremIpsum() {
  const [paragraphs, setParagraphs] = useState(3);
  const [output, setOutput] = useState('');

  const generateText = () => {
    setOutput(generateLoremIpsum(paragraphs));
  };

  return (
    <ToolLayout tool={tools.find(t => t.id === 'lorem-ipsum')!}>
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Number of Paragraphs
          </label>
          <input
            type="number"
            min="1"
            max="10"
            value={paragraphs}
            onChange={(e) => setParagraphs(parseInt(e.target.value))}
            className="mt-1 block w-32 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>
        <button
          onClick={generateText}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
        >
          Generate
        </button>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Generated Text
          </label>
          <textarea
            rows={10}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm bg-gray-50"
            value={output}
            readOnly
          />
        </div>
      </div>
    </ToolLayout>
  );
}