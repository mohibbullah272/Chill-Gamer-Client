
import { useEffect } from "react";
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";
import "aos/dist/aos.css"
import Aos from "aos";
import { FaStar } from "react-icons/fa";

const AllReviewCards = ({review}) => {
  useEffect(()=>{
    Aos.init()
  },[])
  
    return (
<di data-aos='zoom-out' className="card bg-white/90 ">
  <figure>
    <img
    className="w-full h-[200px]"
      src={review.GameCover}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{review.gameName}</h2>
    <h2>{review.description.slice(0,30)}.........</h2>
   <p className="flex gap-3 items-center">{review.rating}/5 <FaStar className="text-orange-400"></FaStar></p>
    <div className="card-actions ">
    <Link to={`reviewDetails/${review._id}`}>
<button className="btn btn-block bg-stone-500 border-none  text-xl text-gray-200">Explore details </button>
</Link>
    </div>
  </div>
</di>
    );
};

export default AllReviewCards;


