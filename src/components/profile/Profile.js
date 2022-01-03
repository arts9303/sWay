import React from 'react';
import Post from './post/Post';
import s from './Profile.module.css';

const Profile = (props) => {

    let postList = props.state.posts.map(e => <Post message={e.message} likes={e.likes}/>)

    let addPost = () => {
        let text = newPost.current.value;
        props.dispatch({type: 'ADD-POST', postMessage: text});

    }

    let sendTextToState = () => {
        let text = newPost.current.value;
        props.dispatch({type: 'SEND-TEXT-TO-STATE', valueText: text});
    }

    let newPost = React.createRef();

    return (
        <div>
            <img
                src="https://cutewallpaper.org/21/dual-monitor-wallpaper-5120x1440/4K-Dual-Monitor-Wallpapers-Desktop-Wallpaper.jpg"
                alt=""/>
            <div className={`${s.content__author} ${s.author}`}>
                <img src="https://telegrator.ru/wp-content/uploads/2020/09/chat_avatar-241.jpg" alt=""
                     className={s.author__avatar}/>
                <div className={s.author__info}>
                    <div className={s.author__name}>Avatar Chron</div>
                    <div className={s.author__item}><b>Date of birth:</b> 2 Jun</div>
                    <div className={s.author__item}><b>City:</b> New-York</div>
                    <div className={s.author__item}><b>Education:</b> BSU'11</div>
                    <div className={s.author__item}><b>WebSite:</b> Turbo-it.ru</div>
                </div>
            </div>
            <div className={s.post}>
                <div className={s.post__title}>My Posts</div>
                <textarea onChange={sendTextToState} value={props.state.text} className={s.post__textarea} ref={newPost}/>
                <button onClick={addPost} className={s.post__btn}>send</button>
                <div className="post__content">
                    {postList}
                </div>
            </div>
        </div>
    );
}

export default Profile;