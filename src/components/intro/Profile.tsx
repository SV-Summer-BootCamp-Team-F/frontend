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
        <style>{``}</style>
      </head>
      <div className="flex flex-col justify-center items-center h-[90vh] animate-slide-in">
        <div
          className={`relative flex flex-col items-center rounded-[20px] w-[450px] mx-auto p-4 bg-stone-100 bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-900 dark:text-white dark:!shadow-300 animate-slide-in ${
            isImageClicked ? 'image-clicked' : ''
          }`}
        >
          <div
            className={`relative flex h-32 w-full justify-center rounded-xl bg-cover animate-slide-in ${
              isImageClicked ? 'image-clicked' : ''
            }`}
            onClick={handleClick}
          >
            <img
              src="https://img.freepik.com/premium-photo/light-blue-and-dark-blue-gradient-background_33736-4763.jpg"
              className="absolute flex h-32 w-full justify-center rounded-xl bg-cover animate-slide-in"
            />
            <div
              className={`absolute -bottom-12 flex h-[87px] w-[87px] items-center justify-center rounded-full border-3px] border-white bg-pink-400 dark:!border-navy-700 animate-slide-in-delayed ${
                isImageClicked ? 'image-clicked' : ''
              }`}
            >
              <img
                className="h-full w-full rounded-full"
                src="https://w7.pngwing.com/pngs/618/481/png-transparent-iron-man-spider-man-ultron-iron-man-iron-man-spider-man-ultron.png"
                alt=""
              />
            </div>
          </div>
          <div className="mt-16 flex flex-col items-center animate-slide-in">
            <h4 className="text-xl font-bold text-navy-700 dark:text-white">
              Tony
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
                LA,USA
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
          <div className="mt-20 mx-auto w-max animate-slide-in">
        </div>
        </div>
        <p className="font-bold text-navy-700 text-4xl">
            나의 명함을 등록하고 관계도를 확인해보세요!
          </p>
      </div>
    </div>
  );
};

export default Profile;
