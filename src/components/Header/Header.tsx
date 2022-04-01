import React from 'react';
import s from './Header.module.css';

function Header() {
    return (
        <header className={s.header}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIGfafD_BE-xf3kib2jqS_DxgW5yD8pmEqgQ&usqp=CAU"
                alt=""/>
        </header>
    )
}

export default Header;