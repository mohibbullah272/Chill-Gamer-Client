import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Footer = () => {
  const handleFeedback=(e)=>{
    e.preventDefault()
    Swal.fire("Thanks for your feedback!");
    e.target.reset()
  }
    return (
        <footer className="footer bg-black backdrop-blur-3xl   relative top-32 text-white p-10">
        <nav>
          <h6 className="footer-title">Company</h6>
          <Link to={'/aboutUs'} className="link link-hover">About us</Link>
          <Link to={'/support'} className="link link-hover">Contact</Link>
          <Link to={'/terms'} className="link link-hover">Terms & Policy</Link>
        
        </nav>
        <nav>
          <h6 className="footer-title">Social</h6>
          <div className="grid grid-flow-col gap-4">
            <a href="https://x.com/?lang=en&mx=2" target="_blank">
            <FaTwitter className="text-3xl text-blue-500"></FaTwitter>
            </a>
            <a href="https://www.youtube.com" target="_blank">
          <FaYoutube  className="text-3xl text-red-700"></FaYoutube>
          
            </a>
            <a href="https://www.facebook.com" target="_blank">
             <FaFacebook className="text-3xl text-blue-600"></FaFacebook>
            </a>
          </div>
<div className="mt-4 space-y-2">
    <p className="footer-title">send your feedback</p>
<label className="input input-bordered flex items-center bg-slate-900 gap-2">
  <form onSubmit={handleFeedback}>

  <input type="text" className="grow text-white" placeholder="feedback" required/>
  <input  type='submit' value="submit" className="px-5 py-2  rounded-3xl "/>
  </form>
</label>
</div>
        </nav>
      </footer>
    );
};

export default Footer;