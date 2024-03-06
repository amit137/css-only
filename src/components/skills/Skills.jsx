import "./skills.scss";
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
import Cubes from "../cubes/Cubes";





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
      duration:10
    }
  }
}


const sections = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", img: htmlImg,color: "orange"},
      { name: "CSS", img: cssImg,color:"" },
      { name: "Tailwind CSS", img: tailwindImg,color:"rgb(37, 150, 190)" },
      { name: "JavaScript", img: jsImg,color:"yellow" },
      { name: "React", img: reactImg,color:"#36dff8" },
      {name:"NextJs",img:nextImg,color:"black"}
    ],
  },
  {
    title: "Backend and Database",
    skills: [
      { name: "Node.js", img: nodeImg,color:"green" },
      { name: "Express", img: expressImg,color:"purple" },
      { name: "NextAuth.js", img: nextAuthImg,color:"gray" },
      { name: "MongoDB", img: mongodbImg,color:"green"},
      { name: "MySQL", img: mysqlImg,color:"blue" },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C", img: cImg,color:"brown" },
      { name: "C++", img: cppImg,color:"darkblue" },
      { name: "JavaScript", img: jsImg,color:"yellow" },
      { name: "Python", img: pythonImg,color:"yellow" },
    ],
  },
];

const Skills = () => {
  const ref = useRef();
  const constraintsRef=useRef(null)


  return (
    <div
      className="skills"
      variants={variants}
      initial="initial"
      whileInView="animate"
      ref={ref}
    >
      {/* <Cubes/> */}
      <motion.div className="wrapper" variants={variants} ref={constraintsRef}>
        <motion.div  className="textContainer" variants={textVariant} initial="initial" whileInView="animate" ref={ref} drag dragConstraints={{top:-50,bottom:-50,left:-50,right:-50}}>
          <motion.h2 >Skills{"/>"}</motion.h2>
          <motion.p>These are the skills I have worked on</motion.p>
        </motion.div>

 
        <motion.div className="boxes">
          {sections.map((section, index) => (
            <motion.div className="tilting-card-wrapper" key={index} variants={variants} whileHover={{scale:1.05}}>
              {[...Array(9)].map((_, trackerIndex) => (
                <div className="mouse-position-tracker" key={trackerIndex}></div>
              ))}
              
              <div className="tilting-card-content" >
               <div className="title">  <h4>{section.title}</h4></div>
              <div className="skills" >
              {section.skills.map((skill, skillIndex) => (
                  <motion.span className="skill skillIndex" key={skillIndex} style={{borderColor:skill.color}}>
                     {/* <img src={skill.img} width={"30px"} /> */}
                    {skill.name}
                  </motion.span>
                ))}
              </div>          
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Skills;
