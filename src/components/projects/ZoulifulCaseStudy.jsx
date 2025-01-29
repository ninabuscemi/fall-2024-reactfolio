import React, { useRef } from 'react';
import './styles/ZnoozCaseStudy.css'; // Import Znooz-specific styles
import './styles/AbileCaseStudy.css'; // Import Znooz-specific styles
import './styles/ZoulifulCaseStudy.css'; // Import Znooz-specific styles
import Zouliful from '../../assets/zouliful/zoulifuljewelry.jpg';
import IntroImage from '../../assets/zouliful/intro_image.png';
import zoul1 from '../../assets/zouliful/research_image_1.jpeg';
import zoul2 from '../../assets/zouliful/research_image_2.jpeg';
import Persona from '../../assets/zouliful/persona_nat.png';

const ZoulifulCaseStudy = () => {
  return (
    <div className="case-study-section" style={{ backgroundColor: 'white' }}>
      {/* Hero Image Section */}
      <div className="zouliful-hero-container">
        <div className="zouliful-hero-banner">
          <img
            src={Zouliful}
            alt="zouliful Case Study Hero"
            className="zouliful-hero-image"
          />
          <div className="zouliful-hero-overlay">
            <h1 className="zouliful-hero-title">Zouliful Case Study</h1>
          </div>
        </div>
      </div>

  {/* Introduction Section */}
    <section className="intro-study-section zouliful-introduction-section">
        <h1>Zouliful Case Study</h1>
        <h2>Project Overview</h2>
        <p>
          Zouliful Jewelry offers a unique and professional shopping experience featuring zodiac-themed jewelry.
          The goal of this project was to create a captivating and intuitive eCommerce platform to showcase the brand’s
          exquisite designs while providing personalized and seamless user experiences.
        </p>

        <ul>
          <li className="bullet-point">Type: eCommerce Website</li>
          <li className="bullet-point">Role: UX/UI Designer & Researcher</li>
          <li className="bullet-point">Tools Used: Figma, Adobe Illustrator, Miro</li>
          <li className="bullet-point">Duration: 3 months</li>
          <li className="bullet-point">
            Deliverables: Low- and high-fidelity wireframes, clickable prototype, usability test findings, final design solutions
          </li>
        </ul>

        {/* Live Prototype Button */}
        <a
          href="https://your-prototype-link.com" // Replace with your actual prototype link
          target="_blank"
          rel="noopener noreferrer"
          className="zouliful-prototype-button"
        >
          View Live Prototype
        </a>

        {/* Two Columns for Key Features and Design Goals */}
        <div className="zouliful-container">
          {/* Key Features Column */}
          <div className="zouliful">
            <h3>Key Features</h3>
            <ul>
              <li>Personalized product recommendations based on zodiac signs</li>
              <li>Customization options for materials, gemstones, and engravings</li>
              <li>High-quality product visuals with symbolic descriptions</li>
              <li>Intuitive navigation with categorized collections</li>
              <li>Smooth and secure checkout process</li>
            </ul>
          </div>

          {/* Design Goals Column */}
          <div className="zouliful">
            <h3>Design Goals</h3>
            <ul>
              <li>Ensure a seamless, user-friendly shopping journey</li>
              <li>Create a visually engaging platform that reflects brand identity</li>
              <li>Provide transparency with detailed product information</li>
              <li>Encourage user engagement through personalization</li>
              <li>Optimize for both desktop and mobile experiences</li>
            </ul>
          </div>
        </div>
      </section>

  {/* Problem Statement Section */}
      <section className="prob-study-section zouliful-discovery-section">
        {/* Discovery Section */}
        <div className="zouliful-problem-container">
          <img
            src={IntroImage}
            alt="Discovery Illustration"
            className="zouliful-problem-image"
          />
          <div className="zouliful-problem-text">
            <h2>What is the problem?</h2>
            <p>
            While Zouliful Jewelry thrived on Etsy, the brand sought to expand its online presence 
            through a dedicated website. Challenges included:
              <li class="bullet-point">Creating an effective platform to showcase zodiac-themed jewelry.</li>
              <li class="bullet-point">Offering personalized shopping experiences tailored to each zodiac sign.</li>
              <li class="bullet-point">Ensuring seamless usability for desktop and mobile users.</li> 
            </p>
            <h2>Problem Statement</h2>
            <p>How can we enhance the user experience of Zouliful Jewelry’s website to effectively 
            showcase zodiac jewelry and cater to each sign’s unique preferences? </p>
          </div>
        </div>
      </section>

 {/* User Research Section */}
<section className="user-research-section">
  {/* Title */}
  <div className="user-research-title">
    <h2>User Research</h2>
    <p>
      A detailed look at existing job finding and mentoring platforms, LinkedIn and Handshake, highlights 
      their strengths, weaknesses, opportunities, and threats. These insights guide Abile’s strategy to 
      address gaps and provide a superior mentorship experience.
    </p>
  </div>

  {/* Content & Images */}
  <div className="user-research-content">
    {/* Images */}
    <div className="research-images">
      <div className="image-container">
        <img src={zoul1} alt="User Research Image 1" className="research-image" />
      </div>
      <div className="image-container">
        <img src={zoul2} alt="User Research Image 2" className="research-image" />
      </div>
    </div>

    {/* Text Content */}
    <div className="research-text">
      <h3>Interview Overview</h3>
      <p>
        To align the website’s design with customer needs, I conducted interviews with potential and existing customers. 
        These conversations explored user preferences for spiritual accessories, motivations for purchasing, and expectations 
        from a premium jewelry brand.
      </p>

      <h3>Research Goals</h3>
      <p>
      <ul>
        <li className="bullet-point">Understand user preferences and motivations for purchasing spiritual jewelry.</li>
        <li className="bullet-point">Assess usability gaps in existing jewelry platforms.</li>
        <li className="bullet-point">Identify Zouliful Jewelry’s unique selling points to differentiate it from competitors.</li>
      </ul>
      </p>

      <h3>Key Insights</h3>
      <p>
      <ul>
        <li className="bullet-point">Symbolism Matters: Users value jewelry with deep spiritual significance and a personal connection 
        to their zodiac sign.</li>
        <li className="bullet-point">Seamless Navigation: Many users found other jewelry sites difficult to navigate and desired 
        better filtering options.</li>
        <li className="bullet-point">Customization Demand: Customers sought options to personalize jewelry with birthstones, metals, and engraving.</li>
        <li className="bullet-point">Mobile Optimization: Mobile usability was crucial for a large segment of the audience.</li>
      </ul>
      </p>
      </div>
  </div>
</section>

 {/* User Persona Section*/}
    <section className="case-study-section user-persona">
    <h2><strong>User Persona</strong></h2>
    <p>
      To ensure Abile meets the needs of its target audience, a detailed user persona was created based on research and user feedback.
    </p>
    <section className="user-persona-section">
      <div className="persona-image">
        <img
          src={Persona}
          alt="User Persona - Sarah Thompson"
          className="persona-photo"
        />
        <ul>
          <li><strong>Age:</strong> 32</li>
          <li><strong>Occupation:</strong> Yoga Instructor</li>
          <li><strong>Location:</strong> Denver, Colorado</li>
          <li><strong>Education:</strong> Bachelor's Degree in Communications</li>
          <li><strong>Tech Savviness:</strong> Intermediate</li>
        </ul>
      </div>
      <div className="persona-details">
        <h3>Meet Natalie</h3>
        <p>
          Natalie Flores is a 32-year-old yoga instructor who lives in Denver, Colorado. She’s deeply connected to her personal 
          beliefs and finds joy in expressing them through symbolic and meaningful jewelry. Jewelry for Natalie is more than just 
          an accessory—it reflects her values and a way to feel more connected to her identity.
        </p>
        <ul>
          <li><strong>Challenges:</strong>
            <ul>
              <li className="bullet-point">Enhancing her style with high-quality, symbolic jewelry.</li>
              <li className="bullet-point">Reflecting her beliefs and values through her accessory choices.</li>
              <li className="bullet-point">Supporting brands that prioritize ethical sourcing and craftsmanship.</li>
            </ul>
          </li>
          <li><strong>Frustrations:</strong>
            <ul>
              <li className="bullet-point">Lack of detailed product information explaining symbolism and materials.</li>
              <li className="bullet-point">Disorganized navigation that makes finding specific items challenging.</li>
              <li className="bullet-point">Limited options for customization to create a personal connection with products.</li>
            </ul>
          </li>
          <li><strong>Goals:</strong>
            <ul>
              <li className="bullet-point">A seamless and intuitive online shopping experience.</li>
              <li className="bullet-point">Access to detailed and engaging product descriptions.</li>
              <li className="bullet-point">Get quick, actionable advice without committing to long, formal sessions.</li>
            </ul>
          </li>
        </ul>
      </div>
    </section>

    {/* Wireframing & Solutions Section */}
    <section className="wireframing-section">
      <div className="wireframing-title">
        <h2>Wireframing & Solutions</h2>
        <p>
          To create a seamless shopping experience, I designed mobile and desktop wireframes that prioritize visual engagement 
          and user-friendliness. These wireframes informed the final design solutions, ensuring a cohesive user journey from the homepage to checkout.
        </p>
      </div>

      <div className="wireframing-content">
        {/* Wireframe Images */}
        <div className="wireframe-images">
          <div className="image-container">
            <img src="mobile-wireframe.jpg" alt="Mobile Wireframe" className="wireframe-image" />
            <p className="image-caption">Mobile Wireframe</p>
          </div>
          <div className="image-container">
            <img src="desktop-wireframe.jpg" alt="Desktop Wireframe" className="wireframe-image" />
            <p className="image-caption">Desktop Wireframe</p>
          </div>
        </div>

        {/* Wireframe Descriptions */}
        <div className="wireframe-text">
          <h3>Mobile Version:</h3>
          <ul>
            <li>Captivating Home Screen: Inspires exploration and personalization.</li>
            <li>Simple Navigation: Makes browsing effortless.</li>
            <li>Organized Product Listings: Ensures easy discovery.</li>
            <li>Detailed Product Pages: Features high-quality images and comprehensive descriptions.</li>
            <li>Hassle-Free Checkout: Streamlines the purchasing process.</li>
          </ul>

          <h3>Desktop Version:</h3>
          <ul>
            <li>Captivating Homepage: Highlights the appeal of spiritual jewelry.</li>
            <li>Easy Navigation: Organized categories for effortless browsing of products and customization options.</li>
            <li>Dynamic Product Showcase: High-quality images paired with compelling descriptions.</li>
            <li>Intuitive Filter and Sort Options: Enables searches by price, gemstone, and metal type.</li>
            <li>Detailed Product Pages: Includes symbolic meanings and related product suggestions.</li>
          </ul>
        </div>
      </div>
    </section>
</section>
    </div>
  );
};

export default ZoulifulCaseStudy;