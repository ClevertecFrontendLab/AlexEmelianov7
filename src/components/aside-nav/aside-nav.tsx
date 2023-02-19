import React, {FC, useMemo, useState} from 'react';
import {useMatch} from 'react-router-dom';

import chevron from '../../assets/icons/chevron-colored.svg';
import {useAppDispatch, useAppSelector} from '../../hooks/use-redux';
import {makeNavCategories} from '../../utils/make-nav-categories';
import {Routes} from '../app-router/routes';

import {BookMenu} from './book-menu/book-menu';
import {NavTab} from './nav-tab/nav-tab';

import styles from './aside-nav.module.css';
import bookMenu from './book-menu/book-menu.module.css';

export interface DataTestIdProps {
    showcase: string
    terms: string
    contract: string
    navBooks: string
}

export const AsideNav: FC<DataTestIdProps> = (
    {
        showcase,
        terms,
        contract,
        navBooks
    }) => {


    const [open, setOpen] = useState<boolean>(true);

    const handleToggleBookMenu = () => setOpen(prevState => !prevState);

    const handleCloseBookMenu = () => setOpen(false)

    const isMainPage = useMatch(Routes.main);
    const isTermsPage = useMatch(Routes.terms);
    const isContractPage = useMatch(Routes.contract);

    const { categories, books } = useAppSelector(state => state.books)

    const navCategories = useMemo(
        () => books && categories && makeNavCategories(books, categories),
        [books, categories]
    )

    return (
        <nav className={styles.menu} role='presentation'>
            <NavTab
                dataTestId={showcase}
                name='Витрина книг'
                path={Routes.bookAll}
                page={isMainPage}
                onClick={handleToggleBookMenu}>
                {isMainPage &&
                    <img className={`${!open ? styles.chevron : ''}`} src={chevron} alt="chevron"/>
                }
            </NavTab>
            <BookMenu dataTestId={navBooks} className={open && isMainPage ? bookMenu.bookMenu : styles.bookMenuHide} />
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
