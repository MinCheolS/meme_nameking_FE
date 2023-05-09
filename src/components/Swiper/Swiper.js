import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
// Import Swiper styles
import './styles.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function swiper() {
  return (
    <div className="main-wrap">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={140}
        slidesPerView={3}
        navigation={true}
        // centeredSlides={true} // 슬라이드 가운데 정렬
        pagination={{ clickable: true }}
        loop={true}
      >
        <SwiperSlide>
          <div
            className="main-slide-item"
            style={{ background: "url(https://previews.123rf.com/images/kireewongfoto/kireewongfoto1504/kireewongfoto150400187/39952224-%ED%9D%B0%EC%83%89-%EB%B0%B0%EA%B2%BD.jpg)" }}
          >
            <p>예제</p>
            <span>2021.05.28 | 예제</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="main-slide-item"
            style={{ background: "url(https://item.kakaocdn.net/do/ea32d6d77445975da9db5bd802b55658f604e7b0e6900f9ac53a43965300eb9a)" }}
          >
            <p>예제</p>
            <span>2021.05.28 | 예제</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="main-slide-item"
            style={{ background: "url(images/example.png)" }}
          >
            <img src="https://item.kakaocdn.net/do/ea32d6d77445975da9db5bd802b55658f604e7b0e6900f9ac53a43965300eb9a"></img>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="main-slide-item"
            style={{ background: "url(images/example.png)" }}
          >
            <img src='https://velog.velcdn.com/images/heelieben/post/675309bf-a0a3-4443-8ced-8a55ce40ce08/image.png'></img>
            <p>예제</p>
            <span>2021.05.28 | 예제</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="main-slide-item"
            style={{ background: "url(images/example.png)" }}
          >
            <img src='https://cdn.maily.so/gbtblon50lk30bug1np6t6cl4rm6'></img>
            <p>예제</p>
            <span>2021.05.28 | 예제</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="main-slide-item"
            style={{ background: "url(images/example.png)" }}
          >
            <p>예제</p>
            <span>2021.05.28 | 예제</span>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default swiper;