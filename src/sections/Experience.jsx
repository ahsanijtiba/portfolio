import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { experiences } from '../data/portfolioData';
import './Experience.css';

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const sectionRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.experience__head .reveal',
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out',
          scrollTrigger: { trigger: '.experience__head', start: 'top 80%' }
        }
      );

      itemsRef.current.forEach((item, i) => {
        gsap.fromTo(item,
          { opacity: 0, x: -40 },
          {
            opacity: 1, x: 0, duration: 0.7, ease: 'power3.out',
            scrollTrigger: { trigger: item, start: 'top 82%' },
            delay: i * 0.1,
          }
        );
      });

      // Timeline line draw
      gsap.fromTo('.experience__line-fill',
        { scaleY: 0 },
        {
          scaleY: 1, duration: 1.5, ease: 'power2.out',
          scrollTrigger: { trigger: '.experience__timeline', start: 'top 75%', end: 'bottom 60%', scrub: true }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" className="experience section" ref={sectionRef}>
      <div className="container">
        <div className="experience__head">
          <span className="section-label reveal">My Journey</span>
          <h2 className="experience__title reveal">
            Work <span className="text-accent">Experience</span>
          </h2>
          <p className="experience__subtitle reveal">
            A track record of building impactful products across startups and agencies.
          </p>
        </div>

        <div className="experience__timeline">
          <div className="experience__line">
            <div className="experience__line-fill" />
          </div>

          <div className="experience__items">
            {experiences.map((exp, i) => (
              <div
                key={exp.id}
                className={`exp-item ${exp.current ? 'exp-item--current' : ''}`}
                ref={el => itemsRef.current[i] = el}
              >
                {/* Dot */}
                <div className="exp-item__dot">
                  {exp.current && <div className="exp-item__dot-ring" />}
                </div>

                {/* Content */}
                <div className="exp-item__content">
                  <div className="exp-item__meta">
                    <span className="exp-item__period">{exp.period}</span>
                    <span className="exp-item__duration">{exp.duration}</span>
                    {exp.current && <span className="exp-item__current-badge">Current</span>}
                  </div>

                  <div className="exp-item__card">
                    <div className="exp-item__top">
                      <div>
                        <h3 className="exp-item__role">{exp.role}</h3>
                        <p className="exp-item__company">{exp.company}</p>
                      </div>
                      <button className="exp-item__expand">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M7 17L17 7M17 7H7M17 7v10"/>
                        </svg>
                      </button>
                    </div>
                    <p className="exp-item__desc">{exp.description}</p>
                    <div className="exp-item__tags">
                      {exp.tags.map(tag => (
                        <span key={tag} className="exp-item__tag">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
