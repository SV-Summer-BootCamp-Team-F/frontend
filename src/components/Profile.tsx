import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();
  const [isImageClicked, setIsImageClicked] = useState(false);

  const handleClick = () => {
    setIsImageClicked(true);
    setTimeout(() => {
      navigate('/login');
    }, 1000);
  };

  return (
    <div>
      <head>
        <link
          rel="stylesheet"
          href="https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/css/main.ad49aa9b.css"
        />
        <style>
          {`
          
          `}
        </style>
      </head>
      <div>
      <div className="flex flex-col justify-center items-center h-[90vh] animate-slide-in">
          <div className={`relative flex flex-col items-center rounded-[20px] w-[450px] mx-auto p-4 bg-stone-100 bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-900 dark:text-white dark:!shadow-300 animate-slide-in ${isImageClicked ? 'image-clicked' : ''}`}>
            <div className={`relative flex h-32 w-full justify-center rounded-xl bg-cover animate-slide-in ${isImageClicked ? 'image-clicked' : ''}`} onClick={handleClick}>
              <img
                src="https://us.123rf.com/450wm/turr17/turr171501/turr17150100429/35619595-%EA%B2%80%EC%A0%95%EA%B3%BC-%ED%9A%8C%EC%83%89-%EC%82%BC%EA%B0%81%ED%98%95-%EC%9A%94%EC%86%8C%EC%99%80-%EA%B8%B0%ED%95%98%ED%95%99%EC%A0%81-%EB%B2%A1%ED%84%B0-%ED%8C%A8%ED%84%B4-%EB%B0%94%ED%83%95-%ED%99%94%EB%A9%B4-%EB%B0%8F-%EB%B0%B0%EA%B2%BD-%EC%9B%90%ED%99%9C%ED%95%9C-%EB%8C%80%EA%B0%81%EC%84%A0-%EC%B6%94%EC%83%81.jpg"
                className="absolute flex h-32 w-full justify-center rounded-xl bg-cover animate-slide-in"
              />
              <div className={`absolute -bottom-12 flex h-[87px] w-[87px] items-center justify-center rounded-full border-3px] border-white bg-pink-400 dark:!border-navy-700 animate-slide-in-delayed ${isImageClicked ? 'image-clicked' : ''}`}>
                <img
                  className="h-full w-full rounded-full"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSSzZPa1_h74YThxRIN7EtyUWSWnVFdVCaCUAjf1m6JiDvEYdNUOrTUWC1QkZL59Qd5QY&usqp=CAU"
                  alt=""
                />
              </div>
            </div>
            <div className="mt-16 flex flex-col items-center animate-slide-in">
              <h4 className="text-xl font-bold text-navy-700 dark:text-white">
                James
              </h4>
              <p className="text-base font-normal text-red-800 animate-slide-in">
                Man
              </p>
            </div>
            <div className="mt-6 mb-3 flex gap-14 md:!gap-14 animate-slide-in">
              <div className="flex flex-col items-center justify-center animate-slide-in">
                <p className="text-1xl font-bold text-navy-700 dark:text-white">
                  45
                </p>
                <p className="text-sm font-normal text-gray-800 animate-slide-in">
                  Age
                </p>
              </div>
              <div className="flex flex-col items-center justify-center animate-slide-in">
                <p className="text-1xl font-bold text-navy-700 dark:text-white">
                  London,UK
                </p>
                <p className="text-sm font-normal text-gray-800 animate-slide-in">
                  Live
                </p>
              </div>
              <div className="flex flex-col items-center justify-center animate-slide-in">
                <p className="text-1xl font-bold text-navy-700 dark:text-white">
                  Movie Actor 
                </p>
                <p className="text-sm font-normal text-gray-800 animate-slide-in">
                  inf
                </p>
              </div>
            </div>
          </div>
          <div className="mt-20 mx-auto w-max animate-slide-in">
            <p className="font-bold text-navy-700 text-2xl">
              나의 명함{' '}
              <a
                href="https://horizon-ui.com?ref=tailwindcomponents.com"
                target="_blank"
                className="text-sky-500 font-bold text-3xl"
              >
                등록하기
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
