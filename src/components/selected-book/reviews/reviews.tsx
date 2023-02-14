import React, {FC} from 'react';

import bookRating from '../../../assets/icons/stars.svg';
import {IBook} from '../../book-list/book-item/book-item';

import styles from './reviews.module.css';

interface ReviewsProps {
    book: IBook
    className?: string
}

export const Reviews: FC<ReviewsProps> = ({book, className}) => (
        <div className={`${styles.reviews} ${className}`}>
            {book.reviews?.map((review) =>
                <div key={review.id} className={styles.review}>
                    <div className={styles.userBlock}>
                        <img src={review.avatar} alt='avatar'/>
                        <div className={styles.userInfoBlock}>
                            <span className={styles.userInfo}>{review.userName}</span>
                            <span className={styles.userInfo}>{review.date}</span>
                        </div>
                    </div>
                    <div className={styles.rating}>
                        {book.rating && <img src={bookRating} alt='rating'/>}
                    </div>
                    {!!review.text.length && <p className={styles.text}>{review.text}</p>}
                </div>
            )}
        </div>
    );
