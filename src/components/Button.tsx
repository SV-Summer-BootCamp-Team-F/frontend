import React from 'react';

const Button: React.FC = () => {
  return (
    <main className="grid min-w-screen w-12 place-items-center bg-white">
      <button className="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow">
        <div className="absolute inset-0 w-3 bg-blue-400 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
        <span className="relative text-black group-hover:text-white">Start</span>
      </button>
    </main>
  );
};

export default Button;
