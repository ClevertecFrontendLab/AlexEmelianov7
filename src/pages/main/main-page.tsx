import React, {FC, useEffect, useMemo, useState} from 'react';
import {useParams} from 'react-router-dom';

import {AsideNav} from '../../components/aside-nav/aside-nav';
import {BookList} from '../../components/book-list/book-list';
import {Error} from '../../components/common/error/error';
import {Loader} from '../../components/common/loader/loader';
import {ContentMenu} from '../../components/content-menu/content-menu';
import {useAppDispatch, useAppSelector} from '../../hooks/use-redux';
import {
    booksFetching,
    booksFetchingError,
    booksWithCategoriesFetching
} from '../../store/books/books-slice';
import {getFilteredBooks} from '../../utils/get-filtered-books';
import {getSortedBooks} from '../../utils/get-sorted-books';

import styles from './main-page.module.css';

export const MainPage: FC = () => {
    const dispatch = useAppDispatch();

    const {books: booksAll, categories, isLoading, error} = useAppSelector(state => state.books);

    const { category } = useParams();

    const [books, setBooks] = useState(booksAll);

    const [searchQuery, setSearchQuery] = useState('');

    const handleSetSearchQuery = (value: string) => setSearchQuery(value);

    const [descendingSort, setDescendingSort] = useState<boolean>(true);

    const toggleSortByRating = () => {
        setDescendingSort(prevState => !prevState);
    }


    useEffect(() => {
        if (booksAll && category) {
            setBooks(getFilteredBooks(booksAll, categories, category, searchQuery))
        }
    }, [booksAll, categories, category, dispatch, searchQuery])

    const sortedBooks = useMemo(
        () => books && getSortedBooks(books, descendingSort),
        [books, descendingSort]
    )

    useEffect(() => {
        if (!books) {
            dispatch(booksFetching())
        }
    }, [dispatch, books])

    return (
        <section className={styles.mainPage}>
            <AsideNav
                showcase='navigation-showcase'
                terms='navigation-terms'
                contract='navigation-contract'
                dataTestIdCategories='navigation'
                dataTestIdCount='navigation-book-count-for'
            />
            {booksAll &&
                <div className={styles.contentBlock}>
                    <ContentMenu
                        searchQuery={searchQuery}
                        searchQueryChange={handleSetSearchQuery}
                        descendingSort={descendingSort}
                        onSort={toggleSortByRating}
                    />
                    {
                        sortedBooks?.length
                        ?
                            <BookList books={sortedBooks} searchWord={searchQuery}/>
                        :
                        !sortedBooks?.length && !searchQuery
                        ?
                            <p
                                data-test-id='empty-category'
                                className={styles.noBooks}
                            >
                                В этой категории книг ещё нет
                            </p>
                        :
                            <p
                                data-test-id='search-result-not-found'
                                className={styles.noBooks}
                            >
                                По запросу ничего не найдено
                            </p>
                    }

                </div>
            }
            {error &&
                <Error message={error} onClose={() => dispatch(booksFetchingError(null))}/>
            }
            {isLoading &&
                <Loader />
            }
        </section>
    )
}
