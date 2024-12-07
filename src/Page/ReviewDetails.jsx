import React, { useContext, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../auth provider/AuthProvider';
import Swal from 'sweetalert2';
import "aos/dist/aos.css"
import Aos from "aos";
const ReviewDetails = () => {
    const details=useLoaderData()
    const {user}=useContext(AuthContext)
  
    const navigate =useNavigate()
  const handleAddToWatchList=()=>{
const description=details.description
const rating=details.rating
const publishYear=details.publishYear
const genres=details.genres
const gameName=details.gameName
const GameCover=details.GameCover
const name = user.displayName
const email = user.email
const watchList ={name,email,gameName,GameCover,genres,publishYear,rating,description}

    fetch('https://chill-gammer-server.vercel.app/watchList',{
      method:"POST",
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify(watchList)
    })
    .then(res=> res.json())
    .then(data => {
      if(data.insertedId){
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          }
        });
        Toast.fire({
          icon: "success",
          title: "successfully added to watchList",
          background:"#ccd2db"
        });
      }
    })
  }
  useEffect(()=>{
    Aos.init()
  },[])
    return (
        <div>
            <header>
                <Navbar></Navbar>
            </header>
            <h3 className='text-4xl text-gray-200 text-center py-4'>Unveiling the Game Full Review</h3>
            <main className='max-w-7xl md:px-10 px-5 mx-auto my-10'>
            
            <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500"  className="card card-compact bg-white/60 backdrop-blur-xl md:w-1/2 w-full  mx-auto shadow-xl">
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
      <button onClick={()=> (user? handleAddToWatchList(): navigate('/login'))} className="btn btn-block btn-outline">Add to WatchList</button>
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