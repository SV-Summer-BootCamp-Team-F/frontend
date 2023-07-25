import { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import "../../css/Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // 로그인 요청을 서버로 보내는 코드
    axios
      .post("/api/login", { email, password })
      .then((response) => {
        // 로그인 성공 시 처리
        console.log(response.data);
        // 예: 토큰 저장, 로그인 상태 변경 등
      })
      .catch((error) => {
        // 로그인 실패 시 처리
        console.error(error);
        // 예: 에러 메시지 표시 등
      });
  };

  return (
    <div
      className="form-container"
      style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <div className="login-container">
        <h2 className="remember">
          Remember <span className="plus">plus+</span>
        </h2>
        <h1 className="login">LOGIN</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="label">Email</label>
            <input
              type="email"
              className="login-input"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label className="label">Password</label>
            <input
              type="password"
              className="login-input"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <Link to="/intro">
            <button type="submit" className="loginButton">
              Login
            </button>
          </Link>
        </form>
        <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
          <Link to="/Signup">
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
              회원가입
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
