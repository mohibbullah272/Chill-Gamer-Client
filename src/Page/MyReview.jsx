import { useContext, useEffect, useState } from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { AuthContext } from "../auth provider/AuthProvider";
import { FaPen, FaTrashAlt } from "react-icons/fa";

const MyReview = () => {
    const {user}=useContext(AuthContext)
    const [reviews,setReviews]=useState([])
    useEffect(()=>{
        fetch( `http://localhost:5500/myReview/${user?.email}`)
        .then(res=> res.json())
        .then(data => setReviews(data))
    },[])
  
    return (
        <div>
            <Navbar></Navbar>
<h3 className="text-3xl text-gray-200 text-center">Browse your reviewed games</h3>

{
    reviews.length <= 0 ? <h3 className="text-4xl my-40 text-white text-center">No Data Found !! <br />
    <span>Please add review first</span>
    </h3>:<div className="overflow-x-auto max-w-6xl my-20 mx-auto">
    <table className="table text-white">
      {/* head */}
      <thead>
        <tr className="text-white">
          <th></th>
          <th>Name</th>
          <th>Genres</th>
          <th>Rating</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {/* row 1 */}
  {
      reviews.map((review,idx)=><tr>
          <th>{idx + 1}</th>
          <td>{review.gameName}</td>
          <td>{review.genres}</td>
          <td>{review.rating}</td>
          <td><div className="flex gap-10">
              <button title="edit"><FaPen></FaPen></button>
              <button title="delete"><FaTrashAlt className="text-red-700"></FaTrashAlt></button>
              </div></td>
        </tr>
      )
  }
      </tbody>
    </table>
  </div>
}

            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default MyReview;