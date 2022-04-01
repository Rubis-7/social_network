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
                <Post message={'Hi, how are you?'}/>
                <Post message={'It is my first post'}/>
            </div>
        </div>
    )
}

export default MyPosts;