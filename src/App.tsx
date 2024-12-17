import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import TextToSlug from './pages/tools/TextToSlug';
import LoremIpsum from './pages/tools/LoremIpsum';
import CaseConverter from './pages/tools/CaseConverter';
import WordCounter from './pages/tools/WordCounter';
import RemoveLineBreaks from './pages/tools/RemoveLineBreaks';
import RandomWord from './pages/tools/RandomWord';
import TextRepeater from './pages/tools/TextRepeater';
import TextSorter from './pages/tools/TextSorter';
import CommaSeparator from './pages/tools/CommaSeparator';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tools/text-to-slug" element={<TextToSlug />} />
          <Route path="/tools/lorem-ipsum" element={<LoremIpsum />} />
          <Route path="/tools/case-converter" element={<CaseConverter />} />
          <Route path="/tools/word-counter" element={<WordCounter />} />
          <Route path="/tools/remove-breaks" element={<RemoveLineBreaks />} />
          <Route path="/tools/random-word" element={<RandomWord />} />
          <Route path="/tools/text-repeater" element={<TextRepeater />} />
          <Route path="/tools/text-sorter" element={<TextSorter />} />
          <Route path="/tools/comma-separator" element={<CommaSeparator />} />
        </Routes>
      </Layout>
    </Router>
  );
}