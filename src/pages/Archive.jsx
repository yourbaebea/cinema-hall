import React, { Component } from "react";
import classes from '../styles/archive.module.css';
import Image from "../components/Poster/Image";
import Query from "../information/Query";



export default class Archive extends Component {
  render() {
    const { view } = this.props;
    const queryfromserver = Query.queryArchive();

    const size= (view ? 20 : 100);
    return (
        <div className={classes.page}>

            <div className={classes.posterGrid}>
            {queryfromserver.map((poster, index) => (
              <div className={classes.posterContainer}>
                
                <div className={classes.posterImage} style={{width: `${size}%` }} >
                <a className={classes.imageLink} key={index} href={`/poster/${poster.id}`}>
                  <Image data={poster.image} animate={true}/>
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