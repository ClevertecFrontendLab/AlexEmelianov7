import React, {FC, useEffect} from 'react';
import {useParams} from 'react-router-dom';

import {Error} from '../../components/common/error/error';
import {Loader} from '../../components/common/loader/loader';
import {Breadcrumbs} from '../../components/selected-book/breadcrumbs/breadcrumbs';
import {SelectedBook} from '../../components/selected-book/selected-book';
import {useAppDispatch, useAppSelector} from '../../hooks/use-redux';
import {bookDetailedFetching} from '../../store/book-detailed/book-detailed-slice';
import {booksFetchingError} from '../../store/books/books-slice';

import styles from './book-page.module.css';

export const BookPage: FC = () => {
    const { id } = useParams();

    const { book, isLoading, error } = useAppSelector(state => state.bookDetailed);
    const dispatch = useAppDispatch();



    useEffect(() => {
        if (id) {
            dispatch(bookDetailedFetching(id))
        }
    }, [dispatch, id])

    return (
        <section className={styles.bookPage}>
            <Breadcrumbs />
            {book &&
                <SelectedBook book={book}/>
            }
            {error &&
                <Error message={error} onClose={() => dispatch(booksFetchingError(null))}/>
            }
            {isLoading &&
                <Loader />
            }
        </section>
    )
};
