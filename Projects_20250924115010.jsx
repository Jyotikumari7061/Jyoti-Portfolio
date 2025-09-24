import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'NYC Taxi Analytics Dashboard',
      description: 'Comprehensive analytics platform built with Python, FastAPI, MongoDB, and AWS to analyze and visualize NYC taxi trip data patterns, providing insights into trip durations, popular routes, and revenue analytics.',
      technologies: ['Python', 'FastAPI', 'MongoDB', 'AWS', 'Data Analytics'],
      githubUrl: 'https://github.com/Jyotikumari7061/nyc-taxi-analytics-dashboard'
    },
    {
      title: 'Data Annotation Quality Evaluation Platform',
      description: 'AI Content Evaluation Dashboard - annotation platform for AI text quality assessment with pairwise comparisons & analytics. Production-ready AI/ML solution with modern tech stack.',
      technologies: ['React', 'FastAPI', 'MongoDB', 'TypeScript', 'AI/ML'],
      githubUrl: 'https://github.com/Jyotikumari7061/Data-Annotation-Quality-Evaluation-Platform'
    }
  ];

  return (
    <section id="projects" style={{ padding: '4rem 2rem', background: '#f8fafc' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center', color: '#1E40AF' }}>
          Featured Projects
        </h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', 
          gap: '2rem' 
        }}>
          {projects.map((project, index) => (
            <div key={index} style={{ 
              padding: '2rem', 
              background: 'white', 
              borderRadius: '12px', 
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              border: '1px solid #e2e8f0'
            }}>
              <h3 style={{ marginBottom: '1rem', color: '#1E40AF', fontSize: '1.4rem' }}>
                {project.title}
              </h3>
              <p style={{ marginBottom: '1.5rem', lineHeight: '1.6', color: '#4a5568' }}>
                {project.description}
              </p>
              <div style={{ marginBottom: '1.5rem' }}>
                <strong style={{ color: '#2d3748' }}>Technologies:</strong>
                <div style={{ 
                  display: 'flex', 
                  flexWrap: 'wrap', 
                  gap: '0.5rem', 
                  marginTop: '0.75rem' 
                }}>
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} style={{ 
                      padding: '0.4rem 0.8rem', 
                      background: '#e2e8f0', 
                      borderRadius: '20px', 
                      fontSize: '0.9rem',
                      color: '#2d3748'
                    }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ 
                  color: '#1E40AF', 
                  textDecoration: 'none',
                  fontWeight: 'bold',
                  fontSize: '1rem'
                }}
              >
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