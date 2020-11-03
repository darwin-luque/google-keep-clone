import React, { useState } from 'react';
import './App.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Note from './components/Note/Note';
import CreateArea from './components/CreateArea/CreateArea';

import randomKeyGenerator from './utils/RandomKeyGenerator/randomKeyGenerator';

const App = () => {
  const [notes, setNotes] = useState([]);

  const addItem = (event) => {
    event.preventDefault();
    const [title, content] = event.target;
    const newNote = {
      key: randomKeyGenerator(8),
      title: title.value,
      content: content.value,
    };
    event.target[0].value = '';
    event.target[1].value = '';
    setNotes([
      ...notes,
      newNote
    ]);
  };

  const deleteItem = key => {
    const copyNotes = notes.filter(note => note.key !== key);
    setNotes(copyNotes);
  }

  return (
    <div className="App">
      <Header />
      <CreateArea addItem={addItem} />
      {notes.map(note => <Note key={note.key} title={note.title} content={note.content} deleteItem={() => deleteItem(note.key)} />)}
      <Footer />
    </div>
  );
}

export default App;
