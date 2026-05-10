import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projects } from '../data/portfolioData';
import './Work.css';

gsap.registerPlugin(ScrollTrigger);

/* ─── Mockup visuals for each project ─── */
const ProjectVisual = ({ index, proj }) => {
  // If the project has an image property, render the actual image
  if (proj && proj.image) {
    const orbColor = index === 0 ? 'green' : index === 1 ? 'purple' : 'blue';
    return (
      <div className={`pw-visual pw-visual--${(index % 3) + 1}`}>
        <img src={proj.image} alt={proj.title} className="pw-project-image" />
        <div className={`pw-visual__orb pw-visual__orb--${orbColor}`} />
      </div>
    );
  }

  // Otherwise, render the CSS mockups
  if (index === 0) {
    return (
      <div className="pw-visual pw-visual--1">
        <div className="pw-mockup">
          <div className="pw-mockup__bar" />
          <div className="pw-mockup__body">
            <div className="pw-mockup__row pw-mockup__row--80" />
            <div className="pw-mockup__row pw-mockup__row--60" />
            <div className="pw-mockup__grid3">
              <div className="pw-mockup__block pw-mockup__block--accent" />
              <div className="pw-mockup__block" />
              <div className="pw-mockup__block" />
            </div>
            <div className="pw-mockup__chart">
              {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                <div key={i} className="pw-mockup__bar-seg" style={{ '--h': `${h}%` }} />
              ))}
            </div>
          </div>
        </div>
        <div className="pw-visual__orb pw-visual__orb--green" />
      </div>
    );
  }
  if (index === 1) {
    return (
      <div className="pw-visual pw-visual--2">
        <div className="pw-mockup">
          <div className="pw-mockup__bar" />
          <div className="pw-mockup__body">
            <div className="pw-mockup__row pw-mockup__row--80" />
            <div className="pw-mockup__row pw-mockup__row--50" />
            <div className="pw-mockup__grid2">
              <div className="pw-mockup__card-block" />
              <div className="pw-mockup__card-block pw-mockup__card-block--accent" />
            </div>
            <div className="pw-mockup__row pw-mockup__row--40" />
          </div>
        </div>
        <div className="pw-visual__orb pw-visual__orb--purple" />
      </div>
    );
  }
  return (
    <div className="pw-visual pw-visual--3">
      <div className="pw-mockup">
        <div className="pw-mockup__bar" />
        <div className="pw-mockup__body">
          <div className="pw-mockup__kanban">
            {['Todo', 'In Progress', 'Done'].map((col) => (
              <div key={col} className="pw-mockup__kanban-col">
                <div className="pw-mockup__kanban-head" />
                <div className="pw-mockup__kanban-card" />
                <div className="pw-mockup__kanban-card pw-mockup__kanban-card--sm" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="pw-visual__orb pw-visual__orb--orange" />
    </div>
  );
};

const Work = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.work__head .reveal',
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out',
          scrollTrigger: { trigger: '.work__head', start: 'top 80%' }
        }
      );

      gsap.utils.toArray('.pw-row').forEach((row, i) => {
        gsap.fromTo(row,
          { opacity: 0, y: 60 },
          {
            opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
            scrollTrigger: { trigger: row, start: 'top 82%' },
            delay: i * 0.05,
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="work" className="work section" ref={sectionRef}>
      <div className="container">
        <div className="work__head">
          <span className="section-label reveal">Case Studies</span>
          <h2 className="work__title reveal">
            Selected <span className="text-accent">Work</span>
          </h2>
          <p className="work__subtitle reveal">
            A curated collection of projects that showcase my range of skills and problem-solving approach.
          </p>
        </div>

        <div className="pw-list">
          {projects.map((proj, i) => {
            /* Even rows: image left | Odd rows: image right */
            const imageRight = i % 2 !== 0;

            return (
              <div
                key={proj.id}
                className={`pw-row ${imageRight ? 'pw-row--reverse' : ''}`}
              >
                {/* ── Image column ── */}
                <div className="pw-col pw-col--visual">
                  <ProjectVisual index={i} proj={proj} />
                </div>

                {/* ── Content column ── */}
                <div className="pw-col pw-col--content">
                  {/* Category badge */}
                  <span className="pw-badge">{proj.category}</span>

                  {/* Headline */}
                  <h3 className="pw-headline">{proj.title}</h3>

                  {/* Description */}
                  <p className="pw-desc">{proj.description}</p>

                  {/* Tech tags */}
                  <div className="pw-tags">
                    {proj.tags.map(t => (
                      <span key={t} className="pw-tag">{t}</span>
                    ))}
                  </div>

                  {/* CTA link */}
                  <a
                    href={proj.link}
                    className="pw-link-btn"
                    aria-label={`View project ${proj.title}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>View Project</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                      <path d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        <div className="work__cta">
          <p className="work__cta-text">Want to see more?</p>
          <a href="https://github.com/ahsanijtiba" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
            View All Projects
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Work;
