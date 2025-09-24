{/* Profile Image */}
<div style={{ marginBottom: '3rem' }}>
  <div style={{ position: 'relative', display: 'inline-block' }}>
    <img
      src="https://customer-assets.emergentagent.com/job_fresh-analyst/artifacts/3r8yvm5t_professional.jpg"
      alt="Jyoti Kumari"
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