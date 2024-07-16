// IntroPage.jsx
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const IntroPage = () => {
  useEffect(() => {
    // Set overflow to "hidden" when the component mounts
    document.body.style.overflow = 'hidden';

    // Clean up by setting overflow to "auto" when the component unmounts
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center bg-indigo-800">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold text-white mb-4">
          Welcome to Image Generation with DALL-E
        </h1>
        <p className="text-lg text-white mb-8">
          Explore the fascinating world of AI-generated images using DALL-E.
        </p>
        <Link
          to="/home"
          className="bg-white text-indigo-800 px-6 py-3 rounded-full font-semibold hover:bg-indigo-600 transition duration-300"
        >
          Explore the Community Showcase
        </Link>
      </div>
    </div>
  );
};

export default IntroPage;
