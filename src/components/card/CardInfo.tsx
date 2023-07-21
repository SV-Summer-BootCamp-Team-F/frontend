import React from "react";

interface CardInfoProps {
  name: string;
  email: string;
  phoneNumber: string;
  introduction: string;
}

const BUTTON_CLASSNAME =
  "h-[80px] w-[180px] text-[14px] text-black bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-xl text-4xl dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700";

const CardInfo: React.FC<CardInfoProps> = ({ name, email, phoneNumber, introduction }) => {
  return (
    <div className="rounded-lg shadow-md flex justify-center items-center px-[60px] py-[30px] w-[500px] h-[300px]">
      <div className="flex justify-around items-center w-full">
        <div className="flex flex-col w-[400px]">
          <h2 className="text-[30px] mb-[14px] font-semibold">{name}</h2>
          <div>
            <p className=" text-gray-600 mt-8 text-[14px] underline underline-offset-[15px] decoration-gray-300">
              Email: {email}
            </p>
            <p className=" text-gray-600 mt-8 text-[14px] underline underline-offset-[15px] decoration-gray-300">
              Phone: {phoneNumber}
            </p>
            <p className=" text-gray-600 mt-8 text-[14px] underline underline-offset-[15px] decoration-gray-300">
              Introduction: {introduction}
            </p>
          </div>
        </div>
        <button type="button" className={BUTTON_CLASSNAME}>
          Edit Card Info
        </button>
      </div>
    </div>
  );
};

export default CardInfo;
