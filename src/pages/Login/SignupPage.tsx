import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import '../../css/Signup.css';

const Signup = () => {
  const navigate = useNavigate();
  const [user_email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user_name, setName] = useState('');
  const [user_phone, setPhone] = useState('');

  const SignupAPI = 'http://127.0.0.1:8000/api/v1/users/register/';

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await axios.post(SignupAPI, {
        user_email,
        password,
        user_name,
        user_phone,
      });

      console.log('회원가입 성공!', response.data);
      alert("회원가입 성공!")
      navigate("/login");

    } catch (error: any) { 
      console.error('회원가입 실패!', error.message);
      alert("회원가입에 실패하였습니다")
    }
  };

  return (
    <div className="form-container">
      <div className='signup-container'>
        <h2 className='remember'>
          Remember <span className='plus'>plus+</span>
        </h2>
        <h1 className='signup'>회원가입</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="label">이름</label>
            <input type="text" className="signup-input" value={user_name} onChange={(event) => setName(event.target.value)} />
          </div>
          <div className="form-group">
            <label className="label">Email</label>
            <input type="email" className="signup-input" value={user_email} onChange={(event) => setEmail(event.target.value)} />
          </div>
          <div className="form-group">
            <label className="label">비밀번호</label>
            <input type="password" className="signup-input" value={password} onChange={(event) => setPassword(event.target.value)} />
          </div>
          <div className="form-group">
            <label className="label">Phone</label>
            <input type="tel" className="signup-input" value={user_phone} onChange={(event) => setPhone(event.target.value)} />
          </div>
          <button className="button" type="submit">회원가입</button>
        </form>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        </div>
      </div>
    </div>
  );
}

export default Signup;
