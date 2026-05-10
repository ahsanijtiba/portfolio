import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { stats } from '../data/portfolioData';
import './Stats.css';

gsap.registerPlugin(ScrollTrigger);

const Stats = () => {
  const sectionRef = useRef(null);
  const numsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate counter numbers
      numsRef.current.forEach((el, i) => {
        const target = stats[i].value;
        const obj = { val: 0 };
        gsap.to(obj, {
          val: target,
          duration: 2,
          ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 85%', once: true },
          onUpdate: () => {
            el.textContent = Math.round(obj.val) + stats[i].suffix;
          },
        });
      });

      gsap.fromTo('.stats__item',
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.7, stagger: 0.15, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="stats section" ref={sectionRef}>
      <div className="container">
        <div className="stats__grid">
          {stats.map((stat, i) => (
            <div key={i} className="stats__item">
              <span
                ref={el => numsRef.current[i] = el}
                className="stats__num"
              >
                0{stat.suffix}
              </span>
              <span className="stats__label">{stat.label}</span>
              <div className="stats__line" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
