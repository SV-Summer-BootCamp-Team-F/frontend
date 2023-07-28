import React, { useEffect, useState } from "react";
import CardInfoUpdateModal from "./CardInfoUpdateModal";
import CardPhotoUpdateModal from "./CardPhotoUpdateModal";
import axios from "axios";
import { FaCamera } from "react-icons/fa";
export type CardPropsType = {
  name: string;
  email: string;
  phoneNumber: string;
  introduction: string;
  photo: string;
};
export type CardUpdatePropsType = {
  user_id: number;
  card_name: string;
  card_email: string;
  card_intro: string;
  card_photo: string;
  update_at: string;
};
export type CardPhotoUpdatePropsType = {
  user_id: number;
  card_photo: string;
};
const BUTTON_CLASSNAME =
  "h-[80px] w-[180px] text-[14px] text-black bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-xl text-4xl dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700";
const CardInfo: React.FC<CardPropsType> = ({ name, email, phoneNumber, introduction, photo }) => {
  // State to store updated user data
  const [updatedName, setUpdatedName] = useState(name);
  const [updatedEmail, setUpdatedEmail] = useState(email);
  const [updatedIntro, setUpdatedIntro] = useState(introduction);
  const [updatedPhoto, setUpdatedPhoto] = useState("https://i.ibb.co/Vg8KsjJ/image.png");
  const userId = 1;
  useEffect(() => {
    setUpdatedName(name);
    setUpdatedEmail(email);
    setUpdatedIntro(introduction);
    setUpdatedPhoto("https://i.ibb.co/Vg8KsjJ/image.png");
  }, [name, email, introduction, photo]);
  const handleSaveChanges = async (updatedCardData: {
    name: string;
    email: string;
    introduction: string;
  }) => {
    try {
      // Send the PUT request to the API endpoint with the updated data
      const response = await axios.put("/api/v1/cards/update/", {
        user_id: userId,
        ...updatedCardData,
      });

      if (response.status === 202) {
        // Update the state with the new data
        setUpdatedName(updatedCardData.name);
        setUpdatedEmail(updatedCardData.email);
        setUpdatedIntro(updatedCardData.introduction);
      }
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };
  const handlePhotoSaveChanges = async (updatedCardData: { user_id: number; photo: string }) => {
    try {
      // Send the PUT request to the API endpoint with the updated data
      updatedCardData.user_id = userId;
      const response = await axios.put("/api/v1/cards/update/", updatedCardData);
      if (response.status === 202) {
        setUpdatedPhoto(updatedCardData.photo);
      }
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };
  return (
    <div className="rounded-lg shadow-md flex flex-col justify-around items-center w-[600px] h-[600px]">
      <div className="relative">
        <img className="w-[500px] h-[300px] object-cover" src={updatedPhoto} alt="Card Photo" />
        {/* onSaveChanges 함수를 handlePhotoSaveChanges로 변경 */}
        <CardPhotoUpdateModal onSaveChanges={handlePhotoSaveChanges} updatedPhoto={updatedPhoto} />
      </div>
      <div className="flex justify-around items-center w-full">
        <div>
          <h2 className="text-[26px] mb-[14px] font-semibold">{updatedName}</h2>
          <p className=" text-gray-600 mt-8 text-[13px] underline underline-offset-[15px] decoration-gray-300">
            Email: {updatedEmail}
          </p>
          <p className=" text-gray-600 mt-8 text-[13px] underline underline-offset-[15px] decoration-gray-300">
            Phone: {phoneNumber}
          </p>
          <p className=" text-gray-600 mt-8 text-[13px] underline underline-offset-[15px] decoration-gray-300">
            Introduction: {updatedIntro}
          </p>
        </div>
        <CardInfoUpdateModal onSaveChanges={handleSaveChanges} updatedPhoto={""} />
      </div>
    </div>
  );
};
export default CardInfo;
