import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './About.scss';
import { images } from '../../constants';

const abouts = [
  {
    title: 'Front-end Developer',
    description:
      'I am passionate about front-end development and am exposed much to React.',
    imgUrl: images.about01,
  },
  {
    title: 'Self-motivated',
    description:
      'I am a self-motivated person. I always meet the deadline and submit my work with high standards.',
    imgUrl: images.about02,
  },
  {
    title: 'Team Player',
    description:
      'I know what it takes to be a team player and have been a good team player for various projects.',
    imgUrl: images.about03,
  },
  {
    title: 'Video Editing',
    description: 'I can edit video contents with editor Filmora X.',
    imgUrl: images.about04,
  },
];

const About = () => {
  return (
    <>
      <h2 className="head-text">
        First, <span>Solve the Problem.</span>
        <br /> Then, <span>Write the Code.</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default About;
