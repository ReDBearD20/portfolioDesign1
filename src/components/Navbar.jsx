import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import {motion} from 'framer-motion'
import Sidebar from "./Sidebar";
import '../styles/navbar.scss'

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span initial={{opacity:0,scale:0.5}} animate={{opacity:1,scale:1}} transition={{duration:.5}}>JoJo</motion.span>
        <div className="social">
          <a href="#">
            <FacebookIcon />
          </a>
          <a href="#">
            <InstagramIcon />
          </a>
          <a href="#">
            <YouTubeIcon />
          </a>
          <a href="#">
            <TwitterIcon />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
