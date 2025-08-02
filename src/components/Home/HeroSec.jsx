/* eslint-disable react/no-unescaped-entities */
// import React from 'react'
import Lottie from "lottie-react";
import { Container } from "react-bootstrap";
// import Badge from "/badge.png";
// import me from "/me2.png";
import { motion } from "framer-motion";
import animation from "../../Animation/Animation - 1701450095408.json";
const HeroSec = () => {
  return (
    <Container>
      <div className="hero p-4">
        <motion.div
          className="img"
          initial={{ transform: "scale(0)" }}
          animate={{ transform: "scale(1.04)" }}
          transition={{
            type: "spring",
            stiffness: 100,
            delay: ".3",
            damping: "8",
          }}
        >
          <img src="me2.png" alt="portfolio" />
          <img src="badge.png" alt="jkj" />
        </motion.div>
        <div className="hero-text">
          <div className="d-flex heroP">
            <div className="links">
              <a
                href="https://github.com/Walidhamdy44"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-github"></i>
              </a>
              <a
                href="https://www.facebook.com/walid.elgen.75/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a
                href="https://twitter.com/walidHamdy44"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/walid-hamdy-150916253/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <div></div>
              <span>Follow Me</span>
            </div>
            <div className="text">
              <h2>I’m Walid Hamdy</h2>
              <div className="fill">
                Front End React Developer<span>" NEXT JS "</span>
              </div>
              <p>
                I’m Walid, a Front End Developer with +3.5 years of experience
                in website design and front-end development. I utilize the
                latest technologies in my work to ensure high performance and
                speed for your projects.
              </p>
            </div>
          </div>
          <div className="animation">
            <Lottie animationData={animation} />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default HeroSec;
