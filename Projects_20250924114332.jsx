@"
import React from 'react';

const Projects = ({ data }) => {
  const projects = [
    {
      title: 'NYC Taxi Analytics Dashboard',
      description: 'Comprehensive analytics platform built with Python, FastAPI, MongoDB, and AWS to analyze NYC taxi trip data.',
      technologies: ['Python', 'FastAPI', 'MongoDB', 'AWS'],
      githubUrl: 'https://github.com/Jyotikumari7061/nyc-taxi-analytics-dashboard'
    },
    {
      title: 'Data Annotation Quality Evaluation Platform',
      description: 'AI Content Evaluation Dashboard for AI text quality assessment with analytics.',
      technologies: ['React', 'FastAPI', 'MongoDB', 'TypeScript'],
      githubUrl: 'https://github.com/Jyotikumari7061/Data-Annotation-Quality-Evaluation-Platform'
    }
  ];

  return (
    <section id="projects" style={{ padding: '4rem 2rem', background: '#f8fafc' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center' }}>Featured Projects</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
          {projects.map((project, index) => (
            <div key={index} style={{ padding: '2rem', background: 'white', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
              <h3 style={{ marginBottom: '1rem', color: '#1E40AF' }}>{project.title}</h3>
              <p style={{ marginBottom: '1rem', lineHeight: '1.6' }}>{project.description}</p>
              <div style={{ marginBottom: '1rem' }}>
                <strong>Technologies:</strong>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '0.5rem' }}>
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} style={{ padding: '0.25rem 0.5rem', background: '#e2e8f0', borderRadius: '4px', fontSize: '0.9rem' }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" style={{ color: '#1E40AF', textDecoration: 'none' }}>
                View on GitHub →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
"@ | Out-File -FilePath "Projects.jsx" -Encoding UTF8