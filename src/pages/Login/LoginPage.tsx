import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import axios from "axios";
import "../../css/Login.css";

function Login() {
  const navigate = useNavigate();
  const [user_email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // 로그인 요청을 서버로 보내는 코드
    axios
      .post("http://0.0.0.0:8000/api/v1/users/login/", { user_email, password })
      .then((response) => {
        // 로그인 성공 시 처리
        console.log("로그인 성공!", response.data);
        //localStrorage에 uuid 저장
        localStorage.setItem("user_uuid", response.data.result.user_uid);

        alert("환영합니다!");
        navigate("/main");
        // 예: 토큰 저장, 로그인 상태 변경 등
      })
      .catch((error) => {
        // 로그인 실패 시 처리
        console.error("로그인 실패", error);
        alert("이메일과 비밀번호를 다시 확인해주세요");
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
        <h1 className="login">로그인</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="label">Email</label>
            <input
              type="email"
              className="login-input"
              value={user_email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label className="label">비밀번호</label>
            <input
              type="password"
              className="login-input"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <button type="submit" className="loginButton">
            로그인
          </button>
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
