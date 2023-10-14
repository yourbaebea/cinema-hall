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

    const { id, data} = this.props;

    console.log(id);


    

    return (
      <div>
              <div className={classes.posterDetails}>

              <div>
                <div>poster id: {data.id}, equal to the id from href: {id}</div>
                <div>poster name: {data.name}</div>
                <div>{data.link}</div>
                <div>{data.description}</div>
              </div>
                

              </div>
              <div className={classes.buttonContainer}>
                <div className={classes.button} onClick={this.handleGoBack}>
                  <BiLeftArrowAlt size={40} className={classes.arrow}/>
                </div>
              </div>

      </div>

    );
  }
}

export default Poster;
