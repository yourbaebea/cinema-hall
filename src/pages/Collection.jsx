import React, { Component } from "react";
import classes from '../styles/page.module.css';
import Poster from "./Poster";
import Layout from "../components/Layout/Layout";
const queryfromserver = [
  {
    "id": "1",
    "link": "query from wordpress 1"
  },
  {
    "id": "2",
    "link": "query from wordpress 2"
  },
];

export default class Collection extends Component {

  

  render() {

    const id="here";

    return (
        <div className={classes.page}>
            <h1>Collection</h1>
            <p>collection text</p>

            <div className={classes.title}>this is a title with the secondary font</div>

            <div>this is the text back to the primary font</div>

            {queryfromserver.map(poster => (
              <a className={classes.posterLink} key={poster.id} href={`/poster/${poster.id}`}>poster here</a>
            ))}

        </div>
    
    );
  }
}