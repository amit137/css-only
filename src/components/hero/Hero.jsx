import "./hero.scss";
import { motion } from "framer-motion";
import Cubes from "../cubes/Cubes";
import Navbar from "../navbar/Navbar";
import MouseScroll from "../mouseScroll/MouseScroll";
import Globe from "../globe/Globe";
import { TypeAnimation } from "react-type-animation";
import Parallax from "../parallax/Parallax";
import Water from "../water/Water";

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
};

const nameVariant = {
  initial: {
    x: 0,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 8,
    },
  },
};

const Hero = () => {
  return (
    <motion.div className="hero">
      <Navbar />
      <div className="wrapper">
        <Cubes />
        
        <Globe />
        
        <Parallax>
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={nameVariant} className="myName">
            Hi, my name is <span>Amit Singh</span>{" "}
          </motion.h2>
          <div className="below-text">
          <p  style={{ fontSize: "2em" }}>I design and develop </p>
          <TypeAnimation 
            sequence={[
              " Websites",
              1000,
              " Animations",
              1000,
              " UI/UX",
              1000,
              " Motions",
              1000,
            ]}
            speed={20}
            style={{ fontSize: "2em" }}
            repeat={Infinity}
          />
          </div>
        
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt
            beatae aliquid explicabo harum aliquam illum minus perspiciatis
            necessitatibus nobis porro.
          </p>
          <motion.div variants={textVariants} className="buttons">
            <motion.button variants={textVariants}>Resume</motion.button>
            <motion.button variants={textVariants}>Contact Me</motion.button>
          </motion.div>
          <MouseScroll />
        </motion.div>
        </Parallax>
        <div className="arrow-box">
          <span>→</span>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
