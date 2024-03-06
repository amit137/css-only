import "./navbar.scss";
import { motion } from "framer-motion";

import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const Navbar = () => {
  return (
    <div className="navbar">
   
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="bg-heading"> <span style={{color:"#5818DE"}}>{"<"}</span>Amit Singh <span style={{color:"#5818DE"}}>{"/>"}</span></h2>
        </motion.span>
        <div className="social">
          <a href="#">
            <InstagramIcon/>
          </a>
          <a href="#">
           <GitHubIcon/>
          </a>
          <a href="">
            <LinkedInIcon/>
          </a>
          <a href="">
        <EmailIcon/>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
