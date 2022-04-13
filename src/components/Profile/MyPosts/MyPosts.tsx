import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {StateType} from '../../../redux/state';

type dataStateType={
    dataState:StateType
}

function MyPosts(props:dataStateType) {


   let postsElements = props.dataState.profilePage.postsData.map((p)=><Post message={p.message} counts={p.counts}/>)

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