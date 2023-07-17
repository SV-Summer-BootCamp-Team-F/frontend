import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Slide from '../components/intro/Slide';
import Profile from '../components/intro/Profile';
import Text from '../components/intro/Text';
import Sphere from '../components/Sphere';
import Anychart from '../components/Anychart';
import '../css/Text.css';

const IntroPage = () => {
  const profileRef = useRef<HTMLDivElement | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);
  const TextRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.17, // Adjust this threshold value as needed
    };

    const animateOnScroll = (
      entries: IntersectionObserverEntry[],
      // observer: IntersectionObserver
    ) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        } else {
          entry.target.classList.remove('animate-fade-in');
        }
      });
    };

    const profileObserver = new IntersectionObserver(animateOnScroll, options);
    const cardObserver = new IntersectionObserver(animateOnScroll, options);

    const profileRefCopy = profileRef.current;
    const cardRefCopy = cardRef.current;
    const TextRefCopy = TextRef.current;

    if (profileRefCopy) {
      profileObserver.observe(profileRefCopy);
    }
    if (cardRefCopy) {
      cardObserver.observe(cardRefCopy);
    }
    if (TextRefCopy) {
      cardObserver.observe(TextRefCopy);
    }

    return () => {
      if (profileRefCopy) {
        profileObserver.unobserve(profileRefCopy);
      }
      if (cardRefCopy) {
        cardObserver.unobserve(cardRefCopy);
      }
      if (TextRefCopy) {
        cardObserver.unobserve(TextRefCopy);
      }
    };
  }, []);

  return (
    <div className="main-container">
      <Link to="/">
        <div style={{ position: 'fixed', top: '5%', left: '10%', transform: 'translate(-50%, -50%)', color: 'black', fontWeight: 'bolder', fontSize: '1rem', cursor: 'pointer' }}>Remember <span style={{ color: 'skyblue' }}>Plus+</span></div>
      </Link>
      <div ref={TextRef} className="animate-on-scroll-1">

      </div>
      <Sphere />
      <div ref={profileRef} className="animate-on-scroll-2">
        
        <Profile />
        <Anychart/>
      </div>
      <div className="animate-on-scroll-3">
        <Slide />

      </div>
      <div className="animate-on-scroll-4">
        <Text />
        
      </div>
    </div>
  );
};

export default IntroPage;
