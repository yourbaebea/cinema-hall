import React from "react";
import Poster from "../pages/Poster";
import { useParams } from "react-router-dom";
import Navbar from "./Layout/Navbar";
import Footer from "./Layout/Footer";
import queryfromserver from '../information/poster.json';

import classes from '../styles/layout.module.css'
import NotFound from "../pages/NotFound";

function PosterWrap() {
  const { id } = useParams();

  console.log("poster wrap with id: " + id);

  //this is just from the dummy information
  let data = queryfromserver[0];
  //data= null; //what happens when there is a wrong id in the parameters

  return (

    <div className={classes.container}>
      
      <Navbar/>

      {data === null ? <NotFound/> : <Poster id={id} data={data}/> }
      
      <Footer/>

    </div>

  );
}

export default PosterWrap;
