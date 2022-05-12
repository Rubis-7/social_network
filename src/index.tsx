import {state, subscribe, updateNewPostText} from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, StateType} from './redux/state';

export let rerenderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App stateNew={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
        </React.StrictMode>,
        document.getElementById('root'));
}

rerenderEntireTree();

subscribe(rerenderEntireTree)


