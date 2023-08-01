import axios from "axios";
import { useEffect } from "react";

const TestPage = () => {
  // return tailwindcss example component here

  useEffect(() => {
    const user_uuid = localStorage.getItem("user_uuid");
    axios
      .get(`http://127.0.0.1:8000/api/v1/relations/all/${user_uuid}/`)
      .then((response) => {
        // 로그인 성공 시 처리
        console.log(response.data.message);
        console.log(response.data.result);
        const relations = response.data.result;
        console.log(relations[0]);
        console.log(relations[0].user_uid);
        console.log(relations[0].user_photo);
      })
      .catch((error) => {
        // 로그인 실패 시 처리
        console.error("유저 정보 불러오기 실패", error);
        // 예: 에러 메시지 표시 등
      });
  }, []);
  return (
    <>
      {/* <section className="bg-white pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]">
    <div className="container">
     <div
      className={`flex flex-wrap items-center justify-between rounded-lg border border-[#F4F7FF] bg-[#F4F7FF] py-8 px-6 xs:px-10 md:px-8 lg:px-10`}
     >
      <div className="w-full md:w-7/12 lg:w-2/3">
       <div className="mb-6 md:mb-0">
        <h4 className="mb-1 text-xl font-bold text-black xs:text-2xl md:text-xl lg:text-2xl">
         We use cookies
        </h4>
        <p className="text-base font-medium text-body-color">
         Please, accept these sweeties to continue enjoying our site!
        </p>
       </div>
      </div>
      <div className="w-full md:w-5/12 lg:w-1/3">
       <div className="flex items-center space-x-3 md:justify-end">
        <button className="inline-flex items-center justify-center rounded-md bg-rememberBlue py-[10px] px-8 text-center text-base font-semibold text-white hover:bg-opacity-90">
         Accept
        </button>
        <button className="inline-flex items-center justify-center rounded-md bg-white py-[10px] px-8 text-center text-base font-semibold text-body-color shadow-card hover:bg-primary hover:text-white">
         Close
        </button>
       </div>
      </div>
     </div>
    </div>
   </section> */}
    </>
  );
};
export default TestPage;
