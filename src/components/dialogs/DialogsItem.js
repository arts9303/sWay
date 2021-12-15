import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogsItem = (props) => {
    let path = '/messages/' + props.id;
    return (
        <div className={s.dialogs__item}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}

export default DialogsItem