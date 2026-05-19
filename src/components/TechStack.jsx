import React from 'react';
import './TechStack.css';

const TechStack = () => {
  const technologies = [
    'React', 'Node.js', 'Python', 'AWS', 'TensorFlow', 'PostgreSQL', 
    'Docker', 'Kubernetes', 'GraphQL', 'Next.js', 'TypeScript', 'Flutter'
  ];

  return (
    <section className="tech-section">
      <div className="tech-container">
        <h2 className="tech-title">Powered by Modern Tech</h2>
        <div className="marquee-wrapper">
          <div className="marquee-content">
            {technologies.map((tech, idx) => (
              <span key={`tech1-${idx}`} className="tech-badge">{tech}</span>
            ))}
            {/* Duplicate for seamless scrolling */}
            {technologies.map((tech, idx) => (
              <span key={`tech2-${idx}`} className="tech-badge">{tech}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
