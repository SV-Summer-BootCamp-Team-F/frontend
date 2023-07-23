import axios from "axios";
import React, { useEffect, useState } from "react";
import UserInfoUpdateModal from "./UserInfoUpdateModal";

export type UserProfilePropsType = {
  name: string;
  email: string;
  phoneNumber: string;
  passwd: string;
  photo: string;
};

const userId = 1;

const UserProfile: React.FC<UserProfilePropsType> = ({
  name,
  email,
  phoneNumber,
  passwd,
  photo,
}) => {
  // State to store updated user data
  const [updatedName, setUpdatedName] = useState(name);
  const [updatedEmail, setUpdatedEmail] = useState(email);
  const [updatedPassword, setUpdatedPassword] = useState(passwd);

  useEffect(() => {
    setUpdatedName(name);
    setUpdatedEmail(email);
    setUpdatedPassword(passwd);
  }, [name, email, passwd]);

  const [isProfileUpdated, setIsProfileUpdated] = useState(false); // 상태 추가

  const handleEditProfile = async () => {
    if (isProfileUpdated) return; // 이미 프로필이 업데이트되었으면 함수 종료
    try {
      // Prepare the updated user data
      const updatedUserData: UserProfilePropsType = {
        name: "Updated Name",
        email: "updated@example.com",
        passwd: "updatedpassword",
        phoneNumber: "",
        photo: "",
      };

      // Send the PUT request to the API endpoint
      const response = await axios.put(`/api/v1/users/update/${userId}`, updatedUserData);

      if (response.status === 202) {
        setUpdatedName(updatedUserData.name);
        setUpdatedEmail(updatedUserData.email);
        setUpdatedPassword(updatedUserData.passwd);
        setIsProfileUpdated(true); // 프로필이 업데이트되었다고 상태 변경
      }
    } catch (error) {
      // Handle errors, e.g., display an error message
      console.error("Error updating profile:", error);
    }
  };

  return (
    <div className="w-[270px] max-w-lg my-10 bg-white rounded-lg shadow-md p-12 box-border">
      <img
        className="w-[170px] h-[170px] rounded-full mx-auto mb-12"
        src={photo}
        alt="Profile picture"
      />
      <p className="text-center text-[28px] font-semibold mb-8">{updatedName}</p>
      <div className="flex flex-col items-center w-full">
        <div>
          <p className="text-[14px]">Email: {updatedEmail}</p>
          <p className="text-[14px] mt-[24px]">Phone: {phoneNumber}</p>
          <p className="text-[14px] mt-[24px]">Passwd: {updatedPassword}</p>
        </div>
        <button
          type="button"
          className="mt-8 w-[200px] h-[55px] text-[13px] text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-[10px] dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          onClick={handleEditProfile}
        >
          Edit Profile
        </button>
        {/* <UserInfoUpdateModal /> */}
      </div>
    </div>
  );
};

export default UserProfile;
