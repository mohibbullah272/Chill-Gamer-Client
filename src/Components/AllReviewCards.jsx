
import { useEffect } from "react";
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";
import "aos/dist/aos.css"
import Aos from "aos";

const AllReviewCards = ({review}) => {
  useEffect(()=>{
    Aos.init()
  },[])
    return (
        <div data-aos='zoom-out' className="card bg-black/30 backdrop-blur-lg p-6 rounded-xl shadow-xl backdrop-blur-3xl text-white ">
  <div>
    <img
    className="p-5 transition-transform transform hover:scale-105  w-full md:h-[200px] h-[300px] rounded-3xl"
      src={review.GameCover}
      alt={review.gameName
      } />
  </div>
  <div className="card-body">
    <h2 className="card-title">{review.gameName}</h2>

    <p className=" font-semibold">Type : {review.genres}</p>
    <p className=" font-semibold" > Ratings : {review.rating}</p>
    <p>Review by: {review.name}</p>
    <p>{review.description}</p>
    <div className="card-actions ">
     <Link to={`reviewDetails/${review._id}`}>
     <button className="btn btn-block bg-stone-500 border-none  text-xl text-gray-200">Explore details <MdArrowOutward /></button>
     </Link>
    </div>
  </div>
</div>
    );
};

export default AllReviewCards;