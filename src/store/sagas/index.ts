import { fork } from 'redux-saga/effects';

import {booksDetailedFetchingWatcher} from './book-detailed';
import {booksFetchingWatcher} from './books';

export function* rootWatcher() {
    yield fork(booksFetchingWatcher)
    yield fork(booksDetailedFetchingWatcher)
}
