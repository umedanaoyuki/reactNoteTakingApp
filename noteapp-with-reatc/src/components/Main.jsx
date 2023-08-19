import React, {Component} from 'react';
import './Main.css';

class Main extends Component {
    render() {
        return (
            <div className="app-sidebar">
                <div className="app-sidebar-header">
                    <h1>ノート</h1>
                    <button>追加</button>
                </div>
                <div className="app-sodebar-notes">
                    <div className="app-sidebar-note">
                    <div className="sidebar-note-title">
                        <strong>タイトル</strong>
                        <button>削除</button>
                    </div>
                        <p>ノートの内容です。</p>
                        <small>最後の修正日：XX/XX</small>
                    </div>
                </div>




            </div>
        );
    }
}

Main.propTypes = {};

export default Main;