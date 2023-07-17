import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import Phone from '../components/Phone';


const GraphChart: React.FC = () => {
  return (
    <div>
      <div>
      
      <Link to="/">
        <div style={{ position: 'fixed', top: '5%', left: '10%', transform: 'translate(-50%, -50%)', color: 'black', fontWeight: 'bolder', fontSize: '1rem', cursor: 'pointer' }}>Remember <span style={{ color: 'skyblue' }}>Plus+</span></div>
      </Link>
      <Link to="/">
        <div style={{ position: 'fixed', top: '5%', left: '95%', transform: 'translate(-50%, -50%)', color: 'black', fontWeight: 'bolder', fontSize: '1.2rem', cursor: 'pointer' }}>LOG<span style={{ color: 'skyblue' }}>OUT</span></div>
      </Link>
      <Link to="/">
        <div style={{ position: 'absolute', top: '50%', left: '18%', transform: 'translate(-50%, -50%)', color: 'black', fontWeight: 'bolder', fontSize: '2.5rem', cursor: 'pointer' }}>BuisnessCard <span style={{ color: 'skyblue' }}>registration</span></div>
      </Link>
      <Link to="/relation">
        <div style={{ position: 'absolute', top: '140%', left: '79%', transform: 'translate(-50%, -50%)', color: 'skyblue', fontWeight: 'bolder', fontSize: '3.3rem', cursor: 'pointer' }}>My <span style={{ color: 'black' }}>Connection</span></div>
      </Link> 
        <div className="modal-container">
        </div>
        <Card />
        <Phone/>
      </div>
      
    </div>
  );
};

export default GraphChart;
