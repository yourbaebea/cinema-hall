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

    return (
        <div className={classes.page}>
            <h1>Collection</h1>

            {view ?

            <div>
            
              
                {/* 

                <div className={classes.category}>genre
                  <div>current value {filterGenre}</div>
                  <div onClick={handleFilterGenre("rock")}>change to rock</div>
                </div>
                <div className={classes.category}>decade
                  <div>current value {filterDecade}</div>
                  <div onClick={handleFilterDecade("1980")}>change to 1980</div>
                </div>

                <div className={classes.category}>decade
                  <div>current value {filterSearch}</div>
                  <div onClick={handleFilterSearch("tom hanks")}>change to tom hanks</div>
                </div>
                */}


              <div className={classes.collectionContainer}>

              <div className={classes.filterContainer}>
                <div className={classes.category}>genre</div>
                <div className={classes.category}>decade</div>
                <div className={classes.category}>search</div>
              </div>


              <div className={classes.collectionGrid}>
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


            <div className={classes.collectionGrid}>
                {queryfromserver.map(poster => (<a className={classes.collectionImage} key={poster.id} href={`/poster/${poster.id}`}><img className={classes.image} src={"/default/poster.png"} alt="poster" /></a>))}
              </div>
            
            </div>

            </div>
           }


            
            

        </div>
    
    );
  }

}


