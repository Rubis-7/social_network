import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {ProfilePageType, StateType} from '../../redux/state';

type dataStateType={
    updateNewPostText: (newText: string) => void
    profilePage:ProfilePageType
    addPost: ()=>void
}

function Profile (props:dataStateType) {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                updateNewPostText={props.updateNewPostText}
                profilePage={props.profilePage}
                addPost={props.addPost}/>
        </div>
    )
}

export default Profile;