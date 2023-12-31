import React, {Component} from 'react';
import './Sidebar.css';

const Sidebar = ({onAddNote, notes, onDeleteNote, activeNote,setActiveNote}) => {

    // const sortedNotes = notes.sort((a,b) => b.modDate, a.modDate);


        return (
            <div className="app-sidebar">
                <div className="app-sidebar-header">
                    <h1>ノート</h1>
                    <button onClick={onAddNote}>追加</button>
                </div>
                <div className="app-sidebar-notes">
                    {notes.map((note) => (
                        <div className={`app-sidebar-note ${note.id === activeNote && "active"}`}  key={note.id} onClick={() => setActiveNote(note.id)}>
                            <div className="sidebar-note-title">
                                <strong>{note.title}</strong>
                                {/* //引数を取るときはアロー関数で記入する */}
                                <button onClick={() => onDeleteNote(note.id)}>削除</button>
                            </div>
                            <p>{note.content}</p>
                            <small>最後の修正日：{new Date(note.modDate).toLocaleDateString('ja-JP', { hour : "numeric" , minute : "numeric"})}</small>
                        </div>
                        ))}
                </div>
            </div>
        );
}

Sidebar.propTypes = {};

export default Sidebar;