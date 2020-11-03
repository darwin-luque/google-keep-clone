import React from 'react';

const note = ({title, content, deleteItem}) => {
    return (
        <div className="note">
            <h1>{title}</h1>
            <p>{content}</p>
            <button onClick={deleteItem}>DELETE</button>
        </div>
    );
};

export default note;