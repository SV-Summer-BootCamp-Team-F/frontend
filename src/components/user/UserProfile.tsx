import axios from "axios";
import React, { useEffect, useState } from "react";
import UserInfoUpdateModal from "./UserInfoUpdateModal";
import { FaCamera } from "react-icons/fa";
import UserPhotoUpdateModal from "./UserPhotoUpdateModal";

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

export type UserPhotoUpdatePropsType = {
  user_id: number;
  photo: string;
};

const userId = 1;

const UserProfile: React.FC<UserPropsType> = ({ name, email, phoneNumber, passwd, photo }) => {
  // State to store updated user data
  const [updatedName, setUpdatedName] = useState(name);
  const [updatedEmail, setUpdatedEmail] = useState(email);
  const [updatedPassword, setUpdatedPassword] = useState(passwd);
  const [updatedPhoto, setUpdatedPhoto] = useState(photo);

  useEffect(() => {
    setUpdatedName(name);
    setUpdatedEmail(email);
    setUpdatedPassword(passwd);
    setUpdatedPhoto(photo);
  }, [name, email, passwd, photo]);

  const handleSaveChanges = async (updatedUserData: UserUpdatePropsType) => {
    try {
      // Send the PUT request to the API endpoint with the updated data
      updatedUserData.user_id = userId;
      updatedUserData.update_at = new Date().toISOString().slice(0, 10);
      const response = await axios.put("/api/v1/users/update/", updatedUserData);

      if (response.status === 202) {
        // Update the state with the new data
        setUpdatedName(updatedUserData.name);
        setUpdatedEmail(updatedUserData.email);
        setUpdatedPassword(updatedUserData.passwd);
      }
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  const handlePhotoSaveChanges = async (updatedUserData: {
    user_id: number;
    photo: React.SetStateAction<string>;
  }) => {
    try {
      // Send the PUT request to the API endpoint with the updated data
      updatedUserData.user_id = userId;
      const response = await axios.put("/api/v1/cards/update/", updatedUserData);

      if (response.status === 202) {
        setUpdatedPhoto(updatedUserData.photo);
      }
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <div className="w-[270px] max-w-lg mt-10 mb-[34px] bg-white rounded-lg shadow-md p-12 box-border">
      <div className="relative">
        <img
          className="w-[170px] h-[170px] rounded-full mx-auto mb-12 object-cover"
          src={updatedPhoto}
          alt="Profile picture"
        />
        <UserPhotoUpdateModal onSaveChanges={handlePhotoSaveChanges} updatedPhoto={updatedPhoto} />
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
