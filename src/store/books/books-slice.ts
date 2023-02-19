import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IBook} from "../../types/books";
import {IBookCategory} from "../../types/book-categories";

export interface BooksState {
    books: IBook[] | null
    categories: IBookCategory[] | null
    isLoading: boolean
    error: string | null
}

const initialState:

export const booksSlice = createSlice( {
    name: 'books',
    initialState,
    reducers: {
        booksFetching: (state, action: PayloadAction) => {

        }
    }
})
