import React, { useState } from 'react';
import { tools } from '../../data/tools';
import { removeLineBreaks } from '../../utils/textUtils';
import TextProcessor from '../../components/TextProcessor';
import ToolLayout from '../../components/ToolLayout';

export default function RemoveLineBreaks() {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');

  const processText = () => {
    setOutputText(removeLineBreaks(inputText));
  };

  return (
    <ToolLayout tool={tools.find(t => t.id === 'remove-breaks')!}>
      <TextProcessor
        inputText={inputText}
        setInputText={setInputText}
        outputText={outputText}
        processText={processText}
        inputPlaceholder="Enter text with line breaks..."
        outputPlaceholder="Text without line breaks will appear here..."
      />
    </ToolLayout>
  );
}