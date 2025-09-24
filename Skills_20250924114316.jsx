@"
import React from 'react';

const Skills = ({ data }) => {
  const skillCategories = [
    { name: 'Data Analytics', skills: ['Python', 'SQL', 'Pandas', 'NumPy'] },
    { name: 'Web Development', skills: ['React.js', 'JavaScript', 'HTML/CSS', 'FastAPI'] },
    { name: 'Database & Cloud', skills: ['MongoDB', 'MySQL', 'AWS', 'Git'] },
    { name: 'Tools & Others', skills: ['Microsoft Office', 'Technical Support', 'Problem Solving'] }
  ];

  return (
    <section id="skills" style={{ padding: '4rem 2rem', background: 'white' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center' }}>Skills & Technologies</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
          {skillCategories.map((category, index) => (
            <div key={index} style={{ padding: '2rem', background: '#f8fafc', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
              <h3 style={{ marginBottom: '1rem', color: '#1E40AF' }}>{category.name}</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} style={{ padding: '0.5rem 0', borderBottom: '1px solid #e2e8f0' }}>
                    {skill}
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
"@ | Out-File -FilePath "Skills.jsx" -Encoding UTF8