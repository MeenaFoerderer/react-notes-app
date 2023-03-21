import NotesList from "./components/NotesList";
import { useState } from "react";
import {nanoid} from 'nanoid';

function App() {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "This is the first note",
      date: "21/03/2023"
    },
    {
      id: nanoid(),
      text: "This is the second note",
      date: "22/03/2023"
    },
    {
      id: nanoid(),
      text: "This is the third note",
      date: "23/03/2023"
    },
    {
      id: nanoid(),
      text: "This is the fourth note",
      date: "24/03/2023"
    },
  ]);

  return (
    <div className="container">
      <NotesList notes={notes}/>
    </div>
  );
}

export default App;
