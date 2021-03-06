import React from 'react';
import s from './Post.module.css'

const Post = (props) => {
    return (
        <div className={s.post__item}>
                <div className={s.post__item__avatar}></div>
                <div className={s.post__item__text}>
                    {props.message}
                    <div>Likes <span>{props.likes}</span></div>
                </div>
        </div>

    );
}

export default Post;