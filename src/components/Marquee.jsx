import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './Marquee.css';

const ITEMS = ['WordPress', 'Elementor', 'WooCommerce', 'HTML5', 'CSS3', 'JavaScript', 'Figma to WP', 'SEO Optimisation', 'Speed Optimisation', 'Theme Customisation', 'Plugin Integration', 'ACF'];

const Marquee = () => {
  const track1 = useRef(null);
  const track2 = useRef(null);

  useEffect(() => {
    const tl1 = gsap.to(track1.current, {
      xPercent: -50,
      duration: 20,
      ease: 'none',
      repeat: -1,
    });
    const tl2 = gsap.to(track2.current, {
      xPercent: 50,
      duration: 24,
      ease: 'none',
      repeat: -1,
    });
    return () => { tl1.kill(); tl2.kill(); };
  }, []);

  const items = [...ITEMS, ...ITEMS];

  return (
    <div className="marquee-section">
      {/* Row 1 – left to right */}
      <div className="marquee-row">
        <div ref={track1} className="marquee-track">
          {items.map((item, i) => (
            <span key={i} className="marquee-item">
              <span className="marquee-dot">✦</span>
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marquee;
