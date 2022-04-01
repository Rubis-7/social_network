import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

function MyPosts() {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div>
                <Post message={'Hi, how are you?'} counts={15}/>
                <Post message={'It is my first post'} counts={20}/>
            </div>
        </div>
    )
}

export default MyPosts;