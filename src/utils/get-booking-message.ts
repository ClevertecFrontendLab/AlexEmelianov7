import {IBookBooking} from '../types/books';

import {convertDate} from './convert-date';

export const getBookingMessage = (booking: IBookBooking | null) => {
    if (booking?.dateOrder) {
        return `Занята до ${convertDate(booking.dateOrder, 'DD MM')}`
    }

    return 'Забронировать'
}
