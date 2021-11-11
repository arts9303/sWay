import React from 'react';
import Post from './post/Post';
import s from './Profile.module.css'

const Profile = () =>{
    return(
        <div className="content">
            <img src="https://cutewallpaper.org/21/dual-monitor-wallpaper-5120x1440/4K-Dual-Monitor-Wallpapers-Desktop-Wallpaper.jpg" alt="" />
            <div className={`${s.content__author} ${s.author}`} >
                <img src="https://telegrator.ru/wp-content/uploads/2020/09/chat_avatar-241.jpg" alt="" className={s.author__avatar} />
                <div className={s.author__info}>
                    <div className={s.author__name}>Avatar X</div>
                    <div className={s.author__item}>Date of birth: 2 Jun</div>
                    <div className={s.author__item}>City: New-York</div>
                    <div className={s.author__item}>Education: BSU'11</div>
                    <div className={s.author__item}>WebSite: Turbo-it.ru</div>
                </div>
            </div>
            <div className={s.post}>
                <div className={s.post__title}>My Posts</div>
                <textarea className={s.post__textarea} name="" id=""></textarea>
                <button className={s.post__btn}>send</button>
                <div className="post__content">
                    <Post />
                </div>
          </div>
       </div>
    );
}

export default Profile;