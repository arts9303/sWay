import React from 'react';
import s from './Sidebar.module.css';
//eslint-disable-next-line
const Sidebar = () =>{
    return(
        <div className={s.sidebar}>
            <nav>
                <div>Profile</div>
                <div>Messages</div>
                <div>News</div>
                <div>Music</div>
                <div className={s.last}>Settings</div>
            </nav>
       </div>
    );
}

export default Sidebar;