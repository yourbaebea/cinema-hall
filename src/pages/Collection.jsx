import React, { Component } from "react";
import classes from '../styles/collection.module.css';
import Poster from "./PosterDetails";
import Layout from "../components/Layout/Layout";
import Filter from "../components/Filter";
import Image from "../components/Poster/Image";
import Query from "../information/Query";


//import queryfromserver from '../information/poster_result.json';

export default class Collection extends Component {
  shouldComponentUpdate(nextProps) {
    // Check if relevant props are changing
    return (
      nextProps.view !== this.props.view ||
      nextProps.query !== this.props.query ||
      nextProps.filterOptions !== this.props.filterOptions ||
      nextProps.filterNumber !== this.props.filterNumber
    );
  }

  render() {
    const { view, query, filterOptions, filterNumber } = this.props;

    let queryfromserver = Query.queryFilterFromServer(query);
  
    let columnCount = getColumnCount(filterNumber);

    return (
        <div className={classes.page}>
          
          {view ?

          <div>
            <div className={classes.collectionContainer}>


              <div className={classes.filtersContainer}>

                <Filter {...this.props}></Filter>
                
              </div>


              <div className={classes.collectionGrid} style={{ gridTemplateColumns: `repeat(3, 1fr)` }}>
                {queryfromserver.map(poster => (<a className={classes.collectionImage} key={poster.id} href={`/poster/${poster.id}`}>
                  <Image data={poster.image} animate={false}/>
                  </a>))}
              </div>
          
            </div>

          </div>
          
          

          : <div>

          <div className={classes.collectionContainer}>


            <div className={classes.collectionGrid} style={{ gridTemplateColumns: `repeat(${columnCount}, 1fr)` }}>
            {queryfromserver.map(poster => (<a className={classes.collectionImage} key={poster.id} href={`/poster/${poster.id}`}>
                  <Image data={poster.image} animate={false}/>
                  </a>))}
              </div>
            
            </div>

          </div>
          }


            
            

        </div>
    
    );
  }

  

}


function getColumnCount(filterNumber) {
  switch (filterNumber) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 3:
      return 3;
    // Add more cases as needed
    default:
      return 2; // Default to 2 columns
  }
}