import { useLoaderData } from "react-router-dom";
import Navbar from "../Components/Navbar";
import AllReviewCards from "../Components/AllReviewCards";
import Footer from "../Components/Footer";
import { FaSortAmountDown } from "react-icons/fa";
import { AiOutlineControl } from "react-icons/ai";
import { Fade, Slide } from "react-awesome-reveal";
import { useState } from "react";

const AllReview = () => {
    const loadedReview = useLoaderData()
    const [reviews,setReviews]=useState(loadedReview)
   const handleSort=(sort)=>{
    const methods = sort
    fetch(`https://chill-gammer-server.vercel.app/sortReviews?sortBy=${methods}`)
    .then(res=> res.json())
    .then(data=> setReviews(data))
   }
const handleFilter=(genres)=>{
 

    fetch(`https://chill-gammer-server.vercel.app/genresReview?genres=${genres}`)
    .then(res=> res.json())
    .then(data => setReviews(data))
}

    return (
        <div>
            <Navbar></Navbar>
            <div className="mt-5 ">
               <Fade cascade damping={0.1}>
               <h3 className="text-3xl font-semibold text-white text-center">Explore, Play, and Share</h3>
               </Fade>
        <Slide>
        <p className="w-1/2 text-center text-gray-300 mx-auto">Dive into a world of gaming insights! Discover honest reviews, ratings, and experiences from gamers worldwide. Find your next favorite game or share your own epic adventures.</p>
        </Slide>
            </div>
            <div className="max-w-7xl flex justify-between mx-auto md:my-1 my-5 px-4 md:px-10">
                <div>
                <div className="dropdown dropdown-hover">
  <div tabIndex={0} role="button" className="btn m-1 text-xl bg-white/20 border-stone-500 text-white">Sort <FaSortAmountDown></FaSortAmountDown></div>
  <ul tabIndex={0} className="dropdown-content menu bg-black/50 backdrop-blur-lg text-white rounded-box z-[1] w-52 p-2 shadow">
    <li><a onClick={()=> handleSort('rating')}>By Rating</a></li>
    <li><a onClick={()=> handleSort('publishYear')}>By Publish year</a></li>
  </ul>
</div>
                </div>
                <div>
                <div className="dropdown dropdown-left">
  <div tabIndex={0} role="button" className="btn m-1 text-xl bg-black/30 border-stone-500 text-gray-100">Filter by genres <AiOutlineControl /></div>
  <ul tabIndex={0} className="dropdown-content menu bg-black/50 backdrop-blur-lg text-white rounded-box z-[1] w-52 p-2 shadow">
    <li onClick={()=>handleFilter('Action')}><a>Action</a></li>
    <li onClick={()=>handleFilter('RPB')}><a>RPG</a></li>
    <li onClick={()=>handleFilter('Racing')}><a>Racing</a></li>
    <li onClick={()=>handleFilter('Fighting')}><a>Fighting</a></li>
    <li onClick={()=>handleFilter('Sports')}><a>Sports</a></li>
  </ul>
</div>

                </div>
            </div>
            <div className="max-w-7xl mx-auto md:p-10 px-5 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mb-10">
                {
                    reviews.map(review=> <AllReviewCards key={review._id} review={review}></AllReviewCards>)
                }
            </div>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default AllReview;