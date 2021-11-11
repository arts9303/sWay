import React from 'react';
import s from './Post.module.css'

const Post = () => {
    return (
        <div className={s.post__item}>
            <div className={s.post__item__avatar}></div>
            <div className={s.post__item__text}>
                Hey, why nobody loves me.
            </div>
        </div>
    );
}

export default Post;