import React from 'react';

const Contact = () => {
  return (
    <section id="contact" style={{ 
      padding: '4rem 2rem', 
      background: 'linear-gradient(135deg, #1E40AF, #06B6D4)', 
      color: 'white' 
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem' }}>Let's Connect</h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '2rem', 
          marginBottom: '2rem' 
        }}>
          <div style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.1)', borderRadius: '8px' }}>
            <h3 style={{ marginBottom: '1rem' }}>Email</h3>
            <p style={{ margin: 0 }}>ruhi43210s@gmail.com</p>
          </div>
          <div style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.1)', borderRadius: '8px' }}>
            <h3 style={{ marginBottom: '1rem' }}>GitHub</h3>
            <a href="https://github.com/Jyotikumari7061" target="_blank" rel="noopener noreferrer" 
               style={{ color: 'white', textDecoration: 'none' }}>
              github.com/Jyotikumari7061
            </a>
          </div>
          <div style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.1)', borderRadius: '8px' }}>
            <h3 style={{ marginBottom: '1rem' }}>LinkedIn</h3>
            <a href="https://www.linkedin.com/in/jyotiskumari/" target="_blank" rel="noopener noreferrer" 
               style={{ color: 'white', textDecoration: 'none' }}>
              linkedin.com/in/jyotiskumari
            </a>
          </div>
        </div>
        <p style={{ fontSize: '1.1rem', marginTop: '2rem' }}>
          Open to Data Analytics opportunities and technical challenges
        </p>
      </div>
    </section>
  );
};

export default Contact;