import React, {FC, useState} from 'react';
import {useMatch} from 'react-router-dom';

import chevron from '../../assets/icons/chevron-colored.svg';
import {bookGenres} from '../../constants/book-genres';
import {Routes} from '../app-router/routes';

import {BookMenu} from './book-menu/book-menu';
import {NavTab} from './nav-tab/nav-tab';

import styles from './aside-nav.module.css';
import bookMenu from './book-menu/book-menu.module.css';

export interface DataTestIdProps {
    showcase: string
    terms: string
    contract: string
    books: string
}

export const AsideNav: FC<DataTestIdProps> = (
    {
        showcase,
        terms,
        contract,
        books
    }) => {
    const [open, setOpen] = useState<boolean>(true);

    const handleToggleBookMenu = () => setOpen(prevState => !prevState);

    const handleCloseBookMenu = () => setOpen(false)

    const isMainPage = useMatch(Routes.main);
    const isTermsPage = useMatch(Routes.terms);
    const isContractPage = useMatch(Routes.contract);

    return (
        <nav className={styles.menu} role='presentation'>
            <NavTab
                dataTestId={showcase}
                name='Витрина книг'
                path={Routes.main}
                page={isMainPage}
                onClick={handleToggleBookMenu}>
                {isMainPage &&
                    <img className={`${!open ? styles.chevron : ''}`} src={chevron} alt="chevron"/>
                }
            </NavTab>
            <BookMenu dataTestId={books} genres={bookGenres} className={open && isMainPage ? bookMenu.bookMenu : styles.bookMenuHide} />
            <NavTab
                dataTestId={terms}
                name='Правила пользования'
                path={Routes.terms}
                page={isTermsPage}
                onClick={handleCloseBookMenu}
            />
            <NavTab
                dataTestId={contract}
                path={Routes.contract}
                name='Договор оферты'
                page={isContractPage}
                onClick={handleCloseBookMenu}
            />
        </nav>
    );
};
