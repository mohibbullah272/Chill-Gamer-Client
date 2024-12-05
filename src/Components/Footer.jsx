import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer bg-white/5 backdrop-blur-3xl bg-opacity-30  text-white p-10">
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Social</h6>
          <div className="grid grid-flow-col gap-4">
            <a>
            <FaTwitter className="text-3xl text-blue-500"></FaTwitter>
            </a>
            <a>
          <FaYoutube className="text-3xl text-red-700"></FaYoutube>
          
            </a>
            <a>
             <FaFacebook className="text-3xl text-blue-600"></FaFacebook>
            </a>
          </div>
<div className="mt-4 space-y-2">
    <p className="footer-title">send your feedback</p>
<label className="input input-bordered flex items-center gap-2">
  <input type="text" className="grow" placeholder="feedback" />
  <span className="px-5 py-2 rounded-3xl bg-purple-700">Submit</span>
</label>
</div>
        </nav>
      </footer>
    );
};

export default Footer;