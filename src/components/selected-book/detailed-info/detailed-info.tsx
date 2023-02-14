import React, {FC} from 'react';

import {IBook} from '../../book-list/book-item/book-item';

import styles from './detailed-info.module.css';

interface DetailedInfoProps {
    book: IBook
}
export const DetailedInfo: FC<DetailedInfoProps> = ({book}) => {
    const configInfo = [
        {
            title: 'Издательство',
            value: book.publisher,
            condition: book.publisher,
        },
        {
            title: 'Год издания',
            value: book.year,
            condition: book.year,
        },
        {
            title: 'Страниц',
            value: book.pages,
            condition: book.pages,
        },
        {
            title: 'Переплёт',
            value: book.binding,
            condition: book.binding,
        },
        {
            title: 'Формат',
            value: book.format,
            condition: book.format,
        }
    ];

    const configInfoSecond = [
        {
            title: 'Жанр',
            value: book.genre,
            condition: book.genre
        },
        {
            title: 'Вес',
            value: book.weight,
            condition: book.weight
        },
        {
            title: 'ISBN',
            value: book.isbn,
            condition: book.isbn
        },
        {
            title: 'Изготовитель',
            value: book.manufacturer,
            condition: book.manufacturer,
        }
    ]

    return (
        <div className={styles.detailedInfoWrapper}>
            <div className={styles.detailedInfoLeft}>
                {configInfo.map((item ) =>
                        item.condition && (
                            <div className={styles.element} key={item.title}>
                                <p className={styles.title}>{item.title}</p>
                                <p className={styles.value}>{item.value}</p>
                            </div>
                        )
                )}
            </div>
            <div className={styles.detailedInfoRight}>
                {configInfoSecond.map((item ) =>
                        item.condition && (
                            <div className={styles.element} key={item.title}>
                                <p className={styles.title}>{item.title}</p>
                                <p className={styles.value}>{item.value}</p>
                            </div>
                        )
                )}
            </div>
        </div>
    );
};
