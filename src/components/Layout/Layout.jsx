import React, { Component } from "react";

import classes from '../../styles/layout.module.css'
import filter from '../../styles/filter.module.css'
import Navbar from "./Navbar";
import Footer from "./Footer";
import Menu from '../Menu'
import Filter from "../Filter";
import Collection from "../../pages/Collection"


const mobileWidth= 800;

class Layout extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isMenuVisible: false,
      isFilterVisible: false,
      posterNumber: 1,
      filterOptions: {},
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

  handlePosterNumber = (value) => {
    this.setState((prevState) => ({
      posterNumber: value,
    }));
  };

  handleFilterOptions = (selectedGenresArray, selectedDecadesArray, searchText) => {
    const filterOptions = {
      selectedGenres: selectedGenresArray,
      selectedDecades: selectedDecadesArray,
      searchText: searchText,
    };
  
    this.setState({
      filterOptions: filterOptions,
    });
  };
  
  
  
  render() {
    const { page } = this.props;
    const { isMenuVisible, isFilterVisible, posterNumber } = this.state;

    const view = window.innerWidth > mobileWidth ;

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
              <Filter view={view} filterOptions={this.handleFilterOptions} posterNumber={this.handlePosterNumber} />
            </div>
          </div>
        </div>
        }

        <div className={classes.PageComponent}>
          <Collection view={view} filterOptions={this.state.filterOptions} posterNumber={this.state.posterNumber} />
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
