import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
         <div className="flex flex-col justify-center items-center h-screen bg-gray-900 text-center px-4">
      <img src="../error-404.png" alt="error 404" />
      <h2 className="text-2xl font-semibold text-gray-200 mb-2">
        Oops! Page not found 😢
      </h2>
      <p className="text-gray-400 mb-6">
        The page you’re looking for doesn’t exist or has been moved.
      </p>

      <Link
        to="/"
        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all"
      >
        🏠 Back to Home
      </Link>
    </div>
    );
};

export default ErrorPage;