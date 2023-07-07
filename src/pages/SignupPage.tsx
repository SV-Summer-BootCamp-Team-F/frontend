import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Signup.css';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(`Email: ${email}, Password: ${password}, Name: ${name}, Phone: ${phone}`);
  }

  return (
    <div className="form-container">
      <Link to='/'>
        <div style={{ position: 'absolute', top: '4%', left: '10%', transform: 'translate(-50%, -50%)', color: 'black', fontWeight: 'bolder', fontSize: '1rem', cursor: 'pointer' }}>
          Remember <span style={{ color: 'skyblue' }}>plus+</span>
        </div>
      </Link>
      <div className='signup-container'>
        <h2 className='remember'>
          Remember <span className='plus'>plus+</span>
        </h2>
        <h1 className='signup'>SIGNUP</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="label">Your name</label>
            <input type="text" className="signup-input" value={name} onChange={(event) => setName(event.target.value)} />
          </div>
          <div className="form-group">
            <label className="label">Email</label>
            <input type="email" className="signup-input" value={email} onChange={(event) => setEmail(event.target.value)} />
          </div>
          <div className="form-group">
            <label className="label">Password</label>
            <input type="password" className="signup-input" value={password} onChange={(event) => setPassword(event.target.value)} />
          </div>
          <div className="form-group">
            <label className="label">Phone</label>
            <input type="tel" className="signup-input" value={phone} onChange={(event) => setPhone(event.target.value)} />
          </div>
          <button className="button" type="submit">Signup</button>
        </form>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        </div>
      </div>
    </div>
  );
}

export default Signup;
