import React from "react";

interface AnsweredQuestion {
  id: string;
  question: string;
  weightage: number;
  correctAnswer: string;
  userAnswer: string;
  options: string[];
}

interface ResultsProps {
  score: number;
  answeredQuestions: AnsweredQuestion[];
}

const ResultsComponent: React.FC<ResultsProps> = ({
  score,
  answeredQuestions,
}) => {
  return (
    <div className="results">
      <h2>Your Score: {score}</h2>
      <h3>Answered Questions:</h3>
      <ul>
        {answeredQuestions.map((answeredQuestion) => (
          <li key={answeredQuestion.id}>
            <p>{answeredQuestion.question}</p>
            <p>Your Answer: {answeredQuestion.userAnswer}</p>
            <p>Correct Answer: {answeredQuestion.correctAnswer}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResultsComponent;
