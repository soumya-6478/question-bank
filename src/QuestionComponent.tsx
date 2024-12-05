import React from "react";

interface QuestionProps {
  question: {
    id: string;
    question: string;
    weightage: number;
    correctAnswer: string;
    options: string[];
  };
  onAnswer: (answer: string) => void;
}

const QuestionComponent: React.FC<QuestionProps> = ({ question, onAnswer }) => {
  const handleOptionClick = (answer: string) => {
    onAnswer(answer); // Call the onAnswer function with the selected answer
  };

  return (
    <div className="question-container">
      <h3>{question.question}</h3>
      <div className="options">
        {question.options.map((option, index) => {
          // Display each option as a clickable button
          return (
            <button
              key={index}
              onClick={() => handleOptionClick(option.charAt(0))}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default QuestionComponent;
