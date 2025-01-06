import { useContext, useState } from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Select from 'react-select'
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
const UpdateReview = () => {
   
    const loadedReview = useLoaderData()
 
    const options = [
        { value: '1', label: '1' },
        { value: '2', label: '2' },
        { value: '3', label: '3' },
        { value: '4', label: '4' },
        { value: '5', label: '5' },
     
      ];
       const Genres = [
        { value: 'Action', label: 'Action' },
        { value: 'RPB', label: 'RPG' },
        { value: 'Fighting', label: 'Fighting' },
        { value: 'Sports', label: 'Sports' },
        { value: 'Racing', label: 'Racing' },
     
      ];
      const [selectedOption, setSelectedOption] = useState(null);
    const [selectedGenres,setSelectedGenres]=useState(null)
    const handleUpdate=(e)=>{
        e.preventDefault()
        const form =e.target
  const name = form.Name.value
  const email = form.email.value
  const gameName=form.gameName.value
  const GameCover=form.GameCover.value
  const description =form.description.value
  const publishYear=form.publishYear.value
  const rating = selectedOption ===null? loadedReview?.rating:selectedOption?.value
  const genres = selectedGenres ===null? loadedReview?.genres :selectedGenres?.value
  const update ={name,email,gameName,description,publishYear,rating,genres,GameCover}
 
  fetch(`https://chill-gammer-server.vercel.app/updateReview/${loadedReview._id}`,{
    method:"PATCH",
    headers:{
      "content-type":"application/json"
    },
    body:JSON.stringify(update)
  })
  .then(res=> res.json())
  .then(data=> {
    if(data.modifiedCount > 0){
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "update successfully complete",
        showConfirmButton: false,
        timer: 1500
      });
    }
   if(data.modifiedCount <= 0){
    Swal.fire({
      position: "top-right",
      icon: "info",
      title: "couldn't found any changes",
      showConfirmButton: false,
      timer: 1500
    });
   }
  })
    }
    return (
        <div>
         
            <h3 className="text-3xl text-white text-center ">Update Your Review</h3>
            <div className="mt-5 px-5">
<form onSubmit={handleUpdate}>
<div className="max-w-7xl mx-auto">
<div className="md:flex w-full gap-4">
<div className="form-control md:w-1/2 w-full">
          <label className="label">
            <span className="label-text text-white">Email</span>
          </label>
          <input type="email" name="email" defaultValue={loadedReview?.email} readOnly className="input input-bordered" required />
        </div>
<div className="form-control md:w-1/2 w-full">
          <label className="label">
            <span className="label-text text-white">Name</span>
          </label>
          <input type="text" name="Name" defaultValue={loadedReview?.name} className="input input-bordered" readOnly required />
        </div>
</div>
<div className="md:flex w-full gap-4">
<div className="form-control md:w-1/2 w-full">
          <label className="label">
            <span className="label-text text-white">Game Name</span>
          </label>
          <input type="text" defaultValue={loadedReview?.gameName} name="gameName"  placeholder="game name"  className="input input-bordered" required />
        </div>
<div className="form-control md:w-1/2 w-full">
          <label className="label">
            <span className="label-text text-white">Game Cover</span>
          </label>
          <input type="text" defaultValue={loadedReview?.GameCover} name="GameCover" placeholder="Game Cover" className="input input-bordered" required />
        </div>
</div>
<div className="md:flex w-full gap-4">
<div className="form-control md:w-1/2 w-full">
          <label className="label">
            <span className="label-text text-white">Review</span>
          </label>
          <input type="text" defaultValue={loadedReview?.description} name="description" placeholder="description"  className="input input-bordered" required />
        </div>
<div className="form-control md:w-1/2 w-full">
          <label className="label">
            <span className="label-text text-white">Rating</span>
          </label>
          <Select
     defaultInputValue={loadedReview?.rating}
        onChange={setSelectedOption}
        options={options}
      />
        </div>
</div>
<div className="md:flex w-full gap-4">
<div className="form-control md:w-1/2 w-full">
          <label className="label">
            <span className="label-text text-white">Publish year</span>
          </label>
          <input type="text" defaultValue={loadedReview?.publishYear} name="publishYear" placeholder="publish year"  className="input input-bordered" required />
        </div>
<div className="form-control md:w-1/2 w-full">
          <label className="label">
            <span className="label-text text-white">Genres</span>
          </label>
          <Select
     defaultInputValue={loadedReview.genres}
        onChange={setSelectedGenres}
        options={Genres }
      />
        </div>
</div>

</div>
<div className="my-5">
    <input type="submit" value="Submit" className="btn btn-block bg-gradient-to-r from-purple-500 via-purple-600 to-purple-900 border-none text-white" />
</div>
</form>
</div>
        
        </div>
    );
};

export default UpdateReview;