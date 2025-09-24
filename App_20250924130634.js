import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showStats, setShowStats] = useState(false);
  const fullText = "DATA ANALYST";

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500);
  }, []);

  useEffect(() => {
    if (!loading && currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 150);
      return () => clearTimeout(timeout);
    } else if (currentIndex >= fullText.length) {
      setTimeout(() => setShowStats(true), 500);
    }
  }, [currentIndex, loading]);

  if (loading) {
    return (
      <div className="section-dark" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center' }}>
          <div className="loading-dots" style={{ justifyContent: 'center', marginBottom: '1rem' }}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div style={{ color: 'var(--accent-primary)', fontSize: '1.2rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            LOADING PORTFOLIO
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      {/* Header */}
      <header style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        right: 0, 
        zIndex: 50,
        background: 'rgba(15, 23, 42, 0.95)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(51, 65, 85, 0.3)'
      }}>
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          padding: '1rem 2rem',
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center' 
        }}>
          <div style={{ 
            fontSize: '1.5rem', 
            fontWeight: '700', 
            color: 'var(--text-primary)',
            textTransform: 'uppercase',
            letterSpacing: '0.05em'
          }}>
            JYOTI KUMARI
          </div>
          <nav style={{ display: 'flex', gap: '2rem' }}>
            {['ABOUT', 'SKILLS', 'PROJECTS', 'CONTACT'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="nav-link">
                {item}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="section-dark" style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        paddingTop: '80px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Animated Background */}
        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
          <div className="floating-element" style={{
            position: 'absolute',
            top: '25%',
            left: '25%',
            width: '384px',
            height: '384px',
            background: 'radial-gradient(circle, rgba(30, 64, 175, 0.1), rgba(6, 182, 212, 0.1))',
            borderRadius: '50%',
            filter: 'blur(60px)'
          }}></div>
          <div className="floating-element" style={{
            position: 'absolute',
            bottom: '25%',
            right: '25%',
            width: '320px',
            height: '320px',
            background: 'radial-gradient(circle, rgba(79, 70, 229, 0.1), rgba(30, 64, 175, 0.1))',
            borderRadius: '50%',
            filter: 'blur(60px)',
            animationDelay: '-3s'
          }}></div>
        </div>

        <div style={{ textAlign: 'center', position: 'relative', zIndex: 10, maxWidth: '1200px', padding: '0 2rem' }}>
          {/* Profile Image */}
          <div style={{ marginBottom: '3rem' }}>
            <div style={{ position: 'relative', display: 'inline-block' }}>
              <img
               src="/images/professional.jpg"
                alt="Professional Photo of Jyoti Kumari"
                style={{
                  width: '200px',
                  height: '200px',
                  borderRadius: '24px',
                  objectFit: 'cover',
                  border: '4px solid rgba(255, 255, 255, 0.2)',
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)'
                }}
              />
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(135deg, rgba(30, 64, 175, 0.2), rgba(6, 182, 212, 0.2))',
                borderRadius: '24px',
                filter: 'blur(20px)',
                transform: 'scale(1.1)'
              }}></div>
              {/* Floating Icons */}
              <div className="floating-element" style={{
                position: 'absolute',
                top: '-16px',
                right: '-16px',
                width: '48px',
                height: '48px',
                background: 'var(--gradient-primary)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 20px var(--accent-glow)'
              }}>
                <span style={{ color: 'white', fontSize: '24px' }}>📊</span>
              </div>
            </div>
          </div>

          {/* Main Title */}
          <h1 className="hero-title" style={{ marginBottom: '2rem' }}>JYOTI KUMARI</h1>
          
          <div style={{ fontSize: 'clamp(24px, 4vw, 48px)', marginBottom: '2rem' }}>
            <span style={{ color: 'var(--text-secondary)' }}>Transitioning to</span>
            <br />
            <span className="animated-gradient" style={{ fontWeight: 'bold', fontSize: 'clamp(32px, 6vw, 64px)' }}>
              {displayText}<span style={{ color: 'var(--accent-primary)', animation: 'blink 1s infinite' }}>|</span>
            </span>
          </div>
          
          <p style={{ 
            fontSize: 'clamp(16px, 2vw, 20px)', 
            maxWidth: '800px', 
            margin: '0 auto 3rem',
            color: 'var(--text-secondary)',
            lineHeight: '1.6'
          }}>
            BCA Graduate & Microsoft Technical Support Executive transitioning into Data Analytics. 
            Building innovative solutions with Python, React, and cloud technologies.
          </p>

          {/* Current Role Badge */}
          <div style={{ marginBottom: '3rem' }}>
            <div className="glass-card" style={{ display: 'inline-block', padding: '1.5rem 2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '12px', height: '12px', background: '#10B981', borderRadius: '50%', animation: 'pulse 2s infinite' }}></div>
                <div>
                  <div style={{ fontSize: '12px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--accent-primary)' }}>
                    CURRENTLY
                  </div>
                  <div style={{ fontSize: '16px', fontWeight: '500', color: 'var(--text-primary)' }}>
                    Microsoft Technical Support Executive @ Teleperformance
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Animated Stats */}
          {showStats && (
            <div style={{ marginBottom: '3rem' }}>
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
                gap: '2rem',
                maxWidth: '800px',
                margin: '0 auto'
              }}>
                {[
                  { icon: '💻', value: '2+', label: 'PROJECTS' },
                  { icon: '🎯', value: '100%', label: 'COMMITMENT' },
                  { icon: '🎓', value: 'BCA', label: 'GRADUATE' },
                  { icon: '📈', value: '∞', label: 'LEARNING' }
                ].map((stat, index) => (
                  <div key={index} className="glass-card fade-in-up animate" style={{ 
                    textAlign: 'center', 
                    animationDelay: `${index * 0.2}s`,
                    padding: '1.5rem'
                  }}>
                    <div style={{ fontSize: '32px', marginBottom: '1rem' }}>{stat.icon}</div>
                    <div style={{ fontSize: '24px', fontWeight: 'bold' }} className="text-gradient">{stat.value}</div>
                    <div style={{ fontSize: '12px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-secondary)' }}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CTA Buttons */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <button className="btn-primary">
                <span style={{ marginRight: '0.5rem' }}>📊</span>
                VIEW PROJECTS
              </button>
              <button className="btn-secondary">
                <span style={{ marginRight: '0.5rem' }}>💼</span>
                HIRE ME
              </button>
            </div>
            
            {/* Scroll Indicator */}
            <div style={{ 
              marginTop: '2rem', 
              animation: 'bounce 2s infinite',
              cursor: 'pointer',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '12px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem', opacity: 0.7 }}>
                EXPLORE
              </div>
              <div style={{ fontSize: '24px', color: 'var(--accent-primary)' }}>↓</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-light" style={{ padding: '5rem 2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div style={{ fontSize: '14px', fontWeight: '600', color: 'var(--accent-primary)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>
              WHO I AM
            </div>
            <h2 className="section-title" style={{ color: 'var(--text-dark)' }}>ABOUT ME</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <div>
              <p style={{ fontSize: 'clamp(18px, 3vw, 24px)', lineHeight: '1.6', color: 'var(--text-dark)', marginBottom: '2rem' }}>
                Fresh BCA graduate with hands-on experience in technical support and a passion for data-driven insights. 
                Currently working as a Microsoft Technical Support Executive at Teleperformance while actively transitioning 
                into Data Analytics through self-learning and practical projects.
              </p>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                {[
                  'BCA Graduate with strong technical foundation',
                  'Microsoft Technical Support expertise',
                  'Self-taught Data Analytics enthusiast',
                  'Full-stack development experience'
                ].map((highlight, index) => (
                  <div key={index} className="modern-card" style={{ padding: '1.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <div style={{ width: '8px', height: '8px', background: 'var(--accent-primary)', borderRadius: '50%' }}></div>
                      <span style={{ fontSize: '14px', fontWeight: '500', color: 'var(--text-dark)' }}>{highlight}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card" style={{ 
              background: 'linear-gradient(135deg, rgba(30, 64, 175, 0.9), rgba(79, 70, 229, 0.9))',
              backdropFilter: 'blur(20px)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '2rem' }}>
                <div style={{ fontSize: '32px', marginRight: '1rem' }}>🎯</div>
                <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: 'white' }}>CAREER GOALS</h3>
              </div>
              <p style={{ color: 'rgba(255, 255, 255, 0.9)', lineHeight: '1.6', marginBottom: '2rem' }}>
                My goal is to leverage my technical background and analytical mindset to become a skilled Data Analyst, 
                helping organizations make informed decisions through data insights and visualization.
              </p>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                <div style={{ textAlign: 'center', padding: '1rem', background: 'rgba(255, 255, 255, 0.1)', borderRadius: '8px' }}>
                  <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#38FF62', marginBottom: '0.5rem' }}>01</div>
                  <div style={{ fontSize: '12px', fontWeight: '600', textTransform: 'uppercase', color: 'rgba(255, 255, 255, 0.8)' }}>
                    BCA GRADUATE
                  </div>
                </div>
                <div style={{ textAlign: 'center', padding: '1rem', background: 'rgba(255, 255, 255, 0.1)', borderRadius: '8px' }}>
                  <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#38FF62', marginBottom: '0.5rem' }}>02</div>
                  <div style={{ fontSize: '12px', fontWeight: '600', textTransform: 'uppercase', color: 'rgba(255, 255, 255, 0.8)' }}>
                    MAJOR PROJECTS
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-dark" style={{ padding: '5rem 2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div style={{ fontSize: '14px', fontWeight: '600', color: 'var(--accent-primary)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>
              TECHNICAL EXPERTISE
            </div>
            <h2 className="section-title">SKILLS & TECHNOLOGIES</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {[
              { name: 'Data Analytics', skills: ['Python', 'SQL', 'Pandas', 'NumPy', 'Data Visualization'], icon: '📊' },
              { name: 'Web Development', skills: ['React.js', 'JavaScript', 'TypeScript', 'HTML/CSS'], icon: '💻' },
              { name: 'Database & Cloud', skills: ['MongoDB', 'MySQL', 'AWS', 'REST APIs', 'Git'], icon: '☁️' },
              { name: 'Tools & Others', skills: ['Microsoft Office', 'Technical Support', 'Problem Solving'], icon: '🛠️' }
            ].map((category, index) => (
              <div key={index} className="glass-card" style={{ position: 'relative' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '2rem' }}>
                  <div style={{ 
                    fontSize: '32px', 
                    marginRight: '1rem',
                    padding: '0.5rem',
                    background: 'var(--gradient-primary)',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {category.icon}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: 'var(--text-primary)' }}>{category.name}</h3>
                    <div style={{ fontSize: '12px', color: 'var(--accent-primary)' }}>{category.skills.length} SKILLS</div>
                  </div>
                </div>

                <div style={{ space: '1rem' }}>
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} style={{ marginBottom: '1rem' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                        <span style={{ fontSize: '14px', fontWeight: '500', color: 'var(--text-primary)' }}>{skill}</span>
                        <span style={{ fontSize: '12px', fontWeight: 'bold', color: 'var(--accent-primary)' }}>
                          {85 - skillIndex * 5}%
                        </span>
                      </div>
                      <div className="skill-bar">
                        <div className="skill-progress" style={{ width: `${85 - skillIndex * 5}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-light" style={{ padding: '5rem 2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div style={{ fontSize: '14px', fontWeight: '600', color: 'var(--accent-primary)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>
              PORTFOLIO SHOWCASE
            </div>
            <h2 className="section-title" style={{ color: 'var(--text-dark)' }}>FEATURED PROJECTS</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))', gap: '3rem' }}>
            {[
              {
                title: 'NYC Taxi Analytics Dashboard',
                description: 'Comprehensive analytics platform built with Python, FastAPI, MongoDB, and AWS to analyze and visualize NYC taxi trip data patterns.',
                technologies: ['Python', 'FastAPI', 'MongoDB', 'AWS', 'Data Analytics'],
                githubUrl: 'https://github.com/Jyotikumari7061/nyc-taxi-analytics-dashboard',
                icon: '📊'
              },
              {
                title: 'Data Annotation Quality Evaluation Platform',
                description: 'AI Content Evaluation Dashboard for AI text quality assessment with pairwise comparisons & analytics. Production-ready solution.',
                technologies: ['React', 'FastAPI', 'MongoDB', 'TypeScript', 'AI/ML'],
                githubUrl: 'https://github.com/Jyotikumari7061/Data-Annotation-Quality-Evaluation-Platform',
                icon: '🧠'
              }
            ].map((project, index) => (
              <div key={index} className="modern-card">
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
                  <div style={{ 
                    fontSize: '32px', 
                    marginRight: '1rem',
                    padding: '0.75rem',
                    background: 'var(--gradient-primary)',
                    borderRadius: '16px'
                  }}>
                    {project.icon}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: 'var(--text-dark)' }}>{project.title}</h3>
                    <div style={{ fontSize: '12px', color: 'var(--accent-primary)' }}>PROJECT {String(index + 1).padStart(2, '0')}</div>
                  </div>
                </div>

                <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#4A5568', marginBottom: '2rem' }}>
                  {project.description}
                </p>

                <div style={{ marginBottom: '2rem' }}>
                  <div style={{ fontSize: '14px', fontWeight: '600', color: 'var(--text-dark)', marginBottom: '1rem' }}>
                    TECH STACK
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} style={{ 
                        padding: '0.5rem 1rem',
                        background: '#E2E8F0',
                        borderRadius: '20px',
                        fontSize: '12px',
                        fontWeight: '500',
                        color: '#2D3748'
                      }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <a 
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ textDecoration: 'none', width: '100%', justifyContent: 'center' }}
                >
                  <span style={{ marginRight: '0.5rem' }}>🔗</span>
                  VIEW ON GITHUB
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-dark" style={{ padding: '5rem 2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ marginBottom: '4rem' }}>
            <div style={{ fontSize: '14px', fontWeight: '600', color: 'var(--accent-primary)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>
              GET IN TOUCH
            </div>
            <h2 className="section-title">LET'S CONNECT</h2>
            <p style={{ fontSize: '18px', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
              Open to Data Analytics opportunities and technical challenges. Let's discuss how my skills can contribute to your team.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
            {[
              { icon: '📧', title: 'Email', info: 'ruhi43210s@gmail.com', link: 'mailto:ruhi43210s@gmail.com' },
              { icon: '🔗', title: 'GitHub', info: 'github.com/Jyotikumari7061', link: 'https://github.com/Jyotikumari7061' },
              { icon: '💼', title: 'LinkedIn', info: 'linkedin.com/in/jyotiskumari', link: 'https://www.linkedin.com/in/jyotiskumari/' }
            ].map((contact, index) => (
              <div key={index} className="glass-card" style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '48px', marginBottom: '1rem' }}>{contact.icon}</div>
                <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '1rem' }}>{contact.title}</h3>
                <a 
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'var(--accent-primary)', textDecoration: 'none', fontSize: '14px' }}
                >
                  {contact.info}
                </a>
              </div>
            ))}
          </div>

          <div className="glass-card" style={{ 
            background: 'var(--gradient-primary)',
            padding: '3rem',
            textAlign: 'center'
          }}>
            <h3 style={{ fontSize: '24px', fontWeight: 'bold', color: 'white', marginBottom: '1rem' }}>
              Ready to Contribute
            </h3>
            <p style={{ color: 'rgba(255, 255, 255, 0.9)', marginBottom: '2rem', fontSize: '16px' }}>
              Looking for Data Analytics opportunities and technical challenges
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a 
                href="https://www.linkedin.com/in/jyotiskumari/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: 'white',
                  color: 'var(--accent-primary)',
                  padding: '1rem 2rem',
                  borderRadius: '12px',
                  textDecoration: 'none',
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  fontSize: '14px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
              >
                <span>💼</span>
                CONNECT ON LINKEDIN
              </a>
              <button style={{
                background: 'transparent',
                color: 'white',
                border: '2px solid white',
                padding: '1rem 2rem',
                borderRadius: '12px',
                fontWeight: '600',
                textTransform: 'uppercase',
                fontSize: '14px',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <span>📄</span>
                DOWNLOAD RESUME
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ 
        background: '#0F172A', 
        padding: '3rem 2rem', 
        borderTop: '1px solid rgba(51, 65, 85, 0.3)' 
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ 
            fontSize: '20px', 
            fontWeight: '700', 
            color: 'var(--text-primary)', 
            marginBottom: '1rem',
            textTransform: 'uppercase',
            letterSpacing: '0.05em'
          }}>
            JYOTI KUMARI
          </div>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
            BCA Graduate transitioning to Data Analytics. Building innovative solutions with modern technologies.
          </p>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: '2rem',
            marginBottom: '2rem'
          }}>
            {[
              { icon: '🔗', link: 'https://github.com/Jyotikumari7061' },
              { icon: '💼', link: 'https://www.linkedin.com/in/jyotiskumari/' },
              { icon: '📧', link: 'mailto:ruhi43210s@gmail.com' }
            ].map((social, index) => (
              <a 
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ 
                  fontSize: '24px',
                  padding: '0.75rem',
                  background: 'rgba(51, 65, 85, 0.3)',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease'
                }}
              >
                {social.icon}
              </a>
            ))}
          </div>
          <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>
            © 2024 Jyoti Kumari. Built with ❤️ and React.js
          </p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        
        @keyframes bounce {
          0%, 20%, 53%, 80%, 100% { transform: translate3d(0,0,0); }
          40%, 43% { transform: translate3d(0,-30px,0); }
          70% { transform: translate3d(0,-15px,0); }
          90% { transform: translate3d(0,-4px,0); }
        }
      `}</style>
    </div>
  );
};

export default App;