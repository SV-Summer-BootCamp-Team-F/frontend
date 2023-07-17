import React, { useEffect, useRef } from 'react';

const Card: React.FC = () => {
  const cardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (cardRef.current) {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        const rotation = scrollTop / -37; // Adjust the rotation speed here
        cardRef.current.style.transform = `rotate(${rotation}deg)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative mx-auto border-gray-00 dark:border-gray-600 bg-gray-800 border-[14px] rounded-[2.5rem] h-[900px] w-[500px] shadow-xl" ref={cardRef}>
      <div className="w-[148px] h-[18px] bg-gray-100 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
      <div className="h-[46px] w-[3px] bg-gray-400 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
      <div className="h-[46px] w-[3px] bg-gray-400 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
      <div className="h-[64px] w-[3px] bg-gray-400 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
      <div className="rounded-[2rem] overflow-hidden w-[472px] h-[872px] bg-gray-50 dark:bg-gray-800">
        <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-2-light.png" className="dark:hidden w-[472px] h-[572px]" alt="" />
        <img src="https://e0.pxfuel.com/wallpapers/817/898/desktop-wallpaper-general-portrait-display-earth-space-earth-illustration-earth-space-cool-portrait.jpg" className="hidden dark:block w-[472px] h-[872px]" alt="" />
      </div>
    </div>
  );
};

export default Card;
