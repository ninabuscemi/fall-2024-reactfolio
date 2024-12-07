import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { shaq, bwmap, worldmap } from '../assets';

const Hero = () => {
  return (
    <>
      {/* Background images for the Hero section */}
      {/* <div className="absolute top-0 left-0 z-0 h-[100vh] w-screen">
        <img
          src={bwmap}
          alt="world map"
          className="w-full h-full sm:block hidden object-cover" // Desktop background map
        /> 
      </div> 
      <div className="absolute top-0 left-0 z-0 h-[100vh] w-screen">
        <img
          src={worldmap}
          alt="world map"
          className="w-full h-full sm:hidden block object-cover" // Mobile background map
        />
      </div> */}

      {/* Hero Section */}
      <section
        className="relative flex sm:flex-row flex-col w-full h-screen mx-auto 
        sm:bg-hero bg-hero-mobile overflow-hidden"
      >
        {/* Shaquille image */}
        <div className="relative flex-shrink-0 sm:w-1/2 w-full sm:h-auto h-[50vh]">
          <img
            className="absolute bottom-0 left-0 sm:w-auto w-full sm:h-[90vh] md:h-[80vh] xl:h-[90vh] object-contain"
            src={shaq}
            alt="Shaquille"
          />
        </div>

        {/* Groups of Dots (Pattern) */}
        <div className="absolute top-0 left-0 w-full h-full z-0 flex justify-center items-center">

          {/* Group 2: Below Group 1 */}
          <div className="absolute top-400 flex gap-4">
            <div className="w-6 h-6 rounded-full bg-gray-700 opacity-50"></div>
            <div className="w-6 h-6 rounded-full bg-gray-700 opacity-50"></div>
            <div className="w-6 h-6 rounded-full bg-gray-700 opacity-50"></div>
          </div>
        </div>

        {/* Text Content (Heading & Subtext) */}
        <div
          className={`absolute inset-0 top-[150px] right-0 sm:right-[50px] ${styles.paddingX} 
            max-w-7xl mx-auto flex flex-col items-end justify-center gap-3`}
        >
          {/* Decorative elements (circle and line) */}
          <div className="flex flex-col justify-center items-center mt-5 ml-3">
            <div className="w-5 h-5 rounded-full bg-[#0a0a0a] sm:hidden" />
            <div className="w-1 sm:h-80 h-40 bw-gradient sm:hidden" />
          </div>

          {/* Heading and Subtext */}
          <div className="text-right">
            <h1
              className={`${styles.heroHeadText}`}
              style={{
                marginTop: '0px', // Optional: Fine-tune margins
                marginBottom: '20px',
                wordSpacing: '0.05em', // Optional: Adjust spacing between words
              }}
            >
              Hi, I'm{' '}
              <span
                style={{
                  color: 'grey', // Ensures "Nina!" is on a new line
                }}
                className="text-eerieBlack font-mova font-extrabold uppercase"
              >
                Nina!
              </span>
            </h1>

            <p
              className={`${styles.heroSubText}`}
              style={{
                maxWidth: '620px', // Optional: Restrict the width of subtext
              }}
            >
              <span style={{ fontSize: '25px', fontWeight: 'bold' }}>
                UX/UI Designer @ Warren Podiatry | Graphic Designer
              </span>
              <br className="sm:block hidden" />
              I’m addicted to designing feasible solutions for products that address the user’s needs.
            </p>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
          <a href="#about">
            <div className="w-[35px] h-[64px] rounded-3xl border-4 border-french border-dim flex justify-center items-start p-2">
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'loop',
                }}
                className="w-3 h-3 rounded-full bg-taupe mb-1"
              />
            </div>
          </a>
        </div>

        {/* Nina image with positioning */}
        <div>
          <img
            className="absolute bottom-0 ml-[50vw] 
            lg:ml-[75vw] md:ml-[60vw] xmd:ml-[60vw] 2xl:ml-[83vw]
            sm:h-[90vh] md:h-[70vh] xl:h-[80vh]"
            src={shaq}
            alt="Shaquille"
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
