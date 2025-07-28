import React, { useState, useEffect } from "react";
import Note from "./Note";
import { useDarkMode } from "../context/DarkModeContext";

export default function NotesApp() {
  const { toggleDarkMode } = useDarkMode();
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes")) || []
  );
  const [currentNote, setCurrentNote] = useState("");

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  function addNote() {
    if (currentNote.trim()) {
      setNotes((prevNotes) => [
        ...prevNotes,
        {
          id: crypto.randomUUID(),
          text: currentNote,
          date: new Date().toLocaleDateString(),
        },
      ]);
      setCurrentNote("");
    }
  }

  function deleteNote(id) {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  }

  return (
    <div className="notes-container">
      <div className="mode-toggle">
        <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
      </div>

      <h1>Notes App</h1>

      <div className="note-input">
        <textarea
          value={currentNote}
          onChange={(e) => setCurrentNote(e.target.value)}
          placeholder="Add a new note..."
        />
        <button onClick={addNote}>Add Note</button>
      </div>

      <div className="notes-list">
        {notes.map((note) => (
          <Note key={note.id} note={note} deleteNote={deleteNote} />
        ))}
      </div>
    </div>
  );
}
