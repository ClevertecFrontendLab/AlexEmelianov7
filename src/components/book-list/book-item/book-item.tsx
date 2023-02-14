import React, {FC} from 'react';
import {useNavigate} from 'react-router-dom';

import bookRating from '../../../assets/icons/stars.svg';
import bookNoPoster from '../../../assets/img/book-no-poster.jpg';
import {Button} from '../../common/button/button';

import styles from './book-item.module.css';

export interface IBookReview {
    id: number
    userName: string
    avatar: string
    date: string
    text: string
}

export interface IBookPoster {
    id: number,
    image: string
}

export interface IBook {
    id: number
    title: string,
    author: string,
    year: string,
    rating: string | null
    poster: string
    posters?: IBookPoster[]
    publisher?: string
    description?: string
    secondDescription?: string
    pages?: string
    binding?: string
    format?: string
    genre?: string
    weight?: string
    isbn?: string
    manufacturer?: string
    reviews?: IBookReview[],
    category?: string
    reserved?: boolean
}

export interface BookItemProps {
    book: IBook
}

export const BookItem: FC<BookItemProps> = ({book}) => {
    const navigate = useNavigate();
    const handleBookPageOpen = () => navigate(`/books/${book.category}/${book.id}`);

    const posters = book.posters?.filter((item:IBookPoster) =>
        item.image[0] ? item : undefined
    );

    return (
        <div data-test-id='card' className={styles.book} onClick={handleBookPageOpen} role='presentation'>
            <div className={styles.poster}>
                {book.posters?.length ? <img src={book.posters[0].image} alt="poster"/> : <img src={bookNoPoster} alt="poster"/>}
            </div>
            <div className={styles.rating}>
                {book.rating ? <img src={bookRating} alt="rating"/> : 'ещё нет оценок'}
            </div>
            <p className={styles.title}>{book.title}</p>
            <p className={styles.info}>{`${book.author}, ${book.year}`}</p>
            <Button className={styles.button} reserved={book.reserved}/>
        </div>
    );
}
