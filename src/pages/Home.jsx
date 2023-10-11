import React, { Component } from "react";
import classes from '../styles/page.module.css';

export default class Home extends Component {
  render() {
    return (
        <div className={classes.page}>
            <h1>Home</h1>
            <p>home text</p>

        </div>
    
    );
  }
}