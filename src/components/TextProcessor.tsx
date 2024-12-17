import React from 'react';
import { TextProcessorProps } from '../types';

export default function TextProcessor({
  inputText,
  setInputText,
  outputText,
  processText,
  inputPlaceholder = 'Enter your text here...',
  outputPlaceholder = 'Output will appear here...'
}: TextProcessorProps) {
  return (
    <div className="space-y-6">
      <div>
        <label htmlFor="input" className="block text-sm font-medium text-gray-700">
          Input
        </label>
        <textarea
          id="input"
          rows={6}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          placeholder={inputPlaceholder}
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
      </div>

      <button
        onClick={processText}
        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Process
      </button>

      <div>
        <label htmlFor="output" className="block text-sm font-medium text-gray-700">
          Output
        </label>
        <textarea
          id="output"
          rows={6}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm bg-gray-50"
          placeholder={outputPlaceholder}
          value={outputText}
          readOnly
        />
      </div>
    </div>
  );
}