import React from 'react';

const Portfolio = () => {
  return (
    <div>
      <header style={{ padding: '2rem', background: '#1E40AF', color: 'white', textAlign: 'center' }}>
        <h1>Jyoti Kumari</h1>
        <p>Data Analytics Portfolio</p>
      </header>
      
      <main style={{ padding: '2rem' }}>
        <section style={{ marginBottom: '3rem' }}>
          <h2>About Me</h2>
          <p>BCA Graduate transitioning into Data Analytics</p>
        </section>
        
        <section style={{ marginBottom: '3rem' }}>
          <h2>Skills</h2>
          <p>Python, SQL, React.js, MongoDB, AWS</p>
        </section>
        
        <section style={{ marginBottom: '3rem' }}>
          <h2>Projects</h2>
          <div style={{ background: '#f5f5f5', padding: '1rem', margin: '1rem 0' }}>
            <h3>NYC Taxi Analytics Dashboard</h3>
            <p>Analytics platform with Python, FastAPI, MongoDB</p>
          </div>
          <div style={{ background: '#f5f5f5', padding: '1rem', margin: '1rem 0' }}>
            <h3>Data Annotation Quality Platform</h3>
            <p>AI Content Evaluation with React and TypeScript</p>
          </div>
        </section>
        
        <section>
          <h2>Contact</h2>
          <p>Email: ruhi43210s@gmail.com</p>
          <p>GitHub: github.com/Jyotikumari7061</p>
        </section>
      </main>
      
      <footer style={{ padding: '2rem', background: '#333', color: 'white', textAlign: 'center' }}>
        <p>© 2024 Jyoti Kumari</p>
      </footer>
    </div>
  );
};

export default Portfolio;