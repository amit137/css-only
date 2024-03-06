import "./works.scss";
import timelineElements from "./worksTimeline";
import {motion} from 'framer-motion'
import {useRef } from "react";


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

const Works = () => {

  const ref = useRef();
  const constraintsRef=useRef(null)
 
  return (
    <div className="works">
      <div className="wrapper">
        <motion.div className="textContainer" variants={textVariant} initial="initial" whileInView="animate" ref={ref} drag dragConstraints={{top:-50,bottom:-50,left:-50,right:-50}}> <h4>Experience{"/>"}</h4>
        <p>These are some of my experiences</p>
        </motion.div>
       
       <div className="extraContainer">
       {timelineElements.map((element,index)=>(
        
        <motion.div className="workElement" variants={textVariant} initial="initial" whileInView="animate">
          <div className="work-year">{element.year}</div>
          <div className="content">
          <div className="content-top"><h2>{element.organization}</h2>
          <h3 className="work-h2">{element.role}</h3>
            <p>{element.description}</p>
            </div>
            <div className="content-bottom">
              {element.techStack.map((tech,ind)=>(
                <span key={ind}>{tech}</span>
              ))}
            </div>
            </div>
            
        </motion.div>
      ))}
       </div>
      </div>
       
    </div>
  );
};

export default Works;
