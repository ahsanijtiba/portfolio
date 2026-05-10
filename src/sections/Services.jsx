import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { services } from '../data/portfolioData';
import './Services.css';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading reveal
      gsap.fromTo(headingRef.current.querySelectorAll('.reveal'),
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out',
          scrollTrigger: { trigger: headingRef.current, start: 'top 80%' }
        }
      );

      // Cards stagger
      gsap.fromTo(cardsRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1, y: 0, duration: 0.7, stagger: 0.15, ease: 'power3.out',
          scrollTrigger: { trigger: cardsRef.current[0], start: 'top 82%' }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="services" className="services section" ref={sectionRef}>
      <div className="container">
        {/* Heading */}
        <div ref={headingRef} className="services__header">
          <span className="section-label reveal">What I'm Offering</span>
          <h2 className="services__title reveal">
            Services that make<br/>
            <span className="text-accent">ideas come to life</span>
          </h2>
          <p className="services__subtitle reveal">
            From design to deployment — I handle the full stack with a focus on performance, aesthetics, and user experience.
          </p>
        </div>

        {/* Cards */}
        <div className="services__grid">
          {services.map((service, i) => (
            <div
              key={service.id}
              className="service-card"
              ref={el => cardsRef.current[i] = el}
              data-cursor-hover
            >
              <div className="service-card__header">
                <span className="service-card__number">{service.id}</span>
                <span className="service-card__icon">{service.icon}</span>
              </div>
              <h3 className="service-card__title">{service.title}</h3>
              <p className="service-card__desc">{service.description}</p>
              <div className="service-card__tools">
                {service.tools.map(tool => (
                  <span key={tool} className="service-card__tool">{tool}</span>
                ))}
              </div>
              <div className="service-card__arrow">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M17 7H7M17 7v10"/>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
