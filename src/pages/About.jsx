import React, { Component } from "react";
import classes from '../styles/page.module.css';

export default class About extends Component {
  render() {
    return (
        <div className={classes.about}>
            <h1>About</h1>
            <p>about text</p>

        </div>
    
    );
  }
}