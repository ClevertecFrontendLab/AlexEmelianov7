import React, {FC} from 'react';

import {WithClassname} from '../../../types/with-classname';

import {BookGenre, IBookGenre} from './book-genre/book-genre';

import styles from './book-menu.module.css';

interface BookMenuProps {
    genres: IBookGenre[]
    dataTestId?: string
}

export const BookMenu: FC<BookMenuProps & WithClassname> = (
    {
        genres = [],
        dataTestId,
        className
    }) => (

        <ul className={`${className} ${styles.bookMenu}`}>
            {genres.map(genre =>
                <BookGenre
                    dataTestId={dataTestId}
                    key={genre.id}
                    genre={genre}
                />
            )}
        </ul>
    );
