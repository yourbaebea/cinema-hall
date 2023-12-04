import React, { Component } from "react";
import classes from '../styles/collection.module.css';
import Poster from "./PosterDetails";
import Layout from "../components/Layout/Layout";
import Filter from "../components/Filter";
import Image from "../components/Poster/Image";


import queryfromserver from '../information/poster_result.json';

export default class Collection extends Component {
  constructor(props) {
    super(props);
  }


  render() {

    const { view } = this.props;

    const { filterNumber, filterGenre,filterDecade,filterSearch, handleFilterDecade, handleFilterGenre, handleFilterNumber, handleFilterSearch } = this.props;


    console.log(queryfromserver);

    const columnCount = 2;

    return (
        <div className={classes.page}>
          
            {view ?

            <div>
              <div className={classes.collectionContainer}>


                <div className={classes.filtersContainer}>

                  <Filter view={view}></Filter>
                  
                </div>


                <div className={classes.collectionGrid} style={{ gridTemplateColumns: `repeat(3, 1fr)` }}>
                  {queryfromserver.map(poster => (<a className={classes.collectionImage} key={poster.id} href={`/poster/${poster.id}`}>
                    <Image data={poster.image} animate={false}/>
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


