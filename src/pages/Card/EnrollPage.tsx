import { useState } from "react";
import { Link } from "react-router-dom";
import "../../css/enroll.css";

function EnrollPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [introduction, setIntroduction] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div
      className="form-container"
      style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Link to="/">
        <div
          style={{
            position: "absolute",
            top: "4%",
            left: "10%",
            transform: "translate(-50%, -50%)",
            color: "black",
            fontWeight: "bolder",
            fontSize: "1rem",
            cursor: "pointer",
          }}
        >
          Remember <span style={{ color: "skyblue" }}>plus+</span>
        </div>
      </Link>
      <div className="enroll-container">
        <h2 className="remember">
          Remember <span className="plus">plus+</span>
        </h2>
        <h2 className="enroll">인적사항</h2>
        <form onSubmit={handleSubmit}>
          <div className="enroll-form-group">
            <img className="example-picture" src="https://via.placeholder.com/339x189" />
            <div
              className="enroll-form-group"
              style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
            >
              등록할 명함 사진
            </div>
            <input type="file" id="photo" name="photo" />
          </div>
          <div className="enroll-form-group">
            <label className="label">이름*</label>
            <input
              type="name"
              className="enroll-input"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div className="enroll-form-group">
            <label className="label">개인 전화번호*</label>
            <input
              type="phone"
              className="enroll-input"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
            />
          </div>
          <div className="enroll-form-group">
            <label className="label">이메일</label>
            <input
              type="email"
              className="enroll-input"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="enroll-form-group">
            <label className="label">자기 소개</label>
            <textarea
              className="enroll-input"
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
