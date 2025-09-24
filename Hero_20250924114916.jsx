import React from 'react';

const Hero = ({ data }) => {
  return (
    <section style={{ 
      padding: '4rem 2rem', 
      textAlign: 'center', 
      background: 'linear-gradient(135deg, #1E40AF, #06B6D4)', 
      color: 'white',
      minHeight: '80vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem', margin: 0 }}>
        {data?.name || 'Jyoti Kumari'}
      </h1>
      <p style={{ fontSize: '1.2rem', marginBottom: '2rem', maxWidth: '800px', margin: '0 auto 2rem' }}>
        {data?.tagline || 'BCA Graduate transitioning into Data Analytics'}
      </p>
      <div style={{ 
        padding: '1rem', 
        background: 'rgba(255,255,255,0.2)', 
        borderRadius: '8px', 
        display: 'inline-block',
        margin: '0 auto'
      }}>
        <p style={{ margin: 0 }}>
          {data?.currentRole || 'Microsoft Technical Support Executive'}
        </p>
      </div>
    </section>
  );
};

export default Hero;