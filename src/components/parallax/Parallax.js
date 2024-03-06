import React, { useEffect, useState } from "react";
import './parallax.scss'

const Parallax = ({ children }) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return <div className="parallax" style={{ transform: `translateY(${scrollY * 0.35}px)` }}>{children}</div>;
};

export default Parallax;
