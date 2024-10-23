import React, { useState } from 'react';
import Sidebar from './Sidebar';
import MarkdownInput from './MarkdownInput';
import NoteDisplay from './NoteDisplay';
import './App.css';

const App = () => {
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);

  const handleSave = (note) => {
    setNotes([...notes, note]);
  };

  const handleSelectNote = (index) => {
    setSelectedNote(index);
  };

  const handleNewNote = () => {
    setSelectedNote(null); // Réinitialise la sélection pour permettre la création d'une nouvelle note
  };

  const handleTitleChange = (newTitle) => {
    // Ne rien faire ici, la sauvegarde se fera avec le bouton
  };

  const handleMarkdownChange = (newMarkdown) => {
    // Ne rien faire ici, la sauvegarde se fera avec le bouton
  };

  const handleSaveChanges = (newTitle, newMarkdown) => {
    if (selectedNote !== null) {
      const updatedNotes = [...notes];
      updatedNotes[selectedNote] = { noteTitle: newTitle, markdownText: newMarkdown };
      setNotes(updatedNotes);
    }
  };

  return (
    <div className="main-container">
      <Sidebar notes={notes} onSelectNote={handleSelectNote} onNewNote={handleNewNote} />
      <div className="main-content">
        {selectedNote !== null ? (
          <NoteDisplay
            noteTitle={notes[selectedNote].noteTitle}
            markdownValue={notes[selectedNote].markdownText}
            onTitleChange={handleTitleChange} // Ne sert plus dans ce cas
            onMarkdownChange={handleMarkdownChange} // Ne sert plus dans ce cas
            onSave={handleSaveChanges} // Passer la fonction de sauvegarde ici
          />
        ) : (
          <MarkdownInput onSave={handleSave} />
        )}
      </div>
    </div>
  );
};

export default App;
