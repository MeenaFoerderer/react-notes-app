import { useState } from "react";

function AddNote({handleAddNote}) {
    const [noteText, setNoteText] = useState('');
    const [count, setCount] = useState(300);

    const handleChange = (event) => {
        const characters = noteText.trim().length;
        if (count > 0) {
            setCount(301 - characters);
            setNoteText(event.target.value);
        }   
    }

    const handleSaveClick = () => {
        if (noteText.trim().length > 0){
            handleAddNote(noteText);
            setNoteText('');
            setCount(300);
        }
    }

    return (
        <div className="note new">
            <textarea 
                rows={8} 
                cols={10} 
                placeholder={"Type to add a note"}
                value={noteText}
                onChange={handleChange}
            ></textarea>
            <div className="note-footer">
                <small>{count} remaining</small>
                <button className="save" onClick={handleSaveClick}>Save</button>
            </div>
        </div>
    )
}

export default AddNote;