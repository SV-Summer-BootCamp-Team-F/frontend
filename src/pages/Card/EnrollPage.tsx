import { SetStateAction, useState } from "react";
import { Link } from "react-router-dom";
import { ChangeEvent } from "react";

function EnrollPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [introduction, setIntroduction] = useState("");
  const [previewImage, setPreviewImage] = useState("https://via.placeholder.com/339x189");

  const handleNameChange = (event: { target: { value: SetStateAction<string> } }) => {
    setName(event.target.value);
  };

  const handlePhoneChange = (event: { target: { value: SetStateAction<string> } }) => {
    setPhone(event.target.value);
  };

  const handleEmailChange = (event: { target: { value: SetStateAction<string> } }) => {
    setEmail(event.target.value);
  };

  const handleIntroductionChange = (event: { target: { value: SetStateAction<string> } }) => {
    setIntroduction(event.target.value);
  };

  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setPreviewImage(reader.result as string);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    // 폼 데이터를 제출하는 로직 추가
  };

  return (
    <div className="w-screen flex justify-center items-center">
      <Link to="/">
        <div className="absolute top-4 left-20 transform -translate-x-1/2 -translate-y-1/2 text-rememberBlack font-bold text-lg cursor-pointer">
          Remember <span className="text-rememberBlue">plus+</span>
        </div>
      </Link>
      <div className="bg-white p-40 max-w-[800px] my-[20px] text-center mt-80px shadow-md rounded-md">
        <h2 className="remember">
          Remember <span className="plus">plus+</span>
        </h2>
        <h2 className="enroll">인적사항</h2>
        <form onSubmit={handleSubmit}>
          <div className="enroll-form-group">
            <img src={previewImage} alt="Example" />
            <input type="file" id="photo" name="photo" onChange={handleImageUpload} />
          </div>
          <div className="enroll-item">
            <div className="text-left mb-3">
              <label className="label">이름*</label>
              <input
                type="name"
                className="w-100 h-12 border border-gray-300 shadow-md rounded-md"
                value={name}
                onChange={handleNameChange}
              />
            </div>
            <div className="text-left mb-3">
              <label className="label">개인 전화번호*</label>
              <input
                type="phone"
                className="w-100 h-12 border border-gray-300 shadow-md rounded-md"
                value={phone}
                onChange={handlePhoneChange}
              />
            </div>
            <div className="text-left mb-3">
              <label className="label">이메일</label>
              <input
                type="email"
                className="w-100 h-12 border border-gray-300 shadow-md rounded-md"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <div className="text-left mb-3">
              <label className="label">자기 소개</label>
              <textarea
                className="w-100 h-32 border border-gray-300 shadow-md rounded-md"
                value={introduction}
                onChange={handleIntroductionChange}
              ></textarea>
            </div>
          </div>
          <Link to="/second">
            <button type="submit" className="text-rememberBlue border-gray-300">
              명함 등록
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default EnrollPage;
