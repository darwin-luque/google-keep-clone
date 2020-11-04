import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab/Fab';
import Zoom from '@material-ui/core/Zoom';

const CreateArea = ({addItem, createNote, click}) => {
    const [note, setNote] = useState({
        title: '',
        content: ''
    });

    const onChangeHandler = (event) => {
        setNote({
            ...note,
            [event.target.name]: event.target.value
        });
    }

    return (
        <form className="create-note">
            {createNote ? <input onChange={onChangeHandler} name="title" placeholder="Title" autoComplete="off" /> : null}
            <textarea onChange={onChangeHandler} name="content" placeholder="Take a note..." rows={createNote? '3' : '1'} onClick={click} />
            <Zoom in={createNote}><Fab onClick={(event) => addItem(note.title, note.content, event)} > <AddIcon /> </Fab></Zoom>
        </form>
    )
}

export default CreateArea;