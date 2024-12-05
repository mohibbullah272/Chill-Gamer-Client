import { useLoaderData } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { useState } from "react";
import AllReviewCards from "../Components/AllReviewCards";
import Footer from "../Components/Footer";

const AllReview = () => {
    const loadedReview = useLoaderData()
    const [reviews,setReviews]=useState(loadedReview)
   
    return (
        <div>
            <Navbar></Navbar>
            <div className="mt-5 ">
                <h3 className="text-3xl font-semibold text-white text-center">Explore, Play, and Share</h3>
                <p className="w-1/2 text-center text-gray-300 mx-auto">Dive into a world of gaming insights! Discover honest reviews, ratings, and experiences from gamers worldwide. Find your next favorite game or share your own epic adventures.</p>
            </div>
            <div className="max-w-7xl mx-auto md:p-10 px-5 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 my-10">
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