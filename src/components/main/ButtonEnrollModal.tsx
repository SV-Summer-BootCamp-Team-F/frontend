import React, { useEffect } from "react";
import { Link } from "react-router-dom";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  // Add an event listener to the document to handle clicks outside the modal
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (isOpen && event.target instanceof Element) {
        // Check if the click occurred outside the modal (not within its content)
        const modalContent = document.querySelector(".modal-content");
        if (modalContent && !modalContent.contains(event.target)) {
          onClose();
        }
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen, onClose]);

  return (
    <>
      {isOpen && (
        <div
          tabIndex={-1}
          aria-hidden="true"
          className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-gray-700 bg-opacity-60 z-50"
        >
          <div className="bg-white p-10 rounded-3xl relative modal-content" style={{ height: "186px" ,width:"320px"  }}>

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
                className="bg-gray-600 text-white font-semibold px-4 py-2 rounded-md whitespace-nowrap"
              >
                상대 명함
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
