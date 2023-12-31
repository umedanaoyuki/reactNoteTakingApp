import Sidebar from "./components/Sidebar.jsx";
import Main from "./components/Main.jsx";
import './App.css';
import {useState} from "react";
import uuid from "react-uuid";

const App = () => {

    const [notes, setNotes] = useState([]);

    const [activeNote, setActiveNote] = useState(false);

    const onAddNote = () => {
      console.log("追加ボタンの押下");
      const newNote = {
          id: uuid(),
          title: "新しいノートです",
          content: "内容",
          modDate: Date.now(),
      };
      setNotes([...notes, newNote]);
      console.log(notes);
    };

    const onDeleteNote = (id) => {
      console.log("deleteボタン押下");
      const filterNotes = notes.filter((note) => {
        return note.id !== id;
      })
      setNotes(filterNotes);
    
    };

    const getActiveNote = () => {
      return notes.find((note) => note.id === activeNote)
    };

    const onUpdateNote = (updatedNote) => {
      //修正された新しいノートの配列を返す
        const updateNotesArray = notes.map((note) => {
           if (note.id === updatedNote.id) {
               return updatedNote;
           } else {
               return note;
           }
        });
      setNotes(updateNotesArray);
    };


  return (
    <div className="App">
        <Sidebar
        onAddNote={onAddNote}
        onDeleteNote={onDeleteNote}
        notes={notes}
        activeNote={activeNote}
        setActiveNote={setActiveNote}/>
        <Main activeNote={getActiveNote()}
              onUpdateNote={onUpdateNote} />
    </div>
  )
}

export default App
