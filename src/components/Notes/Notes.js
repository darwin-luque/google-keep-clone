import React, { Component } from 'react';

import Note from './Note/Note';
import notes from '../../notes';

class Notes extends Component {
    render () {
        const renderNotes = notes.map(note => <Note key={note.key} title={note.title} content={note.content} />);
        return (
            <div>
                {renderNotes}
            </div>
        );
    }
}

export default Notes;