import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import './styles.css';
import '../Main/MainCalendar.css';
// import required modules
import { Pagination, Navigation } from 'swiper';

export default function ScoringGroups() {
  return (
    <div className="slider">
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
          <img src="/sliderImage/IMG_9123.jpg" alt="..." />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/sliderImage/IMG_9481.jpg" alt="..." />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/sliderImage/IMG_8944.jpg" alt="..." />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/sliderImage/IMG_0392.jpg" alt="..." />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/sliderImage/IMG_9903.jpg" alt="..." />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/sliderImage/IMG_0566.jpg" alt="..." />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
