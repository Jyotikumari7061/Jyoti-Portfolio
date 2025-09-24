import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header style={{ padding: '2rem', background: '#1E40AF', color: 'white', textAlign: 'center' }}>
        <h1>Jyoti Kumari</h1>
        <p>Data Analytics Portfolio</p>
      </header>
      
      <main style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ color: '#1E40AF', fontSize: '2rem' }}>About Me</h2>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
            BCA Graduate & Microsoft Technical Support Executive transitioning into Data Analytics. 
            Building innovative solutions with Python, React, and cloud technologies.
          </p>
        </section>
        
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ color: '#1E40AF', fontSize: '2rem' }}>Skills</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
            <div style={{ background: '#f8fafc', padding: '1rem', borderRadius: '8px' }}>
              <h3>Data Analytics</h3>
              <p>Python, SQL, Pandas, NumPy</p>
            </div>
            <div style={{ background: '#f8fafc', padding: '1rem', borderRadius: '8px' }}>
              <h3>Web Development</h3>
              <p>React.js, JavaScript, HTML/CSS</p>
            </div>
            <div style={{ background: '#f8fafc', padding: '1rem', borderRadius: '8px' }}>
              <h3>Database & Cloud</h3>
              <p>MongoDB, MySQL, AWS</p>
            </div>
          </div>
        </section>
        
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ color: '#1E40AF', fontSize: '2rem' }}>Featured Projects</h2>
          <div style={{ display: 'grid', gap: '2rem' }}>
            <div style={{ background: 'white', padding: '2rem', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <h3 style={{ color: '#1E40AF' }}>NYC Taxi Analytics Dashboard</h3>
              <p>Comprehensive analytics platform built with Python, FastAPI, MongoDB, and AWS to analyze NYC taxi trip data.</p>
              <a href="https://github.com/Jyotikumari7061/nyc-taxi-analytics-dashboard" target="_blank" rel="noopener noreferrer" style={{ color: '#1E40AF' }}>
                View on GitHub →
              </a>
            </div>
            <div style={{ background: 'white', padding: '2rem', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <h3 style={{ color: '#1E40AF' }}>Data Annotation Quality Evaluation Platform</h3>
              <p>AI Content Evaluation Dashboard for AI text quality assessment with analytics and modern tech stack.</p>
              <a href="https://github.com/Jyotikumari7061/Data-Annotation-Quality-Evaluation-Platform" target="_blank" rel="noopener noreferrer" style={{ color: '#1E40AF' }}>
                View on GitHub →
              </a>
            </div>
          </div>
        </section>
        
        <section style={{ background: '#1E40AF', padding: '3rem', borderRadius: '8px', color: 'white', textAlign: 'center' }}>
          <h2>Let's Connect</h2>
          <p>Open to Data Analytics opportunities</p>
          <div style={{ marginTop: '2rem' }}>
            <p>📧 ruhi43210s@gmail.com</p>
            <p>🔗 <a href="https://github.com/Jyotikumari7061" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>GitHub</a></p>
            <p>💼 <a href="https://www.linkedin.com/in/jyotiskumari/" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>LinkedIn</a></p>
          </div>
        </section>
      </main>
      
      <footer style={{ padding: '2rem', background: '#0f172a', color: 'white', textAlign: 'center', marginTop: '2rem' }}>
        <p>© 2024 Jyoti Kumari. Built with React.js</p>
      </footer>
    </div>
  );
}

export default App;