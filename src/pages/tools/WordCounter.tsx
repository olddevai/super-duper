import React, { useState, useEffect } from 'react';
import { tools } from '../../data/tools';
import { countWords } from '../../utils/textUtils';
import ToolLayout from '../../components/ToolLayout';

export default function WordCounter() {
  const [text, setText] = useState('');
  const [stats, setStats] = useState({ words: 0, chars: 0, sentences: 0 });

  useEffect(() => {
    setStats(countWords(text));
  }, [text]);

  return (
    <ToolLayout tool={tools.find(t => t.id === 'word-counter')!}>
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Enter Text
          </label>
          <textarea
            rows={8}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Type or paste your text here..."
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-2xl font-bold text-indigo-600">{stats.words}</div>
            <div className="text-sm text-gray-500">Words</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-2xl font-bold text-indigo-600">{stats.chars}</div>
            <div className="text-sm text-gray-500">Characters</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-2xl font-bold text-indigo-600">{stats.sentences}</div>
            <div className="text-sm text-gray-500">Sentences</div>
          </div>
        </div>
      </div>
    </ToolLayout>
  );
}