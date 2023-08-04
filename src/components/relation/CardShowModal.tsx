import React from "react";
type CardShowModalProps = {
  card_photo: string;
};
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
const CardShowModal: React.FC<CardShowModalProps> = ({ card_photo }) => {
  const [showModal, setShowModal] = React.useState(false);

  const handleEditProfile = () => {
    // Add your logic here to handle the "Edit Profile" button click
    setShowModal(true);
  };
  return (
    <>
      <button
        type="button"
        className="mt-3 w-[200px] h-[55px] text-[13px] text-white bg-rememberBlue hover:bg-rememberBlueHover focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-[10px] dark:bg-rememberBlue dark:hover:bg-rememberBlueHover dark:focus:ring-gray-700"
        onClick={handleEditProfile}
      >
        명함 보기
      </button>

      {showModal ? (
        <>
          <div className="h-screen w-screen justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="flex justify-center items-center w-[800px] my-6 mx-auto max-w-3xl">
              {/*body*/}
              <div className="relative flex-auto">
                <img className="object-contain mb-[135px]" src={card_photo} alt="Card Photo" />
                <button
                  className="p-2 absolute top-0 right-0 bg-transparent border-0 text-black text-2xl leading-none font-semibold outline-none focus:outline-none transition-colors duration-300 hover:text-white hover:bg-red-500 rounded-full"
                  onClick={() => setShowModal(false)}
                >
                  <CloseIcon />
                </button>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default CardShowModal;
