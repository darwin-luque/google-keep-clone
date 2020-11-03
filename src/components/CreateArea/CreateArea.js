import React from 'react';

const CreateArea = ({addItem}) => {
    return (
        <form onSubmit={addItem} className="create-note">
            <input name="title" placeholder="Title" />
            <textarea name="content" placeholder="Take a note..." rows="3"/>
            <button type="submit" >Add</button>
        </form>
    )
}

export default CreateArea;