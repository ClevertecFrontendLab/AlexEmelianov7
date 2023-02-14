import React, {FC, useState} from 'react';
import {FreeMode,Pagination,Scrollbar,Thumbs} from 'swiper';
import {Swiper as SwiperComp,SwiperSlide} from 'swiper/react';
import SwiperClass from 'swiper/types/swiper-class';

import bookNoPoster from '../../../assets/img/book-no-poster.jpg';
import {useScreenWidth} from '../../../context/screen-width-context';
import {IBook} from '../../book-list/book-item/book-item';

import styles from './slider.module.css';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';
import 'swiper/css/scrollbar';
import 'swiper/css/pagination';

interface SliderProps {
    book: IBook
}

export const Slider:FC<SliderProps> = ({book}) => {
    const { screenWidth } = useScreenWidth();

    const [swiperActiveIndex, setSwiperActiveIndex] = useState<number>(0);
    const [thumbsSwiperTop, setThumbsSwiperTop] = useState<SwiperClass>();
    const [thumbsSwiperBottom, setThumbsSwiperBottom] = useState<SwiperClass>();

    const handleSlideTo = (index: number) => {
        if (thumbsSwiperTop) {
            thumbsSwiperTop.slideTo(index);
            thumbsSwiperTop.activeIndex = index;
        }
        if (thumbsSwiperBottom) {
            thumbsSwiperBottom.slideTo(index);
            thumbsSwiperBottom.activeIndex = index;
        }
        setSwiperActiveIndex(index);
    };

    const posters = book.posters?.length ? book.posters.length : 0;

    return (
        <div className={styles.slider}>
            {posters > 0
                ? (
                <SwiperComp
                    data-test-id='slide-big'
                    pagination={{
                        enabled: true,
                        clickable: true
                    }}
                    spaceBetween={30}
                    onSwiper={setThumbsSwiperTop}
                    thumbs={{ swiper: thumbsSwiperBottom && !thumbsSwiperBottom.destroy ? thumbsSwiperBottom : null }}
                    onSlideChange={(swiper) => {
                        handleSlideTo(swiper.activeIndex);
                    }}
                    modules={[Thumbs, Pagination, FreeMode]}
                    grabCursor={true}
                    className="swiperTop"
                    breakpoints={{
                        871: {
                            pagination: {
                            enabled: false
                        }
                    }
                    }}
                >
                {book.posters?.map((elem) => (
                    <SwiperSlide key={elem.id}>
                        <img src={elem.image} alt='poster'/>
                    </SwiperSlide>
                ))}
                </SwiperComp>
                ) : (
                <img className={styles.bookNoPoster} src={bookNoPoster} alt='book' />
                )}
            {screenWidth > 870 && posters > 1
                &&
                <SwiperComp
                    scrollbar={{
                        hide: false,
                    }}
                    modules={[Thumbs, Scrollbar, FreeMode]}
                    thumbs={{ swiper: thumbsSwiperTop && !thumbsSwiperTop.destroy ? thumbsSwiperTop : null }}
                    onSwiper={setThumbsSwiperBottom}
                    threshold={5}
                    spaceBetween={30}
                    slidesPerView={5}
                    watchSlidesProgress={true}
                    className="swiperBottom"
                >
                    {book.posters?.map((elem, index) => (
                        <SwiperSlide onClick={() => handleSlideTo(index)} key={elem.id} data-test-id='slide-mini'>
                            <img className={index === swiperActiveIndex ? styles.active : ''} src={elem.image} alt='poster'/>
                        </SwiperSlide>
                    ))}
                </SwiperComp>
            }
        </div>
    );
};
