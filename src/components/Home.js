import React from "react";
import { Link } from "react-router-dom";
import { useDarkMode } from "../context/DarkModeContext";

export default function Home() {
  const { toggleDarkMode } = useDarkMode();

  return (
    <div className="home">
      <div className="mode-toggle">
        <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
      </div>

      <h1>Kenny's React Arcade</h1>
      <p>Explore interactive React applications</p>

      <div className="app-buttons">
        <Link to="/tenzi">
          <button className="app-btn tenzi-btn">Play Tenzi Game</button>
        </Link>
        <Link to="/notes">
          <button className="app-btn notes-btn">Open Notes App</button>
        </Link>
        <Link to="/quiz">
          <button className="app-btn quiz-btn">Start Quiz</button>
        </Link>
      </div>
    </div>
  );
}
