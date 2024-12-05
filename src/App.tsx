import React, { useState } from "react";
import "./styles.css";
import QuestionComponent from "./QuestionComponent";
import ResultsComponent from "./ResultsComponent";

interface Question {
  id: string;
  question: string;
  weightage: number;
  correctAnswer: string;
  options: string[];
}

interface AnsweredQuestion extends Question {
  userAnswer: string;
}

const questionBank: Question[] = [
  {
    id: "1-1",
    question: "What is the capital of France?",
    weightage: 5,
    correctAnswer: "A",
    options: ["A) Paris", "B) London", "C) Berlin", "D) Madrid"],
  },
  {
    id: "1-2",
    question: "Which planet is known as the Red Planet?",
    weightage: 5,
    correctAnswer: "B",
    options: ["A) Earth", "B) Mars", "C) Jupiter", "D) Venus"],
  },
  {
    id: "1-3",
    question: "What is 2 + 2?",
    weightage: 1,
    correctAnswer: "A",
    options: ["A) 4", "B) 5", "C) 6", "D) 3"],
  },
  // Add more questions here...
];

const App: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [answeredQuestions, setAnsweredQuestions] = useState<
    AnsweredQuestion[]
  >([]);
  const [score, setScore] = useState<number>(0);
  const [completed, setCompleted] = useState<boolean>(false);

  // Ensure index doesn't go out of bounds
  const currentQuestion = questionBank[currentQuestionIndex];

  // Handle answer selection
  const handleAnswer = (answer: string): void => {
    if (!currentQuestion) {
      console.error("Error: current question is undefined");
      return;
    }

    // Record the answer
    const newAnsweredQuestion = {
      ...currentQuestion,
      userAnswer: answer,
    };

    // Update the score
    const newScore =
      answer === currentQuestion.correctAnswer
        ? score + currentQuestion.weightage
        : score;
    setAnsweredQuestions((prev) => [...prev, newAnsweredQuestion]);
    setScore(newScore);

    // Move to the next question or complete the test
    const nextIndex = currentQuestionIndex + 1;
    if (nextIndex < questionBank.length) {
      setCurrentQuestionIndex(nextIndex);
    } else {
      setCompleted(true);
    }
  };

  return (
    <div className="App">
      {!completed ? (
        currentQuestion ? (
          <QuestionComponent
            question={currentQuestion}
            onAnswer={handleAnswer}
          />
        ) : (
          <div>Loading...</div> // Optional loading state if the question is not ready
        )
      ) : (
        <ResultsComponent score={score} answeredQuestions={answeredQuestions} />
      )}
    </div>
  );
};

export default App;
