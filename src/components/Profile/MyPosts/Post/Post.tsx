import React from 'react';
import s from './Post.module.css';

type MessageType = {
    message: string
}

function Post(props: MessageType) {
    return (
        <div className={s.item}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXeIuKElSOTid6MF787c7UTMwFPgQa7oF1ew&usqp=CAU" alt=""/>
            {props.message}
            <div>
                <span>Like</span>
            </div>

        </div>
    )
}

export default Post;