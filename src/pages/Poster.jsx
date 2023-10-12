import React, { Component, useParams} from "react";
import { useHistory } from 'react-router-dom';
import {BiLeftArrowAlt} from 'react-icons/bi';


import classes from '../styles/poster.module.css'

class Poster extends Component {

  handleGoBack = () => {
    window.history.back();
  };


  render() {

    const { id } = this.props;

    console.log(id);

    return (
      <div>
              <div className={classes.posterDetails}>

                <div>poster id: {id}</div>

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
