import React from 'react';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import Profile from './components/profile/Profile';
import './App.css';
import Dialogs from "./components/dialogs/Dialogs";
import {Route, Routes} from "react-router-dom";

const App = (props) => {
    return (
            <div className="app">
                <Header/>
                <Sidebar/>
                <div className="content">
                    <Routes>
                        <Route path='/profile' element={<Profile dispatch={props.dispatch} state={props.state.profilePage}/>}/>
                        <Route path='/messages' element={<Dialogs dispatch={props.dispatch} state={props.state.dialogsPage}/>}/>
                    </Routes>
                </div>
            </div>
    );
}

export default App;
