import React from "react";
import { Link } from "react-router";


const Error = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4">

      {/* Error Code */}
      <h1 className="text-7xl md:text-9xl font-extrabold mb-4 animate-bounce">
        404
      </h1>

      {/* Message */}
      <h2 className="text-2xl md:text-3xl font-semibold mb-2">
        Oops! Page not found 😢
      </h2>

      <p className="mb-6 text-center max-w-md">
        The page you are looking for might have been removed or does not exist.
      </p>

      {/* Button */}
      {/* <Link
        to="/"
        className="bg-white text-purple-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition"
      >
        ⬅ Back to Home
      </Link> */}
      <Link to={'/'}>
      <button className="btn btn-ghost bg-gray-600">back home</button>
      </Link>

    </div>
  );
};

export default Error;