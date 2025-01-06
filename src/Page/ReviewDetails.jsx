import React, { useContext, useEffect } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../auth provider/AuthProvider';
import Swal from 'sweetalert2';
import "aos/dist/aos.css";
import Aos from "aos";
import { FaCalendarAlt, FaInfo, FaStar } from 'react-icons/fa';

const ReviewDetails = () => {
  const details = useLoaderData();
  const { user } = useContext(AuthContext);
const navigate = useNavigate()
  const handleAddToWatchList = () => {
    const watchList = {
      name: user.displayName,
      email: user.email,
      gameName: details.gameName,
      GameCover: details.GameCover,
      genres: details.genres,
      publishYear: details.publishYear,
      rating: details.rating,
      description: details.description,
    };

    fetch('https://chill-gammer-server.vercel.app/watchList', {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(watchList)
    })
    .then(res => res.json())
    .then(data => {
      if (data.insertedId) {
        Swal.fire({
          icon: "success",
          title: "Added to Watchlist",
          background: "#2D3748",
          color: "#FFF",
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
        });
      }
    });
  };

  useEffect(() => {
    Aos.init({ duration: 1200 });
  }, []);

  return (
    <div className="relative max-w-7xl mx-auto md:px-10 px-5 pt-24 pb-12">
  
      <h3
        data-aos="fade-up"
        className="text-4xl font-bold text-gray-200 text-center pb-8 tracking-wide"
      >
        Unveiling the Game Full Review
      </h3>

   
      <div className="flex flex-col lg:flex-row items-center gap-8 bg-gray-800 p-8 rounded-lg shadow-lg">
   
        <div className="flex-1">
          <img
            src={details.GameCover}
            alt={details.gameName}
            className="w-full h-auto lg:h-[400px] rounded-lg object-cover shadow-md"
            data-aos="fade-right"
          />
        </div>

       
        <div className="flex-1 text-white space-y-4" data-aos="fade-left">
          <h4 className="text-3xl font-bold">{details.gameName}</h4>
          <p className="text-gray-400">{details.description}</p>
          <p className="flex items-center gap-2 text-yellow-500 text-lg font-semibold">
            {details.rating} / 5 <FaStar />
          </p>
          <p className="flex items-center gap-2">
            <FaInfo className="text-gray-400" /> 
            <span className="text-gray-300">{details.genres}</span>
          </p>
          <p className="flex items-center gap-2">
            <FaCalendarAlt className="text-gray-400" /> 
            <span className="text-gray-300">{details.publishYear}</span>
          </p>
          <div className="pt-4">
            <button
              onClick={()=>user?handleAddToWatchList():navigate('/login')}
              className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold py-2 px-6 rounded-lg shadow-md transition-transform transform hover:scale-105"
            >
              Add to Watchlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewDetails;
