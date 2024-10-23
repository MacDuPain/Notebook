import React from 'react';
import Showdown from 'showdown';

const converter = new Showdown.Converter();

const NoteDisplay = ({ noteTitle, markdownValue }) => {
    const content = converter.makeHtml(markdownValue);

    return (
        <div>
            <h2 style={{ color: '#d10000' }}>{noteTitle}</h2>
            <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
    );
};

export default NoteDisplay;

