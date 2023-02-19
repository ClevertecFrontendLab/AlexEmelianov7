import React, {FC} from 'react';

import {BookPage} from '../../pages/book';
import {MainPage} from '../../pages/main';
import {TermsContractPage} from '../../pages/terms-contract-page/terms-contract-page';

export interface RouteObject {
    caseSensitive?: boolean;
    children?: RouteObject[];
    element?: React.ReactNode;
    index?: boolean;
    path?: string;
}

export interface IRoute extends RouteObject{
    path: string
    Element: FC | FC<any>
    title?: string
}

export enum Routes {
    main = '/books/:category',
    bookAll = '/books/all',
    book = '/books/:category/:id',
    contract = '/contract',
    terms = '/terms',

}

export const PUBLIC_ROUTES: IRoute[] = [
    {path: Routes.main, Element: MainPage},
    {path: Routes.book, Element: BookPage},
    {path: Routes.contract, Element: TermsContractPage},
    {path: Routes.terms, Element: TermsContractPage},
];

export const PRIVATE_ROUTES = [
    ...PUBLIC_ROUTES
];
