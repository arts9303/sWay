import React from 'react';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import Profile from './components/profile/Profile';
import './App.css';

const App = () => {
  return (
    <div className="app">
       <Header />
       <Sidebar />
       <Profile />
    </div>
  );
}
//yo 2
export default App;
