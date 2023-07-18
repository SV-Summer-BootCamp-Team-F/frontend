import React from "react";

interface UserProfileProps {
  name: string;
  email: string;
  phoneNumber: string;
  passwd: string;
}

const UserProfile: React.FC<UserProfileProps> = ({ name, email, phoneNumber, passwd }) => {
  return (
    <div className="mt-20 mb-12 flex bg-white rounded-lg shadow-md px-28 py-16">
      <img
        className="w-60 h-60 rounded-full mr-12 self-center"
        src="https://i.pinimg.com/736x/77/c3/ba/77c3ba3d5cb9cbcc9734269054a5d57e.jpg"
        alt="Profile picture"
      />
      <div className="ml-20">
        <h2 className="text-8xl font-semibold mt-3">{name}</h2>
        {/* <p className=" text-gray-600 mt-1">Frontend Engineer</p> */}
        <div>
          <h5 className=" text-gray-600 mt-4 text-xl">Email: {email}</h5>
          <h5 className=" text-gray-600 mt-4 text-xl">Phone: {phoneNumber}</h5>
          <h5 className=" text-gray-600 mt-4 mb-16 text-xl">Passwd: {passwd}</h5>
        </div>
        <button
          type="button"
          className="h-16 w-full text-black bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-4xl px-15 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        >
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
