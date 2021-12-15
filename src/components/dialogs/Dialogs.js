import React from 'react';
import s from './Dialogs.module.css'
import DialogsItem from "./DialogsItem"
import DialogsMessage from "./DialogsMessage"

const Dialogs = (props) => {

    let usersNames = props.users.map( e => <DialogsItem id={e.id} name={e.name}/> )
    let usersMessages = props.messages.map( e => <DialogsMessage message={e.message} />)

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