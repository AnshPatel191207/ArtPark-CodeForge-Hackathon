import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from './components/layout/Container/Container';

// Pages
import { Home } from './pages/Home/Home';
import { Upload } from './pages/Upload/Upload';
import { Analysis } from './pages/Analysis/Analysis';
import { Roadmap } from './pages/Roadmap/Roadmap';
import { Compare } from './pages/Compare/Compare';

function App() {
  return (
    <Router>
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/analysis" element={<Analysis />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/compare" element={<Compare />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
