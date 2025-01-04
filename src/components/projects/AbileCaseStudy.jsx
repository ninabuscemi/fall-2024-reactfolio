import React, { useRef } from 'react';
import './styles/AbileCaseStudy.css'; // Import Znooz-specific styles
// Import the hero image
import AbileCover from '../../assets/abile/abile_cover.png';
import AbileProblemImage from '../../assets/abile/abile-problem-image.png';
import LinkedIn from '../../assets/abile/linkedin.png';
import HandShake from '../../assets/abile/handshake.png';


const AbileCaseStudy = () => {
  // References for sections

  return (
    <div className="case-study-section" style={{ backgroundColor: 'white' }}>
  {/* Hero Image Section */}
      <div className="abile-hero-container">
        <div className="abile-hero-banner">
          <img
            src={AbileCover}
            alt="Abile Case Study Hero"
            className="abile-hero-image"
          />
          <div className="aible-hero-overlay">
            <h1 className="abile-hero-title">Abile Case Study</h1>
          </div>
        </div>
      </div>

  {/* Introduction Section */}
  <section className="case-study-section introduction-section">
  <h1>Abile Expert App</h1>
  <h2>Project Overview</h2>
  <p>
    Abile is a user-friendly app designed to connect individuals with experienced mentors within seconds, 
    empowering users to navigate new career paths with confidence. Whether it’s posing quick questions, 
    seeking portfolio feedback, or scheduling video sessions, Abile makes expert guidance accessible and intuitive.
  </p>
  {/* Live Prototype Button */}
  <a
    href="https://your-prototype-link.com" // Replace with your actual prototype link
    target="_blank"
    rel="noopener noreferrer"
    className="abile-prototype-button"
  >
    View Live Prototype
  </a>

  {/* Two Columns for Key Features and Design Goals */}
  <div className="abile-container">
    {/* Key Features Column */}
    <div className="abile">
      <h3>Key Features</h3>
      <ul>
        <li>Offer mentorship for career shifts</li>
        <li>Mentor Connections</li>
        <li>Enhance confidence with interview prep</li>
        <li>Enable networking through forums</li>
      </ul>
    </div>

{/* Design Goals Column */}
    <div className="abile">
      <h3>Design Goals</h3>
      <ul>
        <li>Focus on intuitive, accessible design</li>
        <li>Use engaging, professional visuals</li>
        <li>Provide scalable, user-centered tools</li>
        <li>Improve through user feedback</li>
      </ul>
    </div>
    </div>
    </section>

  {/* Design Sprint Process Navigation */}
    <div className="abile-design-sprint-navigation">
        <button
          className="abile-circle-button"
          onClick={() => scrollToSection(problemRef)}
        >
          Problem
        </button>
        <div className="abile-line-separator"></div>   

        <button
          className="abile-circle-button"
          onClick={() => scrollToSection(researchRef)}
        >
          Research
        </button>
        <div className="abile-line-separator"></div>   
        <button
          className="abile-circle-button"
          onClick={() => scrollToSection(wireframesRef)}
        >
          Wireframes
        </button>
        <div className="abile-line-separator"></div>    

        <button
          className="abile-circle-button"
          onClick={() => scrollToSection(visualDesignRef)}
        >
          Visual Design
        </button>
        <div className="abile-line-separator"></div>


        <button
          className="abile-circle-button"
          onClick={() => scrollToSection(testingRef)}
        >
          Testing
        </button>
    </div>

  {/* Problem Statement Section */}
    <section className="case-study-section discovery-section">
    {/* Discovery Section */}
    <div className="abile-problem-container">
      <img
        src={AbileProblemImage}
        alt="Discovery Illustration"
        className="abile-problem-image"
      />
      <div className="abile-problem-text">
        <h2>What is the problem?</h2>
        <p>
        Navigating a new career path can be daunting for students and professionals alike. Many feel uncertain about their fit for the role or industry, often needing expert guidance to gain clarity and make confident, informed decisions.

        Key Question:
        How can we provide virtual support to help users successfully prepare for their career journey?
        </p>
        <p>
          User Needs/Goals:
        </p>
        <ul style={{ paddingLeft: '2rem', listStylePosition: 'outside' }}>
          <li class="bullet-point">Need: A mentor in their field</li>
          <li class="bullet-point">Need: Help preparing for interviews</li>
          <li class="bullet-point">Need: Feedback on resumes, portfolios, or cover letters</li>
        </ul>
      </div>
    </div>
  </section>

  {/* Competitive Analysis Section */} 
    <section className="competitive-analysis-section">
      <div className="section-title">
        <h2>Competitive Analysis</h2>
        <p>
          A detailed look at existing platforms, LinkedIn and Handshake, highlights their strengths, weaknesses, opportunities, and threats. 
          These insights guide Abile’s strategy to address gaps and provide a superior mentorship experience.
        </p>
      </div>

      <div className="competitor-columns">
        <div className="competitor-column">
          <img
            src={LinkedIn}
            alt="LinkedIn Logo"
            className="competitor-logo"
          />
          <h3>LinkedIn</h3>
          <div className="rating">
            ⭐⭐⭐⭐☆ <span>(4.3/5)</span>
          </div>
          <ul>
            <li><strong>Strengths:</strong>
              <ul>
                <li className="bullet-point">Extensive professional network</li>
                <li className="bullet-point">Job search and application tools</li>
                <li className="bullet-point">Highly recognized brand</li>
              </ul>
            </li>
            <li><strong>Weaknesses:</strong>
              <ul>
                <li className="bullet-point">Overwhelming interface for new users</li>
                <li className="bullet-point">Limited mentorship-specific features</li>
              </ul>
            </li>
            <li><strong>Opportunities:</strong>
              <ul>
                <li className="bullet-point">Integration of better virtual mentorship tools</li>
                <li className="bullet-point">Improved accessibility for students</li>
              </ul>
            </li>
            <li><strong>Threats:</strong>
              <ul>
                <li className="bullet-point">Increasing competition in mentorship apps</li>
                <li className="bullet-point">User retention challenges</li>
              </ul>
            </li>
              <li><strong>Influence:</strong>
              <ul>
                LinkedIn’s complex interface and lack of mentorship features guided Abile to prioritize 
                simplicity and mentorship-specific tools. Our design focuses on an intuitive user 
                experience and accessibility for students and early-career professionals.
              </ul>
            </li>
          </ul>
        </div>

        <div className="competitor-column">
          <img
            src={HandShake}
            alt="Handshake Logo"
            className="competitor-logo"
          />
          <h3>Handshake</h3>
          <div className="rating">
            ⭐⭐⭐⭐☆ <span>(4.8/5)</span>
            </div>
          <ul>
            <li><strong>Strengths:</strong>
              <ul>
                <li className="bullet-point">Student-focused platform</li>
                <li className="bullet-point">Strong university partnerships</li>
                <li className="bullet-point">Tailored job recommendations</li>
              </ul>
            </li>
            <li><strong>Weaknesses:</strong>
              <ul>
                <li className="bullet-point">Limited features for seasoned professionals</li>
                <li className="bullet-point">Dependence on university collaborations</li>
              </ul>
            </li>
            <li><strong>Opportunities:</strong>
              <ul>
                <li className="bullet-point">Expanding features for alumni networking</li>
                <li className="bullet-point">Introducing more mentorship-specific tools</li>
              </ul>
            </li>
            <li><strong>Threats:</strong>
              <ul>
                <li className="bullet-point">Competition with general professional platforms</li>
                <li className="bullet-point">Shifting user preferences</li>
              </ul>
            </li>

            <li><strong>Influence:</strong>
              <ul>
                Handshake’s student focus highlighted 
                the need for Abile to serve users at all career stages. We prioritized 
                features supporting long-term mentorship and professional growth.
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </section>

  {/* Wireframes Section */}
      <section className="case-study-section abile-wireframing-section">
        <h2>Wireframing & Prototyping</h2>
        <p>
        To lay the foundation for Abile's user experience, I started with low-fidelity paper wireframes. 
        These sketches mapped essential user tasks and flows, ensuring a logical and intuitive information architecture. 
        By keeping the designs simple at this stage, I was able to focus on addressing user needs and integrating 
        insights from research and competitive analysis.
      </p>
      <figcaption className="abile-wireframe-caption">
          Task #1: Post a discussion forum
      </figcaption>
      <figure className="abile-wireframe-figure">
        <img src="" alt="" className="wireframe-image-1"/>
      </figure>
    
      <figcaption className="abile-wireframe-caption">
          Task #2: Search for jobs & apply
      </figcaption>
      <figure className="abile-wireframe-figure">
        <img src="{WireframeImage2}" alt="Abile Wireframe" className="wireframe-image-2"/>
      </figure>
    </section>

  {/* User Persona Section*/}
    <section className="case-study-section user-persona">
            <h2>User Persona</h2>
            <p>
              To ensure Abile meets the needs of its target audience, a detailed user persona was created based on research and user feedback.
            </p>
            
            {/* User Persona Section */}
            <section className="user-persona-section">
              <div className="persona-image">
                <img
                  src=""
                  alt="User Persona - Sarah Thompson"
                  className="persona-photo"
                />
                <ul>
                  <li><strong>Age:</strong> 28</li>
                  <li><strong>Occupation:</strong> Marketing Specialist</li>
                  <li><strong>Location:</strong> Denver, Colorado</li>
                  <li><strong>Education:</strong> Bachelor's Degree in Communications </li>
                  <li><strong>Tech Savviness:</strong> Intermediate </li>
                </ul>
              </div>
    
      <div className="persona-details">
        <h3>Meet Sarah</h3>
        <p>
          Sarah is a marketing specialist who has recently decided to pivot her career into data analytics, 
          a field she’s passionate about but relatively new to. She has a busy schedule and is balancing her 
          current job while trying to upskill through online courses and certifications.
        </p>
        <ul>
          <li><strong>Challenges:</strong> 
            <ul>
              <li class="bullet-point">Overwhelmed by the vast amount of information online.</li>
              <li class="bullet-point">Struggles to find credible sources of guidance.</li>
              <li class="bullet-point">Needs immediate answers but often waits days for responses on forums.</li>
            </ul>
          </li>
          <li><strong>Needs:</strong>
            <ul>
              <li class="bullet-point">A reliable platform to connect with vetted experts.</li>
              <li class="bullet-point">An intuitive and accessible interface for scheduling and communication.</li>
              <li class="bullet-point">Personalized guidance to make the most of her learning time.</li>
            </ul>
          </li>
          <li><strong>Goals:</strong> 
            <ul>
              <li class="bullet-point">Gain confidence in understanding technical concepts in her new field.</li>
              <li class="bullet-point">Connect with an expert who can provide tailored guidance.</li>
              <li class="bullet-point">Get quick, actionable advice without committing to long, formal sessions.</li>
            </ul>
          </li>
        </ul>
      </div>
      </section>
    </section>

    
</div>

  );
};

export default AbileCaseStudy;