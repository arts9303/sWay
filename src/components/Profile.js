import React from 'react';

const Profile = () =>{
    return(
        <div className="content">
            <img src="https://cutewallpaper.org/21/dual-monitor-wallpaper-5120x1440/4K-Dual-Monitor-Wallpapers-Desktop-Wallpaper.jpg" alt="" />
            <div className="content__author author">
                <img src="https://telegrator.ru/wp-content/uploads/2020/09/chat_avatar-241.jpg" alt="" className="author__avatar" />
                <div className="author__info">
                    <div className="author__name">Avatar X</div>
                    <div className="author__item">Date of birth: 2 Jun</div>
                    <div className="author__item">City: New-York</div>
                    <div className="author__item">Education: BSU'11</div>
                    <div className="author__item">WebSite: Turbo-it.ru</div>
                </div>
            </div>
            <div className="post">
                <div className="post__title">My Posts</div>
                <textarea className="post__textarea" name="" id=""></textarea>
                <button className="post__btn">send</button>
                <div className="post__content">
                    <div className="post__item">
                        <div className="post__item__avatar"></div>
                        <div className="post__item__text">
                        Hey, why nobody loves me.
                        </div>
                    </div>
                </div>
          </div>
       </div>
    );
}

export default Profile;