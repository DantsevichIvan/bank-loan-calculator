import React from 'react';
import { NavLink } from "react-router-dom";
import style from './Header.module.css';


const Header = () => {
    return (
        <header className={style.header}>
            <nav className={style.nav}>
                <div className={style.item}>
                    <NavLink to="/ /" activeClassName={style.activeLink}>Главная</NavLink>
                </div>
                <div className={style.item}>
                    <NavLink to="/actors" activeClassName={style.activeLink}>Актёры</NavLink>
                </div>
            </nav>
        </header>
    )
}

export default Header