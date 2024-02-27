// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './home.css'; // Import the CSS file for home page styling

const Home = () => {
  return (
    <div className="home-container">
      <div className="left-side">
        <h2>Create a Quiz</h2>
        <p>Create your own quiz and challenge others!</p>
        <Link to="/createQuiz" className="btn">Create Quiz</Link>
      </div>
      <div className="right-side">
        <h2>Join a Quiz</h2>
        <p>Join a quiz created by others and test your knowledge!</p>
        <Link to="/joinQuiz" className="btn">Join Quiz</Link>
      </div>
    </div>
  );
};

export default Home;
