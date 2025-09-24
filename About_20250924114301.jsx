@"
import React from 'react';

const About = ({ data }) => {
  return (
    <section id="about" style={{ padding: '4rem 2rem', background: '#f8fafc' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center' }}>About Me</h2>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '2rem' }}>
          {data?.content || 'Fresh BCA graduate with hands-on experience in technical support and a passion for data-driven insights. Currently working as a Microsoft Technical Support Executive at Teleperformance while actively transitioning into Data Analytics through self-learning and practical projects.'}
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
          <div style={{ padding: '1.5rem', background: 'white', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
            <h3>Education</h3>
            <p>BCA Graduate</p>
          </div>
          <div style={{ padding: '1.5rem', background: 'white', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
            <h3>Current Role</h3>
            <p>Microsoft Technical Support</p>
          </div>
          <div style={{ padding: '1.5rem', background: 'white', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
            <h3>Goal</h3>
            <p>Data Analytics Professional</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
"@ | Out-File -FilePath "About.jsx" -Encoding UTF8