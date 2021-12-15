import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
    {message: 'Hey good job!', likes: 5},
    {message: 'Tony, what about dinner today', likes: 1}
]

let users = [
    {id: 1, name: 'John Smith'},
    {id: 2, name: 'Lindy Toleranto'},
    {id: 3, name: 'Makroan De Findero'},
    {id: 4, name: 'Jiano Vi Culio'},
    {id: 5, name: 'Mirinda Parker'}
]

let messages = [
    {id: 1, message: 'Hello from New York'},
    {id: 2, message: 'Hello my old friend'},
    {id: 2, message: 'Hello my old friend'},
    {id: 2, message: 'Hello my old friend'}
]

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts}  users={users} messages={messages} />
  </React.StrictMode>,
  document.getElementById('root')
);

//just comment
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(); 
