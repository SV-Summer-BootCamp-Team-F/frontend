import React from "react";
import { Link } from "react-router-dom";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <div
          tabIndex={-1}
          aria-hidden="true"
          className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-gray-700 bg-opacity-60 z-50"
        >
          <div className="bg-white p-10 rounded-md relative" style={{ height: "185px" }}>
            {/* Modal close button */}
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 bg-transparent"
              onClick={onClose}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4" // Adjust the size here, for example: h-4 w-4
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <h2 className="font-bold text-center text-[27px] mt-2 mb-4">
              명함 <span className="plus">등록</span>
            </h2>

            {/* enroll, newenroll 링크 버튼 */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              <Link
                to="/enroll"
                className="flex items-center justify-center bg-rememberBlue hover:bg-rememberBlueHover text-white font-semibold px-4 py-2 rounded-md whitespace-nowrap"
              >
                내 명함
              </Link>
              <Link
                to="/newenroll"
                className="bg-gray-600  text-white font-semibold px-4 py-2 rounded-md whitespace-nowrap"
              >
                친구 명함
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
