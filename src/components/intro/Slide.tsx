import { useEffect } from 'react';

const Slide = () => {
  useEffect(() => {
    const slider = document.querySelector<HTMLDivElement>('#slider');
    if (slider) {
      setTimeout(function moveSlide() {
        const max = slider.scrollWidth - slider.clientWidth;
        const left = slider.clientWidth;

        if (max === slider.scrollLeft) {
          slider.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          slider.scrollBy({ left, behavior: 'smooth' });
        }

        setTimeout(moveSlide, 2000);
      }, 2000);
    }
  }, []);

  return (
    <div>
      <div className="h-screen w-full overflow-hidden flex flex-nowrap text-center" id="slider">
        <div className="bg-navy-600 text-black space-y-4 flex-none w-full flex flex-col items-center justify-center">
          <h2 className="text-5xl max-w-md font-bold">What is remember plus+ ?</h2>
          <p className="text-2xl max-w-md text-white">쌓여있는 명함 어떻게 관리 할 수 있을까?</p>
        </div>
        <div className="bg-navy-400 text-black space-y-4 flex-none w-full flex flex-col items-center justify-center">
          <h2 className="text-8xl max-w-md font-bold">Tailwind CSS works by scanning all of your HTML</h2>
          <p className="text-2xl max-w-md text-white">It's fast, flexible, and reliable — with zero-runtime.</p>
        </div>
        <div className="bg-navy-600 text-black space-y-4 flex-none w-full flex flex-col items-center justify-center">
          <h2 className="text-7xl max-w-md font-bold">React, Vue, and HTML</h2>
          <p className="text-2xl max-w-md text-white">Accessible, interactive examples for React and Vue powered by Headless UI, plus vanilla HTML if you’d rather write any necessary JS yourself.</p>
        </div>
      </div>
    </div>
  );
};

export default Slide;
