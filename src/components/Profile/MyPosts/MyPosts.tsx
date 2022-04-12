import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";



function MyPosts() {

    let postsData = [
        {id:1, message: 'Hi, how are you?', counts: 15},
        {id:2, message: 'It is my first post', counts: 18},
    ]

    let postsElements= postsData.map((p)=><Post message={p.message} counts={p.counts}/>)

    return (
        <div className={s.postBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;