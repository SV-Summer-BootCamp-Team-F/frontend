
import { Link } from 'react-router-dom';

const handleScrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};
const handleScrollToTop2 = () => {
  window.scrollTo({
    top: 900,
    behavior: 'smooth',
  });
};
const handleScrollToTop3 = () => {
  window.scrollTo({
    top: 1750,
    behavior: 'smooth',
  });
};

const Text2 = () => {
return (
    <div>
      <h1 className='Text3'> 나만의 <span className='text4'>Universe</span>를 만들어보세요 </h1>
  <div style={{position: 'absolute', top: '81%', left: '50%', transform: 'translate(-50%, -50%)', color: 'black', fontWeight: 'bolder', fontSize: '1rem', cursor: 'pointer'}}>Remember <span style={{ color: 'skyblue' }}>plus+</span></div>
        <Link to='/main'>
  <div style={{position: 'absolute', top: '86%', left: '50%', transform: 'translate(-50%, -50%)', color: 'black', fontWeight: 'bolder', fontSize: '2rem', cursor: 'pointer'}}>Enter </div>
        </Link>
        <button
        onClick={handleScrollToTop}
        style={{
          position: 'relative',
          top: '180px',
          left: '34rem',
          padding: '1px',
          borderRadius: '10%',
          backgroundColor: 'rgb(10, 10, 10)',
          color: 'skyblue',
          fontSize: '2rem',
          fontWeight: 'bold',
          cursor: 'pointer',
        }}
      >
        START
      </button>
      <button
        onClick={handleScrollToTop2}
        style={{
          position: 'relative',
          top: '180px',
          left: '3rem',
          padding: '1px',
          borderRadius: '10%',
          backgroundColor: 'rgb(10, 10, 10)',
          color: 'white',
          fontSize: '1rem',
          fontWeight: 'bold',
          cursor: 'pointer',
        }}
      >
        명함 등록
      </button>

      <button
        onClick={handleScrollToTop3}
        style={{
          position: 'relative',
          top: '178px',
          left: '50rem',
          padding: '1px',
          borderRadius: '10%',
          backgroundColor: 'rgb(10, 10, 10)',
          color: 'white',
          fontSize: '1rem',
          fontWeight: 'bold',
          cursor: 'pointer',
        }}
      >
        Information
      </button>
    </div>
  );
};

export default Text2;
