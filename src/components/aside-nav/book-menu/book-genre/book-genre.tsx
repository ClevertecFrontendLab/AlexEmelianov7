import React, {FC} from 'react';
import {NavLink} from 'react-router-dom';

import styles from './book-genre.module.css';

export interface IBookGenre {
    id: number
    name: string
    count: string
    category?: string
    dataTestId?: string
}

interface BookGenreProps {
    genre: IBookGenre
    dataTestId?: string
    // onClick?: MouseEventHandler<HTMLLIElement>
}

export const BookGenre: FC<BookGenreProps> = (
    {
        genre,
        dataTestId
    }) => (
        <li
            data-test-id={dataTestId}
            className={`${styles.genre}`}
        >
            <NavLink
                to={`/books/${genre.category}`}
                className={({isActive}) =>`${isActive ? styles.active : ''}`}
            >
                {genre.name}
            </NavLink>
            <span className={`${styles.count}`}>{genre.count}</span>
        </li>
    );
