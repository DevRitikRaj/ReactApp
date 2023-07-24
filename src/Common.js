import React from "react";
// import web from "../src/image/first.png";
import {NavLink} from "react-router-dom";
const Common =(props) =>{
  return(

<>
<section id="header" className="d-flex algin-item-center">

<div className="container-fluid nav_bg">
<div className="row">
<div className="col-10 mx-auto">

  <div className="row">

<div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
  <h1> {props.name}   <strong  className="brand-name">          Jet Students</strong></h1>
  <h2 className="my-3 ">
    Belive in Bounce Back
  </h2>
  <div className="mt-3">
    <NavLink to={props.visit} className="btn-get-started">{props.btname}</NavLink>
  </div>
</div>


<div className="col-lg-6 order-1 orderlg-2 header-img">
  <img src={props.imgsrc} className="img-fluid animated" alt="homei mg"/>
  </div>

  



  </div>



</div>
</div>
</div>


</section>

</>

  );
};

export default Common;
