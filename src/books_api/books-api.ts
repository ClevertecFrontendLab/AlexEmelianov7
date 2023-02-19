import axios from 'axios';

export enum RequestError {
    errorMessage = 'Что-то пошло не так. Обновите страницу через некоторое время.'
}

export enum ApiUrlEndPoints {
    books = '/api/books',
    categories = '/api/categories'
}

export const API_URL = 'https://strapi.cleverland.by'

export const axiosInstance = axios.create({
    baseURL: API_URL
})
