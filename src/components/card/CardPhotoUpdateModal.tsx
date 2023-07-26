import React from "react";
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

export default function CardPhotoUpdateModal({ onSaveChanges, updatedPhoto }) {
  const [showModal, setShowModal] = React.useState(false);
  const [selectedPhoto, setSelectedPhoto] = React.useState(null); // New state for the selected photo file

  const handleSaveChanges = () => {
    onSaveChanges({ photo: selectedPhoto || updatedPhoto }); // Pass the selected photo or the current photo to the onSaveChanges function
    setShowModal(false);
  };

  const handleEditProfile = () => {
    setShowModal(true);
  };

  // Function to handle the photo file selection
  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    setSelectedPhoto(file);

    // Optional: You can also show a preview of the selected photo
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        // Set the image preview URL
        setSelectedPhotoPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const [selectedPhotoPreview, setSelectedPhotoPreview] = React.useState(null);

  return (
    <>
      <button
        className="flex justify-center items-center w-[600px] h-[80px] absolute bottom-0 z-10 p-2.5 bg-black/30 focus:outline-none shadow-md"
        onClick={handleEditProfile} // Replace this with your desired action
      >
        <FaCamera size={45} color={"white"} />
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-[450px] my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full h-full justify-center bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="w-full h-28 flex items-start justify-between border-b border-solid border-slate-200 rounded-t">
                  <div className="text-[28px] font-semibold flex items-center w-full h-full px-[45px] py-[20px]">
                    Edit Profile
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
                      accept="image/*" // Only allow image files to be selected
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
