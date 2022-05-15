import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {ActionsTypes, ProfilePageType, StateType} from '../../redux/state';

type dataStateType={
    profilePage:ProfilePageType
    dispatch:(action: ActionsTypes) => void
}

function Profile (props:dataStateType) {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                profilePage={props.profilePage}
                dispatch={props.dispatch}/>
        </div>
    )
}

export default Profile;