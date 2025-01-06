import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import Swal from "sweetalert2";

const SupportPage = () => {
  const handleSubmit=(e)=>{
    e.preventDefault()
     Swal.fire("Thanks For your message wait for response");
     e.target.reset()
  }
  return (
    <div className=" relative  top-20 text-white min-h-screen">
      {/* Header */}
      <div className=" py-8 text-center">
        <h1 className="text-4xl font-bold tracking-wide text-white">Chill Gamer Support</h1>
        <p className="text-gray-400 mt-2">
          Got questions? Need help? We're here to assist you.
        </p>
      </div>

      {/* Contact Information */}
      <div className="max-w-6xl mx-auto px-5 py-12 grid lg:grid-cols-2 gap-8">
        {/* Left Column: Contact Details */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
          <ul className="space-y-4">
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-yellow-500" />
              <span>support@chillgamer.com</span>
            </li>
            <li className="flex items-center gap-3">
              <FaPhone className="text-yellow-500" />
              <span>+1 (555) 123-4567</span>
            </li>
            <li className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-yellow-500" />
              <span>123 Chill Lane, Gamerville, USA</span>
            </li>
          </ul>
        </div>

        {/* Right Column: Support Form */}
        <div>
          <h2 className="text-2xl font-bold text-stone-500 mb-4">Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-300 mb-2">Name</label>
              <input
                type="text"
                className="w-full bg-gray-800 text-white rounded-lg p-3 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-2">Email</label>
              <input
                type="email"
                className="w-full bg-gray-800 text-white rounded-lg p-3 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-2">Message</label>
              <textarea
                rows="4"
                className="w-full bg-gray-800 text-white rounded-lg p-3 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-stone-400 text-gray-900 font-bold py-3 rounded-lg hover:bg-yellow-600 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

   
      <div className=" py-6">
        <div className="max-w-6xl mx-auto text-center space-y-4">
          <h3 className="text-xl font-bold text-yellow-500">Follow Us</h3>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-gray-400 hover:text-yellow-500">
              <FaFacebook size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-yellow-500">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-yellow-500">
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportPage;
