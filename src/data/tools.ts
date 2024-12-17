import { Tool } from '../types';

export const tools: Tool[] = [
  {
    id: 'text-to-slug',
    name: 'Text to Slug',
    description: 'Convert text into URL-friendly slugs',
    icon: 'Link',
    path: '/tools/text-to-slug'
  },
  {
    id: 'lorem-ipsum',
    name: 'Lorem Ipsum Generator',
    description: 'Generate placeholder text for your designs',
    icon: 'FileText',
    path: '/tools/lorem-ipsum'
  },
  {
    id: 'case-converter',
    name: 'Case Converter',
    description: 'Convert text between different cases',
    icon: 'Type',
    path: '/tools/case-converter'
  },
  {
    id: 'word-counter',
    name: 'Word Counter',
    description: 'Count words, characters, and sentences',
    icon: 'Calculator',
    path: '/tools/word-counter'
  },
  {
    id: 'remove-breaks',
    name: 'Remove Line Breaks',
    description: 'Clean up text by removing line breaks',
    icon: 'Scissors',
    path: '/tools/remove-breaks'
  },
  {
    id: 'random-word',
    name: 'Random Word Generator',
    description: 'Generate random words',
    icon: 'Shuffle',
    path: '/tools/random-word'
  },
  {
    id: 'privacy-policy',
    name: 'Privacy Policy Generator',
    description: 'Create a privacy policy for your website',
    icon: 'Shield',
    path: '/tools/privacy-policy'
  },
  {
    id: 'terms',
    name: 'Terms Generator',
    description: 'Generate terms and conditions',
    icon: 'FileCheck',
    path: '/tools/terms'
  },
  {
    id: 'disclaimer',
    name: 'Disclaimer Generator',
    description: 'Create a website disclaimer',
    icon: 'AlertCircle',
    path: '/tools/disclaimer'
  },
  {
    id: 'text-repeater',
    name: 'Text Repeater',
    description: 'Repeat text multiple times',
    icon: 'Copy',
    path: '/tools/text-repeater'
  },
  {
    id: 'text-sorter',
    name: 'Text Sorter',
    description: 'Sort lines of text alphabetically',
    icon: 'ArrowUpDown',
    path: '/tools/text-sorter'
  },
  {
    id: 'comma-separator',
    name: 'Comma Separator',
    description: 'Add or remove commas from text',
    icon: 'Separator',
    path: '/tools/comma-separator'
  }
];