import React from 'react';
import Marquee from "react-fast-marquee";
const SuggestedGame = () => {
    return (
  <div>
          <div className='max-w-3xl mx-auto md:p-10'>
           <Marquee pauseOnHover={true}>
          <div className='flex  gap-10'>
           <div>
            <a href="#"><img className='w-[100px] h-[100px]' src="https://i.ibb.co.com/8xyy1nr/game10.jpg"  /></a>
           </div>
           <div>
            <a href="#"><img className='w-[100px] h-[100px]' src="https://i.ibb.co.com/hMHzBDX/game9.jpg"  /></a>
           </div>
           <div>
            <a href="#"><img className='w-[100px] h-[100px]' src="https://i.ibb.co.com/P6C4Kwz/game8.jpg"  /></a>
           </div>
           <div>
            <a href="#"><img className='w-[100px] h-[100px]' src="https://i.ibb.co.com/c1H57F5/game11.jpg"  /></a>
           </div>
           <div>
            <a href="#"><img className='w-[100px] h-[100px]' src="https://i.ibb.co.com/cwfkQKd/game12.jpg"  /></a>
           </div>
          
          
          </div>
            </Marquee> 
        </div>
        <div className='max-w-5xl mx-auto md:p-10'>
            <Marquee direction='right' pauseOnHover={true}>
                <div className='flex gap-10'>
                <div>
            <a href="#"><img className='w-[100px] h-[100px]' src="https://i.ibb.co.com/9bDxJWs/game13.jpg"  /></a>
           </div>
                <div>
            <a href="#"><img className='w-[100px] h-[100px]' src="https://i.ibb.co.com/4J0jNQx/game14.jpg"  /></a>
           </div>
                <div>
            <a href="#"><img className='w-[100px] h-[100px]' src="https://i.ibb.co.com/9VSktpf/game15.jpg"  /></a>
           </div>
                <div>
            <a href="#"><img className='w-[100px] h-[100px]' src="https://i.ibb.co.com/zR5p9bL/game16.jpg"  /></a>
           </div>
                <div>
            <a href="#"><img className='w-[100px] h-[100px]' src="https://i.ibb.co.com/DbJ9D9k/game17.jpg"  /></a>
           </div>
                <div>
            <a href="#"><img className='w-[100px] h-[100px]' src="https://i.ibb.co.com/VTCQjdj/marguee1.webp"  /></a>
           </div>
                <div>
            <a href="#"><img className='w-[100px] h-[100px]' src="https://i.ibb.co.com/W3CJjhY/game19.jpg"  /></a>
           </div>
           

                </div>
            </Marquee>
        </div>
  </div>
    );
};

export default SuggestedGame;