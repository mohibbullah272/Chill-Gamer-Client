
import { useLoaderData } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const GameWatchList = () => {
   const watchLists = useLoaderData()
   console.log(watchLists)
    return (
        <div>
            <Navbar></Navbar>
          
 {
    watchLists.length <=0 ? <h3 className="text-4xl text-white text-center my-40">No Data Found !! <br /><span>please add watchList first</span></h3>:           <div className="overflow-x-auto md:px-20 my-10 max-w-6xl mx-auto text-white">
    <table className="table">
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
        {/* row 1 */}
       {
          watchLists.map(watchList=>  <tr>
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

          <footer className="mt-32">
            <Footer></Footer>
          </footer>
        </div>
    );
};

export default GameWatchList;