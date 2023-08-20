import React, {Component} from 'react';
import './Main.css';

const  Main = ({activeNote}) => {

    if (!activeNote) {
        return (<p>ノートが選択されておりません</p>)
    }


        return (
            <div className="app-main">
                <div className="app-main-note-edit">
                    <input type="text"></input>
                    <textarea id="" placeholder="ノート内容を記入"></textarea>
                </div>
                <div className="app-main-note-preview">
                    <h1 className="preview-title">{activeNote.title}</h1>
                    <div className="markdown-preview">{activeNote.content}</div>
                </div>
            </div>
        );
}

Main.propTypes = {};

export default Main;