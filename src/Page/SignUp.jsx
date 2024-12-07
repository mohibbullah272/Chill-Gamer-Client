import { FaEye, FaEyeSlash, FaGamepad, FaGoogle } from "react-icons/fa";
import Navbar from "../Components/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../auth provider/AuthProvider";
import Footer from "../Components/Footer";
import Swal from "sweetalert2";


const SignUp = () => {
    const {signUpByEmail,signUpByGoogle,updateUser}=useContext(AuthContext)
    const navigate = useNavigate()
 const handleGoogleLogin=()=>{
    signUpByGoogle()
    .then(result=> {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "successfully signUp complete ",
        showConfirmButton: false,
        timer: 1500,
       
    
        
      });
      navigate('/')
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
        const regex = /^(?=.*[A-Z])(?=.*[a-z]).*$/;
        if(!regex.test(password)){
          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            }
          });
          Toast.fire({
            icon: "error",
            title: "password must be contain one uppercase and one lowercase letter",
            background:'#ccd2db'
          });
          return
        }
        if(password.length <6){
          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            }
          });
          Toast.fire({
            icon: "error",
            title: "password Length must be at least 6 character",
            background:'#ccd2db'
          });
          return
        }
        signUpByEmail(email,password)
        .then(result=> {
          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            }
          });
          Toast.fire({
            icon: "success",
            title: "Signed in successfully",
            background:"#ccd2db"
          });
          updateUser(name,photo)
          .then(()=>{
            console.log('profile update hoise')
          })
          .catch(err=> console.log(err))
          navigate('/')
        })
        .catch(error => console.log(error))
    }
    const [showPass,setPass]=useState(false)
   
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
            <div className="card bg-gradient-to-r from-purple-500 via-purple-600 to-purple-800  w-full max-w-sm shrink-0 mx-auto mt-5 shadow-2xl ">
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
        <div className="form-control relative">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type={`${showPass?'text':'password'}`} name="password" placeholder="password" className="input input-bordered" required />
    <div onClick={()=> setPass(!showPass)} className="absolute top-[52px] right-4">
      {
        showPass? <FaEyeSlash></FaEyeSlash>:<FaEye className="text-black"></FaEye>
      }
    </div>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-neutral">SignUp
<FaGamepad className="text-2xl"></FaGamepad>

          </button>
        </div>
        <p>Already have an account ? <Link to={'/login'}><span className=" text-neutral-900 underline">Login</span></Link></p>
      </form>
    </div>
    <footer className="mt-10">
      <Footer></Footer>
    </footer>
        </div>
    );
};

export default SignUp;