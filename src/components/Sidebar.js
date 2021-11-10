import React from 'react';
import s from './../sidebar.module.css';

const Sidebar = () =>{
    return(
        <div className={s.sidebar}>
            <nav>
                <a href="#">Profile</a>
                <a href="#">Messages</a>
                <a href="#">News</a>
                <a href="#">Music</a>
                <a className={s.last} href="#">Settings</a>
            </nav>
       </div>
    );
}

export default Sidebar;