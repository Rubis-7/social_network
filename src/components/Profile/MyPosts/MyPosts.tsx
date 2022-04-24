import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {StateType} from '../../../redux/state';

type dataStateType={
    dataState:StateType
    addPost: (postMessage: string)=>void
}

function MyPosts(props:dataStateType) {


   let postsElements = props.dataState.profilePage.postsData.map((p)=><Post message={p.message} counts={p.counts}/>)

    let newRostElement = React.createRef<HTMLTextAreaElement>()

    let addPost = () => {
      if (newRostElement.current){
      props.addPost(newRostElement.current.value)
          newRostElement.current.value = ''
    }}

    return (
        <div className={s.postBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newRostElement}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;