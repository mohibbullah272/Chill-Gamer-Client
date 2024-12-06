import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { FaGamepad, FaGoogle } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../auth provider/AuthProvider";
import Footer from "../Components/Footer";

const SignIn = () => {
    const {loginWithEmail,signUpByGoogle}=useContext(AuthContext)
    const handleLogin=(e)=>{
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        loginWithEmail(email,password)
        .then(result =>{
            console.log(result)
        })
        .catch(error => console.log(error))
    }
    const handleGoogleLogin=()=>{
        signUpByGoogle()
        .then(result=> {
            console.log(result.user)
        })
        .catch(error => console.log(error))
    }
    return (
        <div>
            <Navbar></Navbar>
            <div>
                <h3 className="text-3xl text-center text-white">Login Now !</h3>
                <div className="flex justify-center mt-5">
                  <button onClick={handleGoogleLogin} className="text-white flex items-center gap-3 text-2xl btn btn-outline">
                  Login with Google <FaGoogle></FaGoogle>
                  </button>
                </div>
            </div>
            <div className="card bg-gradient-to-r from-purple-500 via-purple-600 to-purple-800 w-full max-w-sm shrink-0 mx-auto mt-5 shadow-2xl">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-neutral">Login
          <FaGamepad className="text-2xl"></FaGamepad>
          </button>
        </div>
      <p>Don't have an account ? <Link to={'/signUp'}><span className="text-neutral-900 underline ">SignUp</span></Link></p>
      </form>
    </div>
    <footer className="mt-10">
      <Footer></Footer>
    </footer>
        </div>
    );
};

export default SignIn;