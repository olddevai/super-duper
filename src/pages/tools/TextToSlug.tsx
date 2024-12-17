import React, { useState } from 'react';
import { tools } from '../../data/tools';
import { toSlug } from '../../utils/textUtils';
import TextProcessor from '../../components/TextProcessor';
import ToolLayout from '../../components/ToolLayout';

export default function TextToSlug() {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');

  const processText = () => {
    setOutputText(toSlug(inputText));
  };

  return (
    <ToolLayout tool={tools.find(t => t.id === 'text-to-slug')!}>
      <TextProcessor
        inputText={inputText}
        setInputText={setInputText}
        outputText={outputText}
        processText={processText}
        inputPlaceholder="Enter text to convert to slug..."
        outputPlaceholder="Slug will appear here..."
      />
    </ToolLayout>
  );
}