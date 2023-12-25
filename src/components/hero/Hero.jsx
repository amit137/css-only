import { useRef } from "react";
import myImage from "../../assets/me.jpeg";
import "./hero.scss";
import { motion, useScroll, useTransform } from 'framer-motion'

const textVariants = {
  initial: {
    x: -500,
    opacity: 0
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1
    }
  }
};

const imageVariants = {
  initial: {
    x: -500,
    opacity: 0
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1
    }
  }
};

const Hero = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

 

  return (
    <motion.div className="hero" style={{border:"2px solid white"}}> 
      <div className="wrapper">
      <div className="container2" >
        <div className="cube">
          <div className="face front2"></div>
          <div className="face back2"></div>
          <div className="face right2"></div>
          <div className="face left2"></div>
          <div className="face top2"></div>
          <div className="face bottom2"></div>
        </div>  
      </div>
      <div className="container3" >
        <div className="cube">
          <div className="face front3"></div>
          <div className="face back3"></div>
          <div className="face right3"></div>
          <div className="face left3"></div>
          <div className="face top3"></div>
          <div className="face bottom3"></div>
        </div>  
      </div>
    

      <div className="container4" >
        <div className="cube">
          <div className="face front4"></div>
          <div className="face back4"></div>
          <div className="face right4"></div>
          <div className="face left4"></div>
          <div className="face top4"></div>
          <div className="face bottom4"></div>
        </div>  
      </div>

      <div className="container5" >
        <div className="cube">
          <div className="face front5"></div>
          <div className="face back5"></div>
          <div className="face right5"></div>
          <div className="face left5"></div>
          <div className="face top5"></div>
          <div className="face bottom5"></div>
        </div>  
      </div>
      <div className="container6" >
        <div className="cube">
          <div className="face front6"></div>
          <div className="face back6"></div>
          <div className="face right6"></div>
          <div className="face left6"></div>
          <div className="face top6"></div>
          <div className="face bottom6"></div>
        </div>  
      </div>
      <div className="container7" >
        <div className="cube">
          <div className="face front7"></div>
          <div className="face back7"></div>
          <div className="face right7"></div>
          <div className="face left7"></div>
          <div className="face top7"></div>
          <div className="face bottom7"></div>
        </div>  
      </div>
      <div className="container8" >
        <div className="cube">
          <div className="face front8"></div>
          <div className="face back8"></div>
          <div className="face right8"></div>
          <div className="face left8"></div>
          <div className="face top8"></div>
          <div className="face bottom8"></div>
        </div>  
      </div>
        <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
          <motion.h2 variants={textVariants} className="myName">Amit Singh</motion.h2>
          <motion.h1 variants={textVariants}>Full-Stack Web Developer</motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <motion.button variants={textVariants}>Resume</motion.button>
            <motion.button variants={textVariants}>Contact Me</motion.button>
          </motion.div>
        </motion.div>
{/* 
        <motion.div className="imageContainer" variants={imageVariants}  >
        <motion.img
          src={myImage}
          alt="myImage"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        />
      </motion.div> */}
      </div>

      

      {/* <div className="circles">
        <div className=""></div>
        <div className=""></div>
      </div> */}

    </motion.div>
  );
};

export default Hero;
