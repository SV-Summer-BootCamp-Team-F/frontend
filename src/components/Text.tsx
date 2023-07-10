import { useState } from 'react';
import '../css/Text.css';

const Text = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  const handleAnimationEnd = () => {
    if (!isVisible) {
      setIsVisible(false);
    }
  };

  return (
    <div className={`TextContainer ${isVisible ? 'fadeIn' : 'fadeOut'}`} onAnimationEnd={handleAnimationEnd}>
      {!isVisible && (
        <h1 className='Text1' onClick={handleClick}>
          {/* 화면을 클릭하여 나타날 때의 텍스트 */}
        </h1>
      )}
      {isVisible && (
        <h1 className='Text1' onClick={handleClick}>
          {/* 화면을 클릭하여 사라질 때의 텍스트 */}
        </h1>
      )}
    </div>
  );
};

export default Text;
