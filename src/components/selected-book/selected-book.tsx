import React, {FC, useState} from 'react';

import chevron from '../../assets/icons/chevron.svg';
import bookNoRating from '../../assets/icons/no-rating.svg';
import bookRating from '../../assets/icons/stars.svg';
import bookNoPoster from '../../assets/img/book-no-poster.jpg';
import {IBook} from '../book-list/book-item/book-item';
import {Button} from '../common/button/button';

import {Breadcrumbs} from './breadcrumbs/breadcrumbs';
import {DetailedInfo} from './detailed-info/detailed-info';
import {RateBookButton} from './rate-book-button/rate-book-button';
import {Reviews} from './reviews/reviews';
import {Slider} from './slider/slider';

import styles from './selected-book.module.css';

interface SelectedBookProps {
    book: IBook
}

export const SelectedBook: FC<SelectedBookProps> = ({book}) => {
    const [open, setOpen] = useState<boolean>(true);
    const handleOpenReviews = () => setOpen(prevState => !prevState);

    return (
        <React.Fragment>
            <Breadcrumbs book={book}/>
            <div className={styles.selectedBook}>
                <div className={styles.topSide}>
                    <Slider book={book}/>
                    <div className={styles.summary}>
                        <p className={styles.title}>{book.title}</p>
                        <p className={styles.info}>{`${book.author}, ${book.year}`}</p>
                        <Button reserved={book.reserved} className={styles.selectedBookBtn}/>
                    </div>
                    <div className={styles.infoBlockAbout}>
                        <p className={styles.infoTitle}>О книге</p>
                        <p className={styles.description}>{book.description}</p>
                        <p className={styles.description}>{book.secondDescription}</p>
                    </div>
                </div>
                <div className={styles.bottomSide}>
                    <div className={styles.infoBlockRating}>
                        <p className={styles.infoTitle}>Рейтинг</p>
                        {book.rating
                            ?
                            <div className={styles.rating}>
                                <img src={bookRating} alt="rating"/>
                                {book.rating}
                            </div>
                            :
                            <div className={styles.noRating}>
                                <img src={bookNoRating} alt="rating"/>
                                ещё нет оценок
                            </div>
                        }
                    </div>
                    <div className={styles.infoBlockDetailed}>
                        <p className={styles.infoTitle}>Подробная информация</p>
                        <DetailedInfo book={book}/>
                    </div>
                    <div className={styles.infoBlockReviews}>
                        <div className={styles.infoTitle}>
                            Отзывы
                            <span className={styles.reviewsNum}>{book.reviews?.length}</span>
                            {!!book.reviews?.length &&
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
                        {!!book.reviews?.length && <Reviews className={!open ? styles.reviewsClosed : ''} book={book}/>}
                        <RateBookButton className={styles.rateBookButton}/>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
