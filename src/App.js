// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes
import './App.css'; // Import the CSS file
import Home from './Components/Home';
import CreateQuiz from './Components/CreateQuiz';
import JoinQuiz from './Components/JoinQuiz';
import Quiz from './Components/Quiz';

const App = () => {
  return (
    <Router>
      <div className="container">
        <Routes> {/* Wrap Routes around Route components */}
          <Route path="/" element={<Home />} /> {/* Use "element" prop */}
          <Route path="/createQuiz" element={<CreateQuiz />} /> {/* Use "element" prop */}
          <Route path="/joinQuiz" element={<JoinQuiz />} /> {/* Use "element" prop */}
          <Route path="/quiz/:code" component={<Quiz />} /> {/* Use "component" prop */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
