
import { useLoaderData } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import "aos/dist/aos.css"
import Aos from "aos";
import { useEffect } from "react";
const GameWatchList = () => {
   const watchLists = useLoaderData()
   useEffect(()=>{
    Aos.init()
  },[])
    return (
        <div className="relative top-20">
       
          
 {
    watchLists.length <=0 ? <h3 className="text-4xl text-white text-center my-40">No Data Found !! <br /><span>please add watchList first</span></h3>:       <div data-aos="fade-up"
    data-aos-duration="1000" className="overflow-x-auto md:px-20 my-10 max-w-6xl mx-auto text-white">
    <table  className="table">
      {/* head */}
      <thead className="text-white">
        <tr>
          <th>Game:</th>
          <th className="md:inline-block hidden">Description</th>
          <th>Genres</th>
         <th>Publish on</th>
        </tr>
      </thead>
      <tbody>
       {
          watchLists.map((watchList,idx)=>  <tr key={idx}>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src={watchList.GameCover}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{watchList.gameName}</div>
                    <div className="text-sm opacity-50">Ratings : {watchList.rating}</div>
                  </div>
                </div>
              </td>
              <td className="md:inline-block hidden">
              <div className="md:w-1/2">{watchList.description}</div>
              </td>
              <td>{watchList.genres}</td>
          <td>
              {watchList.publishYear}
          </td>
            </tr>)
       }
     
    
      </tbody>
    </table>
  </div>
 }

   
        </div>
    );
};

export default GameWatchList;