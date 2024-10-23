import React, { useState } from 'react';
import MarkdownInput from './MarkdownInput';
import NoteDisplay from './NoteDisplay';
import './App.css';

const App = () => {
  // Utilise un tableau pour stocker plusieurs notes
  const [notes, setNotes] = useState([]);

  const handleSaveNote = (newNote) => {
    // Ajoute la nouvelle note au tableau des notes
    setNotes((prevNotes) => [...prevNotes, newNote]);
  };

  return (
    <div>
      {/* Affiche chaque note sauvegardée dans un composant NoteDisplay */}
      {notes.map((note, index) => (
        <NoteDisplay key={index} markdownValue={note} />
      ))}
      <MarkdownInput onSave={handleSaveNote} />
    </div>
  );
};

export default App;
