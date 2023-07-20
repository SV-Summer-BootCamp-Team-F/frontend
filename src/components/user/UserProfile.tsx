import React from "react";
interface UserProfileProps {
  name: string;
  email: string;
  phoneNumber: string;
  passwd: string;
}

const UserProfile: React.FC<UserProfileProps> = ({ name, email, phoneNumber, passwd }) => {
  return (
    <div className="w-[290px] max-w-lg my-10 bg-white rounded-lg shadow-md p-12 box-border">
      <img
        className="w-[170px] h-[170px] rounded-full mx-auto mb-16"
        src="https://i.pinimg.com/736x/77/c3/ba/77c3ba3d5cb9cbcc9734269054a5d57e.jpg"
        alt="Profile picture"
      />
      <h2 className="text-center text-[28px] font-semibold mt-3">{name}</h2>
      <div className="flex flex-col items-center mt-5">
        <div>
          <p className="text-[14px] mt-4">Email: {email}</p>
          <p className="text-[14px] mt-[24px]">Phone: {phoneNumber}</p>
          <p className="text-[14px] mt-[24px]">Passwd: {passwd}</p>
        </div>
        <button
          type="button"
          className="mt-12 w-[200px] h-[55px] text-[13px] text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-[5px] mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
        >
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
