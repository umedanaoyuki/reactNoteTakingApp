import Sidebar from "./components/Sidebar.jsx";
import Main from "./components/Main.jsx";
import './App.css';
import {useState} from "react";

const App = () => {

    const [notes, setNotes] = useState([
    ]);

    const onAddNote = () => {
      console.log("追加ボタンの押下");
      const newNote = {
          id: 1,
          title: "新しいノートです",
          content: "内容",
          modDate: Date.now(),
      };
      setNotes([...notes, newNote]);
      console.log(notes);
    };

  return (
    <div className="App">
        <Sidebar onAddNote={onAddNote}
        notes={notes}/>
        <Main />
    </div>
  )
}

export default App
