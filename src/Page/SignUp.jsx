import { FaGoogle } from "react-icons/fa";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";


const SignUp = () => {
    return (
        <div>
           <Navbar></Navbar> 
           <div>
                <h3 className="text-3xl text-center text-white">SignUp Now !</h3>
                <div className="flex justify-center mt-5">
                  <button className="text-white flex items-center gap-3 text-2xl btn btn-outline">
                  SignUp with Google <FaGoogle></FaGoogle>
                  </button>
                </div>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 mx-auto mt-5 shadow-2xl">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="Full Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input type="text" placeholder="Photo Url" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
    
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">SignUp</button>
        </div>
        <p>Already have an account ? <Link to={'/login'}><span className=" text-neutral-900 underline">Login</span></Link></p>
      </form>
    </div>
        </div>
    );
};

export default SignUp;