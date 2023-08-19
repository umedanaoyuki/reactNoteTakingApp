import Sidebar from "./components/Sidebar.jsx";
import Main from "./components/Main.jsx";
import './App.css';

const App = () => {

    const onAddNote = () => {
      console.log("追加ボタンの押下");
    };

  return (
    <div className="App">
        <Sidebar onAddNote={onAddNote}/>
        <Main />
    </div>
  )
}

export default App
