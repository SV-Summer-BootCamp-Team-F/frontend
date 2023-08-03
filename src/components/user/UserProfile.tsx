import axios from "axios";
import UserInfoUpdateModal from "./UserInfoUpdateModal";
import UserPhotoUpdateModal from "./UserPhotoUpdateModal";
import { UserType } from "../../pages/User/UserPage";
export type UserPropsType = {
  userData: UserType;
  setUserData: React.Dispatch<React.SetStateAction<UserType>>;
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
const UserProfile: React.FC<UserPropsType> = ({ userData, setUserData }) => {
  // State to store updated user data

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
        setUserData((prev) => {
          return { ...prev, ...updatedUserData };
        });
        console.log("유저 정보 수정 성공!", updatedUserData);
      }
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };
  const handlePhotoSaveChanges = async (user_photo: string) => {
    setUserData((prev) => {
      return { ...prev, user_photo };
    });
  };
  return (
    <div className="w-[270px] max-w-lg mt-12 mb-[40px] bg-white rounded-lg shadow-md p-12 box-border">
      <div className="relative">
        <img
          className="w-[170px] h-[170px] rounded-full mx-auto mb-12 object-cover"
          src={userData.user_photo}
          alt="Profile picture"
        />
        <UserPhotoUpdateModal onSaveChanges={handlePhotoSaveChanges} />
      </div>
      <p className="text-center text-[28px]">{userData.user_name}</p>
      <div className="flex flex-col items-center w-full">
        <div className="mb-[14px]">
          <p className="text-[14px] text-gray-500">{userData.user_email}</p>
        </div>
        <UserInfoUpdateModal onSaveChanges={handleSaveChanges} />
      </div>
    </div>
  );
};
export default UserProfile;
