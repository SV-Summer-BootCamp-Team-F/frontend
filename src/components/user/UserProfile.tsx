import axios from "axios";
import React, { useEffect, useState } from "react";
import UserInfoUpdateModal from "./UserInfoUpdateModal";
import { FaCamera } from "react-icons/fa";

export type UserPropsType = {
  name: string;
  email: string;
  phoneNumber: string;
  passwd: string;
  photo: string;
};

export type UserUpdatePropsType = {
  user_id: number;
  name: string;
  email: string;
  passwd: string;
  update_at: string;
};

const userId = 1;

const UserProfile: React.FC<UserPropsType> = ({ name, email, phoneNumber, passwd, photo }) => {
  // State to store updated user data
  const [updatedName, setUpdatedName] = useState(name);
  const [updatedEmail, setUpdatedEmail] = useState(email);
  const [updatedPassword, setUpdatedPassword] = useState(passwd);

  useEffect(() => {
    setUpdatedName(name);
    setUpdatedEmail(email);
    setUpdatedPassword(passwd);
  }, [name, email, passwd]);

  const handleSaveChanges = async (updatedUserData: {
    user_id: number;
    name: React.SetStateAction<string>;
    email: React.SetStateAction<string>;
    password: React.SetStateAction<string>;
    update_at: string;
  }) => {
    try {
      // Send the PUT request to the API endpoint with the updated data
      updatedUserData.user_id = userId;
      updatedUserData.update_at = new Date().toISOString().slice(0, 10);
      const response = await axios.put("/api/v1/users/update/", updatedUserData);

      if (response.status === 202) {
        // Update the state with the new data
        setUpdatedName(updatedUserData.name);
        setUpdatedEmail(updatedUserData.email);
        setUpdatedPassword(updatedUserData.password);
      }
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <div className="w-[270px] max-w-lg mt-10 mb-[34px] bg-white rounded-lg shadow-md p-12 box-border">
      <div className="relative">
        <img
          className="w-[170px] h-[170px] rounded-full mx-auto mb-12"
          src={photo}
          alt="Profile picture"
        />
        <button
          className="absolute bottom-2.5 right-2 z-10 p-2 bg-black/50 rounded-full focus:outline-none shadow-md"
          onClick={() => console.log("Button clicked")} // Replace this with your desired action
        >
          <FaCamera size={18} color={"white"} />
        </button>
      </div>
      <p className="text-center text-[28px] font-semibold mb-8">{updatedName}</p>
      <div className="flex flex-col items-center w-full">
        <div>
          <p className="text-[14px]">Email: {updatedEmail}</p>
          <p className="text-[14px] mt-[24px]">Phone: {phoneNumber}</p>
          <p className="text-[14px] mt-[24px]">Passwd: {updatedPassword}</p>
        </div>

        <UserInfoUpdateModal onSaveChanges={handleSaveChanges} />
      </div>
    </div>
  );
};

export default UserProfile;
