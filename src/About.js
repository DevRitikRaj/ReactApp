import React from "react";
import web from "../src/image/about.png";
// import footer from "./footer";
// import {NavLink} from "react-router-dom";
import Common from "./Common";
const About =() =>{
  return(

<>

<Common name="Welcome to About Page"
imgsrc={web} 
visit="/contact" 
btname="Contact Now"  />

</>

  );
};

export default About;
