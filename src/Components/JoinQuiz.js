// JoinQuiz.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './joinQuiz.css';
import axios from 'axios';
const JoinQuiz = () => {
  const [name, setName] = useState('');
  const [code, setCode] = useState('');

  const handleSubmit = async () => {
    if (!name || !code) {
      alert('Please enter your name and the quiz code');
      return;
    }
    try {
      const response = await axios.get(`http://localhost:5000/quiz/${code}`);
      console.log(response.data); 
      if(response.status === 201) {
        window.location.href = `/quiz/${code}?name=${name}`;
      }
      else if(response.status === 403) {
        alert('Quiz does not exist');
      }
      else {
        alert('Error joining quiz');
      }
    } catch (error) {
      console.error('Error submitting quiz:', error);
    }
  };

  return (
    <div className="join-quiz-container">
      <h2>Join Quiz</h2>
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label>Quiz Code:</label>
        <input type="text" value={code} onChange={(e) => setCode(e.target.value)} />
      </div>
      <button onClick={handleSubmit}>Enter Quiz</button>
    </div>
  );
};

export default JoinQuiz;
