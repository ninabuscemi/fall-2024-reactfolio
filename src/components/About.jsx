import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <motion.div
      variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
      className="xs:w-[250px] w-full card-gradient p-[1px] rounded-[20px] shadow-card">
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-jetLight rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-taupe text-[18px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]">
        Hi, I'm Nina Buscemi. I'm a certified UX designer with a B.A. in Graphic Design.
        I took various design classes including graphic, web, human-centered, motion graphics, and illustrations class.
        I love expressing my eye for creativity through designing visual languages and solving complex problems.
        As a designer, I bring a creative and analytical approach to finding solutions for products that best fit the user's needs/goals
        for a great first-hand experience. Empathy, curiousity, and skilled attention to detail define my competitive nature.

        How did I get started?
        When I was a teenager, I explored Photoshop using different tools and special effects. I designed and coded pages for Tumblr blogs,
        created logos, and banners, and even made custom backgrounds. This is how I learned to set aside my ego and create an experience
        that represents the best solution for the client's needs. In the future, I will continue improving my creative skills as
        a designer and working hard to find the best solutions for users by using my research, wireframing, and prototyping skills.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, 'about');
