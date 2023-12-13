import React from "react";
import heroImg from "../assets/hero.png";
import scrollImg from "../assets/scroll.png";
import { motion } from "framer-motion";
import "../styles/hero.scss";



const textVariants = {
    initial: {
      x: -500,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
    scrollButton: {
      opacity: 0,
      y: 10,
      transition: {
        duration: 2,
        repeat: Infinity,
      },
    },
  };
  const sliderVariants = {
    initial: {
      x: 0,
    },
    animate: {
      x: "-220%",
      transition: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 20,
      },
    },
  };

const Hero = () => {
  
  return (
    <div className="hero">
      <div className="hero__wrapper">
        <motion.div
          className="hero__textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>Harley Tyler</motion.h2>
          <motion.h1 variants={textVariants}>
            Web Developer and UI Designer
          </motion.h1>
          <motion.div variants={textVariants} className="hero__buttons">
            <motion.button variants={textVariants}>
              see the latest works
            </motion.button>
            <motion.button variants={textVariants}>contact me</motion.button>
          </motion.div>
          <motion.img
            src={scrollImg}
            alt="hero scroll img"
            className="hero__scroll"
            variants={textVariants}
            animate="scrollButton"
          />
        </motion.div>
      </div>
      <motion.div
        className="hero__slidingText"
        variants={sliderVariants}
        initial="initial"
        animate='animate'
      >
        Developer Gamer 
      </motion.div>
      <div className="hero__imageContainer">
        <img src={heroImg} alt="hero img" />
      </div>
    </div>
  );
};

export default Hero;
