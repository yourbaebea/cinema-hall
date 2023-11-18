import React, { Component } from "react";
import classes from '../styles/filter.module.css';
import navigation from '../information/navigation.json';

export default class Filter extends Component {
  
  render() {
    const { isFilterVisible, toggleFilterVisibility, filterNumber, filterGenre,filterDecade, handleFilterDecade, handleFilterGenre, handleFilterNumber } = this.props;

    return (
      <div className={classes.filterContainer}>

        <div className={classes.filterButtonContainer}>
          <a className={classes.filterButton} onClick={toggleFilterVisibility}>
            filter
          </a>
        </div>

        <div className={`${classes.filter} ${isFilterVisible ? classes.visible : classes.hidden}`}>
          <div className={classes.category}>posters/page</div>
          <div className={classes.category}>genre</div>
          <div className={classes.category}>decade</div>
          <div className={classes.category}>search</div>
        </div>
          
      </div>
    );
  }
}
