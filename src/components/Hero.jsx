import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">
          AI-Assisted Custom Software<br />Development Company
        </h1>
        <div className="hero-description">
          <p>
            ByteBandit is a custom software development company building AI/ML solutions and AI-powered web, mobile, and SaaS products for startups and enterprises. Founded in 2019, our 90+ engineer team designs and ships products using AI-assisted tools - and since then, we've delivered 102+ live products to clients across 17 countries, with zero projects abandoned and an 80% repeat client rate.
          </p>
          <p>
            Every product starts with a clear, well-defined specification and moves through AI-augmented design, architecture, code review, and deployment pipelines - built to ship reliably and hold up at scale.
          </p>
        </div>
        <div className="hero-buttons">
          <button className="btn btn-primary">Book a Free Consultation</button>
          <button className="btn btn-secondary">View Our Portfolio</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;