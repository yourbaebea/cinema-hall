import React, { Component } from "react";
import classes from '../styles/filter.module.css';
import navigation from '../information/navigation.json';

export default class Filter extends Component {
  constructor(props) {
    super(props);
  }


  render() {

    const { view } = this.props;

    return (
      <div>

        {view? <></> : <div className={classes.category}>mobile posters/page</div>}


        <div className={classes.genreContainer}>
            <img
              loading="lazy"
              src={require("../images/lines.svg").default}
              className={classes.img}
            />
            <div className={classes.genreFilter}>
              <div className={classes.genre}>GENRE</div>
              <div className={classes.genre1}>Horror</div>
              <div className={classes.genre2}>Crime</div>
              <div className={classes.genre3}>Thriller</div>
            </div>
          </div>
          <div className={classes.decadeContainer}>
            <img
              loading="lazy"
              src={require("../images/lines.svg").default}
              className={classes.img}
            />
            <div className={classes.decadeFilter}>
              <div className={classes.decade}>DECADE</div>
              <div className={classes.decade1}>1970-1980</div>
              <div className={classes.decade2}>1980-1990</div>
              <div className={classes.decade3}>1990-2000</div>
            </div>
          </div>
          <div className={classes.searchContainer}>
            <div className={classes.searchTitle}>Search</div>
            <div className={classes.searchBar}>
              <div className={classes.searchText}>...</div>
              <img
                loading="lazy"
                src={require("../images/search_icon.svg").default}
                className={classes.img2}
              />
            </div>
          </div>
            
        </div>
    );
  }
}
