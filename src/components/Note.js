import React from "react";

export default function Note({ note, deleteNote }) {
  return (
    <div className="note">
      <div className="note-text">{note.text}</div>
      <div className="note-footer">
        <small>{note.date}</small>
        <button onClick={() => deleteNote(note.id)}>Delete</button>
      </div>
    </div>
  );
}
