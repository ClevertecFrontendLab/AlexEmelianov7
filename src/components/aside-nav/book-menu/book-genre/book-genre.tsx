import React, {FC} from 'react';
import {NavLink} from 'react-router-dom';

import {IBookCategoryWithCount} from '../../../../types/book-categories';

import styles from './book-genre.module.css';

interface BookGenreProps {
    dataTestId?: string
    // onClick?: MouseEventHandler<HTMLLIElement>
}

export const BookGenre: FC<BookGenreProps & IBookCategoryWithCount> = (
    {
        path,
        name,
        count,
        dataTestId
    }) => (
        <li
            data-test-id={dataTestId}
            className={`${styles.genre}`}
        >
            <NavLink
                to={`/books/${path}`}
                className={({isActive}) =>`${isActive ? styles.active : ''}`}
            >
                {name}
            </NavLink>
            <span className={`${styles.count}`}>{count}</span>
        </li>
    );
