import { fork } from 'redux-saga/effects';

import { authFetchingWatcher } from './auth';
import {booksDetailedFetchingWatcher} from './book-detailed';
import {booksFetchingWatcher} from './books';
import { forgotPasswordFetchingWatcher } from './forgot-password';
import { registrationFetchingWatcher } from './registration';
import { resetPasswordFetchingWatcher } from './reset-password';

export function* rootWatcher() {
    yield fork(booksFetchingWatcher)
    yield fork(booksDetailedFetchingWatcher)
    yield fork(registrationFetchingWatcher)
    yield fork(authFetchingWatcher)
    yield fork(forgotPasswordFetchingWatcher)
    yield fork(resetPasswordFetchingWatcher)
}
