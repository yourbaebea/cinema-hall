import React, { Component, useParams} from "react";
import { useHistory } from 'react-router-dom';
import {BiLeftArrowAlt} from 'react-icons/bi';
import NotFound from "./NotFound";


import classes from '../styles/poster.module.css'


class Poster extends Component {

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
                <div className={classes.imageLink}>
                  <div className={classes.imageWrapper}>
                  <img className={classes.image} src={"/default/poster.png"} alt="poster" />
                  </div>
                </div>
                </div>
                
                <div className={classes.posterText}>
                  <h1>Name of {data.id}</h1>
                  <p>texto aqui do poster {data.id} 
                  <div>poster id: {data.id}, equal to the id from href: {id}</div>
                  <div>poster name: {data.name}</div>
                  <div>{data.link}</div>
                  <div>{data.description}</div>
                  </p>
                </div>


              </div>

        
      </div>

    );
  }
}

export default Poster;
