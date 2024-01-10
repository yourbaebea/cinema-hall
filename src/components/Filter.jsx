import React, { Component } from "react";
import classes from '../styles/filter.module.css';
import { IoIosSearch } from "react-icons/io";
import Query from "../information/Query";

export default class Filter extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      selectedNumber: this.props.filterNumber,
      selectedGenres: new Set(),
      selectedDecades: new Set(),
      availableGenres: [],
      availableYears: [],
      availableDecades: [],
    };
  }
  
  componentDidMount() {
    this.fetchAvailableData();
  }
  
  fetchAvailableData = async () => {
    try {
      const genres = await this.fetchAvailableGenres();
      this.setState({ availableGenres: genres });
  
      const { years, decades } = await this.fetchAvailableDecades();
      this.setState({
        availableYears: years,
        availableDecades: decades,
      });
    } catch (error) {
      console.error('Error fetching available data:', error);
    }
  };
  
  fetchAvailableDecades = async () => {
    try {
      const years = await Query.fetchPosterYears();
      const sortedYears = years.sort((a, b) => a - b);
      
      const availableDecades = sortedYears.reduce((decades, year) => {
        const decadeStart = Math.floor(year / 10) * 10;
        const decadeEnd = decadeStart + 9;
        const decadeLabel = `${decadeStart}-${decadeEnd}`;
  
        if (!decades.includes(decadeLabel)) {
          decades.push(decadeLabel);
        }
  
        return decades;
      }, []);

      return { years: sortedYears, decades: availableDecades };
    } catch (error) {
      console.error('Error fetching available years and decades:', error);
      return { years: [], decades: [] };
    }
  };

  fetchAvailableGenres = async () => {
    try {
      const response = await Query.fetchGenres();
      let genres = response.map(genre => genre.title);
      genres.sort();
  
      return genres;
    } catch (error) {
      console.error('Error fetching genres:', error);
      return [];
    }
  };
  
  

  handleGenreSelect = (genre) => {
    this.setState((prevState) => {
      const selectedGenres = new Set(prevState.selectedGenres);
      selectedGenres.has(genre) ? selectedGenres.delete(genre) : selectedGenres.add(genre);
      return { selectedGenres };
    });
  };

  handleDecadeSelect = (decade) => {
    this.setState((prevState) => {
      const selectedDecades = new Set(prevState.selectedDecades);
      selectedDecades.has(decade) ? selectedDecades.delete(decade) : selectedDecades.add(decade);
      return { selectedDecades };
    });
  };

  handleSearch = () => {
    const { selectedGenres, selectedDecades } = this.state;
    const searchText = document.getElementById("search-text").value;
  
    const selectedGenresArray = Array.from(selectedGenres);
    const selectedDecadesArray = Array.from(selectedDecades);
  
    console.log("Selected Genres:", selectedGenresArray);
    console.log("Selected Decades:", selectedDecadesArray);
    console.log("Search Text:", searchText);
    console.log("Searching...");
  
    this.setState({ searchText: searchText }, () => {
      this.props.handleFilterOptions(selectedGenresArray, selectedDecadesArray, searchText);
    });
  };
  



  handleFilterNumberChange = (value) => {
    this.setState({ selectedNumber: value }, () => {
      this.props.handlePosterNumber(this.state.selectedNumber);
    });
  };


  render() {
    const { view } = this.props;


    return (
      <div>
        {view ?

          
        <div className={classes.filters}>
          <div className={classes.filterSection}>
            <img
              loading="lazy"
              src={require("../images/lines.svg").default}
              className={classes.img}
              alt="filter lines"
            />
            <div className={classes.filterContainer}>
              <div className={classes.filterTitle}>GENRE</div>
              <div className={classes.filterOptionsContainer}>
                {this.state.availableGenres.map((genre) => (
                  <div className={classes.filterOption} key={genre}>
                    <input
                      type="checkbox"
                      id={`checkbox${genre}`}
                      checked={this.state.selectedGenres.has(genre)}
                      onChange={() => this.handleGenreSelect(genre)}
                    />
                    <label htmlFor={`checkbox${genre}`}>{genre}</label>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className={classes.filterSection}>
            <img
              loading="lazy"
              src={require("../images/lines.svg").default}
              className={classes.img}
              alt="filter lines"
            />
            <div className={classes.filterContainer}>
              <div className={classes.filterTitle}>DECADE</div>
              <div className={classes.filterOptionsContainer}>
                {this.state.availableDecades.map((decade) => (
                  <div className={classes.filterOption} key={decade}>
                    <input
                      type="checkbox"
                      id={`checkbox${decade}`}
                      checked={this.state.selectedDecades.has(decade)}
                      onChange={() => this.handleDecadeSelect(decade)}
                    />
                    <label htmlFor={`checkbox${decade}`}>{decade}</label>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className={classes.searchContainer}>
            <div className={classes.searchTitle}>Search</div>
            <div className={classes.searchBar}>
              <input
                id="search-text"
                type="text"
                placeholder="Enter Search"
                className={classes.input}
              />
              <button
                type="button"
                className={classes.searchButton}
                onClick={this.handleSearch}
              >
                <IoIosSearch size={45} />
              </button>
            </div>
          </div>
        </div>


        :





        <div className={classes.filtersMobile}>
          <div className={classes.postersPerPage}>  
            <div className={classes.postersPerPageTitle}>
              posters per row: {this.state.selectedNumber}
            </div>
            
            <div className={classes.postersPerPageOptionContainer}>
              <div className={classes.postersPerPageOption} onClick={() => this.handleFilterNumberChange(1)}>
                <div className={classes.postersPerPageOptionText}>
                  1
                </div>
              </div>
              <div className={classes.postersPerPageOption} onClick={() => this.handleFilterNumberChange(2)}>
                <div className={classes.postersPerPageOptionText}>
                  2
                </div>
              </div>
              <div className={classes.postersPerPageOption} onClick={() => this.handleFilterNumberChange(3)}>
                <div className={classes.postersPerPageOptionText}>
                  3
                </div>
              </div>
              
            </div>

          </div>

          <div className={classes.filterSectionMobile}>
            <div className={classes.filterContainerMobile}>
              <div className={classes.filterTitleMobile}>GENRE</div>
              <div className={classes.filterOptionsContainerMobile}>
                {this.state.availableGenres.map((genre) => (
                  <div className={classes.filterOptionMobile} key={genre}>
                    <input
                      type="checkbox"
                      id={`checkbox${genre}`}
                      checked={this.state.selectedGenres.has(genre)}
                      onChange={() => this.handleGenreSelect(genre)}
                    />
                    <label htmlFor={`checkbox${genre}`}>{genre}</label>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className={classes.filterSectionMobile}>
            <div className={classes.filterContainerMobile}>
              <div className={classes.filterTitleMobile}>DECADE</div>
              <div className={classes.filterOptionsContainerMobile}>
                {this.state.availableDecades.map((decade) => (
                  <div className={classes.filterOptionMobile} key={decade}>
                    <input
                      type="checkbox"
                      id={`checkbox${decade}`}
                      checked={this.state.selectedDecades.has(decade)}
                      onChange={() => this.handleDecadeSelect(decade)}
                    />
                    <label htmlFor={`checkbox${decade}`}>{decade}</label>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className={classes.searchContainerMobile}>
            <div className={classes.searchTitleMobile}>Search</div>
            <div className={classes.searchBarMobile}>
              <input
                id="search-text"
                type="text"
                placeholder="Enter Search"
                className={classes.input}
              />
              <button
                type="button"
                className={classes.searchButtonMobile}
                onClick={this.handleSearch}
              >
                <IoIosSearch size={45} />
              </button>
            </div>
          </div>
        </div>
        
        }
        
      </div>
    );
  }
}