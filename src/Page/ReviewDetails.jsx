import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { useLoaderData, useParams } from 'react-router-dom';

const ReviewDetails = () => {
    const details=useLoaderData()
   console.log(details)
    return (
        <div>
            <header>
                <Navbar></Navbar>
            </header>
            <h3 className='text-4xl text-gray-200 text-center py-4'>Unveiling the Game Full Review</h3>
            <main className='max-w-7xl md:px-10 px-5 mx-auto my-10'>
            
            <div className="card card-compact bg-white/60 backdrop-blur-xl md:w-1/2 w-full  mx-auto shadow-xl">
            <div className="relative w-full h-64">
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
  <img src={details.GameCover}  class="w-full h-full object-cover"/>
 
 
</div>
  <div className="card-body">
    <h2 className="text-3xl"> {details.gameName}</h2>
    <p className='font-bold text-xl'>Reviewer: {details.name}</p>
    <p>Reviewer email: {details.email}</p>
    <p>Rating: {details.rating}</p>
    <p>Genres : {details?.genres}</p>
    <p>Publish Year : {details.publishYear}</p>
    <p>description : {details.description}</p>
    <p></p>
    <div className="card-actions ">
      <button className="btn btn-block btn-outline">Add to WatchList</button>
    </div>
  </div>
</div>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default ReviewDetails;