import React, { useState, useEffect } from "react";
import Question from "./Question";
import { useDarkMode } from "../context/DarkModeContext";

export default function QuizApp() {
  const { darkMode } = useDarkMode();
  const [quizStarted, setQuizStarted] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const sampleQuestions = [
    {
      id: 1,
      question: "How would one say goodbye in Spanish?",
      options: ["Adiós", "Hola", "Au Revoir", "Salir"],
      correctAnswer: "Adiós",
    },
    {
      id: 2,
      question:
        "Which best selling toy of 1983 caused hysteria, resulting in riots breaking in stores?",
      options: [
        "Cabbage Patch Kids",
        "Transformers",
        "Care Bears",
        "Rubik's Cube",
      ],
      correctAnswer: "Cabbage Patch Kids",
    },
    {
      id: 3,
      question: "What is the hottest planet in our Solar System?",
      options: ["Mercury", "Venus", "Mars", "Jupiter"],
      correctAnswer: "Venus",
    },
    {
      id: 4,
      question: "In which country was the caesar salad invented?",
      options: ["Italy", "Portugal", "Mexico", "France"],
      correctAnswer: "Mexico",
    },
    {
      id: 5,
      question: "How Many Hearts Does An Octopus Have?",
      options: ["One", "Two", "Three", "Four"],
      correctAnswer: "Three",
    },
  ];

  useEffect(() => {
    if (quizStarted) {
      setQuestions(
        sampleQuestions.map((q) => ({
          ...q,
          selectedAnswer: null,
        }))
      );
    }
  }, [quizStarted]);

  function handleAnswerSelect(questionId, answer) {
    setQuestions((prev) =>
      prev.map((q) =>
        q.id === questionId ? { ...q, selectedAnswer: answer } : q
      )
    );
  }

  function calculateScore() {
    const correct = questions.filter(
      (q) => q.selectedAnswer === q.correctAnswer
    ).length;
    setScore(correct);
    setShowScore(true);
  }

  function restartQuiz() {
    setQuizStarted(false);
    setShowScore(false);
    setScore(0);
  }

  return (
    <div className={`quiz-container ${darkMode ? "dark" : ""}`}>
      {!quizStarted ? (
        <div className="quiz-start">
          <h1>Quizzical</h1>
          <p>Test your knowledge with this fun quiz!</p>
          <button onClick={() => setQuizStarted(true)}>Start Quiz</button>
        </div>
      ) : (
        <div className="quiz-questions">
          <h1>Quiz Time!</h1>

          {questions.map((question) => (
            <Question
              key={question.id}
              question={question}
              onAnswerSelect={handleAnswerSelect}
              showCorrect={showScore}
            />
          ))}

          {showScore ? (
            <div className="quiz-results">
              <h2>
                You scored {score}/{questions.length} correct answers
              </h2>
              <button onClick={restartQuiz}>Play Again</button>
            </div>
          ) : (
            <button
              className="check-answers"
              onClick={calculateScore}
              disabled={questions.some((q) => q.selectedAnswer === null)}
            >
              Check Answers
            </button>
          )}
        </div>
      )}
    </div>
  );
}
