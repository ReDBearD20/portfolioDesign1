import React, { useRef } from "react";
import people from "../assets/people.webp";
import { animate, motion } from "framer-motion";
import "../styles/services.scss";
import { useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const myRef = useRef();
  const isInView  = useInView(myRef, { once:true });
  return (
    <motion.div
      className="services"
      variants={variants}
      initial={"initial"}
      ref={myRef}
      whileInView='animate'
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I am helping your brand grow <br />
          and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src={people} alt="title img" />
          <h1>
            <motion.b>Unique </motion.b>Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <b>For Your </b>Bussiness
          </h1>
          <button>what we do?</button>
        </div>
      </motion.div>
      <motion.div className="card" variants={variants}>
        <Card />
        <Card />
        <Card />
        <Card />
      </motion.div>
    </motion.div>
  );
};

const Card = () => {
  return (
    <motion.div className="box">
      <h1>Branding</h1>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book
      </p>
      <button>Go</button>
    </motion.div>
  );
};
export default Services;
