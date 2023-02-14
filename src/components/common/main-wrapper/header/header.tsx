import React from 'react';
import {Link} from 'react-router-dom';

import logo from '../../../../assets/icons/logo.svg';
import avatar from '../../../../assets/img/avatar.jpg';

import {HeaderBurger} from './header-burger/header-burger';
import {UserInfo} from './user-info/user-info';

import styles from './header.module.css';

export const Header = () => (
    <div className={styles.wrapper}>
        <header className={styles.header}>
            <div className={styles.content}>
                <Link to='books/all' className={styles.logo}>
                    <img src={logo} alt="logo"/>
                </Link>
                <HeaderBurger/>
                <h1 className={styles.title}>Библиотека</h1>
            </div>
            <UserInfo userName="Иван" avatarUrl={avatar}/>
        </header>
    </div>
    );
