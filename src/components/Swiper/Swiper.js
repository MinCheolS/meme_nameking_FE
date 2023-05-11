import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
// Import Swiper styles
import './styles.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function swiper({postData}) {
  if (postData.length === 0) {
    return null;
  }
  const sortpostData = postData.sort((a, b) => {
    if (a.postDdabong === b.postDdabong) {
      return b.index - a.index;
    }
    return b.postDdabong - a.postDdabong;
  });
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
          <div className="main-slide-item">
              <img src={sortpostData[0].imageUrl}/>
              <p>{sortpostData[0].bestComment}</p>      
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="main-slide-item">
              <img src={sortpostData[1].imageUrl}/>
              <p>{sortpostData[1].bestComment}</p>      
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="main-slide-item">
              <img src={sortpostData[2].imageUrl}/>
              <p>{sortpostData[2].bestComment}</p>      
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="main-slide-item">
              <img src={sortpostData[3].imageUrl}/>
              <p>{sortpostData[3].bestComment}</p>      
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="main-slide-item">
              <img src={sortpostData[4].imageUrl}/>
              <p>{sortpostData[4].bestComment}</p>      
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="main-slide-item">
              <img src={sortpostData[5].imageUrl}/>
              <p>{sortpostData[5].bestComment}</p>      
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default swiper;