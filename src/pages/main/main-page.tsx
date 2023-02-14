import React, {FC} from 'react';

import {AsideNav} from '../../components/aside-nav/aside-nav';
import {BookList} from '../../components/book-list/book-list';
import {ContentMenu} from '../../components/content-menu/content-menu';
import {mockedBooksData} from '../../mocks/mocked-books-data/mocked-books-data';

import styles from './main-page.module.css';

export const MainPage: FC = () =>  (
        <section className={styles.mainPage}>
            <AsideNav
                showcase='navigation-showcase'
                terms='navigation-terms'
                contract='navigation-contract'
                books='navigation-books'
            />
            <div className={styles.contentBlock}>
                <ContentMenu />
                <BookList books={mockedBooksData}/>
            </div>
        </section>
    )
