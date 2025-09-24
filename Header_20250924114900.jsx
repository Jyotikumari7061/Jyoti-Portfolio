import React from 'react';

const Header = () => {
  return (
    <header style={{ padding: '1rem', background: '#1E40AF', color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <h1 style={{ margin: 0 }}>Jyoti Kumari</h1>
      <nav>
        <a href="#about" style={{ color: 'white', margin: '0 1rem', textDecoration: 'none' }}>About</a>
        <a href="#skills" style={{ color: 'white', margin: '0 1rem', textDecoration: 'none' }}>Skills</a>
        <a href="#projects" style={{ color: 'white', margin: '0 1rem', textDecoration: 'none' }}>Projects</a>
        <a href="#contact" style={{ color: 'white', margin: '0 1rem', textDecoration: 'none' }}>Contact</a>
      </nav>
    </header>
  );
};

export default Header;