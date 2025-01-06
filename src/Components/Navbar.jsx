import { Link, NavLink } from "react-router-dom";
import { IoGameControllerOutline } from "react-icons/io5";
import { useContext, useState } from "react";
import { AuthContext } from "../auth provider/AuthProvider";
import { MdLogout } from "react-icons/md";
import { Tooltip as ReactTooltip } from "react-tooltip";
import 'react-tooltip/dist/react-tooltip.css'
const Navbar = () => {
const {user,logOutUser,setUser}=useContext(AuthContext)

const handleSignOut =()=>{
  logOutUser()
  .then(()=>{
    setUser(null)
  
  })
 
}
   const [dark,setDark]=useState(false)
    const handleTheme=()=>{
    setDark(!dark)
    document.body.classList.toggle("dark");
    }


    const links = <>
  <NavLink to={'/'}><li>Home</li></NavLink>
   <NavLink to={'/allReview'}><li>All Reviews</li></NavLink>
 {
  user && <ul className="flex items-center gap-3">
    <NavLink to={'/addReview'}><li>Add Reviews</li></NavLink>
    <NavLink to={`/myReview/${user?.email}`}><li>My Reviews</li></NavLink>
  </ul>
 }
   
  
<details className="dropdown">
  <summary className="">Preferences</summary>
  <ul className="menu  bg-black/50 dropdown-content rounded-box z-30 w-52 p-2 shadow">
   
    <li>
 {
  user &&    <NavLink to={`/gameWatchList/${user?.email}`}>Game WatchList</NavLink>
 }
    </li>
    <li>
      <NavLink to={'/support'}>
        Support
      </NavLink>
    </li>
    <li><Link to={'/terms'}>Terms & Condition</Link></li>
    <li>
      <NavLink to={'/aboutUs'}>
        About Us
      </NavLink>
    </li>
    <li>
    <div className="flex  px-5">
      theme
<label className="swap swap-rotate">
  {/* this hidden checkbox controls the state */}
  <input type="checkbox" onClick={()=>handleTheme()} className="theme-controller" value="synthwave" />

  <svg
    className="swap-off text-slate-50 h-10 w-10 fill-current"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24">
    <path
      d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
  </svg>

  {/* moon icon */}
  <svg
    className="swap-on text-white h-10 w-10 fill-current"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24">
    <path
      d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
  </svg>
</label>
</div>

    </li>
  </ul>
</details>
    </>

    return (
        <div className="navbar top-0 fixed z-50 bg-purple-950/70 p-2">
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-30 mt-3 w-52 p-2 shadow">
   <NavLink to={'/'}><li>Home</li></NavLink>
   <NavLink to={'/allReview'}><li>All Reviews</li></NavLink>
   {
    user && <>
    <NavLink to={'/addReview'}><li>Add Reviews</li></NavLink>
    <NavLink to={`/myReview/${user?.email}`}><li>My Reviews</li></NavLink>
 
    </>
   }
   <details className="dropdown dropdown-end">
  <summary className="">Preferences</summary>
  <ul className="menu  bg-base-300 dropdown-content rounded-box z-30 w-52 p-2 shadow">
   
    <li>
   {
    user &&  <NavLink to={`/gameWatchList/${user?.email}`}>Game WatchList</NavLink>
   }
    </li>
    <li>
      <NavLink to={'/support'}>
        Support
      </NavLink>
    </li>
    <li><Link to={'/terms'}>Terms & Condition</Link></li>
    <li><NavLink to={'/aboutUs'}>
      About Us
      </NavLink></li>
    <li>
    <div className="flex  px-5">
      theme
<label className="swap swap-rotate">
  {/* this hidden checkbox controls the state */}
  <input type="checkbox" onClick={()=>handleTheme()} className="theme-controller" value="synthwave" />

  <svg
    className="swap-off text-slate-50 h-10 w-10 fill-current"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24">
    <path
      d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
  </svg>

  {/* moon icon */}
  <svg
    className="swap-on text-white h-10 w-10 fill-current"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24">
    <path
      d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
  </svg>
</label>
</div>

    </li>
  </ul>
</details>
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
<img data-tooltip-id="userName" data-tooltip-content={user.displayName} className="w-12 h-[50px] rounded-full" src={user.photoURL} alt="" />
<ReactTooltip id="userName" place="top" effect="solid" />
<button onClick={handleSignOut} className="btn border-none bg-red-500">SignOut
<MdLogout className="text-xl"/>
</button>
      </div>:     <div>
      <Link to={'/signUp'}>
      <button className="btn bg-stone-500 border-none mr-5 text-gray-300">SignUp</button>
      </Link>
      <Link to={'/login'}>
      <button className="btn  bg-stone-500 border-none text-gray-300">Login</button>
      </Link>
       </div>
     }
        </div>
      </div>
    );
};

export default Navbar;