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
    <>
   
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
            <div className='flex gap-5 items-center  bg-gradient-to-r from-slate-950 to-slate-700'>
               <div className='md:p-5'>
               <img className='shadow-2xl w-[300px]' src="https://i.ibb.co.com/7zL3gvb/banner1.jpg" alt="" />
               </div>
            <div className='space-y-5 p-5'>
            <p className='text-4xl font-bold bannerTitle text-gray-400'>Legends of Valor</p>
           
            <p className='text-gray-400'>Join the Fight: Explore the Thrill of Warzone</p>
            <p className='md:flex hidden items-center gap-2'>
              <span className='text-xl text-gray-400'>  Ratings : </span>
                <div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input
    type="radio"
    name="rating-2"
    className="mask mask-star-2 bg-orange-400"
    defaultChecked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
</div>
            </p>
            <button className='bg-amber-700 w-full btn bg-opacity-95 border-none rounded-3xl text-gray-300'>Explore More</button>
            </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='flex gap-5 items-center  bg-gradient-to-r from-slate-950 to-slate-700'>
               <div className='md:p-5'>
               <img className='shadow-2xl w-[300px]' src="https://i.ibb.co.com/zh1LmCM/banner2.jpg" alt="" />
               </div>
            <div className='space-y-5 p-5'>
            <p className='text-4xl font-bold bannerTitle text-gray-400'>Call of Duty: Warzone</p>
           
            <p className='text-gray-400'>Ultimate Battle Royale Showdown</p>
            <p className='md:flex hidden items-center gap-2'>
              <span className='text-xl text-gray-400'>  Ratings : </span>
                <div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input
    type="radio"
    name="rating-2"
    className="mask mask-star-2 bg-orange-400"
    defaultChecked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
</div>
            </p>
            <button className='bg-amber-700 w-full btn bg-opacity-95 border-none rounded-3xl text-gray-300'>Explore More</button>
            </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='flex gap-5 items-center  bg-gradient-to-r from-slate-950 to-slate-700'>
               <div className='md:p-5'>
               <img className='shadow-2xl w-[300px]' src="https://i.ibb.co.com/WBvqrh0/banner3.jpg" alt="" />
               </div>
            <div className='space-y-5 p-5'>
            <p className='text-4xl font-bold bannerTitle text-gray-400'>Apex Legends</p>
           
            <p className='text-gray-400'>Top Tactical Action Games </p>
            <p className='md:flex hidden items-center gap-2'>
              <span className='text-xl text-gray-400'>  Ratings : </span>
                <div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input
    type="radio"
    name="rating-2"
    className="mask mask-star-2 bg-orange-400"
    defaultChecked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
</div>
            </p>
            <button className='bg-amber-700 w-full btn bg-opacity-95 border-none rounded-3xl text-gray-300'>Explore More</button>
            </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='flex gap-5 items-center  bg-gradient-to-r from-slate-950 to-slate-700'>
               <div className='md:p-5'>
               <img className='shadow-2xl  w-[300px]' src="https://i.ibb.co.com/zn8Lxwh/banner4.jpg" alt="" />
               </div>
            <div className='space-y-5 p-5'>
            <p className='text-4xl font-bold bannerTitle text-gray-400'>Valorant</p>
           
            <p className='text-gray-400'>Epic Combat Awaits </p>
            <p className='md:flex hidden items-center gap-2'>
              <span className='text-xl text-gray-400'>  Ratings : </span>
                <div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input
    type="radio"
    name="rating-2"
    className="mask mask-star-2 bg-orange-400"
    defaultChecked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
</div>
            </p>
            <button className='bg-amber-700 w-full btn bg-opacity-95 border-none rounded-3xl text-gray-300'>Explore More</button>
            </div>
            </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}