import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from '@mui/icons-material/Close';
import { motion } from "framer-motion";
import '../styles/sidebar.scss'


const Sidebar = () => {

  const variants = {
    open: {
      clipPath: "circle(1200px at 50px 50px)",
      transition:{
        type:'spring',stiffness:20
      }
    },
    closed: {
      clipPath: "circle(30px at 50px 50px)",
      transition:{
        delay:0.5,
        type:"spring",
        stiffness:400,
        damping:40
      }
    },
  };

  const [open, setOpen] = useState(false);

  return (
    <motion.div className="sidebar" animate={open ? "open" : "closed"}>
      <motion.div className="bg" variants={variants}>
        <Lists open={open}/>
      </motion.div>
      <HamburgerMenu open={open} setOpen={setOpen} />
    </motion.div>
  );
};


const HamburgerMenu = ({ open,setOpen }) => {
  return (
    <button onClick={() => setOpen((prev) => !prev)}>
      {open?<CloseIcon className="sidebarButton"/>:<MenuIcon className="sidebarButton"/>}
    </button>
  );
};

function Lists({open}) {
  const variants = {
    open: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        straggerChildren: 0.1,
      },
    },
    closed: {
      opacity: 0,
      scale: 0.3,
      filter: "blur(20px)",
      transition: {
        straggerChildren: 0.05,
        straggerDirection: -1,
      },
    },
    hidden:{
      opacity:0
    }
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

  const items = ["Homepage", "Services", "Portfolio", "Contact", "About"];
  return (
    <motion.div className="links" variants={variants} initial={'hidden'} animate={open?'open':'closed'}>
      {items.map((item) => (
        <motion.a
          href={`#${item}`}
          key={item}
          variants={itemVariants}
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.1 }}
        >
          {item}
        </motion.a>
      ))}
    </motion.div>
  );
}

export default Sidebar;
