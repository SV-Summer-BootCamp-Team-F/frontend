import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios, { AxiosResponse } from "axios";

// Define an interface to represent the shape of the form data
interface FormData {
  photo: File | null;
  card_name: string;
  card_phone: string;
  card_email: string;
  card_intro: string;
}

function EnrollPage() {
  const [photo, setPhoto] = useState<File | null>(null);
  const [card_name, setName] = useState("");
  const [card_phone, setPhone] = useState("");
  const [card_email, setEmail] = useState("");
  const [card_intro, setIntro] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const MAX_WIDTH = 500;
  const MAX_HEIGHT = 300;

  function sendDataToServer(data: FormData): Promise<AxiosResponse> {
    const apiUrl = "http://127.0.0.1:8000/api/v1/cards/add/";

    // Assuming your backend API expects a POST request
    return axios.post(apiUrl, data);
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setIsModalOpen(true);

    // Prepare the data to send to the server
    const formData: FormData = {
      photo,
      card_name,
      card_phone,
      card_email,
      card_intro,
    };

    // Call the function to send the data to the backend
    sendDataToServer(formData)
      .then((response: AxiosResponse) => {
        // Handle success response from the server, if needed
        console.log("Data sent successfully:", response.data);
      })
      .catch((error) => {
        // Handle error response from the server, if needed
        console.error("Error sending data:", error);
      });
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      setPhoto(file); // Save the selected file to the photo state
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

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="flex justify-center items-center ml-10rem h-60vh">
      <Link to="/">
        <div className="absolute top-4 left-20 transform -translate-x-1/2 -translate-y-1/2 text-rememberBlack font-bold text-lg cursor-pointer">
          Remember <span className="text-rememberBlue">plus+</span>
        </div>
      </Link>
      <div className="bg-white p-40 pt-20 pb-20 w-50rem rounded-15 text-center mt-20 mb-40 shadow-md rounded-md border border-gray-300 my-2rem">
        <h2 className="font-bold text-[25px] mb-4">
          My Business <span className="plus">Card</span>
        </h2>
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
              id="file"
              name="file"
              className="opacity-0 absolute top-0 left-0 w-full h-full cursor-pointer"
              onChange={handleFileChange}
            />
            <label
              htmlFor="file"
              className="absolute top-0 left-0 w-full h-full flex justify-center items-center cursor-pointer text-white bg-gray-800 bg-opacity-70 rounded-15"
            >
              <span className="text-2xl">+</span>
            </label>
          </div>
          <div className="enroll-form-group mt-3">
            <div className="enroll-form-group text-left mb-3">
              <label className="label text-[13px] font-medium">Name*</label>
              <input
                type="name"
                className="enroll-input w-100 h-10 border border-gray-300 shadow-md rounded-md text-sm pl-4"
                value={card_name}
                placeholder="홍길동"
                onChange={(event) => setName(event.target.value)}
              />
            </div>
            <div className="enroll-form-group text-left mb-3 font-medium">
              <label className="label text-[13px]">Phone*</label>
              <input
                type="phone"
                className="enroll-input w-100 h-10 border border-gray-300 shadow-md rounded-md text-sm pl-4"
                value={card_phone}
                placeholder="010-0000-0000"
                onChange={(event) => setPhone(event.target.value)}
              />
            </div>
            <div className="enroll-form-group text-left mb-3 font-medium">
              <label className="label text-[13px]">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                className="enroll-input w-100 h-10 border border-gray-300 shadow-md rounded-md text-sm pl-4"
                value={card_email}
                placeholder="name@company.com"
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div className="enroll-form-group text-left mb-3 font-medium">
              <label className="label text-[13px]">Introduction</label>
              <textarea
                className="enroll-input w-100 h-20 border border-gray-300 shadow-md rounded-md text-sm pl-4"
                value={card_intro}
                placeholder="자기 소개"
                onChange={(event) => setIntro(event.target.value)}
              ></textarea>
            </div>
          </div>
          <button
            type="submit"
            onClick={toggleModal}
            className="text-rememberBlueActive text-[14px] border-gray-200"
          >
            명함 등록
          </button>
        </form>
      </div>

      {/* 아래부터 modal */}
      {isModalOpen && (
        <div
          id="authentication-modal"
          tabIndex={-1}
          aria-hidden="true"
          className="fixed top-0 left-0 right-0 z-50 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-60"
        >
          <div className="relative w-full max-w-md">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              {/* Modal content */}
              <button
                type="button"
                className="absolute top-3 right-2.5"
                onClick={toggleModal} // close 버튼을 누르면 Modal을 닫도록 설정
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
              <div className="px-6 py-6 lg:px-8">
                <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                  Check Your Card
                </h3>
                <form className="space-y-6" action="#">
                  {/* Modal 내부의 Form과 Input 요소 */}
                  <div className="enroll-form-group relative flex justify-center items-center mb-6">
                    <img
                      id="preview-image-modal"
                      className="example-picture max-w-full max-h-80"
                      src={
                        photo
                          ? URL.createObjectURL(photo)
                          : "https://i.ibb.co/jTVf7yn/business-Card4.jpg"
                      }
                      alt="Example"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="name"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Name:
                      <div className="bg-gray-100 px-2 py-1 rounded-md">{card_name}</div>
                    </label>
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Phone:
                      <div className="bg-gray-100 px-2 py-1 rounded-md">{card_phone}</div>
                    </label>
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Email:
                      <div className="bg-gray-100 px-2 py-1 rounded-md">{card_email}</div>
                    </label>
                  </div>
                  <div>
                    <label
                      htmlFor="indroduction"
                      className="block mb-4 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Introduction:
                      <div className="bg-gray-100 px-2 py-1 rounded-md">{card_intro}</div>
                    </label>
                  </div>
                  <Link to="/main">
                    <button
                      type="submit"
                      className="w-full text-white bg-rememberBlue focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Enroll Your Card
                    </button>
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default EnrollPage;
