import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './Loader.css';

const Loader = ({ onComplete }) => {
  const loaderRef = useRef(null);
  const progressRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Animate progress bar
    tl.to(progressRef.current, {
      scaleX: 1,
      duration: 1.2,
      ease: 'power2.inOut',
    })
    // Fade out text
    .to(textRef.current, {
      opacity: 0,
      y: -20,
      duration: 0.4,
      ease: 'power2.in',
    }, '-=0.1')
    // Slide loader up & out
    .to(loaderRef.current, {
      yPercent: -100,
      duration: 0.8,
      ease: 'power3.inOut',
      onComplete,
    });

    return () => tl.kill();
  }, [onComplete]);

  return (
    <div ref={loaderRef} className="loader">
      <div ref={textRef} className="loader__text-wrap">
        <div className="loader__text">Ahsan<span className="loader__dot">.</span></div>
        <p className="loader__sub">Portfolio</p>
      </div>
      <div className="loader__bar">
        <div ref={progressRef} className="loader__progress" />
      </div>
    </div>
  );
};

export default Loader;
