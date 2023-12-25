import "./works.scss";
// import WorkIcon from "../../assets/work.svg";
// import SchoolIcon from "../../assets/school.svg";
import timelineElements from "./worksTimeline";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Works = () => {
  let workIconStyles = {
    background: "#06D6A0",
  };
  let schoolIconStyles = {
    background: "#f9c74f",
  };
  return (
    <div className="works">
      <h1>Works</h1>
      <VerticalTimeline>
        {timelineElements.map((element) => {
          let isWorkIcon = element.icon === "work";
          return (
            <VerticalTimelineElement
            //   className="timelineEle"
              key={element.key}
              date={element.date}
              dateClassName="date"
              iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
              icon={isWorkIcon ? "work" : "school"}
            >
              <h3 className="vertical-timeline-element-title">
                {element.projectName}
              </h3>
              <img src={element.projectImg} alt={element.projectName} />

              <p>{element.description}</p>
              <a href={element.link}>View Project</a>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
};

export default Works;
