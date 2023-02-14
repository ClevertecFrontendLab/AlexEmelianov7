import React, {FC} from 'react';
import {Link} from 'react-router-dom';

import {IBook} from '../../book-list/book-item/book-item';

import styles from './breadcrumbs.module.css';

interface BreadcrumbsProps {
    book: IBook
}

export const Breadcrumbs: FC<BreadcrumbsProps> = ({book}) => (
       <div className={styles.breadcrumbsWrapper}>
           <div className={styles.wrapper}>
               <div className={styles.breadcrumbs}>
                   <Link to='books/all'
                         className={styles.crumb}
                   >
                       {book.genre}
                   </Link>
                   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                       <path d="M7 21L16 3" stroke="#BFC4C9" strokeWidth="2" strokeLinecap="round"/>
                   </svg>
                   <span className={styles.crumb}>{book.title}</span>
               </div>
           </div>
       </div>
    );
