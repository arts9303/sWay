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
        props.dispatch({type: 'NEW-MESSAGE-SEND',message: text})
    }

    let sendDialogMessageTyping = (e) => {
        let text = e.target.value;
        props.dispatch({type: 'TYPING-MESSAGE-IN-DIALOG', Messagetext: text});
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs__names}>
                {usersNames}
            </div>
            <div className={s.dialogs__messages}>
                {usersMessages}
                <textarea value={props.state.DialogText} onChange={sendDialogMessageTyping} className={s.dialogs__textarea} placeholder="Напишите ваше сообщение..." ref={newMessage}></textarea>
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    );
}

export default Dialogs