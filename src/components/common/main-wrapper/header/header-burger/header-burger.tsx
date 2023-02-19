import React, {MouseEventHandler, useEffect, useState} from 'react';

import {useScreenWidth} from '../../../../../context/screen-width-context';
import {AsideNav} from '../../../../aside-nav/aside-nav';
import {NavTab} from '../../../../aside-nav/nav-tab/nav-tab';

import styles from './header-burger.module.css';

export const HeaderBurger = () => {
    const { screenWidth } = useScreenWidth();

    const [open, setOpen] = useState<boolean>(false);
    const handleToggleBurgerMenu = () => setOpen(prevState => !prevState);

    const handleClickAway: MouseEventHandler = (event) => {
        if (event.target === event.currentTarget) {
            handleToggleBurgerMenu();
        }
    }

    useEffect(() => {
        if (open && screenWidth < 957) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [open, screenWidth])

    return (
        <React.Fragment>
            <div
                data-test-id='button-burger'
                className={styles.headerBurgerWrapper}
                onClick={handleToggleBurgerMenu}
                role='presentation'
            >
                <div className={`${open ? styles.active : styles.headerBurger}`}>
                    <span />
                </div>
            </div>
            <div
                className={open ? styles.background : ''}
                onClick={handleClickAway}
                data-test-id='burger-navigation'
                role='presentation'
            >
                <div className={open ? styles.burgerMenuActive : styles.burgerMenuClosed}>
                    <div className={styles.burgerMenuTop}>
                         <AsideNav
                            showcase='burger-showcase'
                            terms='burger-terms'
                            contract='burger-contract'
                            navBooks='burger-books'
                         />
                    </div>
                    <div className={styles.burgerMenuBottom}>
                        <div className={styles.bottomTabs}>
                            <NavTab
                                name='Профиль'
                                path="/"
                            />
                            <NavTab
                                name='Выход'
                                path="/"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
