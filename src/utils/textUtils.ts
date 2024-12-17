export const toSlug = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
};

export const generateLoremIpsum = (paragraphs: number): string => {
  const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`;
  return Array(paragraphs).fill(lorem).join('\n\n');
};

export const convertCase = (text: string, type: 'upper' | 'lower' | 'title' | 'sentence'): string => {
  switch (type) {
    case 'upper':
      return text.toUpperCase();
    case 'lower':
      return text.toLowerCase();
    case 'title':
      return text
        .toLowerCase()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
    case 'sentence':
      return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
    default:
      return text;
  }
};

export const countWords = (text: string): { words: number; chars: number; sentences: number } => {
  const words = text.trim().split(/\s+/).length;
  const chars = text.length;
  const sentences = text.split(/[.!?]+/).length - 1;
  return { words, chars, sentences };
};

export const removeLineBreaks = (text: string): string => {
  return text.replace(/(\r\n|\n|\r)/gm, ' ').replace(/\s+/g, ' ').trim();
};

export const generateRandomWord = (): string => {
  const consonants = 'bcdfghjklmnpqrstvwxyz';
  const vowels = 'aeiou';
  let word = '';
  const length = Math.floor(Math.random() * 4) + 4;
  
  for (let i = 0; i < length; i++) {
    if (i % 2 === 0) {
      word += consonants[Math.floor(Math.random() * consonants.length)];
    } else {
      word += vowels[Math.floor(Math.random() * vowels.length)];
    }
  }
  
  return word;
};