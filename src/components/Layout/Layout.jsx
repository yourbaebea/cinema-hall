import React, { Component } from "react";
import classes from '../../styles/layout.module.css';
import filter from '../../styles/filter.module.css';
import Navbar from "./Navbar";
import Footer from "./Footer";
import Menu from '../Menu';
import Filter from "../Filter";
import Collection from "../../pages/Collection";
import NotFound from "../../pages/NotFound";
import PosterDetails from "../../pages/PosterDetails";

const mobileWidth = 800;
const view = window.innerWidth > mobileWidth;

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
    this.setState({
      posterNumber: value,
    });
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

  
  renderHeader = () => {
    const { page, id, data } = this.props;
    const { isMenuVisible, isFilterVisible, posterNumber } = this.state;
    if(page=="Home"){
      return <Menu
      isMenuVisible={isMenuVisible}
      toggleMenuVisibility={this.toggleMenuVisibility}
    />;
    }

    if(view){return <Navbar/>;}
     
    return <Menu
      isMenuVisible={isMenuVisible}
      toggleMenuVisibility={this.toggleMenuVisibility}
    />;
        
    
  }

  renderPage =()=>{
    const { page, id, data } = this.props;
    const { isMenuVisible, isFilterVisible, posterNumber } = this.state;

    if(page=="Collection"){

      return <div className={view ? classes.PageComponent : classes.MobilePageComponent}>

        {view ? <></>:
        <div className={filter.filterContainer}>
          <div className={filter.filterButtonContainer}>
            <a
              className={filter.filterButton}
              onClick={this.toggleFilterVisibility}
            >
              filter
            </a>
          </div>
          <div
            className={`${filter.filter} ${
              isFilterVisible ? filter.visible : filter.hidden
            }`}
          >
            <Filter
              view={view}
              handleFilterOptions={this.handleFilterOptions}
              handlePosterNumber={this.handlePosterNumber}
            />
          </div>
        </div>
        }

        <Collection
          view={view}
          filterOptions={this.state.filterOptions}
          handleFilterOptions={this.handleFilterOptions}
          posterNumber={this.state.posterNumber}
          handlePosterNumber={this.handlePosterNumber}
        />
      </div>;


    }

    let PageComponent;

    if (page === "PosterDetails") {
      PageComponent = data !== undefined && data !== null ? (
        <PosterDetails view={view} id={id} data={data} />
      ) : (
        <NotFound />
      );
    } else {
      try {
        const Component = require(`../../pages/${page}`).default;
        PageComponent = <Component view={view} />;
      } catch (error) {
        PageComponent = <NotFound />;
      }
    }

    return <div className={view ? classes.PageComponent : classes.MobilePageComponent}>
      {PageComponent}
    </div>
          
  }

  render() {
    const { page, id, data } = this.props;
    const { isMenuVisible, isFilterVisible, posterNumber } = this.state;
    

    return (
      <div className={classes.container}>
        {this.renderHeader()}

        {this.renderPage()}

        {page === "Home" ? <></> : <Footer />}
      </div>
    );
  }
}

export default Layout;
