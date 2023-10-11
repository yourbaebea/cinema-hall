import React, { Component } from "react";
import classes from '../styles/page.module.css';

export default class Archive extends Component {
  render() {
    return (
        <div className={classes.page}>
            <h1>Archive</h1>
            <p>archive text</p>

            <div className={classes.title}>this is a title with the secondary font</div>

            <div>this is the text back to the primary font</div>

        </div>
    
    );
  }
}