import React from 'react';
import s from './Sidebar.module.css';
import {NavLink} from "react-router-dom";
//eslint-disable-next-line

const Sidebar = () => {
    return (
        <div className={s.sidebar}>
            <nav>
                <div>
                    <NavLink className={ navData => navData.isActive ? s.active : s.item } to="/profile">Profile</NavLink>
                </div>
                <div>
                    <NavLink className={ navData => navData.isActive ? s.active : s.item } to="/messages">Messages</NavLink>
                </div>
                <div>
                    <NavLink className={ navData => navData.isActive ? s.active : s.item } to="/news">News</NavLink>
                </div>
                <div>
                    <NavLink className={ navData => navData.isActive ? s.active : s.item } to="/music">Music</NavLink>
                </div>
                <div className={s.last}>
                    <NavLink className={ navData => navData.isActive ? s.active : s.item } to="/settings">Settings</NavLink>
                </div>
            </nav>
        </div>
    );
}

export default Sidebar;