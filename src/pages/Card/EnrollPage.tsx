import { useState } from "react";
import { Link } from "react-router-dom";

function EnrollPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [introduction, setIntroduction] = useState("");

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
  };

  return (
    <div className="flex justify-center items-center ml-400 h-80vh">
      <div className="bg-white p-40 w-800px rounded-15 text-center mt-80px shadow-md rounded-md">
        <h2 className="remember">
          Remember <span className="plus">plus+</span>
        </h2>
        <h2 className="enroll">인적사항</h2>
        <form onSubmit={handleSubmit}>
          <div className="enroll-form-group">
            <img
              id="preview-image"
              className="example-picture"
              src="https://via.placeholder.com/339x189"
              alt="Example"
            />
            <input
              type="file"
              id="photo"
              name="photo"
              onChange={(event) => {
                const file = event.target.files && event.target.files[0];
                if (file) {
                  const reader = new FileReader();
                  reader.onload = function (e) {
                    const previewImage = document.getElementById("preview-image");
                    if (previewImage) {
                      previewImage.src = e.target.result;
                    }
                  };
                  reader.readAsDataURL(file);
                }
              }}
            />
          </div>

          <div className="enroll-form-group text-left mb-3">
            <label className="label">이름*</label>
            <input
              type="name"
              className="enroll-input w-100 h-12 border border-gray-300 shadow-md rounded-md"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div className="enroll-form-group text-left mb-3">
            <label className="label">개인 전화번호*</label>
            <input
              type="phone"
              className="enroll-input w-100 h-12 border border-gray-300 shadow-md rounded-md"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
            />
          </div>
          <div className="enroll-form-group text-left mb-3">
            <label className="label">이메일</label>
            <input
              type="email"
              className="enroll-input w-100 h-12 border border-gray-300 shadow-md rounded-md"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="enroll-form-group text-left mb-3">
            <label className="label">자기 소개</label>
            <textarea
              className="enroll-input w-100 h-32 border border-gray-300 shadow-md rounded-md"
              value={introduction}
              onChange={(event) => setIntroduction(event.target.value)}
            ></textarea>
          </div>

          <Link to="/second">
            <button type="submit" className="enrollButton">
              명함 등록
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default EnrollPage;
