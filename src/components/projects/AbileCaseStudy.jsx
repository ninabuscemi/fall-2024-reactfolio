import React, { useRef } from 'react';
import './styles/AbileCaseStudy.css'; // Import Znooz-specific styles
// Import the hero image
import AbileCover from '../../assets/abile/abile_cover.png';
import AbileProblemImage from '../../assets/abile/abile-problem-image.png';
import LinkedIn from '../../assets/abile/linkedin.png';
import HandShake from '../../assets/abile/handshake.png';
import Persona from '../../assets/abile/sarah_persona.png';
import Task1 from '../../assets/abile/task_1_1.jpg';
import Task2 from '../../assets/abile/task_1_2.jpg';
import Task3 from '../../assets/abile/task_1_3.jpg';
import Task2_1 from '../../assets/abile/task_2_1.jpg';
import Task2_2 from '../../assets/abile/task_2_2.jpg';
import Task2_3 from '../../assets/abile/task_2_3.jpg';
import sign_in from '../../assets/abile/sign_in_1.png';
import home_screen from '../../assets/abile/home_screen_nav.png';
import messaging_center from '../../assets/abile/messaging_center.png';
import discussion from '../../assets/abile/discussion_1_2.png';
import video from '../../assets/abile/video_call.png';
import mentor from '../../assets/abile/mentor_match.png';

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
  <section className="intro-study-section introduction-section">
  <h1>Abile Expert App</h1>
  <h2>Project Overview</h2>
  <p>
    Abile is a user-friendly app designed to connect individuals with experienced mentors within seconds, 
    empowering users to navigate new career paths with confidence. Whether it’s posing quick questions, 
    seeking portfolio feedback, or scheduling video sessions, Abile makes expert guidance accessible and intuitive.
  </p>

 <li class="bullet-point">Type: Mobile App</li>

 <li class="bullet-point">Role: UX/UI Designer & Researcher</li>

 <li class="bullet-point">Tools Used: Figma, Adobe Illustrator, Miro</li>

 <li class="bullet-point">Duration: 3 months</li>

<li class="bullet-point">Deliverables: Low- and high-fidelity wireframes, clickable prototype, usability test findings, final design solutions</li>
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
    <section className="prob-study-section discovery-section">
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
        Navigating a new career path can be daunting for students and professionals alike. 
        Many feel uncertain about their fit for the role or industry, often needing expert guidance 
        to gain clarity and make confident, informed decisions. So, I wanted to understand the challenges individuals face when
        transitioning careers and how they seek support.</p> 
        
        <p>Through research and interviews, I posed the key question:
        How can we provide virtual support to help users successfully prepare for their career journey?
        </p>
        <p>
          User Needs/Goals:
        </p>
        <ul style={{ paddingLeft: '2rem', listStylePosition: 'outside' }}>
          <li class="bullet-point">Users need access to experienced mentors in their chosen field</li>
          <li class="bullet-point">Easy-to-use tools for interview preparation and feedback on resumes or portfolios</li>
          <li class="bullet-point">Real-time responses for pressing career questions</li>
        </ul>
      </div>
    </div>
  </section>

  {/* Competitive Analysis Section */} 
    <section className="competitive-analysis-section">
      <div className="section-title">
        <h2>Competitive Analysis</h2>
        <p>
          A detailed look at existing job finding and mentoring platforms, LinkedIn and Handshake, highlights their strengths, weaknesses, opportunities, and threats. 
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
          <li><strong>Age:</strong> 28</li>
          <li><strong>Occupation:</strong> Marketing Specialist</li>
          <li><strong>Location:</strong> Denver, Colorado</li>
          <li><strong>Education:</strong> Bachelor's Degree in Communications</li>
          <li><strong>Tech Savviness:</strong> Intermediate</li>
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
              <li className="bullet-point">Overwhelmed by the vast amount of information online.</li>
              <li className="bullet-point">Struggles to find credible sources of guidance.</li>
              <li className="bullet-point">Needs immediate answers but often waits days for responses on forums.</li>
            </ul>
          </li>
          <li><strong>Needs:</strong>
            <ul>
              <li className="bullet-point">A reliable platform to connect with vetted experts.</li>
              <li className="bullet-point">An intuitive and accessible interface for scheduling and communication.</li>
              <li className="bullet-point">Personalized guidance to make the most of her learning time.</li>
            </ul>
          </li>
          <li><strong>Goals:</strong>
            <ul>
              <li className="bullet-point">Gain confidence in understanding technical concepts in her new field.</li>
              <li className="bullet-point">Connect with an expert who can provide tailored guidance.</li>
              <li className="bullet-point">Get quick, actionable advice without committing to long, formal sessions.</li>
            </ul>
          </li>
        </ul>
      </div>
    </section>
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

  {/* Low-Fidelity Wireframes */}
  <h3>Low-Fidelity Wireframes</h3>
  <div className="abile-wireframe-container">
    <figure className="abile-wireframe-figure">
      <img src={Task1} alt="Post a discussion forum task" className="wireframe-task-1" />
      <figcaption className="abile-wireframe-caption">Click the highlighted button to start a discussion forum.</figcaption>
    </figure>

    <figure className="abile-wireframe-figure">
      <img src={Task2} alt="Search & apply for jobs task" className="wireframe-task-2" />
      <figcaption className="abile-wireframe-caption">Type a title and description for your post. Click on the highlighted button.
        <p><strong>Optional: upload an image, document, etc.</strong></p>
      </figcaption>
    </figure>

    <figure className="abile-wireframe-figure">
      <img src={Task3} alt="Third wireframe task" className="wireframe-task-3" />
      <figcaption className="abile-wireframe-caption">Dialogue box pop-up confirms your post has been published. 
        <strong>Options: view or edit your post.</strong>
      </figcaption>
    </figure>
  </div>

  {/* Mid-Fidelity Wireframes */}
  <h3>Mid-Fidelity Wireframes</h3>
      <div className="abile-wireframe-container">
        <figure className="abile-wireframe-figure">
          <img src={Task2_1} alt="Post a discussion forum task" className="wireframe-task-2-1" />
          <figcaption className="abile-wireframe-caption">Click the highlighted button to start a discussion forum.</figcaption>
        </figure>

        <figure className="abile-wireframe-figure">
          <img src={Task2_2} alt="Search & apply for jobs task" className="wireframe-task-2" />
          <figcaption className="abile-wireframe-caption">Type a title and description for your post. Click on the highlighted button.
            <p><strong>Optional: upload an image, document, etc.</strong></p>
          </figcaption>
        </figure>

        <figure className="abile-wireframe-figure">
          <img src={Task2_3} alt="Third wireframe task" className="wireframe-task-3" />
          <figcaption className="abile-wireframe-caption">Dialogue box pop-up confirms your post has been published. 
            <strong>Options: view or edit your post.</strong>
          </figcaption>
        </figure>
      </div>
    </section>

{/* Usability & testing iterations */}
  <section className="case-study-section abile-usability-section">
  <h3 className="usability"><strong>Usability Testing & Iterations</strong></h3>
  <p>
          To evaluate key features, I conducted usability testing with 5 participants, 
          guiding them through tasks and gathering feedback via surveys to identify areas of friction. 
          The insights helped refine the app’s layout, interface, and accessibility.
          Below are the improvements made based on user feedback after completing tasks like 
          signing in, navigating the home screen, and using the messaging center.
        </p>
      <div className="abile-usability-container">
        <figure className="abile-usability-figure">
          <img src={sign_in} alt="Post a discussion forum task" className="sign-in" />
          <figcaption className="abile-usability-caption">
          <strong>Sign-In Process:</strong>
                <li class="bullet-point">A "Remember Me" option was added for convenience.</li> 
                <li class="bullet-point">Improved accessibility with labels and placeholders.</li>
          </figcaption>
        </figure>

        <figure className="abile-usability-figure">
          <img src={home_screen} alt="Search & apply for jobs task" className="home-screen" />
          <figcaption className="abile-usability-caption">
            <p><strong>Home Screen Navigation: </strong>
                <li class="bullet-point">Replaced hover menus with static buttons for easier interaction.</li>
                <li class="bullet-point">A top search bar was added for faster navigation.</li></p>
          </figcaption>
        </figure>

        <figure className="abile-usability-figure">
          <img src={messaging_center} alt="Third wireframe task" className="messaging-center" />
          <figcaption className="abile-usability-caption"> 
          <p><strong>Messaging Center</strong>
          <li class="bullet-point">Included "My Mentor" badges for clarity.</li>
          <li class="bullet-point">Introduced notification dots for unread messages.</li> </p>
          </figcaption>
        </figure>
      </div>
    </section>

{/* Final Prototype */}
  <section className="case-study-section abile-prototype-section">
    <h3 className="usability"><strong>Final Prototype</strong></h3>
    <p>Problem: How can I help reduce the problems with loneliness to allow users to feel calm and relaxed throughout their day or at night?</p>
    
    <h3 className="prototype">Product Solutions:</h3>
    
    <div className="abile-solution">
      <img src={mentor} alt="Search & apply for jobs task" className="mentor-screen" />
      <div className="abile-solution-text">
        <p className="bullet-point"><strong>Mentor Matching:</strong> Users can browse and select mentors upon registration.</p>
      </div>
    </div>
    
    <div className="abile-solution">
    
      <div className="abile-solution-text">
        <p className="bullet-point"><strong>Live Video Calls:</strong> Users can prepare for interviews or discuss career strategies.</p>
        
      </div>
      <img src={video} alt="Search & apply for jobs task" className="abile-video" />
    </div>
    
    <div className="abile-solution">
      <img src={discussion} alt="Search & apply for jobs task" className="abile-discussion" />
      <div className="abile-solution-text">
        <p className="bullet-point"><strong>Discussion Forums:</strong> Users can upload materials for peer or mentor feedback.</p>
      </div>
    </div>

    <p className="highlight">
    <h3 className="usability"><strong>Challenge</strong></h3>
      The biggest challenge was finding suitable users unfamiliar with expert apps. 
      Overcoming this obstacle provided valuable insights into making Abile more intuitive and accessible.
    
      This project highlighted the value of:
      <ul>
        <li className="bullet-point">Iterative Design: Wireframing saved time by resolving usability issues early.</li>
        <li className="bullet-point">Adaptable Research Methods: Social media platforms proved effective for finding interviewees.</li>
      </ul>
   <div className="abile-video-container">
  <video controls width="100%" poster="thumbnail.jpg">
    <source src="your-video-file.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
  <p className="abile-video-summary">
    Abile is a career mentorship app designed to empower users by connecting them with industry 
    experts. Through features like expert Q&A, short video sessions, and personalized feedback, 
    Abile provides users with the confidence and guidance needed to navigate their career paths effectively.
  </p>
  <a 
    href="https://xd.adobe.com/view/4e624b95-085c-4a41-89bb-c248427087d7-1b31/" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="abile-prototype-button"
  >
    View Prototype
        </a>
        </div>
       </p>
    </section>
</div>
  );
};

export default AbileCaseStudy;