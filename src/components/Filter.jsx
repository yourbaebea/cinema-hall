import React, { Component } from "react";
import classes from '../styles/filter.module.css';
import { IoIosSearch } from "react-icons/io";

export default class Filter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedGenres: new Set(),
      selectedDecades: new Set(),
    };
  }

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
  
    console.log("Selected Genres:", Array.from(selectedGenres));
    console.log("Selected Decades:", Array.from(selectedDecades));
    console.log("Search Text:", searchText);
    console.log("Searching...");
  };
  

  render() {
    const { view } = this.props;

    return (
      <div>
        {view ? (
          <></>
        ) : (
          <div className={classes.category}>mobile posters/page</div>
        )}

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
                <div className={classes.filterOption}>
                  <input
                    type="checkbox"
                    checked={this.state.selectedGenres.has("Horror")}
                    onChange={() => this.handleGenreSelect("Horror")}
                  />
                  Horror
                </div>
                <div className={classes.filterOption}>
                  <input
                    type="checkbox"
                    checked={this.state.selectedGenres.has("Crime")}
                    onChange={() => this.handleGenreSelect("Crime")}
                  />
                  Crime
                </div>
                <div className={classes.filterOption}>
                  <input
                    type="checkbox"
                    checked={this.state.selectedGenres.has("Thriller")}
                    onChange={() => this.handleGenreSelect("Thriller")}
                  />
                  Thriller
                </div>
                <div className={classes.filterOption}>
                  <input
                    type="checkbox"
                    checked={this.state.selectedGenres.has("Romance")}
                    onChange={() => this.handleGenreSelect("Romance")}
                  />
                  Romance
                </div>
                <div className={classes.filterOption}>
                  <input
                    type="checkbox"
                    checked={this.state.selectedGenres.has("Comedy")}
                    onChange={() => this.handleGenreSelect("Comedy")}
                  />
                  Comedy
                </div>
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
                <div className={classes.filterOption}>
                  <input
                    type="checkbox"
                    checked={this.state.selectedDecades.has("1970-1980")}
                    onChange={() => this.handleDecadeSelect("1970-1980")}
                  />
                  1970-1980
                </div>
                <div className={classes.filterOption}>
                  <input
                    type="checkbox"
                    checked={this.state.selectedDecades.has("1980-1990")}
                    onChange={() => this.handleDecadeSelect("1980-1990")}
                  />
                  1980-1990
                </div>
                <div className={classes.filterOption}>
                  <input
                    type="checkbox"
                    checked={this.state.selectedDecades.has("1990-2000")}
                    onChange={() => this.handleDecadeSelect("1990-2000")}
                  />
                  1990-2000
                </div>
                <div className={classes.filterOption}>
                  <input
                    type="checkbox"
                    checked={this.state.selectedDecades.has("2000-2010")}
                    onChange={() => this.handleDecadeSelect("2000-2010")}
                  />
                  2000-2010
                </div>
                <div className={classes.filterOption}>
                  <input
                    type="checkbox"
                    checked={this.state.selectedDecades.has("2010-2020")}
                    onChange={() => this.handleDecadeSelect("2010-2020")}
                  />
                  2010-2020
                </div>
                <div className={classes.filterOption}>
                  <input
                    type="checkbox"
                    checked={this.state.selectedDecades.has("2020-2030")}
                    onChange={() => this.handleDecadeSelect("2020-2030")}
                  />
                  2020-2030
                </div>
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
      </div>
    );
  }
}
