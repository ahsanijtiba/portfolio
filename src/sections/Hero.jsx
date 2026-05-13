import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { personalInfo } from '../data/portfolioData';
import './Hero.css';

const Hero = () => {
  const heroRef = useRef(null);
  const imageRef = useRef(null);
  const badgeRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const descRef = useRef(null);
  const ctaRef = useRef(null);
  const statsRef = useRef(null);
  const scrollIndicatorRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.3 });

    // Staggered entrance
    tl.fromTo(badgeRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }
    )
    .fromTo(titleRef.current.querySelectorAll('.hero__title-line'),
      { opacity: 0, y: 60, skewY: 5 },
      { opacity: 1, y: 0, skewY: 0, duration: 0.9, ease: 'power3.out', stagger: 0.12 },
      '-=0.2'
    )
    .fromTo(subtitleRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' },
      '-=0.4'
    )
    .fromTo(descRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' },
      '-=0.4'
    )
    .fromTo(ctaRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
      '-=0.3'
    )
    .fromTo(imageRef.current,
      { opacity: 0, scale: 0.85, x: 40 },
      { opacity: 1, scale: 1, x: 0, duration: 1, ease: 'power3.out' },
      '-=0.8'
    )
    .fromTo(statsRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
      '-=0.4'
    )
    .fromTo(scrollIndicatorRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.6 },
      '-=0.2'
    );

    // Floating image animation
    gsap.to(imageRef.current, {
      y: -16,
      duration: 3.5,
      ease: 'sine.inOut',
      repeat: -1,
      yoyo: true,
    });

    // Scroll indicator bounce
    gsap.to(scrollIndicatorRef.current?.querySelector('.hero__scroll-dot'), {
      y: 8,
      duration: 1.2,
      ease: 'sine.inOut',
      repeat: -1,
      yoyo: true,
    });

  }, []);

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToWork = () => {
    document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero" ref={heroRef}>
      {/* Background decorations */}
      <div className="hero__bg-glow" />
      <div className="hero__grid" />

      <div className="container hero__inner">
        {/* Left content */}
        <div className="hero__content">
          <div ref={badgeRef} className="hero__badge">
            <span className="hero__badge-dot" />
            Available for new projects
          </div>

          <h1 ref={titleRef} className="hero__title">
            <span className="hero__title-line">Hi, I'm</span>
            <span className="hero__title-line hero__title-name">
              {personalInfo.firstName}
              <span className="hero__title-accent"> {personalInfo.lastName}</span>
            </span>
          </h1>

          <p ref={subtitleRef} className="hero__subtitle">
            {personalInfo.title} <span className="text-accent">&</span> Elementor Expert
          </p>

          <p ref={descRef} className="hero__desc">
            {personalInfo.tagline}
          </p>

          <div ref={ctaRef} className="hero__cta">
            <button className="btn btn-primary hero__btn-primary" onClick={scrollToContact}>
              Let's Work Together
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
            <button className="btn btn-outline hero__btn-outline" onClick={scrollToWork}>
              View My Work
            </button>
          </div>

          {/* Quick stats */}
          <div ref={statsRef} className="hero__mini-stats">
            <div className="hero__stat">
              <span className="hero__stat-num">50+</span>
              <span className="hero__stat-label">Projects</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <span className="hero__stat-num">4+</span>
              <span className="hero__stat-label">Years Exp.</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <span className="hero__stat-num">30+</span>
              <span className="hero__stat-label">Clients</span>
            </div>
          </div>
        </div>

        {/* Right image */}
        <div className="hero__image-wrap">
          <div ref={imageRef} className="hero__image-container">
            <img
              src="/profile.png"
              alt="Ahsan Ijtiba – Full Stack Developer"
              className="hero__image"
            />
            {/* Floating tag */}
            <div className="hero__float-tag hero__float-tag--1">
              <span className="hero__float-icon">🧩</span>
              <span>WordPress Developer</span>
            </div>
            <div className="hero__float-tag hero__float-tag--2">
              <span className="hero__float-icon">🎨</span>
              <span>Elementor Expert</span>
            </div>
            <div className="hero__experience-badge">
              <span className="hero__exp-num">4+</span>
              <span className="hero__exp-text">Years of<br/>Experience</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div ref={scrollIndicatorRef} className="hero__scroll">
        <div className="hero__scroll-line">
          <div className="hero__scroll-dot" />
        </div>
        <span className="hero__scroll-text">Scroll down</span>
      </div>
    </section>
  );
};

export default Hero;
