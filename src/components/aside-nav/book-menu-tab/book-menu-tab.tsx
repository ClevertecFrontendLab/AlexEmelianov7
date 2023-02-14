import React, {FC, MouseEventHandler} from 'react';
import {useMatch} from 'react-router-dom';

import {WithChildren} from '../../../types/with-children';
import {Routes} from '../../app-router/routes';
import {NavTab} from '../nav-tab/nav-tab';

import styles from './book-menu-tab.module.css';

interface BookMenuTabProps {
    onClick?: MouseEventHandler
}

export const BookMenuTab: FC<BookMenuTabProps & WithChildren> = (
    {
        onClick,
        children,
    }) => {

    const isMainPage = useMatch(Routes.main);

    return (
        <div className={styles.bookMenuWrapper}>
            <div
                className={`${styles.navTabWrapper} ${isMainPage ? styles.active : ''}`}
                onClick={onClick}
                role='presentation'
            >
                <NavTab
                    name='Витрина книг'
                    path='/books/all'
                    page={isMainPage}
                />
                {children}
            </div>
        </div>
    );
};
