import React, {Component} from 'react';
import './Main.css';
import ReactMarkdown from "react-markdown";

const  Main = ({activeNote, onUpdateNote}) => {

    const onEditNote = (key, value) => {
        onUpdateNote({
            id: activeNote.id,
            [key]: value,
            modDate: Date.now(),
        })

    };


    if (!activeNote) {
        return (<p　className="no-active-note">ノートが選択されておりません</p>)
    }

        return (
            <div className="app-main">
                <div className="app-main-note-edit">
                    <input id="title" type="text" value={activeNote.title} onChange={(e) => onEditNote("title", e.target.value)}/>
                    <textarea id="content" placeholder="ノート内容を記入" value={activeNote.content} onChange={(e) => onEditNote("content", e.target.value)}></textarea>
                </div>
                <div className="app-main-note-preview">
                    <h1 className="preview-title">{activeNote.title}</h1>
                    <ReactMarkdown className="markdown-preview">{activeNote.content}</ReactMarkdown>
                </div>
            </div>
        );
}

Main.propTypes = {};

export default Main;