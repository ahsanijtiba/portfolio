import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { personalInfo } from '../data/portfolioData';
import './Contact.css';

gsap.registerPlugin(ScrollTrigger);

const SERVICES_OPTIONS = ['WordPress Website', 'E-commerce Website', 'Figma to WP', 'Speed Optimization', 'Consulting', 'Other'];

const Contact = () => {
  const sectionRef = useRef(null);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [status, setStatus] = useState('');
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.contact__left .reveal',
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out',
          scrollTrigger: { trigger: '.contact__left', start: 'top 80%' }
        }
      );
      gsap.fromTo('.contact__form',
        { opacity: 0, x: 40 },
        {
          opacity: 1, x: 0, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: '.contact__form', start: 'top 82%' }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const toggleService = (s) => {
    setSelected(prev =>
      prev.includes(s) ? prev.filter(x => x !== s) : [...prev, s]
    );
  };

  const handleChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    // Create form data payload
    const formData = new FormData(e.target);
    formData.append('access_key', import.meta.env.VITE_WEB3FORMS_ACCESS_KEY); // Secure API key
    formData.append('services_needed', selected.join(', ')); // Add selected chips

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        gsap.to('.contact__form', {
          scale: 0.98, duration: 0.1,
          onComplete: () => {
            gsap.to('.contact__form', { scale: 1, duration: 0.3 });
            setSubmitted(true);
            setForm({ name: '', email: '', subject: '', message: '' });
            setSelected([]);
            setStatus('');
          }
        });
      } else {
        setStatus('error');
        console.error(data.message);
      }
    } catch (error) {
      setStatus('error');
      console.error(error);
    }
  };

  return (
    <section id="contact" className="contact section" ref={sectionRef}>
      {/* CTA banner */}
      <div className="contact__banner">
        <div className="container contact__banner-inner">
          <div className="contact__banner-left">
            <h2 className="contact__banner-title">
              Say <span className="text-accent">Hi!</span> and tell me<br/>
              about your idea
            </h2>
            <p className="contact__banner-sub">
              Let's connect over email or fill the form below — I reply within 24 hours.
            </p>
          </div>
          <div className="contact__banner-right">
            <a href={`mailto:${personalInfo.email}`} className="contact__email-link">
              {personalInfo.email}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7v10"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="contact__grid">
          {/* Left info */}
          <div className="contact__left">
            <span className="section-label reveal">Get In Touch</span>
            <h2 className="contact__title reveal">
              Let's work<br/>
              <span className="text-accent">together</span>
            </h2>
            <p className="contact__desc reveal">
              Whether you have a project in mind, need a consultation, or just want to say hello — my inbox is always open.
            </p>

            <div className="contact__info reveal">
              <a href={`mailto:${personalInfo.email}`} className="contact__info-item">
                <div className="contact__info-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div>
                  <div className="contact__info-label">Email</div>
                  <div className="contact__info-value">{personalInfo.email}</div>
                </div>
              </a>

              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="contact__info-item">
                <div className="contact__info-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                </div>
                <div>
                  <div className="contact__info-label">LinkedIn</div>
                  <div className="contact__info-value">Ahsan Ijtiba</div>
                </div>
              </a>

              <div className="contact__info-item">
                <div className="contact__info-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div>
                  <div className="contact__info-label">Location</div>
                  <div className="contact__info-value">{personalInfo.location}</div>
                </div>
              </div>
            </div>

            <div className="contact__socials reveal">
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="contact__social">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/>
                </svg>
                GitHub
              </a>
              <a href={personalInfo.twitter} target="_blank" rel="noopener noreferrer" className="contact__social">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                </svg>
                Twitter
              </a>
            </div>
          </div>

          {/* Right form */}
          <div className="contact__form-wrap">
            {submitted ? (
              <div className="contact__success">
                <div className="contact__success-icon">✓</div>
                <h3>Message Sent!</h3>
                <p>Thank you for reaching out. I'll get back to you within 24 hours.</p>
                <button className="btn btn-outline" onClick={() => setSubmitted(false)}>
                  Send Another
                </button>
              </div>
            ) : (
              <form className="contact__form" onSubmit={handleSubmit}>
                {/* Web3Forms Honeypot for Spam Protection */}
                <input type="checkbox" name="botcheck" className="sr-only" style={{ display: 'none' }} />

                <div className="contact__form-row">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">Name *</label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      className="form-input"
                      placeholder="John Smith"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">Email *</label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      className="form-input"
                      placeholder="john@example.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">What do you need?</label>
                  <div className="form-chips">
                    {SERVICES_OPTIONS.map(s => (
                      <button
                        key={s}
                        type="button"
                        className={`form-chip ${selected.includes(s) ? 'form-chip--active' : ''}`}
                        onClick={() => toggleService(s)}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject" className="form-label">Subject</label>
                  <input
                    id="subject"
                    type="text"
                    name="subject"
                    className="form-input"
                    placeholder="Project brief..."
                    value={form.subject}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-input form-textarea"
                    placeholder="Tell me about your project, timeline, and budget..."
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                  />
                </div>

                <button type="submit" className="btn btn-primary contact__submit" disabled={status === 'sending'}>
                  {status === 'sending' ? 'Sending...' : 'Send Message'}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z"/>
                  </svg>
                </button>
                {status === 'error' && (
                  <p style={{ color: '#ff5f57', marginTop: '12px', fontSize: '0.9rem', textAlign: 'center' }}>
                    Something went wrong. Please try again later.
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
