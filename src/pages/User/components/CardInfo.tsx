import React from "react";

interface CardInfoProps {
  name: string;
  email: string;
  phoneNumber: string;
  introduction: string;
}

const BUTTON_CLASSNAME =
  "h-16 w-full text-black bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-4xl px-15 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700";

const CardInfo: React.FC<CardInfoProps> = ({ name, email, phoneNumber, introduction }) => {
  return (
    <div className="bg-white rounded-lg shadow-md flex flex-col items-center px-24 py-20 mb-20">
      <div>
        <h2 className="text-8xl font-semibold mt-3">{name}</h2>
        <p className=" text-gray-600 mt-1">Frontend Engineer</p>
        <div>
          <h5 className=" text-gray-600 mt-4 text-xl">Email: {email}</h5>
          <h5 className=" text-gray-600 mt-4 text-xl">Phone: {phoneNumber}</h5>
          <h5 className=" text-gray-600 mt-4 mb-16 text-xl">Introduction: {introduction}</h5>
        </div>
        <button type="button" className={BUTTON_CLASSNAME}>
          Edit Card
        </button>
      </div>
    </div>
  );
};

export default CardInfo;
