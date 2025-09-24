import React from 'react';

const Skills = () => {
  const skillCategories = [
    { name: 'Data Analytics', skills: ['Python', 'SQL', 'Pandas', 'NumPy', 'Data Visualization'] },
    { name: 'Web Development', skills: ['React.js', 'JavaScript', 'HTML/CSS', 'FastAPI', 'Node.js'] },
    { name: 'Database & Cloud', skills: ['MongoDB', 'MySQL', 'AWS', 'Git', 'REST APIs'] },
    { name: 'Tools & Others', skills: ['Microsoft Office', 'Technical Support', 'Problem Solving'] }
  ];

  return (
    <section id="skills" style={{ padding: '4rem 2rem', background: 'white' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center', color: '#1E40AF' }}>
          Skills & Technologies
        </h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: '2rem' 
        }}>
          {skillCategories.map((category, index) => (
            <div key={index} style={{ 
              padding: '2rem', 
              background: '#f8fafc', 
              borderRadius: '8px', 
              border: '2px solid #e2e8f0',
              transition: 'transform 0.2s ease',
            }}>
              <h3 style={{ marginBottom: '1.5rem', color: '#1E40AF', fontSize: '1.3rem' }}>
                {category.name}
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} style={{ 
                    padding: '0.75rem 0', 
                    borderBottom: '1px solid #e2e8f0',
                    fontSize: '1rem'
                  }}>
                    • {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;