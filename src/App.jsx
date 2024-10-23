// App.jsx
import React, { useState } from 'react';
import MarkdownInput from './MarkdownInput';
import NoteDisplay from './NoteDisplay';
import Sidebar from './Sidebar';
import './App.css';

const App = () => {
  const [notes, setNotes] = useState([]);
  const [selectedNoteIndex, setSelectedNoteIndex] = useState(null);

  const handleSaveNote = (newNote) => {
    console.log('New note saved:', newNote);
    setNotes((prevNotes) => [...prevNotes, newNote]);
    setSelectedNoteIndex(null); 
  };

  const handleSelectNote = (index) => {
    setSelectedNoteIndex(index); 
  };

  return (
    <div className="container">
      <Sidebar notes={notes} onSelectNote={handleSelectNote} /> 
      <div className="main-content">
        {selectedNoteIndex !== null && (
          <NoteDisplay
            noteTitle={notes[selectedNoteIndex].noteTitle}
            markdownValue={notes[selectedNoteIndex].markdownText}
          />
        )}
        <MarkdownInput onSave={handleSaveNote} />
      </div>
    </div>
  );
};

export default App;
