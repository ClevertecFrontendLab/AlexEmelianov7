import {IBookCategory} from '../types/book-categories';
import {IBook} from '../types/books';

export const getFilteredBooks = (
    books: IBook[],
    categories: IBookCategory[] | null,
    category: string | undefined
) => {
    const categoryName = categories?.find(({ path }) => path === category)?.name

    if (!categoryName) {
        return books
    }

    return books?.filter(
        elem => elem.categories?.includes(categoryName)
    )
}
