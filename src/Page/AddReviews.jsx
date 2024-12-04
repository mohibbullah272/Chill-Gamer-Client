import { useContext, useState } from "react";
import Navbar from "../Components/Navbar";
import { AuthContext } from "../auth provider/AuthProvider";
import Select from 'react-select';
import { FaPenAlt } from "react-icons/fa";

const AddReviews = () => {
   const {user}=useContext(AuthContext)
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
const [SelectedGenres,setSelectedGenres]=useState(null)
    return (
        <div>
            <Navbar></Navbar>
  <div>
    <h3 className="text-3xl flex items-center gap-3 text-white justify-center">Write a Review <FaPenAlt className="text-2xl text-purple-300"></FaPenAlt></h3>
    <p className="text-gray-300 w-1/2 mx-auto text-center"> 
"Share your thoughts about the game! Provide a detailed review and rate the game to help others discover its true potential </p>
  </div>

<div className="mt-5 px-5">
<form >
<div className="max-w-7xl mx-auto">
<div className="md:flex w-full gap-4">
<div className="form-control md:w-1/2 w-full">
          <label className="label">
            <span className="label-text text-white">Email</span>
          </label>
          <input type="email" name="email" defaultValue={user?.email}  className="input input-bordered" required />
        </div>
<div className="form-control md:w-1/2 w-full">
          <label className="label">
            <span className="label-text text-white">Name</span>
          </label>
          <input type="text" name="Name" defaultValue={user?.displayName} className="input input-bordered" required />
        </div>
</div>
<div className="md:flex w-full gap-4">
<div className="form-control md:w-1/2 w-full">
          <label className="label">
            <span className="label-text text-white">Game Name</span>
          </label>
          <input type="text" name="gameName" placeholder="game name"  className="input input-bordered" required />
        </div>
<div className="form-control md:w-1/2 w-full">
          <label className="label">
            <span className="label-text text-white">Game Cover</span>
          </label>
          <input type="text" name="GameCover" placeholder="Game Cover" className="input input-bordered" required />
        </div>
</div>
<div className="md:flex w-full gap-4">
<div className="form-control md:w-1/2 w-full">
          <label className="label">
            <span className="label-text text-white">Review</span>
          </label>
          <input type="text" name="description" placeholder="description"  className="input input-bordered" required />
        </div>
<div className="form-control md:w-1/2 w-full">
          <label className="label">
            <span className="label-text text-white">Rating</span>
          </label>
          <Select
        defaultValue={selectedOption}
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
          <input type="text" name="publishYear" placeholder="publish year"  className="input input-bordered" required />
        </div>
<div className="form-control md:w-1/2 w-full">
          <label className="label">
            <span className="label-text text-white">Genres</span>
          </label>
          <Select
        defaultValue={SelectedGenres }
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

export default AddReviews;