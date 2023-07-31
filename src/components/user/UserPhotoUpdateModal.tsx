import React from "react";
import axios from "axios";
import { FaCamera } from "react-icons/fa";

// SVG icon for the close button
const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

type UserPhotoUpdateModalProps = {
  onSaveChanges: (updatedUserData: { photo: string }) => void;
  updatedPhoto: string;
};

export default function UserPhotoUpdateModal({
  onSaveChanges,
  updatedPhoto,
}: UserPhotoUpdateModalProps) {
  const [showModal, setShowModal] = React.useState(false);
  const [selectedPhoto, setSelectedPhoto] = React.useState<File | null>(null);
  const [selectedPhotoPreview, setSelectedPhotoPreview] = React.useState<string | null>(null);
  const user_uuid = localStorage.getItem("user_uuid");

  const handleSaveChanges = () => {
    if (selectedPhoto) {
      let formData = new FormData();
      formData.append("user_photo", selectedPhoto); // "photo"에서 "user_photo"로 변경

      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

      // Using axios API to send the form data to the server
      axios
        .put(`http://127.0.0.1:8000/api/v1/users/photo/${user_uuid}/`, formData, config)
        .then((response) => {
          console.log("Success:", response.data);
          onSaveChanges({ photo: response.data.photo_url }); // "user_photo"에서 "photo_url"로 변경
        })
        .catch((error) => console.error("Error:", error));
    }
    setShowModal(false);
  };

  const handleEditProfile = () => {
    setShowModal(true);
  };

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setSelectedPhoto(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string | null;
        setSelectedPhotoPreview(result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleResetPhoto = () => {
    setSelectedPhoto(null);
    setSelectedPhotoPreview(null);
  };
  return (
    <>
      <button
        className="absolute bottom-2.5 right-2 z-10 p-2 bg-black/50 rounded-full focus:outline-none shadow-md"
        onClick={handleEditProfile}
      >
        <FaCamera size={18} color={"white"} />
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-[450px] my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full h-full justify-center bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="w-full h-28 flex items-start justify-between border-b border-solid border-slate-200 rounded-t">
                  <div className="text-[28px] font-semibold flex items-center w-full h-full px-[45px] py-[20px]">
                    Profile Photo
                  </div>
                  <button
                    className="p-3 ml-auto bg-transparent border-0 text-black text-2xl leading-none font-semibold outline-none focus:outline-none transition-colors duration-300 hover:text-white hover:bg-red-500 rounded-full"
                    onClick={() => setShowModal(false)}
                  >
                    <CloseIcon />
                  </button>
                </div>
                {/*body*/}
                <div className="relative px-12 py-8 flex-auto">
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="photo">
                      Upload Photo:
                    </label>
                    <input
                      className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white"
                      id="photo"
                      type="file"
                      accept="image/*"
                      onChange={handlePhotoChange}
                    />
                  </div>
                  {selectedPhotoPreview && (
                    <div className="mb-4">
                      <img src={selectedPhotoPreview} alt="Selected Preview" className="w-full" />
                    </div>
                  )}
                </div>
                {/*footer*/}
                <div className="flex items-center justify-center p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="bg-rememberBlue text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={handleSaveChanges}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-60 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
