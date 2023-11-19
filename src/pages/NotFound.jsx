import React, { Component } from "react";
import classes from '../styles/about.module.css';

export default class NotFound extends Component {
  render() {
    return (
        <div className={classes.page} style={{height: "63vh"}}>
            <h1>Not Found</h1>
            <p>The poster you were trying to search doesn't exist or there was an error retrieving it!</p>

        </div>
    
    );
  }
}