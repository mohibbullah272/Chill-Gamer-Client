import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { FaGoogle } from "react-icons/fa";

const SignIn = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div>
                <h3 className="text-3xl text-center text-white">Login Now !</h3>
                <div className="flex justify-center mt-5">
                  <button className="text-white flex items-center gap-3 text-2xl btn btn-outline">
                  Login with Google <FaGoogle></FaGoogle>
                  </button>
                </div>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 mx-auto mt-5 shadow-2xl">
      <form className="card-body">
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
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      <p>Don't have an account ? <Link to={'/signUp'}><span className="text-neutral-900 underline ">SignUp</span></Link></p>
      </form>
    </div>
        </div>
    );
};

export default SignIn;