import { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

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
        <h2 className="enroll-title">인적사항</h2>
        <div className="form-group">
          <img className="example-picture" src="https://via.placeholder.com/339x189" />
          <div
            className="picture-explain"
            style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
          >
            등록할 명함 사진
          </div>
          <input type="file" id="photo" name="photo" />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="label">이름</label>
            <input
              type="text"
              className="enroll-input"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label className="label">개인 전화번호</label>
            <input
              type="tel"
              className="enroll-input"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label className="label">이메일</label>
            <input
              type="email"
              className="enroll-input"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label className="label">자기 소개</label>
            <textarea
              className="enroll-input"
              value={introduction}
              onChange={(event) => setIntroduction(event.target.value)}
            ></textarea>
          </div>
        </form>
        <Button
          variant="white"
          style={{
            backgroundColor: "skyblue",
            color: "black",
            fontWeight: "450",
            fontSize: "0.9rem",
            padding: "0.7rem 10.5rem",
            borderRadius: "10px",
          }}
        >
          명함 등록
        </Button>
      </div>
    </div>
  );
}

export default EnrollPage;
