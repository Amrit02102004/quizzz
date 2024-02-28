import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Question from './Question';

const QuizPage = () => {
  const { code } = useParams();
  const [quizData, setQuizData] = useState(null);
  const [name, setName] = useState('');
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    // Fetch quiz data when component mounts
    axios.get(`http://localhost:5000/quizPage/${code}?name=${name}`)
      .then(response => {
        setQuizData(response.data);
      })
      .catch(error => {
        console.error('Error fetching quiz data:', error);
      });
  }, [code, name]);

  const handleAnswerChange = (questionIndex, answerIndex) => {
    // Update answers array when a user selects an answer
    setAnswers(prevAnswers => {
      const updatedAnswers = [...prevAnswers];
      updatedAnswers[questionIndex] = answerIndex;
      return updatedAnswers;
    });
  };

  const handleSubmitQuiz = () => {
    // Prepare submission data and send it to the server
    const submissionData = {
      name: name,
      answers: answers
    };
    axios.post(`https://quizzz-black.vercel.app/submit-quiz`, submissionData)
      .then(response => {
        console.log('Quiz submitted successfully:', response.data);
      })
      .catch(error => {
        console.error('Error submitting quiz:', error);
      });
  };

  if (!quizData) {
    return <div>Loading quiz...</div>;
  }

  return (
    <div>
      <h1>Quiz</h1>
      <p>Welcome, {name}!</p>
      {quizData.questions.map((question, index) => (
        <Question
          key={index}
          question={question}
          questionIndex={index}
          handleAnswerChange={handleAnswerChange}
        />
      ))}
      <button onClick={handleSubmitQuiz}>Submit Quiz</button>
    </div>
  );
};

export default QuizPage;
