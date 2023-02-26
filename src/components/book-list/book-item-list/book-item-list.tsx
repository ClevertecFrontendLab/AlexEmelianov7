import React, {FC, Fragment} from 'react';
import {useNavigate, useParams} from 'react-router-dom';

import bookNoPoster from '../../../assets/img/book-no-poster.jpg';
import {API_URL} from '../../../books_api/books-api';
import {getBookingMessage} from '../../../utils/get-booking-message';
import {Button} from '../../common/button/button';
import {Rating} from '../../common/rating/rating';
import {Highlighter} from '../../highlighter/highlighter';
import {BookItemProps} from '../book-item/book-item';

import styles from './book-item-list.module.css';

export const BookItemList: FC<BookItemProps> = ({book, searchWord}) => {
    const { category } = useParams();

    const navigate = useNavigate();

    const handleBookPageOpen = () => navigate(`/books/${category}/${book.id}`)

    return (
        <div className={styles.bookListItem} onClick={handleBookPageOpen} role='presentation'>
            <div className={styles.poster}>
                {book.image ?
                    <img src={`${API_URL}${book.image.url}`} alt="poster"/>
                    :
                    <img src={bookNoPoster} alt="poster"/>}
            </div>
            <div className={styles.content}>
                <div className={styles.contentTop}>
                    <Highlighter className={styles.title} searchWord={searchWord} title={book.title}/>
                    <p className={styles.info}>
                        {book.authors && book.authors.map(author => <Fragment key={author}>{author}, </Fragment>)}
                        {book.issueYear}
                    </p>
                </div>
                <div className={styles.contentBottom}>
                    <div className={styles.rating}>
                        {book.rating ?
                            <Rating roundedValue={Math.round(book.rating)}/>
                            :
                            <p>ещё нет оценок</p>
                        }
                    </div>
                    <Button
                        className={styles.button}
                        name={getBookingMessage(book.booking)}
                        disabled={!!book.booking}
                    />
                </div>
            </div>
        </div>
    );

}
