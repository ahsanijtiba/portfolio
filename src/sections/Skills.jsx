import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { skills, personalInfo, education } from '../data/portfolioData';
import './Skills.css';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const sectionRef = useRef(null);
  const barsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.skills__head .reveal',
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out',
          scrollTrigger: { trigger: '.skills__head', start: 'top 80%' }
        }
      );

      gsap.fromTo('.skills__about-content .reveal',
        { opacity: 0, x: -40 },
        {
          opacity: 1, x: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: '.skills__about-content', start: 'top 80%' }
        }
      );

      gsap.fromTo('.skills__visual .reveal',
        { opacity: 0, x: 40 },
        {
          opacity: 1, x: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: '.skills__visual', start: 'top 80%' }
        }
      );

      // Animate skill bars
      barsRef.current.forEach((bar, i) => {
        if (!bar) return;
        gsap.fromTo(bar,
          { width: '0%' },
          {
            width: bar.dataset.level + '%',
            duration: 1.2,
            ease: 'power3.out',
            delay: i * 0.08,
            scrollTrigger: { trigger: bar, start: 'top 90%', once: true }
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="skills" className="skills section" ref={sectionRef}>
      <div className="container">
        <div className="skills__head">
          <span className="section-label reveal">About Me</span>
          <h2 className="skills__title reveal">
            Passion meets <span className="text-accent">expertise</span>
          </h2>
        </div>

        <div className="skills__inner">
          {/* Left – About + Education */}
          <div className="skills__about-content">
            <p className="skills__about reveal">{personalInfo.about}</p>
            <p className="skills__about reveal">{personalInfo.aboutExtended}</p>

            <div className="skills__edu reveal">
              <h4 className="skills__edu-label">Education</h4>
              {education.map((e, i) => (
                <div key={i} className="skills__edu-item">
                  <div className="skills__edu-icon">🎓</div>
                  <div>
                    <div className="skills__edu-degree">{e.degree}</div>
                    <div className="skills__edu-inst">{e.institution} · {e.period}</div>
                    <div className="skills__edu-grade">{e.grade}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="skills__tags reveal">
              {['Problem Solver', 'Clean Code', 'Team Player', 'Fast Learner', 'Detail-Oriented'].map(tag => (
                <span key={tag} className="skills__tag">{tag}</span>
              ))}
            </div>
          </div>

          {/* Right – Skill Bars */}
          <div className="skills__visual">
            <h3 className="skills__bars-title reveal">Technical Proficiency</h3>
            <div className="skills__bars">
              {skills.map((skill, i) => (
                <div key={skill.name} className="skill-bar reveal">
                  <div className="skill-bar__top">
                    <span className="skill-bar__name">{skill.name}</span>
                    <span className="skill-bar__level">{skill.level}%</span>
                  </div>
                  <div className="skill-bar__track">
                    <div
                      ref={el => barsRef.current[i] = el}
                      className="skill-bar__fill"
                      data-level={skill.level}
                      style={{ width: '0%' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
