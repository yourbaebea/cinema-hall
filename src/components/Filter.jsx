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
                    id="checkboxHorror"
                    checked={this.state.selectedGenres.has("Horror")}
                    onChange={() => this.handleGenreSelect("Horror")}
                  />
                  <label for="checkboxHorror">
                    Horror
                  </label>
                </div>
                <div className={classes.filterOption}>
                  <input
                    type="checkbox"
                    id="checkboxCrime"
                    checked={this.state.selectedGenres.has("Crime")}
                    onChange={() => this.handleGenreSelect("Crime")}
                  />
                  <label for="checkboxCrime">
                    Crime
                  </label>
                </div>
                <div className={classes.filterOption}>
                  <input
                    type="checkbox"
                    id="checkboxThriller"
                    checked={this.state.selectedGenres.has("Thriller")}
                    onChange={() => this.handleGenreSelect("Thriller")}
                  />
                  <label for="checkboxThriller">
                    Thriller
                  </label>
                </div>
                <div className={classes.filterOption}>
                  <input
                    type="checkbox"
                    id="checkboxRomance"
                    checked={this.state.selectedGenres.has("Romance")}
                    onChange={() => this.handleGenreSelect("Romance")}
                  />
                  <label for="checkboxRomance">
                    Romance
                  </label>
                </div>
                <div className={classes.filterOption}>
                  <input
                    type="checkbox"
                    id="checkboxComedy"
                    checked={this.state.selectedGenres.has("Comedy")}
                    onChange={() => this.handleGenreSelect("Comedy")}
                  />
                  <label for="checkboxComedy">
                    Comedy
                  </label>
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
                    id="checkbox1970-1980"
                    checked={this.state.selectedDecades.has("1970-1980")}
                    onChange={() => this.handleDecadeSelect("1970-1980")}
                  />
                  <label for="checkbox1970-1980">
                    1970-1980
                  </label>
                </div>
                <div className={classes.filterOption}>
                  <input
                    type="checkbox"
                    id="checkbox1980-1990"
                    checked={this.state.selectedDecades.has("1980-1990")}
                    onChange={() => this.handleDecadeSelect("1980-1990")}
                  />
                  <label for="checkbox1980-1990">
                    1980-1990
                  </label>
                </div>
                <div className={classes.filterOption}>
                  <input
                    type="checkbox"
                    id="checkbox1990-2000"
                    checked={this.state.selectedDecades.has("1990-2000")}
                    onChange={() => this.handleDecadeSelect("1990-2000")}
                  />
                  <label for="checkbox1990-2000">
                    1990-2000
                  </label>
                </div>
                <div className={classes.filterOption}>
                  <input
                    type="checkbox"
                    id="checkbox2000-2010"
                    checked={this.state.selectedDecades.has("2000-2010")}
                    onChange={() => this.handleDecadeSelect("2000-2010")}
                  />
                  <label for="checkbox2000-2010">
                    2000-2010
                  </label>
                </div>
                <div className={classes.filterOption}>
                  <input
                    type="checkbox"
                    id="checkbox2010-2020"
                    checked={this.state.selectedDecades.has("2010-2020")}
                    onChange={() => this.handleDecadeSelect("2010-2020")}
                  />
                  <label for="checkbox2010-2020">
                    2010-2020
                  </label>
                </div>
                <div className={classes.filterOption}>
                  <input
                    type="checkbox"
                    id="checkbox2020-2030"
                    checked={this.state.selectedDecades.has("2020-2030")}
                    onChange={() => this.handleDecadeSelect("2020-2030")}
                  />
                  <label for="checkbox2020-2030">
                    2020-2030
                  </label>
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