import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/store';
import {BrowserRouter} from "react-router-dom";
// import {addPost, sendTextToState, subscriber} from './redux/state';
// store.sendTextToState()

let render = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App dispatch={store.dispatch.bind(store)} state={state}/>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
};

render(store.getState());

store.subscriber(render);

//just comment
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(); 
