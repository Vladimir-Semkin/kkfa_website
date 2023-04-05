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
          <img src="/sliderImage/IMG_9620OBR.jpg" alt="..." />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/sliderImage/IMG_9481OBR.jpg" alt="..." />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/sliderImage/IMG_8933OBR.jpg" alt="..." />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/sliderImage/IMG_0725OBR.jpg" alt="..." />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/sliderImage/IMG_9903OBR.jpg" alt="..." />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/sliderImage/IMG_1240.OBR.jpg" alt="..." />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
