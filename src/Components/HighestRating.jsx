import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const HighestRating = () => {
    const [ratings,setRatings]=useState([])
    useEffect(()=>{
        fetch('https://chill-gammer-server.vercel.app/topReview')
        .then(res=> res.json())
        .then(data => setRatings(data))
    },[])
    return (
        <div className='  grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 my-10'>
            
            {
                ratings.map(rating => <div  key={rating._id} className="card card-compact bg-white/80 shadow-xl">
                    <figure>
                      <img
                      className='w-full h-[150px]'
                        src={rating.GameCover}
                         />
                         <div className=" absolute top-2 right-2 badge bg-black/50 border-none text-white">{rating.genres}</div>
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">{rating.gameName}</h2>
                      <div className='flex  items-center gap-1 font-semibold'><span >{rating.rating} / 5 </span><FaStar className=' text-yellow-500'></FaStar></div>
                     
                      <div className="card-actions ">
                     <Link to={`allReview/reviewDetails/${rating._id}`}>
                     <button className="btn  bg-stone-500   border-none ">Explore details</button>
                     </Link>
                      </div>
                    </div>
                  </div>)
            }
        </div>
    );
};

export default HighestRating;