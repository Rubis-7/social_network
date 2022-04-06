import React from 'react';
import s from './ProfileInfo.module.css';


export function ProfileInfo() {
    return (
        <div>
            <div>
                <img src="https://www.shkolazhizni.ru/img/content/i187/187867_or.jpg" alt="" className={s.fon}/>
            </div>
            <div className={s.descriptionBlock}>
                ava+description
            </div>

        </div>
    )
}
