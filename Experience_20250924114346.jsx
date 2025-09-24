@"
import React from 'react';

const Experience = ({ data }) => {
  return (
    <section style={{ padding: '4rem 2rem', background: 'white' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center' }}>Experience</h2>
        <div style={{ padding: '2rem', background: '#f8fafc', borderRadius: '8px', borderLeft: '4px solid #1E40AF' }}>
          <h3 style={{ color: '#1E40AF', marginBottom: '0.5rem' }}>Microsoft Technical Support Executive</h3>
          <p style={{ color: '#666', marginBottom: '1rem' }}>Teleperformance • Current</p>
          <ul style={{ lineHeight: '1.6' }}>
            <li>Provide technical support for Microsoft products and services</li>
            <li>Troubleshoot complex technical issues and provide solutions</li>
            <li>Maintain high customer satisfaction ratings</li>
            <li>Collaborate with cross-functional teams for issue resolution</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
"@ | Out-File -FilePath "Experience.jsx" -Encoding UTF8