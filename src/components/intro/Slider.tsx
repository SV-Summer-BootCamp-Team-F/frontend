import '../../css/Slider.css';

const Profile = () => {
  return (
    <div>
     <div className="flex min-h-screen items-center justify-center bg-black font-bolder text-white">
      <div className="text-center space-y-12">
        <h1 className="text-center font-serif font-bold">
          Services offered
          <div className="relative inline-grid grid-cols-1 grid-rows-1 gap-12 overflow-hidden">
            <h1 className="animate-word col-span-full row-span-full">Mac</h1>
            <h1 className="animate-word-delay-1 col-span-full row-span-full">Window</h1>
            <h1 className="animate-word-delay-2 col-span-full row-span-full">IOS</h1>
            <h1 className="animate-word-delay-3 col-span-full row-span-full">Android</h1>
            <h1 className="animate-word-delay-4 col-span-full row-span-full">Firefox</h1>
          </div>
        </h1>
        <h3 className="text-white font-extralight" >
          Our service is Everywhere, Enjoy us
        </h3>
      </div>
    </div>
  </div>
  );
};

export default Profile;
