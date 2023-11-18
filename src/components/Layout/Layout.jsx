import React, { Component } from "react";

import classes from '../../styles/layout.module.css'
import Navbar from "./Navbar";
import Footer from "./Footer";
import Menu from '../Menu'
import Filter from "../Filter";

const mobileWidth= 800;

class Layout extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isMenuVisible: false,
      isFilterVisible: false,
      filterNumber: 3,
      filterGenre: null,
      filterDecade: null,
      filterSearch:null
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

  handleFilterGenre = (value) => {
    this.setState((prevState) => ({
      filterGenre: value,
    }));
  };

  handleFilterDecade = (value) => {
    this.setState((prevState) => ({
      filterDecade: value,
    }));
  };

  handleFilterSearch = (value) => {
    this.setState((prevState) => ({
      filterDecade: value,
    }));
  };

  
  render() {
    const { page } = this.props;

    let PageComponent = null;

    try {
      PageComponent = require(`../../pages/${page}`).default;
    } catch (error) {
      PageComponent = require(`../../pages/NotFound`).default;
    }

    const view = window.innerWidth > mobileWidth ;

    console.log("window inner: "+ window.innerWidth + "> mobile width"+ mobileWidth + "view"+ view);

    const { isMenuVisible, isFilterVisible, filterDecade, filterGenre, filterNumber, filterSearch } = this.state;

    console.log(page);
    
    
    return (

    <div className={classes.container}>

      {/*filterNumber={filterNumber}
                  filterGenre={filterGenre}
                  filterDecade={filterDecade}
                  filterSearch={filterSearch}
                  handleFilterNumber={this.handleFilterNumber}
                  handleFilterGenre={this.handleFilterGenre}
      handleFilterDecade={this.handleFilterDecade}*/}


    {view ?
    
    <div> 
      {page=="Home" ? <Menu isMenuVisible={isMenuVisible} toggleMenuVisibility={this.toggleMenuVisibility}/>
      : <Navbar/>} 

      <div className={classes.PageComponent}>
          <PageComponent view={view}/>
      </div>
      <Footer/>
    </div>
    : 
    
    <div>
      <Menu isMenuVisible={isMenuVisible} toggleMenuVisibility={this.toggleMenuVisibility}/>
      
      {page=="Collection" ? <div>
      <Filter isFilterVisible={isFilterVisible} toggleFilterVisibility={this.toggleFilterVisibility} />
      <div className={classes.PageComponent}>
        <PageComponent view={view}/>
      </div>
      </div>
      : 
      
    <div className={classes.PageComponent}>
    <PageComponent view={view}/>
    </div>}
    
    </div>
    
    }

  

    </div>

    );
  }
}

export default Layout;
