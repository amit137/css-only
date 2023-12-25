import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "React eCommerce",
    img: "data:image/jpeg;base64,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",
    description:
      "react website with mern Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, maxime.",
  },
  {
    id: 2,
    title: "music",
    img: "data:image/jpeg;base64,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",
    description:
      "react website with mern Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, maxime.",
  },
  {
    id: 3,
    title: "spotify clone",
    img: "data:image/jpeg;base64,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",
    description:
      "react website with mern Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, maxime.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-300%"]);

  return (
    <section ref={ref}>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer">
            <img src={item.img} alt="" />
          </div>
          <div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <button>View</button>
          </div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Projects</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      <div className="box">
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
      </div>
    
    </div>
  );
};

export default Portfolio;
