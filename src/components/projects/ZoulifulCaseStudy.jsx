import React, { useRef } from 'react';
import './styles/ZnoozCaseStudy.css'; // Import Znooz-specific styles
import './styles/AbileCaseStudy.css'; // Import Znooz-specific styles

const ZoulifulCaseStudy = () => {
  // References for sections

  return (
    <div className="case-study-container" style={{ backgroundColor: 'white' }}>
      {/* Hero Image Section */}
      <div className="hero-container">
        <div className="hero-banner">
          <img
            src=""
            alt="Znooz Case Study Hero"
            className="hero-image"
          />
          <div className="hero-overlay">
            <h1 className="hero-title">Znooz Case Study</h1>
          </div>
        </div>
      </div>

{/* Introduction Section */}
<section className="case-study-section introduction-section">
  <h1>Abile Expert App</h1>
  <h2>Project Overview</h2>
  <p>
    Znooz is a self-care mobile app that helps users manage loneliness 
    and maintain healthy well-being with meditation exercises, journal prompts, 
    and calming sounds.
  </p>
  {/* Live Prototype Button */}
  <a
    href="https://your-prototype-link.com" // Replace with your actual prototype link
    target="_blank"
    rel="noopener noreferrer"
    className="live-prototype-button"
  >
    View Live Prototype
  </a>

</div>

  );
};
