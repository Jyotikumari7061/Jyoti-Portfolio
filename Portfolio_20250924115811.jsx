import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

const mockData = {
  hero: {
    name: 'JYOTI KUMARI',
    tagline: 'BCA Graduate & Microsoft Technical Support Executive transitioning into Data Analytics. Building innovative solutions with Python, React, and cloud technologies.',
    currentRole: 'Microsoft Technical Support Executive @ Teleperformance'
  }
};

const Portfolio = () => {
  const [data] = useState(mockData);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  if (loading) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh',
        background: '#f8fafc'
      }}>
        <div style={{ 
          textAlign: 'center',
          color: '#1E40AF',
          fontSize: '1.2rem'
        }}>
          Loading Portfolio...
        </div>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <main>
        <Hero data={data.hero} />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;