const Slide = () => {
  return (
    <div>
      <div className="slide-container relative group w-130 h-full overflow-hidden bg-black m-auto mt-46">
        <img className="object-cover w-full h-full transform duration-700 backdrop-opacity-100" src="https://uk.fi-group.com/wp-content/uploads/sites/7/2022/04/FI-Connect-1920x700.jpg" />
        <div className="absolute w-full h-full shadow-5xl opacity-40 transform duration-200 inset-y-full group-hover:-inset-y-0"></div>
        <div className="absolute bg-gradient-to-t from-black w-full h-full transform duration-500 inset-y-3/4 group-hover:-inset-y-0 flex flex-col justify-center items-center"> 
          <h1 className="font-mono font-extrabold  text-center shadow-4xl text-white mt-10">명함을 등록하고 관계있는 사람들을 한눈에 확인해보세요</h1>
          <h3 className="font-mono text-center w-4/5 text-white text-4xl mt-5">Collaborative effort of a group to achieve a common goal the most effective and efficient way!</h3>
          <button className="bg-white text-black font-bold rounded-lg h-10 w-48 mt-4">Information</button> 
        </div>
      </div>
    </div>
  );
};

export default Slide;
