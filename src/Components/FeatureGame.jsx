import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';

const FeatureGame=()=> {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
<div>
    <img className='w-96' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkqN20v2S4pbAUbQkGzH5pDs7ReasDArnb4w&s" alt="" />
</div>

        </SwiperSlide>
        <SwiperSlide>
        <div>
    <img className='w-96' src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2420110/capsule_616x353.jpg?t=1725653368" alt="" />
</div>

        </SwiperSlide>
        <SwiperSlide>
        <div>
    <img className='w-96' src="https://www.stealthgaming.net/wp-content/uploads/2023/07/god-of-war-ragnarok-2_zbsy.jpg.webp" alt="" />
</div>

        </SwiperSlide>
        <SwiperSlide>
        <div>
    <img className='w-96' src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1716740/capsule_616x353.jpg?t=1727384525" alt="" />
</div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
    <img className='w-96' src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1962660/capsule_616x353.jpg?t=1710969334" alt="" />
</div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
    <img className='w-96' src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2369390/capsule_616x353.jpg?t=1706823201" alt="" />
</div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
    <img className='w-96' src="https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1715130/capsule_616x353.jpg?t=1709651863" alt="" />
</div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
    <img className='w-96' src="https://helios-i.mashable.com/imagery/articles/00iMVz5oU69RK9UEoPsZTMW/hero-image.fill.size_1248x702.v1623390188.jpg" alt="" />
</div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
    <img className='w-96' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0-sOj4W0FN7slnRcVOFUILI7b8Mp95JaTYg&s" alt="" />
</div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
export default FeatureGame