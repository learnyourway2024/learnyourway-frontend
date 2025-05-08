import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import AiTutor from './components/AiTutor';
import HumanTutors from './components/HumanTutors';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/ai-tutor">AI Tutor</Link></li>
            <li><Link to="/human-tutors">Human Tutors</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ai-tutor" element={<AiTutor />} />
          <Route path="/human-tutors" element={<HumanTutors />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
