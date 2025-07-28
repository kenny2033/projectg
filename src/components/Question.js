import React from "react";

export default function Question({ question, onAnswerSelect, showCorrect }) {
  const isCorrect = question.selectedAnswer === question.correctAnswer;

  return (
    <div
      className={`question ${
        showCorrect ? (isCorrect ? "correct" : "incorrect") : ""
      }`}
    >
      <h3>{question.question}</h3>
      <div className="options">
        {question.options.map((option, index) => (
          <button
            key={index}
            className={`option-btn ${
              question.selectedAnswer === option ? "selected" : ""
            } ${
              showCorrect && option === question.correctAnswer
                ? "correct-answer"
                : ""
            }`}
            onClick={() => onAnswerSelect(question.id, option)}
            disabled={showCorrect}
          >
            {option}
          </button>
        ))}
      </div>
      {showCorrect && !isCorrect && (
        <p className="correct-text">Correct answer: {question.correctAnswer}</p>
      )}
    </div>
  );
}
