import React, { useState } from 'react';
import { tools } from '../../data/tools';
import ToolLayout from '../../components/ToolLayout';

export default function TextRepeater() {
  const [text, setText] = useState('');
  const [count, setCount] = useState(5);
  const [separator, setSeparator] = useState('\n');
  const [output, setOutput] = useState('');

  const repeat = () => {
    setOutput(Array(count).fill(text).join(separator));
  };

  return (
    <ToolLayout tool={tools.find(t => t.id === 'text-repeater')!}>
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Text to Repeat
          </label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Number of Times
            </label>
            <input
              type="number"
              min="1"
              max="1000"
              value={count}
              onChange={(e) => setCount(parseInt(e.target.value))}
              className="mt-1 block w-32 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Separator
            </label>
            <select
              value={separator}
              onChange={(e) => setSeparator(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            >
              <option value="\n">New Line</option>
              <option value=", ">Comma</option>
              <option value=" ">Space</option>
            </select>
          </div>
        </div>
        <button
          onClick={repeat}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
        >
          Repeat Text
        </button>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Output
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