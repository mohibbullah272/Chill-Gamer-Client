import { MdArrowOutward } from "react-icons/md";
const AllReviewCards = ({review}) => {
    console.log(review)
    return (
        <div className="card bg-white/10 p-6 rounded-xl shadow-xl backdrop-blur-3xl text-white ">
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
      <button className="btn btn-block bg-stone-500 border-none  text-xl text-gray-200">Explore details <MdArrowOutward /></button>
    </div>
  </div>
</div>
    );
};

export default AllReviewCards;