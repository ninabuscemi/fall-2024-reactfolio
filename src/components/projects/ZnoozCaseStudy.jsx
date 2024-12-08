import React from 'react';
import './styles/global.css'; // Import global styles
import './styles/ZnoozCaseStudy.css'; // Import Znooz-specific styles

// Import the hero image
import heroImage from '../../assets/znooz/znooz-hero.png';

const ZnoozCaseStudy = () => {
  return (
    <div className="case-study-container">
      {/* Hero Image Section */}
      <div className="hero-banner">
        <img
          src={heroImage} // Use the imported image
          alt="Znooz Case Study Hero"
          className="hero-image"
        />
        <div className="hero-overlay">
          <h1 className="hero-title">Znooz Case Study</h1>
        </div>
      </div>
    </div>
  );
};

export default ZnoozCaseStudy;