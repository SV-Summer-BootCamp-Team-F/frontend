import '../../css/Slider.css';

const Profile = () => {
  return (
    <div>
     <div className="flex min-h-screen items-center justify-center bg-black font-bolder text-white">
      <div className="text-center space-y-12">
        <h1 className="text-center font-serif font-bold">
          Services offered
          <div className="relative inline-grid grid-cols-1 grid-rows-1 gap-12 overflow-hidden">
            <h1 className="animate-word col-span-full row-span-full">Flutter</h1>
            <h1 className="animate-word-delay-1 col-span-full row-span-full">Django</h1>
            <h1 className="animate-word-delay-2 col-span-full row-span-full">Website</h1>
            <h1 className="animate-word-delay-3 col-span-full row-span-full">VueJS</h1>
            <h1 className="animate-word-delay-4 col-span-full row-span-full">NextJS</h1>
          </div>
        </h1>
        <h4 className="text-white font-extralight" >
          Want to hire me for work ping me 
        </h4>
      </div>
    </div>
  </div>
  );
};

export default Profile;
