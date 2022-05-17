import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import {Dialogs} from './components/Dialogs/Dialogs';
import Profile from './components/Profile/Profile';
import {BrowserRouter, Route} from 'react-router-dom';
import {News} from './components/News/News';
import {Music} from './components/Music/Music';
import {Settings} from './components/Settings/Settings';
import {ActionsTypes, StateType} from './redux/state';


type PropsState ={
    stateNew:StateType
    dispatch:(action: ActionsTypes) => void
}
function App(props:PropsState) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path="/dialogs" render={() => <Dialogs dataState={props.stateNew} dispatch={props.dispatch}/>}/>
                    <Route path="/profile" render={() => <Profile
                        profilePage={props.stateNew.profilePage} dispatch={props.dispatch}
                        // updateNewPostText={props.updateNewPostText}
                    />}/>
                    <Route path="/News" render={() => <News/>}/>
                    <Route path="/Music" render={() => <Music/>}/>
                    <Route path="/Settings" render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
