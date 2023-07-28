import { Link } from 'react-router-dom';

const handleScrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

const Text = () => {
return (
    <div>
      <h1 className='Text3'> 나만의 <span className='text4'>Universe</span>를 만들어보세요 </h1>
  <div style={{position: 'absolute', top: '70%', left: '49.7%', transform: 'translate(-50%, -50%)', color: 'black', fontWeight: 'bold', fontSize: '1rem'}}>Click Sphere!</div>
  <div style={{position: 'absolute', top: '75%', left: '50%', transform: 'translate(-50%, -50%)', color: 'black', fontWeight: 'bolder', fontSize: '1rem'}}>Remember <span style={{ color: 'skyblue' }}>plus+</span></div>
        <Link to='/login'>
  <div style={{position: 'absolute', top: '80%', left: '50%', transform: 'translate(-50%, -50%)', color: 'black', fontWeight: 'bolder', fontSize: '2rem', cursor: 'pointer'}}>Enter </div>
        </Link>
        <button className='Text3Button'
        onClick={handleScrollToTop}
        style={{
          position: 'relative',
          top: '250px',
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
        시작하기
      </button>
    </div>
  );
};

export default Text;
