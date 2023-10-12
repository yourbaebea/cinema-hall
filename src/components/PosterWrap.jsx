import React from "react";
import Poster from "../pages/Poster";
import { useParams } from "react-router-dom";
import Navbar from "./Layout/Navbar";
import Footer from "./Layout/Footer";

import classes from '../styles/layout.module.css'

function PosterWrap() {
  const { id } = useParams();

  console.log("poster wrap with id: " + id);

  return (

    <div className={classes.container}>
      
      <Navbar/>
      
      <Poster id={id}/>

      <Footer/>

    </div>

  );
}

export default PosterWrap;
