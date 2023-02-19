import React, {FC, Fragment} from 'react';
import {useNavigate, useParams} from 'react-router-dom';

import bookNoPoster from '../../../assets/img/book-no-poster.jpg';
import {API_URL} from '../../../books_api/books-api';
import {IBook} from '../../../types/books';
import {getBookingMessage} from '../../../utils/get-booking-message';
import {Button} from '../../common/button/button';
import {Rating} from '../../common/rating/rating';

import styles from './book-item.module.css';

export interface BookItemProps {
    book: IBook
}

export const BookItem: FC<BookItemProps> = ({book}) => {
    const { category } = useParams();

    const navigate = useNavigate();

    const handleBookPageOpen = () => navigate(`/books/${category}/${book.id}`);

    return (
        <div data-test-id='card' className={styles.book} onClick={handleBookPageOpen} role='presentation'>
            <div className={styles.poster}>
                {book.image ?
                    <img src={`${API_URL}${book.image.url}`} alt="poster"/>
                    :
                    <img src={bookNoPoster} alt="poster"/>}
            </div>
            <div className={styles.rating}>
                {book.rating ?
                    <Rating roundedValue={Math.round(book.rating)}/>
                    :
                    <p>ещё нет оценок</p>
                }
            </div>
            <p className={styles.title}>{book.title}</p>
            <p className={styles.info}>
                {book.authors && book.authors.map(author => <Fragment key={author}>{author}, </Fragment>)}
                {book.issueYear}
            </p>
            <Button
                className={styles.button}
                name={getBookingMessage(book.booking)}
                disabled={!!book.booking}
            />
        </div>
    );
}
