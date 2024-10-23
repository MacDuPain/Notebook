import React, { useState } from 'react';

const MarkdownInput = ({ onSave }) => {
    const [markdownText, setMarkdownText] = useState('');
    const [noteTitle, setNoteTitle] = useState('');

    const handleChange = (e) => {
        setMarkdownText(e.target.value);
    };

    const handleTitleChange = (e) => {
        setNoteTitle(e.target.value);
    };

    const handleSave = () => {
        if (noteTitle && markdownText) { 
            onSave({ markdownText, noteTitle });
            setMarkdownText('');
            setNoteTitle('');
        }
    };

    return (
        <div>
            <input
                type="text"
                value={noteTitle}
                onChange={handleTitleChange}
                placeholder="Titre de la note"
            />
            <textarea
                value={markdownText}
                onChange={handleChange}
                placeholder="Contenu de la note"
            />
            <button onClick={handleSave}>Save</button>
        </div>
    );
};

export default MarkdownInput;
