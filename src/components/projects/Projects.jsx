import "./projects.scss";
import { motion } from "framer-motion"; // Removed useInView import
import { useRef } from "react";
import projects from "./projectList";
import Parallax from "../parallax/Parallax";

const variants = {
  initial: {
    x: "-30%",
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.5,
      staggerChildren: 0.1,
    },
  },
};

const textVariant={
  initial:{
    x:0,
    opacity:0
  },
  animate:{
    x:0,
    y:0,
    opacity:1,
    transition:{
      duration:5
    }
  }
}

const Projects = () => {
  const ref = useRef();
  const constraintsRef = useRef(null);

  return (
    <div
      className="projects"
      variants={variants}
      initial="initial"
      whileInView="animate"
      ref={ref}
    >
<Parallax>
<h3 className="bg-heading1">
            WEB
          </h3>
          </Parallax>
          <h3 className="bg-heading2">
           MOBILE
          </h3>
      <motion.div className="projects-wrapper" variants={variants} ref={constraintsRef}>
        <motion.div
          className="textContainer"
          variants={textVariant}
          initial="initial"
          whileInView="animate"
          ref={ref}
          drag
          dragConstraints={{ top: -50, bottom: -50, left: -50, right: -50 }}
        >
          <motion.h2>Projects{"/>"}</motion.h2>
          <motion.p>Have a look at the projects I have made so far... </motion.p>

         
        </motion.div>

        <motion.div className="projects-boxes">
          {projects.map((project, index) => (
            <motion.div
              className="projects-tilting-card-wrapper"
              key={index}
              variants={variants}
          initial="initial"
          whileInView="animate"
          ref={ref}
          drag
          dragConstraints={{ top: 50, bottom: 50, left: 50, right: 50 }}
            >
              {[...Array(9)].map((_, trackerIndex) => (
                <div
                  className="mouse-position-tracker"
                  key={trackerIndex}
                ></div>
              ))}

              <motion.div className="projects-tilting-card-content">
                <motion.div className="project" key={project.id}>
                  <div className="content">
                    <span id="projectName">
                      <p>{project.projectName}</p>{" "}
                    </span>
                   <span> <hr className="line" /></span>
                    <span id="no">0{index + 1}</span> <span>→</span>
                  </div>
 <motion.div className="project-image">  <motion.img src={project.imgUrl} alt={project.projectName} /></motion.div>
                
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Projects;
