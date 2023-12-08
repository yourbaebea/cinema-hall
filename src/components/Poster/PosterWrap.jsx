import React from "react";
import PosterDetails from "../../pages/PosterDetails";
import { useParams } from "react-router-dom";
import Navbar from "../Layout/Navbar";
import Footer from "../Layout/Footer";
import poster_details from '../../information/poster_result.json';

import classes from '../../styles/layout.module.css'
import NotFound from "../../pages/NotFound";
import Query from "../../information/Query";
const mobileWidth= 800;

function PosterWrap() {
  const { id } = useParams();

  console.log("poster wrap with id: " + id);
  const id_data= id-1;
  let data = Query.queryDetailsPoster(id_data);

  //this is just from the dummy information
  //let data = poster_details[id_data];
  //data= null; //what happens when there is a wrong id in the parameters
  const view = window.innerWidth > mobileWidth ;
  return (

    <div className={classes.container}>
      
      {view ? <Navbar/>: <></>}

      <div className={classes.PageComponent}>

      {data === undefined || null  ? <NotFound/> : <PosterDetails view={view} id={id} data={data}/> }
      </div>
      <Footer/>

    </div>

  );
}

export default PosterWrap;
