import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Banner() {
  return (
    <div className='relative top-16'>
   
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className=''>
              <img className='md:h-[500px] w-full' src='https://www.godisageek.com/wp-content/uploads/Horizon-Zero-Dawn-review.jpg' alt="" />
            </div>
        </SwiperSlide>
        <SwiperSlide>
       <div >
        <img  className='md:h-[500px] w-full' src="https://cdn.mos.cms.futurecdn.net/9NJbHpf4i5Busobe8SSg3d.jpg" alt="" />
       </div>
        </SwiperSlide>
        <SwiperSlide>
        <div >
        <img className='md:h-[500px] w-full'  src="https://cdn1.epicgames.com/400347196e674de89c23cc2a7f2121db/offer/AC%20KINGDOM%20PREORDER_STANDARD%20EDITION_EPIC_Key_Art_Wide_3840x2160-3840x2160-485fe17203671386c71bde8110886c7d.jpg" alt="" />
       </div>
        </SwiperSlide>
        <SwiperSlide>
        <div >
        <img className='md:h-[500px] w-full' src="https://media.contentapi.ea.com/content/dam/battlefield/battlefield-2042/images/2021/04/k-1920x1080-featured-image.jpg.adapt.crop16x9.1023w.jpg" alt="" />
       </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}