import React from 'react';

const Experience = () => {
  return (
    <section style={{ padding: '4rem 2rem', background: 'white' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center', color: '#1E40AF' }}>
          Experience
        </h2>
        <div style={{ 
          padding: '2rem', 
          background: '#f8fafc', 
          borderRadius: '12px', 
          borderLeft: '4px solid #1E40AF',
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          <h3 style={{ color: '#1E40AF', marginBottom: '0.5rem', fontSize: '1.5rem' }}>
            Microsoft Technical Support Executive
          </h3>
          <p style={{ color: '#666', marginBottom: '1.5rem', fontSize: '1.1rem' }}>
            Teleperformance • Current Position
          </p>
          <ul style={{ lineHeight: '1.8', paddingLeft: '1.5rem' }}>
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