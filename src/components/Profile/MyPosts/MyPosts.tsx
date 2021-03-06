import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {
    ActionsTypes,
    addPostActionCreator,
    ProfilePageType,
    StateType,
    updateNewPostTextActionCreator
} from '../../../redux/state';

type dataStateType = {
    profilePage: ProfilePageType
    dispatch: (action: ActionsTypes) => void
}

function MyPosts(props: dataStateType) {

    let postsElements = props.profilePage.postsData.map((p) => <Post message={p.message} counts={p.counts}/>)

    // let newRostElement = React.createRef<HTMLTextAreaElement>()

    let addPost = () => {
        props.dispatch(addPostActionCreator())
    }

    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        props.dispatch(updateNewPostTextActionCreator(text))
    }

    return (
        <div className={s.postBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} value={props.profilePage.newPostText}/>
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