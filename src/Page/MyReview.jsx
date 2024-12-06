import { useContext, useEffect, useState } from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { AuthContext } from "../auth provider/AuthProvider";
import { FaPen, FaTrashAlt } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const MyReview = () => {
 const loadedReview = useLoaderData()
 const [reviews,setReviews]=useState(loadedReview)
  const handleRemoveReview=(id)=>{
console.log(id)
Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {
    fetch(`http://localhost:5500/myReview/${id}`,{
      method:"DELETE"
    })
    .then(res=> res.json())
    .then(data => {
      if(data.deletedCount){
        Swal.fire({
          title: "Deleted!",
          text: "Your review has been deleted.",
          icon: "success"
        });
        const remaining = reviews.filter(review=> review._id !== id)
        setReviews(remaining)
      }
    })

  }
});
  }
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
            <Link to={`/updateReview/${review._id}`}>
            <button title="edit"><FaPen></FaPen></button>
            </Link>
              <button onClick={()=> handleRemoveReview(review._id)} title="delete"><FaTrashAlt className="text-red-700"></FaTrashAlt></button>
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