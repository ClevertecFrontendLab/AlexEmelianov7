import React, {FC} from 'react';

import {DisplayVariant, useDisplay} from '../../context/display-context';
import {IBook} from '../../types/books';

import {BookItem} from './book-item/book-item';
import {BookItemList} from './book-item-list/book-item-list';

import styles from './book-list.module.css';

interface BookListProps {
    books: IBook[] | null
}
export const BookList = ({ books }: BookListProps) => {
    const { display } = useDisplay();
    const displayVariant = display === DisplayVariant.tile ? styles.bookListTile : styles.bookList;

    return(
        <div className={displayVariant}>
            {books?.map(( book ) => {
                if (display === DisplayVariant.tile) {
                    return (
                        <BookItem
                            book={book}
                            key={book.id}
                        />
                    );
                }

                    return (
                    <BookItemList
                        book={book}
                        key={book.id}
                    />
                );
            })}
        </div>
    );
};
