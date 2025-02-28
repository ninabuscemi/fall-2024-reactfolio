import React, { useRef } from 'react';
import './styles/WarrenCaseStudy.css'; // Import Znooz-specific styles

const WarrenCaseStudy = () => {
  return (
    <div className="case-study-container" style={{ backgroundColor: 'white' }}>

      {/* Hero Image Section */}
      <div className="hero-container">
        <div className="hero-banner">
          <img
            src="{heroImage}"
            alt="Warren Case Study Hero"
            className="hero-image"/>
          <div className="hero-overlay">
            <h1 className="hero-title">Warren Case Study</h1>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
<section className="case-study-section introduction-section">
  <h1>Warren Podiatry Website</h1>
  <h2>Project Overview</h2>
  <p>
    Warren Podiatry is a podiatrist's office dedicated to providing top-quality foot and ankle care. Their existing online presence lacked functionality, 
    user experience optimization, and search engine visibility. The goal was to design and develop a professional, user-friendly website to streamline 
    appointment scheduling, improve patient engagement, and enhance the practice's online credibility.  need one sentence to summarize this for a description.
  </p>
  {/* Live Prototype Button */}
  <a
    href="https://www.warrenpodiatry.com/" // Replace with your actual prototype link
    target="_blank"
    rel="noopener noreferrer"
    className="live-prototype-button">
    View Live Prototype
  </a>
  </section>
</div>
  );
};
export default WarrenCaseStudy;