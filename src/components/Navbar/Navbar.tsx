import React from 'react';
import s from './Navbar.module.css';

function Navbar() {
    return (
        <nav className={s.nav}>
            <div className={s.item}><a href="/profile">Profile</a></div>
            <div className={`${s.item} ${s.active}`}><a href="/dialogs">Messages</a></div>
            <div className={s.item}><a href="">News</a></div>
            <div className={s.item}><a href="">Music</a></div>
            <div className={s.item}><a href="">Settings</a></div>
            <div>Profile</div>
            <div>Profile</div>
        </nav>
    )
}

export default Navbar;