import React from "react";

export type CardInfoUpdateModalPropsType = {
  onSaveChanges: (data: {
    card_name: string;
    card_email: string;
    card_intro: string;
  }) => Promise<void>;
  updatedPhoto: string;
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

export default function CardInfoUpdateModal({ onSaveChanges }: CardInfoUpdateModalPropsType) {
  const [showModal, setShowModal] = React.useState(false);
  const [card_name, setName] = React.useState("");
  const [card_email, setEmail] = React.useState("");
  const [card_intro, setIntro] = React.useState("");

  const handleSaveChanges = () => {
    // Add your logic here to save the changes (e.g., send data to the server)
    onSaveChanges({ card_name, card_email, card_intro });
    setShowModal(false);
  };

  const handleEditProfile = () => {
    // Add your logic here to handle the "Edit Profile" button click
    setShowModal(true);
  };

  return (
    <>
      <button
        type="button"
        className="mt-8 w-[200px] h-[55px] text-[13px] text-white bg-rememberBlue hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-[10px] dark:bg-rememberBlue dark:hover:bg-rememberBlueHover dark:focus:ring-gray-700"
        onClick={handleEditProfile}
      >
        Edit Card Info
      </button>

      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-[450px] my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full h-full justify-center bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="w-full h-28 flex items-start justify-between border-b border-solid border-slate-200 rounded-t">
                  <div className="text-[28px] font-semibold flex items-center w-full h-full px-[45px] py-[20px]">
                    Edit Card Info
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
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                      Name:
                    </label>
                    <input
                      className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white"
                      id="name"
                      type="text"
                      value={card_name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                      Email:
                    </label>
                    <input
                      className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white"
                      id="email"
                      type="email"
                      value={card_email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="password"
                    >
                      Introduction:
                    </label>
                    <input
                      className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white"
                      id="introduction"
                      type="introduction"
                      value={card_intro}
                      onChange={(e) => setIntro(e.target.value)}
                    />
                  </div>
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
