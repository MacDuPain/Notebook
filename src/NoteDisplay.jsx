import React, { useState, useEffect } from 'react';
import Showdown from 'showdown';

const converter = new Showdown.Converter();

const NoteDisplay = ({ noteTitle, markdownValue, onTitleChange, onMarkdownChange, onSave }) => {
    const content = converter.makeHtml(markdownValue);
    const [localTitle, setLocalTitle] = useState(noteTitle);
    const [localMarkdown, setLocalMarkdown] = useState(markdownValue);

    useEffect(() => {
        setLocalTitle(noteTitle);
        setLocalMarkdown(markdownValue);
    }, [noteTitle, markdownValue]);

    const handleTitleChange = (e) => {
        setLocalTitle(e.target.value);
        onTitleChange(e.target.value);
    };

    const handleMarkdownChange = (e) => {
        setLocalMarkdown(e.target.value);
        onMarkdownChange(e.target.value);
    };

    const handleSave = () => {
        onSave(localTitle, localMarkdown); // Appelle la fonction pour sauvegarder
    };

    return (
        <div>
            <h2 style={{ color: '#d10000' }}>{localTitle}</h2>
            <div dangerouslySetInnerHTML={{ __html: content }} />
            <input
                type="text"
                value={localTitle}
                onChange={handleTitleChange}
                placeholder="Titre de la note"
                style={{ marginTop: '20px' }}
            />
            <textarea
                value={localMarkdown}
                onChange={handleMarkdownChange}
                placeholder="Contenu de la note"
                style={{ marginTop: '10px' }}
            />
            <button onClick={handleSave} style={{ marginTop: '10px', backgroundColor: '#d10000', color: '#fff' }}>
                Save
            </button>
        </div>
    );
};

export default NoteDisplay;
