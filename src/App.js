import NotesList from "./components/NotesList";
import { useState } from "react";
import {nanoid} from 'nanoid';
import { MdOutlineNetworkPing } from "react-icons/md";

function App() {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "This is the first note",
      date: "21/03/2023"
    }
  ]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()
    }

    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  }

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  }

  return (
    <div className="container">
      <NotesList notes={notes} handleAddNote={addNote} handleDeleteNote={deleteNote}/>
    </div>
  );
}

export default App;
