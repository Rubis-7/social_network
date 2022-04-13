import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {StateType} from '../../redux/state';

type dataStateType={
    dataState:StateType
}

function Profile (props:dataStateType) {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts dataState={props.dataState}/>
        </div>
    )
}

export default Profile;