import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <h1 className="text-9xl font-extrabold text-blue-500 mb-4">404</h1>
      <h2 className="text-3xl md:text-5xl font-bold mb-2">Page Not Found</h2>
      <p className="text-lg md:text-xl mb-6 text-gray-600">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link to="/" className="px-6 py-3 text-lg bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600">
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
