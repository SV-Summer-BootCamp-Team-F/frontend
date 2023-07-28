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

const user_uuid = localStorage.getItem("user_uuid");

const UserProfile: React.FC<UserPropsType> = ({ name, email, phoneNumber, passwd, photo }) => {
  // State to store updated user data
  const [updatedName, setUpdatedName] = useState(name);
  const [updatedEmail, setUpdatedEmail] = useState(email);
  const [updatedPassword, setUpdatedPassword] = useState(passwd);
  const [updatedPhoto, setUpdatedPhoto] = useState(
    "https://cdn-icons-png.flaticon.com/256/6676/6676023.png"
  );

  useEffect(() => {
    setUpdatedName(name);
    setUpdatedEmail(email);
    setUpdatedPassword(passwd);
    setUpdatedPhoto("https://cdn-icons-png.flaticon.com/256/6676/6676023.png");
  }, [name, email, passwd, photo]);

  const handleSaveChanges = async (updatedUserData: {
    user_name: string;
    user_email: string;
    password: string;
  }) => {
    try {
      // Send the PUT request to the API endpoint with the updated data
      const response = await axios.put(
        `http://127.0.0.1:8000//api/v1/users/update/${user_uuid}/`,
        updatedUserData
      );

      if (response.status === 202) {
        // Update the state with the new data
        setUpdatedName(updatedUserData.user_name);
        setUpdatedEmail(updatedUserData.user_email);
        setUpdatedPassword(updatedUserData.password);
        console.log("유저 정보 수정 성공!", updatedUserData);
      }
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  const handlePhotoSaveChanges = async (updatedUserData: { user_id: number; photo: string }) => {
    try {
      // Send the PUT request to the API endpoint with the updated data
      const response = await axios.put("/api/v1/cards/update/", updatedUserData);

      if (response.status === 202) {
        setUpdatedPhoto(updatedUserData.photo);
      }
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <div className="w-[270px] max-w-lg mt-10 mb-[40px] bg-white rounded-lg shadow-md p-12 box-border">
      <div className="relative">
        <img
          className="w-[170px] h-[170px] rounded-full mx-auto mb-12 object-cover"
          src={updatedPhoto}
          alt="Profile picture"
        />
        <UserPhotoUpdateModal onSaveChanges={handlePhotoSaveChanges} updatedPhoto={updatedPhoto} />
      </div>
      <p className="text-center text-[28px] font-semibold">{updatedName}</p>
      <div className="flex flex-col items-center w-full">
        <div className="mb-[14px]">
          <p className="text-[14px] text-gray-500">{updatedEmail}</p>
        </div>
        <UserInfoUpdateModal onSaveChanges={handleSaveChanges} />
      </div>
    </div>
  );
};

export default UserProfile;
