@"
import React from 'react';

const Footer = () => {
  return (
    <footer style={{ padding: '2rem', background: '#0f172a', color: 'white', textAlign: 'center' }}>
      <p>© 2024 Jyoti Kumari. Built with React.js</p>
    </footer>
  );
};

export default Footer;
"@ | Out-File -FilePath "Footer.jsx" -Encoding UTF8