import React, {FC} from 'react';
import {useNavigate} from 'react-router-dom';

import bookRating from '../../../assets/icons/stars.svg';
import bookNoPoster from '../../../assets/img/book-no-poster.jpg';
import {Button} from '../../common/button/button';
import {BookItemProps} from '../book-item/book-item';

import styles from './book-item-list.module.css';

export const BookItemList: FC<BookItemProps> = ({book}) => {
    const navigate = useNavigate();
    const handleBookPageOpen = () => navigate(`/books/${book.category}/${book.id}`)

    return (
        <div className={styles.bookListItem} onClick={handleBookPageOpen} role='presentation'>
            <div className={styles.poster}>
                {book.poster ? <img src={book.poster} alt="poster"/> : <img src={bookNoPoster} alt="poster"/>}
            </div>
            <div className={styles.content}>
                <div className={styles.contentTop}>
                    <p className={styles.title}>{book.title}</p>
                    <p className={styles.info}>{`${book.author}, ${book.year}`}</p>
                </div>
                <div className={styles.contentBottom}>
                    <div className={styles.rating}>
                        {book.rating ? <img src={bookRating} alt="rating"/> : 'ещё нет оценок'}
                    </div>
                    <Button reserved={book.reserved} className={styles.button}/>
                </div>
            </div>
        </div>
    );

}
