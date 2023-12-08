import React, { Component } from "react";

import classes from '../../styles/layout.module.css'
import filter from '../../styles/filter.module.css'
import Navbar from "./Navbar";
import Footer from "./Footer";
import Menu from '../Menu'
import Filter from "../Filter";
import Collection from "../../pages/Collection"
import Query from "../../information/Query"

const mobileWidth= 800;

class Layout extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isMenuVisible: false,
      isFilterVisible: false,
      filterNumber: 1,
      query: "",
    };
  }

  toggleMenuVisibility = () => {
    this.setState((prevState) => ({
      isMenuVisible: !prevState.isMenuVisible,
      isFilterVisible: false,
    }));
  };

  toggleFilterVisibility = () => {
    this.setState((prevState) => ({
      isFilterVisible: !prevState.isFilterVisible,
      isMenuVisible: false,
    }));
  };

  handleFilterNumber = (value) => {
    this.setState((prevState) => ({
      filterNumber: value,
    }));
  };

  handleFilterOptions = (selectedGenresArray, selectedDecadesArray, searchText) => {
    
  
    console.log("CHANGE IN FILTER - Genres:", selectedGenresArray);
    console.log("CHANGE IN FILTER - Decades:", selectedDecadesArray);
    console.log("CHANGE IN FILTER - Search Text:", searchText);

    const query = Query.formatFilterQuery(selectedGenresArray,selectedDecadesArray,searchText);


    this.setState({
      query: query
    })
  
  };

  
  
  render() {
    const { page } = this.props;
    const { isMenuVisible, isFilterVisible, filterOptions, filterNumber, query } = this.state;

    const view = window.innerWidth > mobileWidth ;

    //console.log("window inner: "+ window.innerWidth + "> mobile width"+ mobileWidth + "view"+ view);

    let PageComponent = null;

    try {
      PageComponent = require(`../../pages/${page}`).default;
    } catch (error) {
      PageComponent = require(`../../pages/NotFound`).default;
    }

    
    console.log(page);
    
    
    return (

    <div className={classes.container}>


      {page=="Collection" ? 
      <div>
        {view ?  <Navbar/>: 
        <div>
          <Menu isMenuVisible={isMenuVisible} toggleMenuVisibility={this.toggleMenuVisibility}/>

          <div className={filter.filterContainer}>
            <div className={filter.filterButtonContainer}>
              <a className={filter.filterButton} onClick={this.toggleFilterVisibility}>
                filter
              </a>
            </div>

            <div className={`${filter.filter} ${isFilterVisible ? filter.visible : filter.hidden}`}>
              <Filter view={view} filterOptions={filterOptions} filterNumber={filterNumber} handleFilterOptions={this.handleFilterOptions} handleFilterNumber={this.handleFilterNumber}   ></Filter>
            </div>
          </div>
        </div>
        }

        <div className={classes.PageComponent}>
          <Collection view={view} query={query} filterOptions={this.state.filterOptions} filterNumber={this.state.filterNumber} handleFilterOptions={this.handleFilterOptions} handleFilterNumber={this.handleFilterNumber}/>
        </div>

      </div>
      
      :

      <div> 
        {view ?
          <>{page=="Home" ? <Menu isMenuVisible={isMenuVisible} toggleMenuVisibility={this.toggleMenuVisibility}/> : <Navbar/>} </>
          : 
          <Menu isMenuVisible={isMenuVisible} toggleMenuVisibility={this.toggleMenuVisibility}/>
        }

        <div className={classes.PageComponent}>
            <PageComponent view={view}/>
        </div>
      

    
      </div>
    
      }

    {page=="Home" ? <></> : <Footer/>} 

    </div>

    );
  }
}

export default Layout;
