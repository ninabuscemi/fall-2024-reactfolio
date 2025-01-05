import React, { useRef } from 'react';
import './styles/ZnoozCaseStudy.css'; // Import Znooz-specific styles
import './styles/ZnoozMediaQueries.css'; // Import Znooz media queries

// Import the hero image
import heroImage from '../../assets/znooz/znooz-hero.png';
import discoveryImage from '../../assets/znooz/discovery-image-1.png';
import discoveryImage2 from '../../assets/znooz/discovery-image-2.png';
import researchImage from '../../assets/znooz/research-image-1.png';
import researchImage2 from '../../assets/znooz/research-image-2.png';
import researchImage3 from '../../assets/znooz/research-image-3.png';
import WireframeImage1 from '../../assets/znooz/wireframe-1.png';
import WireframeImage2 from '../../assets/znooz/wireframe-2.png';
import WireframeImage3 from '../../assets/znooz/wireframe-3.png';
import UIDesign from '../../assets/znooz/ui_design_znooz.png';
import PersonaPic from '../../assets/znooz/profile_picture_persona.png';
import HighFi1 from '../../assets/znooz/high-fi-1.png';
import HighFi2 from '../../assets/znooz/high-fi-2.png';
import HighFi3 from '../../assets/znooz/high-fi-3.png';
import Prototype from '../../assets/znooz/Znooz.mp4';



const ZnoozCaseStudy = () => {
  // References for sections
  const problemRef = useRef(null);
  const researchRef = useRef(null);
  const wireframesRef = useRef(null);
  const visualDesignRef = useRef(null);
  const testingRef = useRef(null);

  // Scroll to specific section
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="case-study-container" style={{ backgroundColor: 'white' }}>
      {/* Hero Image Section */}
      <div className="hero-container">
        <div className="hero-banner">
          <img
            src={heroImage}
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
  <h1>Znooz Meditation App</h1>
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


{/* Two Columns for Key Features and Design Goals */}
  <div className="columns-container">
    {/* Key Features Column */}
    <div className="column">
      <h3>Key Features</h3>
      <ul>
        <li>Meditation exercises</li>
        <li>Calming soundtracks</li>
        <li>Journal prompts</li>
        <li>Progress tracking with rewards</li>
      </ul>
    </div>

{/* Design Goals Column */}
    <div className="column">
      <h3>Design Goals</h3>
      <ul>
        <li>Foster a sense of calm</li>
        <li>Create a user-friendly interface</li>
        <li>Encourage consistent use</li>
        <li>Provide a visually soothing experience</li>
      </ul>
    </div>
  </div>
</section>

{/* Design Sprint Process Navigation */}
      <div className="design-sprint-navigation">
        <button
          className="circle-button"
          onClick={() => scrollToSection(problemRef)}
        >
          Problem
        </button>
        <div className="line-separator"></div>   

        <button
          className="circle-button"
          onClick={() => scrollToSection(researchRef)}
        >
          Research
        </button>
        <div className="line-separator"></div>   
        <button
          className="circle-button"
          onClick={() => scrollToSection(wireframesRef)}
        >
          Wireframes
        </button>
        <div className="line-separator"></div>    

        <button
          className="circle-button"
          onClick={() => scrollToSection(visualDesignRef)}
        >
          Visual Design
        </button>
        <div className="line-separator"></div>


        <button
          className="circle-button"
          onClick={() => scrollToSection(testingRef)}
        >
          Testing
        </button>
      </div>

{/* Problem Statement Section */}
  <section className="case-study-section discovery-section">
  {/* Discovery Section */}
  <div className="discovery-container">
    <img
      src={discoveryImage}
      alt="Discovery Illustration"
      className="discovery-image"
    />
    <div className="discovery-text">
      <h2>Discovery</h2>
      <p>
        Studies reveal that 47% of Americans often feel alone, excluded, or disconnected,
        highlighting the profound impact of loneliness. It is estimated to reduce life expectancy
        by up to 15 years, equivalent to the effects of obesity or smoking 15 cigarettes daily.
      </p>
      <p>
        As a UX designer, I approached this issue by asking:
      </p>
      <ul style={{ paddingLeft: '2rem', listStylePosition: 'outside' }}>
        <li>1. How can creative problem-solving address loneliness?</li>
        <li>2. How can I help users feel calm, connected, and at ease throughout their day or night?</li>
      </ul>
    </div>
  </div>

{/* Understanding Loneliness Section */}
  <div className="understanding-container">
    <div className="understanding-text">
      <h2>Understanding Loneliness</h2>
      <p>
        Recognizing and understanding one's thoughts and emotions can be challenging.
        Building awareness of these feelings is an essential step toward reducing loneliness.
        Additionally, people may experience loneliness even when surrounded by others.
      </p>
    </div>
    <img
      src={discoveryImage2}
      alt="Understanding Loneliness Illustration"
      className="understanding-image"
    />
  </div>
</section>

    {/* Research Section */}
      <section className="case-study-section research-section" ref={researchRef}>
        <h2>User Research</h2>
        <p>
          Loneliness is a universal experience, but its causes and impacts vary widely. 
          By exploring the persona's relationship with social media, relationships, and community dynamics, 
          I gained critical insights into how loneliness affects well-being and how technology can address it.
        </p>

        <h3><strong>User Persona</strong></h3>
        
        {/* User Persona Section */}
        <section className="user-persona-section">
          <div className="persona-image">
            <img
              src={PersonaPic}
              alt="User Persona - Alex"
              className="persona-photo"
            />
            <ul>
              <li><strong>Age:</strong> 28</li>
              <li><strong>Occupation:</strong> Marketing Specialist</li>
              <li><strong>Location:</strong> Downtown, bustling metropolitan city</li>
              <li><strong>Interests:</strong> Meditation, journaling, and self-improvement</li>
            </ul>
          </div>

  <div className="persona-details">
    <h3>Meet Alex</h3>
    <p>
      Alex is a 28-year-old marketing professional living in a bustling city. Despite having a demanding career,
      he often feels isolated and struggles with maintaining emotional well-being. In search of balance,
      Alex seeks tools that promote relaxation and emotional support, especially during nighttime after long, stressful days.
    </p>
    <ul>
      <li><strong>Challenges:</strong> 
        <ul>
          <li class="bullet-point">Managing feelings of loneliness</li>
          <li class="bullet-point">Difficulty falling asleep</li>
          <li class="bullet-point">Balancing mental relaxation with a fast-paced lifestyle</li>
        </ul>
      </li>
      <li><strong>Needs:</strong>
        <ul>
          <li class="bullet-point">Simple, accessible tools for relaxation</li>
          <li class="bullet-point">A calming and personalized digital space</li>
          <li class="bullet-point">Engaging activities like guided journaling and meditation</li>
        </ul>
      </li>
      <li><strong>Goals:</strong> 
        <ul>
          <li class="bullet-point">Feel emotionally supported and connected</li>
          <li class="bullet-point">Improve sleep quality</li>
          <li class="bullet-point">Maintain a healthy work-life balance</li>
        </ul>
        
      </li>
    </ul>
  </div>
</section>

{/* User Research Section */}
  <section className="case-study-section user-research">
        <h2>User Research</h2> 
        </section>
    <div className="images-container">
          <div className="image-item">
            <img src={researchImage} alt="Research image 1" className="case-study-image-1" />
            <h2>Awareness of Loneliness</h2>
            <p>Many struggle to recognize their feelings, making it harder to address loneliness. People can feel lonely even when surrounded by others.</p>
          </div>
          <div className="image-item">
            <img src={researchImage2} alt="Research image 2" className="case-study-image-2" />
            <h2>Journaling</h2>
            <p>Journaling fosters self-connection by reflecting on thoughts and emotions. However, some avoid it due to uncertainty about topics or skepticism about its benefits.</p>
          </div>
          <div className="image-item">
            <img src={researchImage3} alt="Research image 3" className="case-study-image-3" />
            <h2>Sleep Challenges</h2>
            <p>Loneliness often disrupts sleep, as overthinking and mental overwhelm make it difficult to unwind at night.</p>
          </div>
          </div>
  </section>

{/* Wireframes Section */}
      <section className="case-study-section wireframing-section" ref={wireframesRef}>
      <h2>Wireframes</h2>
    <p>
    During the wireframing process, I used the insights I gathered from my initial 
    research on loneliness to come up with solutions and frame them in my wireframe 
    sketches as tasks users will complete using Znooz.
  </p>
  <figcaption className="wireframe-caption">
      Task #1: Journal Prompt 
  </figcaption>
  <figure className="wireframe-figure">
    <img src={WireframeImage1} alt="Znooz Wireframe" className="wireframe-image-1"/>
  </figure>

  <figcaption className="wireframe-caption">
      Task #2: Learning Information
  </figcaption>
  <figure className="wireframe-figure">
    <img src={WireframeImage2} alt="Znooz Wireframe" className="wireframe-image-2"/>
  </figure>

  <figcaption className="wireframe-caption">
      Task #3: Play sounds & music
  </figcaption>
  <figure className="wireframe-figure">
    <img src={WireframeImage3} alt="Znooz Wireframe" className="wireframe-image-3"/>
  </figure>
</section>

{/* Visual Design Section */}
<section className="case-study-section visual-design-section" ref={visualDesignRef}>
  <h2 className="visual-design-title">Visual Design</h2>
  <p className="visual-design-paragraph">
    The design plan was for users to feel a sense of stability the moment they opened Znooz. 
    Since it is a mind and body wellness app, I wanted to use a blue style 
    gradient because blue has a calm and serene effect on the mind. 
    Also, I used sans-serif fonts to add the feeling of an informal 
    and friendly environment.
  </p>
  <img
    src={UIDesign}
    alt="Znooz High-Fidelity Design"
    className="visual-design-image"
  />
</section>

 {/* High-fi Wireframe Section */}
 <section className="case-study-section high-fi-section" ref={wireframesRef}>
      <h2>High-Fidelity Wireframes</h2>
    <p>
    During the wireframing process, I used the insights I gathered from my initial 
    research on loneliness to come up with solutions and frame them in my wireframe 
    sketches as tasks users will complete using Znooz.
  </p>
  <figcaption className="high-fi-caption">
      Task #1: Journal Prompt 
  </figcaption>
  <figure className="hi-fi-figure">
    <img src={HighFi1} alt="Znooz Wireframe" className="high-fi-image-1"/>
  </figure>

  <figcaption className="high-fi-caption">
      Task #2: Learning Information
  </figcaption>
  <figure className="high-fi-figure">
    <img src={HighFi2} alt="Znooz Wireframe" className="high-fi-image-2"/>
  </figure>

  <figcaption className="high-fi-caption">
      Task #3: Play sounds & music
  </figcaption>
  <figure className="high-fi-figure">
    <img src={HighFi3} alt="Znooz Wireframe" className="high-fi-image-3"/>
  </figure>
</section>

{/* User Testing Section */}
{false && (
<section className="case-study-section user-testing-section" ref={testingRef}>
    <h2>User Testing</h2>
    <p>
      User testing was conducted with a group of participants. Feedback was gathered to refine the app’s usability and ensure the design effectively addressed the initial problem.
    </p>
  </section> )}

{/* Final Prototype */}
  <section className="case-study-section prototype-section">
  <h2>Final Prototype</h2>
  <p>Problem: How can I help reduce the problems with loneliness to allow users to feel calm and relaxed throughout their day or at night?</p>
  
  <p>Product Solutions:</p>
  <ul className="product-solutions-list">
    <li class="bullet-point">Write journal prompts to process their thoughts and feelings</li>
    <li class="bullet-point">Play meditation exercises to ground themselves</li>
    <li class="bullet-point">Play relaxation exercises to fall back asleep</li>
    <li class="bullet-point">Listen to music or sounds for calm and relaxation</li>
    <li class="bullet-point">Level up and unlock rewards by earning points through journal prompts, meditations, exercises, or listening to soundtracks</li>
  </ul>
  <p>
    The final prototype represents the culmination of research, user insights, and design iterations. This product is a thoughtfully designed tool aimed at reducing loneliness and promoting relaxation. By incorporating interactive and user-focused solutions, it provides a seamless and engaging experience. Each feature was crafted to empower users to prioritize their well-being while making the journey enjoyable and rewarding.  
  </p>
  <div className="video-container">
    <video controls width="100%" poster="thumbnail.jpg">
      <source src={Prototype} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <p className="video-summary">
      This video showcases the final prototype, illustrating how features like journaling, meditation, relaxation exercises, and the reward system work together to enhance user well-being. 
    </p>
  </div>
</section>

</div>

  );
};

export default ZnoozCaseStudy;
