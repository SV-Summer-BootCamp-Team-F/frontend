import React from "react";

const UserProfile = () => {
  return (
    <div className="max-w-lg mx-auto my-10 bg-white rounded-lg shadow-md p-5">
      <img
        className="w-32 h-32 rounded-full mx-auto"
        src="https://i.pinimg.com/736x/77/c3/ba/77c3ba3d5cb9cbcc9734269054a5d57e.jpg"
        alt="Profile picture"
      />
      <h2 className="text-center text-2xl font-semibold mt-3">Pochacco</h2>
      <p className="text-center text-gray-600 mt-1">Frontend Engineer</p>
      <div className="flex justify-center mt-5">
        <a href="#" className="text-blue-500 hover:text-blue-700 mx-3">
          Twitter
        </a>
        <a href="#" className="text-blue-500 hover:text-blue-700 mx-3">
          LinkedIn
        </a>
        <a href="#" className="text-blue-500 hover:text-blue-700 mx-3">
          GitHub
        </a>
      </div>
      <div>
        <p>Email: </p>
        <p>Phone: </p>
        <p>Passwd: </p>
      </div>
      <div className="mt-5">
        <h3 className="text-xl font-semibold">Bio</h3>
        <p className="text-gray-600 mt-2">
          John is a software engineer with over 10 years of experience in developing web and mobile
          applications. He is skilled in JavaScript, React, and Node.js.
        </p>
      </div>
    </div>
  );
};

export default UserProfile;
