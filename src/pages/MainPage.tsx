import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/main/Card';
import Phone from '../components/main/Phone';
import Button from '../components/Button';

const MainPage: React.FC = () => {
  return (
    <div>
      <div>
        <Link to="/">
          <div style={{ position: 'fixed', top: '5%', left: '10%', transform: 'translate(-50%, -50%)', color: 'black', fontWeight: 'bolder', fontSize: '1rem', cursor: 'pointer' }}>Remember <span style={{ color: 'skyblue' }}>Plus+</span></div>
        </Link>
        <Link to="/">
          <div style={{ position: 'fixed', top: '5%', right: '10%', transform: 'translate(50%, -50%)', color: 'black', fontWeight: 'bolder', fontSize: '1.2rem', cursor: 'pointer' }}>LOG<span style={{ color: 'skyblue' }}>OUT</span></div>
        </Link>
          <div style={{ position: 'absolute', top: '50%', left: '18%', transform: 'translate(-50%, -50%)', color: 'black', fontWeight: 'bolder', fontSize: '2.5rem', cursor: 'pointer' }}>BuisnessCard <span style={{ color: 'skyblue' }}>registration</span></div> 
          <div style={{ position: 'absolute', top: '140%', left: '80%', transform: 'translate(-50%, -50%)', color: 'skyblue', fontWeight: 'bolder', fontSize: '3.6rem', cursor: 'pointer' }}>My <span style={{ color: 'black' }}>Connection</span></div>
        <div className="main-container"></div>
        <Card />
        <div style={{ position: 'absolute', top: '35rem', left: '15rem' }}>
          <Link to="/relation">
            <Button />
          </Link>
        </div>
        <div style={{ position: 'absolute', top: '93.5rem', left: '82rem' }}>
          <Link to="/relation">
            <Button />
          </Link>
        </div>
        <Phone />
      </div>
    </div>
  );
};

export default MainPage;
