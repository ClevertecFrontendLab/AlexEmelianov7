import React, {FC, useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

import {AsideNav} from '../../components/aside-nav/aside-nav';
import {BookList} from '../../components/book-list/book-list';
import {Error} from '../../components/common/error/error';
import {Loader} from '../../components/common/loader/loader';
import {ContentMenu} from '../../components/content-menu/content-menu';
import {useAppDispatch, useAppSelector} from '../../hooks/use-redux';
import {booksFetching, booksFetchingError} from '../../store/books/books-slice';
import {getFilteredBooks} from '../../utils/get-filtered-books';

import styles from './main-page.module.css';

export const MainPage: FC = () => {
    const dispatch = useAppDispatch();

    const {books: booksAll, categories, isLoading, error} = useAppSelector(state => state.books);

    const [books, setBooks] = useState(booksAll);

    const { category } = useParams();

    useEffect(() => {
        if (booksAll && category) {
            setBooks(getFilteredBooks(booksAll, categories, category))
        }
    }, [booksAll, categories, category, dispatch])

    useEffect(() => {
        if (!books) {
            dispatch(booksFetching())
        }
    }, [dispatch, books])

    return (
        <section className={styles.mainPage}>
            <AsideNav
                showcase='navigation-showcase'
                terms='navigation-terms'
                contract='navigation-contract'
                navBooks='navigation-books'
            />
            {booksAll &&
                <div className={styles.contentBlock}>
                    <ContentMenu />
                    {books && <BookList books={books}/>}
                </div>
            }
            {error &&
                <Error message={error} onClose={() => dispatch(booksFetchingError(null))}/>
            }
            {isLoading &&
                <Loader />
            }
        </section>
    )
}
