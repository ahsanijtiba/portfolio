import { useState, useCallback } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Components
import Cursor from './components/Cursor';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Marquee from './components/Marquee';
import Footer from './components/Footer';

// Sections
import Hero from './sections/Hero';
import Services from './sections/Services';
import Experience from './sections/Experience';
import Skills from './sections/Skills';
import Work from './sections/Work';
import Testimonials from './sections/Testimonials';
import Stats from './sections/Stats';
import Contact from './sections/Contact';

import './App.css';

// Register GSAP plugins globally
gsap.registerPlugin(ScrollTrigger);

// Configure ScrollTrigger defaults
ScrollTrigger.config({
  ignoreMobileResize: true,
});
ScrollTrigger.defaults({
  markers: false,
});

function App() {
  const [loading, setLoading] = useState(true);

  const handleLoaderComplete = useCallback(() => {
    setLoading(false);
    // Allow body scrolling
    document.body.style.overflow = 'auto';
    // Refresh ScrollTrigger after page is revealed
    setTimeout(() => ScrollTrigger.refresh(), 100);
  }, []);

  // Lock scroll during loading
  if (loading) {
    document.body.style.overflow = 'hidden';
  }

  return (
    <>
      {/* Noise texture overlay */}
      <div className="noise" aria-hidden="true" />

      {/* Custom cursor (desktop only) */}
      <Cursor />

      {/* Loading screen */}
      {loading && <Loader onComplete={handleLoaderComplete} />}

      {/* Main site content */}
      <div className={`site ${loading ? 'site--hidden' : 'site--visible'}`}>
        <Navbar />
        <main>
          <Hero />
          <Marquee />
          <Services />
          <Experience />
          <Skills />
          <Work />
          <Testimonials />
          <Stats />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
