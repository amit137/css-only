import "./navbar.scss";
import myImage from "../../assets/linkedin.png";
import { motion } from "framer-motion";
import Sidebar from "../sidebar/Sidebar";

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1}}
          transition={{ duration: 0.5 }}
        >
          Amit Singh
        </motion.span>
        <div className="social">
          <a href="#">
            <img src={myImage} width={"50px"} alt="instagram" />
          </a>
          <a href="">
            <img src={myImage} alt="github" width={"50px"} />
          </a>
          <a href="">
            <img src={myImage} alt="linkedin" width={"50px"} />
          </a>
          <a href="">
            <img src="" alt="" width={"50px"} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
