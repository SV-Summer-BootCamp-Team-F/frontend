import { useState } from "react";
import { Link } from "react-router-dom";

function NewEnrollPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [introduction, setIntroduction] = useState("");

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
  };

  const MAX_WIDTH = 500;
  const MAX_HEIGHT = 300;

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        const previewImage = document.getElementById("preview-image") as HTMLImageElement;
        if (previewImage && e.target && e.target.result) {
          const image = new Image();
          image.src = e.target.result as string;
          image.onload = () => {
            const canvas = document.createElement("canvas");
            let width = image.width;
            let height = image.height;

            // 비율 계산
            if (width > height && width > MAX_WIDTH) {
              height *= MAX_WIDTH / width;
              width = MAX_WIDTH;
            } else if (height > MAX_HEIGHT) {
              width *= MAX_HEIGHT / height;
              height = MAX_HEIGHT;
            }

            canvas.width = width;
            canvas.height = height;

            const ctx = canvas.getContext("2d");
            ctx?.drawImage(image, 0, 0, width, height);

            // 변경된 크기의 이미지를 미리보기에 설정
            previewImage.src = canvas.toDataURL();
          };
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex justify-center items-center ml-10rem h-60vh">
      <Link to="/">
        <div className="absolute top-4 left-20 transform -translate-x-1/2 -translate-y-1/2 text-rememberBlack font-bold text-lg cursor-pointer">
          Remember <span className="text-rememberBlue">plus+</span>
        </div>
      </Link>
      <div className="bg-white p-40 pt-20 pb-20 w-50rem rounded-15 text-center mt-20 mb-40 shadow-md rounded-md border border-gray-300 my-2rem">
        <h1 className="font-bold text-[28px] mb-5">
          My business <span className="plus">card+</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="enroll-form-group relative">
            <img
              id="preview-image"
              className="example-picture max-w-full max-h-80"
              src="https://i.ibb.co/jTVf7yn/business-Card4.jpg"
              alt="Example"
            />
            <input
              type="file"
              id="photo"
              name="photo"
              className="opacity-0 absolute top-0 left-0 w-full h-full cursor-pointer"
              onChange={handleFileChange}
            />
            <label
              htmlFor="photo"
              className="absolute top-0 left-0 w-full h-full flex justify-center items-center cursor-pointer text-white bg-gray-800 bg-opacity-70 rounded-15"
            >
              <span className="text-2xl">+</span>
            </label>
          </div>
          <div className="enroll-form-group mt-3">
            <div className="enroll-form-group text-left mb-3">
              <label className="label text-[13px]">이름*</label>
              <input
                type="name"
                className="enroll-input w-100 h-10 border border-gray-300 shadow-md rounded-md text-sm pl-4"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </div>
            <div className="enroll-form-group text-left mb-3">
              <label className="label text-[13px]">개인 전화번호*</label>
              <input
                type="phone"
                className="enroll-input w-100 h-10 border border-gray-300 shadow-md rounded-md text-sm pl-4"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
              />
            </div>
            <div className="enroll-form-group text-left mb-3">
              <label className="label text-[13px]">이메일</label>
              <input
                type="email"
                className="enroll-input w-100 h-10 border border-gray-300 shadow-md rounded-md text-sm pl-4"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div className="enroll-form-group text-left mb-3">
              <label className="label text-[13px]">자기 소개</label>
              <textarea
                className="enroll-input w-100 h-20 border border-gray-300 shadow-md rounded-md text-sm pl-4"
                value={introduction}
                onChange={(event) => setIntroduction(event.target.value)}
              ></textarea>
            </div>
          </div>

          <Link to="/second">
            <button type="submit" className="text-rememberBlueActive text-[14px] border-gray-200">
              명함 등록
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default NewEnrollPage;
