@"
import React from 'react';

const Contact = ({ data }) => {
  return (
    <section id="contact" style={{ padding: '4rem 2rem', background: '#1E40AF', color: 'white' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Let's Connect</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
          <div>
            <h3>Email</h3>
            <p>ruhi43210s@gmail.com</p>
          </div>
          <div>
            <h3>GitHub</h3>
            <a href="https://github.com/Jyotikumari7061" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>
              github.com/Jyotikumari7061
            </a>
          </div>
          <div>
            <h3>LinkedIn</h3>
            <a href="https://www.linkedin.com/in/jyotiskumari/" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>
              linkedin.com/in/jyotiskumari
            </a>
          </div>
        </div>
        <p>Open to Data Analytics opportunities and technical challenges</p>
      </div>
    </section>
  );
};

export default Contact;
"@ | Out-File -FilePath "Contact.jsx" -Encoding UTF8