import "./services.scss";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import htmlImg from '../../assets/html.png'
import cssImg from '../../assets/css.jpg'
import tailwindImg from '../../assets/tailwind.png'
import jsImg from '../../assets/js.png'
import reactImg from '../../assets/react.png'
import nodeImg from '../../assets/nodejs.png';
import expressImg from '../../assets/express.jpg';
import nextAuthImg from '../../assets/next-auth.png';
import mysqlImg from '../../assets/mysql.png';
import mongodbImg from '../../assets/mongodb.png';
import cImg from '../../assets/c.png';
import cppImg from '../../assets/cpp.png';
import pythonImg from '../../assets/python.png';
import nextImg from '../../assets/nextjs.png'




const variants = {
  initial: {
    x: "-50%",
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const sections = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", img: htmlImg },
      { name: "CSS", img: cssImg },
      { name: "Tailwind CSS", img: tailwindImg },
      { name: "JavaScript", img: jsImg },
      { name: "React", img: reactImg },
      {name:"NextJs",img:nextImg}
    ],
  },
  {
    title: "Backend and Database",
    skills: [
      { name: "Node.js", img: nodeImg },
      { name: "Express", img: expressImg },
      { name: "NextAuth.js", img: nextAuthImg },
      { name: "MySQL", img: mysqlImg },
      { name: "MongoDB", img: mongodbImg },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C", img: cImg },
      { name: "C++", img: cppImg },
      { name: "JavaScript", img: jsImg },
      { name: "Python", img: pythonImg },
    ],
  },
];

const Services = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      whileInView="animate"
      ref={ref}
    >
      <motion.div className="wrapper" variants={variants}>
        <motion.div variants={variants} className="textContainer">
          <motion.h2 variants={variants}>What I Know</motion.h2>
          <p>These are the skills I have worked on.</p>
        </motion.div>
        <motion.div className="boxes">
          {sections.map((section, index) => (
            <motion.div className="tilting-card-wrapper" key={index} variants={variants}>
              {[...Array(9)].map((_, trackerIndex) => (
                <div className="mouse-position-tracker" key={trackerIndex}></div>
              ))}
              
              <div className="tilting-card-content">
               <div className="title">  <h4>{section.title}</h4></div>
              <div className="skills">
              {section.skills.map((skill, skillIndex) => (
                  <span className="skill" key={skillIndex}>
                    <img src={skill.img} alt=""  width="40px" />
                  </span>
                ))}
              </div>
               
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
