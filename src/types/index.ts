export interface Tool {
  id: string;
  name: string;
  description: string;
  icon: string;
  path: string;
}

export interface TextProcessorProps {
  inputText: string;
  setInputText: (text: string) => void;
  outputText: string;
  processText: () => void;
  inputPlaceholder?: string;
  outputPlaceholder?: string;
}