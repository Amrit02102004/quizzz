import React from 'react';

const Question = ({ question, handleQuestionChange, handleOptionChange, handleCorrectOptionChange, removeQuestion }) => {
  return (
    <div className="question">
      <input
        type="text"
        placeholder="Enter question"
        value={question.text}
        onChange={(e) => handleQuestionChange(e.target.value)}
      />
      {question.options.map((option, index) => (
        <div key={index} className="option">
          <label>
            <input
              type="checkbox"
              checked={question.correctOption === index}
              onChange={() => handleCorrectOptionChange(index)}
            />
          </label>
          <input
            type="text"
            placeholder={`Enter option ${index + 1}`}
            value={option}
            onChange={(e) => handleOptionChange(index, e.target.value)}
          />
        </div>
      ))}
      <button onClick={removeQuestion}>Remove Question</button>
    </div>
  );
};

export default Question;
