import { FaGamepad, FaGoogle } from "react-icons/fa";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../auth provider/AuthProvider";


const SignUp = () => {
    const {signUpByEmail,signUpByGoogle}=useContext(AuthContext)
 const handleGoogleLogin=()=>{
    signUpByGoogle()
    .then(result=> {
        console.log(result.user)
    })
    .catch(error => console.log(error))
 }
    const handleSignUp=(e)=>{
        e.preventDefault()
        const form= e.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        const photo = form.photo.value
        signUpByEmail(email,password)
        .then(result=> {
            console.log(result.user)
        })
        .catch(error => console.log(error))
    }
    return (
        <div>
           <Navbar></Navbar> 
           <div>
                <h3 className="text-3xl text-center text-white">SignUp Now !</h3>
                <div className="flex justify-center mt-5">
                  <button onClick={handleGoogleLogin} className="text-white flex items-center gap-3 text-2xl btn btn-outline">
                  SignUp with Google <FaGoogle></FaGoogle>
                  </button>
                </div>
            </div>
            <div className="card bg-gradient-to-r from-purple-500 via-purple-600 to-purple-800  w-full max-w-sm shrink-0 mx-auto mt-5 shadow-2xl">
      <form onSubmit={handleSignUp} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="name" placeholder="Full Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input type="text" name="photo" placeholder="Photo Url" className="input input-bordered" required />
        </div>
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
          <button className="btn btn-neutral">SignUp
<FaGamepad className="text-2xl"></FaGamepad>

          </button>
        </div>
        <p>Already have an account ? <Link to={'/login'}><span className=" text-neutral-900 underline">Login</span></Link></p>
      </form>
    </div>
        </div>
    );
};

export default SignUp;