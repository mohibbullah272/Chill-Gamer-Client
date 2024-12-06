import { Link, NavLink } from "react-router-dom";
import { IoGameControllerOutline } from "react-icons/io5";
import { useContext } from "react";
import { AuthContext } from "../auth provider/AuthProvider";
import { MdLogout } from "react-icons/md";
const Navbar = () => {
const {user,logOutUser,setUser}=useContext(AuthContext)

const handleSignOut =()=>{
  logOutUser()
  .then(()=>{
    setUser(null)
   console.log('done')
  })
  .catch(err=> console.log(err))
}



    const links = <>
  <NavLink to={'/'}><li>Home</li></NavLink>
   <NavLink to={'/allReview'}><li>All Reviews</li></NavLink>
   <NavLink to={'/addReview'}><li>Add Reviews</li></NavLink>
   <NavLink to={`/myReview/${user?.email}`}><li>My Reviews</li></NavLink>
   <NavLink to={'/gameWatchList'}><li>Game WatchList</li></NavLink>
    </>

    return (
        <div className="navbar p-2">
        <div className="navbar-start">
          <div className="dropdown">
            <div  tabIndex={0} role="button" className="btn btn-ghost bg-white lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
   <NavLink to={'/'}><li>Home</li></NavLink>
   <NavLink to={'/allReview'}><li>All Reviews</li></NavLink>
   <NavLink to={'/addReview'}><li>Add Reviews</li></NavLink>
   <NavLink to={`/myReview/${user?.email}`}><li>My Reviews</li></NavLink>
   <NavLink to={'/gameWatchList'}><li>Game WatchList</li></NavLink>
   
   <div>
    {
     user ? <div className="flex items-center md:hidden gap-3">
     <img className="w-12 rounded-full" src={user.photoURL} alt="" />
     <button onClick={handleSignOut} className="btn border-none bg-red-500">SignOut
     <MdLogout className="text-xl"/>
     </button>
           </div> :<div className="flex gap-5">
  <Link to={'/signUp'}>
  <button className="btn btn-xs btn-neutral">SignUp</button>
  </Link>
 <Link to={'/login'}>
 <button className="btn btn-xs btn-neutral">Login</button>
 </Link>
   </div>
    }
   </div>
            </ul>
          </div>
          <a className="btn btn-ghost text-white text-xl nav">Chill Gamer

          <IoGameControllerOutline />
          </a>
         
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu gap-5 text-white menu-horizontal  px-1">
       {
        links
       }
          </ul>
        </div>
        <div className="navbar-end md:flex hidden ">
     {
      user ? <div className="flex items-center gap-3">
<img className="w-12 rounded-full" src={user.photoURL} alt="" />
<button onClick={handleSignOut} className="btn border-none bg-red-500">SignOut
<MdLogout className="text-xl"/>
</button>
      </div>:     <div>
      <Link to={'/signUp'}>
      <button className="btn bg-gradient-to-l from-purple-700 to-cyan-700 border-none mr-5 text-gray-300">SignUp</button>
      </Link>
      <Link to={'/login'}>
      <button className="btn  bg-gradient-to-l from-purple-700 to-cyan-700 border-none text-gray-300">Login</button>
      </Link>
       </div>
     }
        </div>
      </div>
    );
};

export default Navbar;