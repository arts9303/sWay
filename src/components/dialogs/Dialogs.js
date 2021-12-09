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

const DialogsMessage = (props) => {
    return (
        <div className={s.dialogs__message_self}>{props.message}</div>
    );
}

const Dialogs = () => {

    let DataUsers = [
        {id: 1, name: 'John Smith'},
        {id: 2, name: 'Lindy Toleranto'},
        {id: 3, name: 'Makroan De Findero'},
        {id: 4, name: 'Jiano Vi Culio'},
        {id: 5, name: 'Mirinda Parker'}
    ]

    let DataMessages = [
        {id: 1, message: 'Hello from New York'},
        {id: 2, message: 'Hello my old friend'},
        {id: 2, message: 'Hello my old friend'},
        {id: 2, message: 'Hello my old friend'}
    ]

    let usersNames = DataUsers.map( e => <DialogsItem id={e.id} name={e.name}/> )

    let usersMessages = DataMessages.map( e => <DialogsMessage message={e.message} />)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs__names}>
                { usersNames }
            </div>
            <div className={s.dialogs__messages}>
                { usersMessages }
                {/*<div className={s.dialogs__message_friend}>Hello my old friend</div> */}
            </div>
        </div>
    );
}

export default Dialogs