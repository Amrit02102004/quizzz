import React from 'react';

const QuizTitle = ({ title, setTitle }) => {
  return (
    <div className="quiz-title">
      <input
        type="text"
        placeholder="Enter quiz title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
    </div>
  );
};

export default QuizTitle;
