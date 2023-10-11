import React, { Component } from "react";
import classes from '../styles/page.module.css';

export default class Collection extends Component {

  render() {

    return (
        <div className={classes.page}>
            <h1>Collection</h1>
            <p>collection text</p>

            <div className={classes.title}>this is a title with the secondary font</div>

            <div>this is the text back to the primary font</div>

        </div>
    
    );
  }
}