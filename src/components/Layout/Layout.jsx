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
    let MobilePageComponent = null;

    try {
      PageComponent = require(`../../pages/${page}`).default;
    } catch (error) {
      PageComponent = require(`../../pages/NotFound`).default;
    }
    try {
      MobilePageComponent = require(`../../pages/${page}`).default;
    } catch (error) {
      MobilePageComponent = require(`../../pages/NotFound`).default;
    }
    
    
    return (

    <div className={classes.container}>


      {page=="Collection" ? 
        <div>
          {view ?  
            <div>
              <Navbar/>
              
              <div className={classes.PageComponent}>
                <Collection view={view} filterOptions={this.state.filterOptions} handleFilterOptions={this.handleFilterOptions} posterNumber={this.state.posterNumber} />
              </div>
            </div>
            
          : 
            <div>
              <Menu isMenuVisible={isMenuVisible} toggleMenuVisibility={this.toggleMenuVisibility}/>

              <div className={filter.filterContainer}>
                <div className={filter.filterButtonContainer}>
                  <a className={filter.filterButton} onClick={this.toggleFilterVisibility}>
                    filter
                  </a>
                </div>
                <div className={`${filter.filter} ${isFilterVisible ? filter.visible : filter.hidden}`}>
                  <Filter view={view} handleFilterOptions={this.handleFilterOptions} handlePosterNumber={this.handlePosterNumber} />
                </div>
              </div>

              <div className={classes.MobilePageComponent}>
                <Collection view={view} filterOptions={this.state.filterOptions} handleFilterOptions={this.handleFilterOptions} posterNumber={this.state.posterNumber} handlePosterNumber={this.handlePosterNumber} />
              </div>
            </div>
          }

          

        </div>
        
        :

        <div> 
          {view ?
            <>{page=="Home" ? <Menu isMenuVisible={isMenuVisible} toggleMenuVisibility={this.toggleMenuVisibility}/> : <Navbar/>} </>
            : 
            <Menu isMenuVisible={isMenuVisible} toggleMenuVisibility={this.toggleMenuVisibility}/>
          }

          { view ? 
          <div className={classes.PageComponent}>
              <PageComponent view={view}/>
          </div>

          :
          
          <div className={classes.MobilePageComponent}>
              <MobilePageComponent view={view}/>
          </div>

          }
        

      
        </div>
      }

    {page=="Home" ? <></> : <Footer/>} 

    </div>

    );
  }
}

export default Layout;
