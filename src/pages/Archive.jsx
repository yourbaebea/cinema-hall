import React, { Component } from "react";
import classes from '../styles/archive.module.css';
import Image from "../components/Poster/Image";


import queryfromserver from '../information/poster_result.json';

export default class Archive extends Component {
  render() {
    const { view } = this.props;


    const size= (view ? 20 : 100);

    //style={{width: `${size}%` }}
    return (
        <div className={classes.page}>

            <div className={classes.posterGrid}>
            {queryfromserver.map(poster => (
              <div className={classes.posterContainer}>
                
                <div className={classes.posterImage} style={{width: `${size}%` }} >
                <a className={classes.imageLink} key={poster.id} href={`/poster/${poster.id}`}>
                  <Image data={poster.image} animate={false}/>
                </a>
                </div>
                
                <div className={classes.posterText}>
                  <h1>{poster.name}</h1>
                  <p>{poster.description}
                 </p>
                </div>


              </div>
              
            ))}
            </div>


        </div>
    
    );
  }
}