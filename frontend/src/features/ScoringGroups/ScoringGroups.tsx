import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Pagination, Navigation } from 'swiper';

export default function ScoringGroups() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="/sliderImage/IMG_9123.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/sliderImage/IMG_9481.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/sliderImage/IMG_8944.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/sliderImage/IMG_0392.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/sliderImage/IMG_9903.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/sliderImage/IMG_0566.jpg" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
