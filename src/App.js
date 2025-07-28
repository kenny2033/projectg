import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DarkModeProvider } from "./context/DarkModeContext";
import Home from "./components/Home";
import TenziGame from "./components/TenziGame";
import NotesApp from "./components/NotesApp";
import QuizApp from "./components/QuizApp";
import "./App.css";

function App() {
  return (
    <DarkModeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tenzi" element={<TenziGame />} />
          <Route path="/notes" element={<NotesApp />} />
          <Route path="/quiz" element={<QuizApp />} />
        </Routes>
      </Router>
    </DarkModeProvider>
  );
}

export default App;
