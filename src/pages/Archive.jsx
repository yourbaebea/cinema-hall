import React, { Component } from "react";
import classes from '../styles/archive.module.css';


const queryfromserver = [
  {
    "id": "1",
    "link": "query from wordpress 1"
  },
  {
    "id": "2",
    "link": "query from wordpress 2"
  },
  {
    "id": "3",
    "link": "query from wordpress 3"
  },
  {
    "id": "4",
    "link": "query from wordpress 4"
  }
];

export default class Archive extends Component {
  render() {
    return (
        <div className={classes.page}>
            <h1>Archive</h1>
            <p>archive text</p>

            <div className={classes.title} >this is a title with the secondary font</div>

            <div>this is the text back to the primary font</div>
            <div className={classes.posterGrid}>
            {queryfromserver.map(poster => (
              <div className={classes.posterContainer}>
                <a className={classes.posterImage} key={poster.id} href={`/poster/${poster.id}`}>poster</a>
                <div className={classes.posterText}>
                  <p>texto aqui do poster {poster.id}</p>
                </div>
              </div>
              
            ))}
            </div>


        </div>
    
    );
  }
}