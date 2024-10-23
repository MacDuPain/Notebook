import React from 'react';

const Sidebar = ({ notes, onSelectNote }) => {
    return (
        <div className="sidebar">
            <h2>Notes à négliger</h2>
            {notes.length === 0 ? (
                <p>Aucune note à afficher</p>
            ) : (
                <ul>
                    {notes.map((note, index) => (
                        <li key={index} onClick={() => onSelectNote(index)}>
                            <h3 className="note-title">{note.noteTitle}</h3> 
                            <p>{note.markdownText.substring(0, 20)}...</p> 
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Sidebar;
