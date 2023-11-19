import React, { Component } from "react";
import classes from '../styles/collection.module.css';
import Poster from "./Poster";
import Layout from "../components/Layout/Layout";
import Filter from "../components/Filter";
const queryfromserver = [
  {
    "id": "1",
    "link": "query from wordpress 1"
  },
  {
    "id": "2",
    "link": "query from wordpress 2"
  },
  {
    "id": "3",
    "link": "query from wordpress 2"
  },
  {
    "id": "4",
    "link": "query from wordpress 2"
  },
  {
    "id": "5",
    "link": "query from wordpress 2"
  },
  {
    "id": "6",
    "link": "query from wordpress 2"
  },

];

export default class Collection extends Component {
  constructor(props) {
    super(props);
  }


  render() {

    const { view } = this.props;

    const { filterNumber, filterGenre,filterDecade,filterSearch, handleFilterDecade, handleFilterGenre, handleFilterNumber, handleFilterSearch } = this.props;


    const columnCount = 2;

    return (
        <div className={classes.page}>
          
            {view ?

            <div>

              <div className={classes.collectionContainer}>

              <div className={classes.filterContainer}>
                <div className={classes.category}>genre</div>
                <div>options</div>
                <div>options</div>
                <div className={classes.category}>decade</div>
                <div>options</div>
                <div>options</div>
                <div className={classes.category}>search</div>
                <div>options</div>
                <div>options</div>
              </div>


              <div className={classes.collectionGrid} style={{ gridTemplateColumns: `repeat(3, 1fr)` }}>
                {queryfromserver.map(poster => (<a className={classes.collectionImage} key={poster.id} href={`/poster/${poster.id}`}>
                  <div className={classes.imageWrapper}>
                  <img className={classes.image} src={"/default/poster.png"} alt="poster" />
                  </div>
                  </a>))}
              </div>
            
              </div>

            </div>
            
            
  
            : <div>mobile, filters are already being handled

            <div className={classes.collectionContainer}>


            <div className={classes.collectionGrid} style={{ gridTemplateColumns: `repeat(${columnCount}, 1fr)` }}>
                {queryfromserver.map(poster => (<a className={classes.collectionImage} key={poster.id} href={`/poster/${poster.id}`}>
                  <div className={classes.imageWrapper}>
                  <img className={classes.image} src={"/default/poster.png"} alt="poster" />
                  </div>
                  </a>))}
              </div>
            
            </div>

            </div>
           }


            
            

        </div>
    
    );
  }

}


