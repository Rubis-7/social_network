import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

function Profile() {
    return (
        <div className={s.content}>
            <div>
                <img src="https://www.shkolazhizni.ru/img/content/i187/187867_or.jpg" alt=""/>
            </div>
            <div>
                ava+description
            </div>
            <MyPosts />
        </div>
    )
}

export default Profile;