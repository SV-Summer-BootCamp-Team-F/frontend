import { useEffect, useRef } from 'react';
import Information from '../components/intro/Information';
import Slider from '../components/intro/Slider';
import Text from '../components/intro/Text';
import Sphere from '../components/intro/Sphere';
import Chart from '../components/analytic/Intro2Chart';
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
      <div ref={TextRef} className="animate-on-scroll-1">
      </div>
      <Sphere />
      <div ref={profileRef} className="animate-on-scroll-2">
      <Information />
      </div>
      <div className="animate-on-scroll-3">
      <Slider />
      </div>
      <div className="animate-on-scroll-4">
      <Chart/>
      </div>
      <div className="animate-on-scroll-5">
        <Text />
        
      </div>
    </div>
  );
};

export default IntroPage;
