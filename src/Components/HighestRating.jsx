import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const HighestRating = () => {
    const [ratings,setRatings]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5500/topReview')
        .then(res=> res.json())
        .then(data => setRatings(data))
    },[])
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10'>
            
            {
                ratings.map(rating => <div key={rating._id} className="card card-compact bg-zinc-500 shadow-xl">
                    <figure>
                      <img
                      className='w-full h-[150px]'
                        src={rating.GameCover}
                         />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">{rating.gameName}</h2>
                      <div className='flex  items-center gap-1 font-semibold'>Rating : <span >{rating.rating} </span><FaStar className=' text-yellow-500'></FaStar></div>
                      <p className='font-semibold'> Genres : {rating.genres}</p>
                      <div className="card-actions justify-end">
                     <Link to={`allReview/reviewDetails/${rating._id}`}>
                     <button className="btn  bg-orange-500 border-none bg-opacity-40">Explore details</button>
                     </Link>
                      </div>
                    </div>
                  </div>)
            }
        </div>
    );
};

export default HighestRating;