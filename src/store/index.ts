import createSagaMiddleware from 'redux-saga';
import {combineReducers, configureStore} from '@reduxjs/toolkit';

import {bookDetailedReducer} from './book-detailed/book-detailed-slice';
import {booksReducer} from './books/books-slice';
import {rootWatcher} from './sagas';

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
    books: booksReducer,
    bookDetailed: bookDetailedReducer
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(sagaMiddleware)
})

sagaMiddleware.run(rootWatcher)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

