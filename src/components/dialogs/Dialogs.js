import React from 'react';
import s from './Dialogs.module.css'
import DialogsItem from "./DialogsItem"
import DialogsMessage from "./DialogsMessage"

const Dialogs = (props) => {

    let usersNames = props.state.users.map(e => <DialogsItem id={e.id} name={e.name}/>)
    let usersMessages = props.state.messages.map(e => <DialogsMessage message={e.message}/>)
    let newMessage = React.createRef();
    let sendMessage = () => {
        let text = newMessage.current.value;
        alert( text );
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs__names}>
                {usersNames}
            </div>
            <div className={s.dialogs__messages}>
                {usersMessages}
                {/*<div className={s.dialogs__message_friend}>Hello my old friend</div> */}
                <textarea className={s.dialogs__textarea} ref={newMessage}></textarea>
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    );
}

export default Dialogs