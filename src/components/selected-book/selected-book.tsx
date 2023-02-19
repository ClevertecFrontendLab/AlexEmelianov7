import React, {FC, Fragment, useState} from 'react';

import chevron from '../../assets/icons/chevron.svg';
import {IBookDetailed} from '../../types/books';
import {getBookingMessage} from '../../utils/get-booking-message';
import {Button} from '../common/button/button';
import {Rating} from '../common/rating/rating';

import {DetailedInfo} from './detailed-info/detailed-info';
import {RateBookButton} from './rate-book-button/rate-book-button';
import {Reviews} from './reviews/reviews';
import {Slider} from './slider/slider';

import styles from './selected-book.module.css';

interface SelectedBookProps {
    book: IBookDetailed
}

export const SelectedBook: FC<SelectedBookProps> = ({book}) => {
    const [open, setOpen] = useState<boolean>(true);
    const handleOpenReviews = () => setOpen(prevState => !prevState);

    return (
        <div className={styles.selectedBook}>
                <div className={styles.topSide}>
                    <Slider images={book.images}/>
                    <div className={styles.summary}>
                        <p className={styles.title}>{book.title}</p>
                        <p className={styles.info}>
                            {book.authors && book.authors.map(author => <Fragment key={author}>{author}, </Fragment>)}
                            {book.issueYear}
                        </p>
                        <Button
                            className={styles.selectedBookBtn}
                            name={getBookingMessage(book.booking)}
                            disabled={!!book.booking}
                        />
                    </div>
                    <div className={styles.infoBlockAbout}>
                        <p className={styles.infoTitle}>О книге</p>
                        <p className={styles.description}>{book.description}</p>
                    </div>
                </div>
                <div className={styles.bottomSide}>
                    <div className={styles.infoBlockRating}>
                        <p className={styles.infoTitle}>Рейтинг</p>
                        <div className={styles.rating}>
                            <Rating roundedValue={book.rating ? Math.round(book.rating) : 0} />
                            {book.rating ? <span>{book.rating}</span> : <span className={styles.noRating}>еще нет оценок</span>}
                        </div>
                    </div>
                    <div className={styles.infoBlockDetailed}>
                        <p className={styles.infoTitle}>Подробная информация</p>
                        <DetailedInfo book={book}/>
                    </div>
                    <div className={styles.infoBlockReviews}>
                        <div className={styles.infoTitle}>
                            Отзывы
                            <span className={styles.reviewsNum}>{book.comments?.length}</span>
                            {!!book.comments?.length &&
                                <button
                                    data-test-id='button-hide-reviews'
                                    onClick={handleOpenReviews}
                                    className={styles.chevron}
                                    type='button'
                                >
                                    <img className={!open ? styles.chevronClosed : ''} src={chevron} alt="chevron"/>
                                </button>
                            }
                        </div>
                        {!!book.comments?.length && <Reviews className={!open ? styles.reviewsClosed : ''} reviews={book.comments}/>}
                        <RateBookButton className={styles.rateBookButton}/>
                    </div>
                </div>
            </div>
    )
}
