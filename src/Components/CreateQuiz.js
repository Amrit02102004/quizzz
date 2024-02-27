import React, { useState } from 'react';
import QuizTitle from './QuizTitle';
import Question from './Question';
import './createQuiz.css';
const CreateQuiz = () => {
  const [title, setTitle] = useState('');
  const [questions, setQuestions] = useState([{ text: '', options: ['', '', '', ''], correctOption: null }]);

  const handleQuestionChange = (index, value) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index].text = value;
    setQuestions(updatedQuestions);
  };

  const handleOptionChange = (questionIndex, optionIndex, value) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].options[optionIndex] = value;
    setQuestions(updatedQuestions);
  };

  const handleCorrectOptionChange = (questionIndex, optionIndex) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].correctOption = optionIndex;
    setQuestions(updatedQuestions);
  };

  const addQuestion = () => {
    setQuestions([...questions, { text: '', options: ['', '', '', ''], correctOption: null }]);
  };

  const removeQuestion = (index) => {
    const updatedQuestions = [...questions];
    updatedQuestions.splice(index, 1);
    setQuestions(updatedQuestions);
  };

  const handleSubmitQuiz = () => {
    //TODO -  Handle Backend
    console.log({ title, questions });
  };

  return (
    <div className="create-quiz">
      <h1>Create Quiz</h1>
      <QuizTitle title={title} setTitle={setTitle} />
      {questions.map((question, index) => (
        <Question
          key={index}
          question={question}
          handleQuestionChange={(value) => handleQuestionChange(index, value)}
          handleOptionChange={(optionIndex, value) => handleOptionChange(index, optionIndex, value)}
          handleCorrectOptionChange={(optionIndex) => handleCorrectOptionChange(index, optionIndex)}
          removeQuestion={() => removeQuestion(index)}
        />
      ))}
      <button onClick={addQuestion}>Add Question</button>
      <button onClick={handleSubmitQuiz}>Submit Quiz</button>
    </div>
  );
};

export default CreateQuiz;
