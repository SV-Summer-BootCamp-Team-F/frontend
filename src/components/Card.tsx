import React, { useState, useEffect } from 'react';
import '../css/Card.css';

const Card: React.FC = () => {
  const [isHidden, setIsHidden] = useState(true);

  useEffect(() => {
    setIsHidden(false);
  }, []);

  const cardClassName = isHidden ? 'hidden' : 'fade-in-animation';

  return (
    <div className="h-screen w-full bg-white-00 flex justify-center items-center flex-col p-2">
      <div
        className={`shadow-lg shadow-purple-200 p-4 w-full md:w-96 h-52 rounded bg-gradient-to-bl from-blue-300 to-blue-900 flex flex-col justify-center items-center mt-4 max-w-[24rem] ${cardClassName}`}
      >
        <img className="w-20 h-20 object-cover rounded-full mb-2" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt="logo" />
        <p className="text-gray-100 font-semibold">Angela</p>
      </div>
      <div
        className={`text-gray-100 shadow-lg shadow-gray-300 w-full md:w-96 h-52 bg-gradient-to-br from-gray-800 to-gray-400 p-4 rounded relative max-w-[34rem] ${cardClassName}`}
      >
        <p className="font-bold">Angela</p>
        <p className="my-1 text-sm">
          Frontend, Backend &amp; <br />
          Devops Engineer.
        </p>
        <p className="text-sm">xxxxxxxx@xxxxx.com</p>
        <span className="text-lg font-extrabold absolute right-4 bottom-4">Remember Plus+</span>
      </div>
    </div>
  );
};

export default Card;
