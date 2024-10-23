import React, { useState } from 'react';

const MarkdownInput = ({ onSave }) => {
    const [markdownText, setMarkdownText] = useState('');

    // Fonction pour mettre à jour la valeur du textarea
    const handleChange = (e) => {
        setMarkdownText(e.target.value);
    };

    // Fonction pour appeler la callback onSave lors de la sauvegarde
    const handleSave = () => {
        onSave(markdownText); // Cette fonction va faire le console.log dans la première étape
    };

    return (
        <div>
            <textarea
                value={markdownText}
                onChange={handleChange}
                placeholder="Write your markdown here..."
            />
            <button onClick={handleSave}>Save</button>
        </div>
    );
};

export default MarkdownInput;
