
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/state';

export let rerenderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App stateNew={store.getState()}
                 dispatch={store.dispatch.bind(store)}
                 />
        </React.StrictMode>,
        document.getElementById('root'));
}

rerenderEntireTree();
store.subscribe(rerenderEntireTree)


