import {FC, useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

import {IBook} from '../../components/book-list/book-item/book-item';
import {SelectedBook} from '../../components/selected-book/selected-book';
import {mockedBooksData} from '../../mocks/mocked-books-data/mocked-books-data';

import styles from './book-page.module.css';

export const BookPage: FC = () => {
    const [book, setBook] = useState<IBook | null>(null);
    const { id } = useParams();


    useEffect(() => {
        if (id) {
            const selectedBook = mockedBooksData.find(book => book.id === +id);

            setBook(selectedBook ? selectedBook : null);
        }
    }, [book, id])

    if (book)
    return (
        <section className={styles.bookPage}>
            <SelectedBook book={book}/>
        </section>
    )

        return (
            <div>:( Book not found</div>
        )

};
