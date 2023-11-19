import React from "react";
import Poster from "../pages/Poster";
import { useParams } from "react-router-dom";
import Navbar from "./Layout/Navbar";
import Footer from "./Layout/Footer";
import queryfromserver from '../information/poster.json';

import classes from '../styles/layout.module.css'
import NotFound from "../pages/NotFound";
const mobileWidth= 800;

function PosterWrap() {
  const { id } = useParams();

  console.log("poster wrap with id: " + id);
  const id_data= id-1;

  //this is just from the dummy information
  let data = queryfromserver[id_data];
  //data= null; //what happens when there is a wrong id in the parameters
  const view = window.innerWidth > mobileWidth ;


  console.log(data);
  return (

    <div className={classes.container}>
      
      {view ? <Navbar/>: <></>}

      <div className={classes.PageComponent}>

      {data === undefined || null  ? <NotFound/> : <Poster view={view} id={id} data={data}/> }
      </div>
      <Footer/>

    </div>

  );
}

export default PosterWrap;
