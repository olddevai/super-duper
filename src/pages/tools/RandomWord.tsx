import React, { useState } from 'react';
import { tools } from '../../data/tools';
import { generateRandomWord } from '../../utils/textUtils';
import ToolLayout from '../../components/ToolLayout';

export default function RandomWord() {
  const [words, setWords] = useState<string[]>([]);
  const [count, setCount] = useState(5);

  const generate = () => {
    setWords(Array.from({ length: count }, () => generateRandomWord()));
  };

  return (
    <ToolLayout tool={tools.find(t => t.id === 'random-word')!}>
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Number of Words
          </label>
          <input
            type="number"
            min="1"
            max="100"
            value={count}
            onChange={(e) => setCount(parseInt(e.target.value))}
            className="mt-1 block w-32 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>
        <button
          onClick={generate}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
        >
          Generate Words
        </button>
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex flex-wrap gap-2">
            {words.map((word, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-100 rounded-full text-gray-700"
              >
                {word}
              </span>
            ))}
          </div>
        </div>
      </div>
    </ToolLayout>
  );
}