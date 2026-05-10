import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { testimonials } from '../data/portfolioData';
import './Testimonials.css';

gsap.registerPlugin(ScrollTrigger);

const Testimonials = () => {
  const sectionRef = useRef(null);
  const [active, setActive] = useState(0);
  const quoteRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.testimonials__head .reveal',
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out',
          scrollTrigger: { trigger: '.testimonials__head', start: 'top 80%' }
        }
      );
      gsap.fromTo('.testimonials__content',
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: '.testimonials__content', start: 'top 82%' }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const changeTestimonial = (idx) => {
    if (idx === active) return;
    gsap.to(quoteRef.current, {
      opacity: 0, y: 20, duration: 0.25, ease: 'power2.in',
      onComplete: () => {
        setActive(idx);
        gsap.to(quoteRef.current, { opacity: 1, y: 0, duration: 0.4, ease: 'power3.out' });
      }
    });
  };

  const t = testimonials[active];

  return (
    <section className="testimonials section" ref={sectionRef}>
      <div className="container">
        <div className="testimonials__head">
          <span className="section-label reveal">Testimonials</span>
          <h2 className="testimonials__title reveal">
            What <span className="text-accent">clients</span> say
          </h2>
        </div>

        <div className="testimonials__content">
          {/* Big quote */}
          <div className="testimonials__quote-wrap">
            <div className="testimonials__quote-icon">"</div>
            <blockquote ref={quoteRef} className="testimonials__quote">
              {t.content}
            </blockquote>
            <div className="testimonials__author">
              <div className="testimonials__avatar">{t.avatar}</div>
              <div>
                <div className="testimonials__name">{t.name}</div>
                <div className="testimonials__role">{t.role}</div>
              </div>
            </div>
          </div>

          {/* Navigation dots */}
          <div className="testimonials__nav">
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`testimonials__dot ${i === active ? 'testimonials__dot--active' : ''}`}
                onClick={() => changeTestimonial(i)}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>

          {/* Side cards (other testimonials preview) */}
          <div className="testimonials__cards">
            {testimonials.map((item, i) => (
              <div
                key={item.id}
                className={`testimonials__card ${i === active ? 'testimonials__card--active' : ''}`}
                onClick={() => changeTestimonial(i)}
              >
                <div className="testimonials__card-avatar">{item.avatar}</div>
                <div>
                  <div className="testimonials__card-name">{item.name}</div>
                  <div className="testimonials__card-role">{item.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
