import React, { useState } from 'react';
import './App.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Note from './components/Note/Note';
import CreateArea from './components/CreateArea/CreateArea';

import randomKeyGenerator from './utils/RandomKeyGenerator/randomKeyGenerator';

const App = () => {
  const [notes, setNotes] = useState([]);
  const [isCreate, setIsCreate] = useState(false);

  const addItem = (title, content, event) => {
    const newNote = {
      key: randomKeyGenerator(8),
      title: title,
      content: content,
    };
    setNotes([
      ...notes,
      newNote
    ]);
    setIsCreate(false);
    event.target.parentNode.parentNode.parentNode.childNodes[2].value = '';
  };

  const deleteItem = key => {
    const copyNotes = notes.filter(note => note.key !== key);
    setNotes(copyNotes);
  }

  const createNoteHandler = () => {
    setIsCreate(true)
  }

  return (
    <div className="App">
      <Header />
      <CreateArea addItem={addItem} createNote={isCreate} click={createNoteHandler} />
      {notes.map(note => <Note key={note.key} title={note.title} content={note.content} deleteItem={() => deleteItem(note.key)} />)}
      <Footer />
    </div>
  );
}

export default App;
