import { motion } from 'framer-motion';
import HomeIcon from '@mui/icons-material/Home';
import EmailIcon from '@mui/icons-material/Email';
import InfoIcon from '@mui/icons-material/Info';
import CodeIcon from '@mui/icons-material/Code';

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

const items = [
  { name: "Homepage", icon: <HomeIcon /> },
  { name: "Services", icon: <EmailIcon /> },
  { name: "Portfolio", icon: <InfoIcon /> },
  { name: "Contact", icon: <CodeIcon /> },
  { name: "About", icon: <EmailIcon /> },
];

const Links = () => {
  return (
    <motion.div className='links' variants={variants}>
      {items.map((item) => (
        <motion.a href={`#${item.name}`} key={item.name} variants={itemVariants} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            {item.icon}
            <span style={{ marginLeft: '8px' }}>{item.name}</span>
          </div>
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;
