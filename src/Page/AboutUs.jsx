import React from 'react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <div
      className="min-h-screen py-16"
      style={{
        
      }}
    >
      <div className="max-w-7xl mx-auto px-5">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl text-stone-400 md:text-6xl font-extrabold">
            About <span className="">Chill Gamer</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-300">
            Dive into the ultimate gaming world. Reviews, previews, and exclusive insights await you.
          </p>
        </section>

        {/* Our Mission */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            <span className="text-primary">Our Mission</span>
          </h2>
          <p className="mt-6 text-center text-gray-300">
            To bring gamers together under one roof, offering an immersive platform for reviews, previews, and passionate discussions about everything gaming.
          </p>
        </section>

        {/* Unique Features */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#1c1d1d] p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-bold text-secondary">Authentic Reviews</h3>
            <p className="text-gray-400 mt-3">
              Experience unbiased reviews crafted by gamers who love games as much as you do.
            </p>
          </div>
          <div className="bg-[#1c1d1d] p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-bold text-secondary">Community Driven</h3>
            <p className="text-gray-400 mt-3">
              Join a community that values your opinions, helping shape the future of gaming discussions.
            </p>
          </div>
          <div className="bg-[#1c1d1d] p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-bold text-secondary">Upcoming Titles</h3>
            <p className="text-gray-400 mt-3">
              Get early access previews, countdowns, and exclusive sneak peeks at upcoming hits.
            </p>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center mt-16">
          <h2 className="text-3xl text-stone-300 md:text-4xl font-bold">
            Ready to Game <span className="">Chill?</span>
          </h2>
          <p className="text-gray-400 mt-4 mb-8">
            Explore. Discuss. Connect. Chill Gamer is your gateway to the gaming world.
          </p>
        <Link to={'/allReview'}>
        <button className="bg-primary text-black px-6 py-3 rounded-lg font-bold hover:bg-[#5e99ff] transition">
            Explore Now
          </button>
        </Link>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
