import { personalInfo } from '../data/portfolioData';
import './Footer.css';

const Footer = () => {
  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <a href="#hero" className="footer__logo" onClick={(e) => { e.preventDefault(); scrollTo('#hero'); }}>
              <span className="footer__logo-text">Ahsan<span className="text-accent">.</span></span>
            </a>
            <p className="footer__tagline">
              Building digital experiences that<br />make a real difference.
            </p>
            <div className="footer__socials">
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="footer__social" aria-label="GitHub">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
                </svg>
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="footer__social" aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a href={personalInfo.twitter} target="_blank" rel="noopener noreferrer" className="footer__social" aria-label="Twitter">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </a>
              <a href={`mailto:${personalInfo.email}`} className="footer__social" aria-label="Email">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </a>
            </div>
          </div>

          <div className="footer__links-group">
            <h4 className="footer__links-title">Navigation</h4>
            <ul className="footer__links">
              {[
                { label: 'Home', href: '#hero' },
                { label: 'Services', href: '#services' },
                { label: 'Experience', href: '#experience' },
                { label: 'Work', href: '#work' },
                { label: 'Contact', href: '#contact' },
              ].map(link => (
                <li key={link.href}>
                  <a href={link.href} className="footer__link"
                    onClick={e => { e.preventDefault(); scrollTo(link.href); }}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__links-group">
            <h4 className="footer__links-title">Services</h4>
            <ul className="footer__links">
              {['WordPress Website', 'E-commerce Website', 'Figma to WordPress', 'Speed Optimization', 'Consulting'].map(s => (
                <li key={s}><span className="footer__link">{s}</span></li>
              ))}
            </ul>
          </div>

          <div className="footer__links-group">
            <h4 className="footer__links-title">Contact</h4>
            <ul className="footer__links">
              <li><a href={`mailto:${personalInfo.email}`} className="footer__link">{personalInfo.email}</a></li>
              <li><span className="footer__link footer__link--muted">{personalInfo.location}</span></li>
              <li>
                <span className="footer__avail">
                  <span className="footer__avail-dot" />
                  Available for work
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copy">
            © {new Date().getFullYear()} Ahsan Ijtiba. All rights reserved.
          </p>
          <p className="footer__credit">
            Built with <span className="text-accent">♥</span> using React & GSAP
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
