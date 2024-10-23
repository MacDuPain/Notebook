import React from 'react';
import Showdown from 'showdown';

// Instanciation du convertisseur Showdown
const converter = new Showdown.Converter();

const NoteDisplay = ({ markdownValue }) => {
    // Conversion du Markdown en HTML
    const content = converter.makeHtml(markdownValue);

    return (
        <div>
            <h2>Note Preview</h2>
            {/* Le contenu HTML est inséré dans le DOM avec dangerouslySetInnerHTML */}
            <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
    );
};

export default NoteDisplay;
