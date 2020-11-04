import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';

const Note = ({title, content, deleteItem}) => {
    return (
        <div className="note">
            <h1>{title}</h1>
            <p>{content}</p>
            <button onClick={deleteItem}>
                <DeleteIcon />
            </button>
        </div>
    );
};

export default Note;