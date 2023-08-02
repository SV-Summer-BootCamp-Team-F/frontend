

const Modal: React.FC = () => {


return (
    <div className="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50 py-10">
      <div className="max-h-full w-full max-w-xl overflow-y-auto sm:rounded-2xl bg-white">
        <div className="w-full">
          <div className="m-8 my-20 max-w-[400px] mx-auto">
            <div className="mb-8">
              <h1 className="mb-8 text-3xl font-extrabold">명함 정보</h1>
              <h4 className="text-3xl">Get the most out of Twitter by staying up to date with what's happening.</h4>
              <h4 className="mb-4 text-3xl">Turn on notifications</h4>
              <h4 className="text-3xl">Get the most out of Twitter by staying up to date with what's happening.</h4>
            </div>
            <div className="space-y-4">
              <button className="p-2 bg-black rounded-full text-white w-full font-semibold">닫기</button>
            </div>
          </div>
        </div>
      </div>
    </div>  
 );
}


export default Modal;