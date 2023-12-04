import React, { Component, useParams} from "react";
import { useHistory } from 'react-router-dom';
import {BiLeftArrowAlt} from 'react-icons/bi';
import NotFound from "./NotFound";
import Image from "../components/Poster/Image"


import classes from '../styles/poster.module.css'


class PosterDetails extends Component {
  constructor(props) {
    super(props);
  }

  handleGoBack = () => {
    window.history.back();
  };

  render() {

    const { id, data, view} = this.props;

    console.log(id);


  
    const icon = view ? 50 : 40;
    const size= (view ? 40 : 100);


    return (
      <div className={classes.page}>
              
              <div className={`${view ? classes.lineWeb : classes.lineMobile}`} style={{height: `${icon}`,width: `${icon}` }}>
              <div className={classes.button} onClick={this.handleGoBack}>
                  <BiLeftArrowAlt size={icon} className={classes.arrow}/>
                </div>
              </div> 


              <div className={classes.posterContainer}>
              <div className={classes.posterImage} style={{width: `${size}%` }} >
                
                  <Image data={data.image} animate={true}></Image>

                </div>

                
                <div className={classes.posterText}>
                  <h1>{data.name}</h1>
                  <p>texto aqui do poster {data.id} 
                  <div>CHECK poster id: {data.id} should be equal to the id from href: {id}</div>
                  <div>{data.description}</div>
                  </p>
                </div>


              </div>

        
      </div>

    );
  }
}

export default PosterDetails;
