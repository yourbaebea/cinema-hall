import React, { Component } from "react";
import classes from '../styles/collection.module.css';
import Filter from "../components/Filter";
import Query from "../information/Query";
import classesImage from '../styles/poster.module.css';

export default class Collection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedNumber: props.posterNumber,
      selectedGenres: new Set(),
      selectedDecades: new Set(),
      searchText: '',
      posters: [],
    };    
  }

  componentDidMount() {
    this.loadPosters();
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.filterOptions !== this.props.filterOptions ||
      prevProps.posterNumber !== this.props.posterNumber ||
      prevProps.filterOptions.searchText !== this.props.filterOptions.searchText
    ) {
      const { selectedGenres, selectedDecades, searchText } = this.props.filterOptions || {};
      const { posterNumber } = this.props;
  
      this.setState({
        selectedGenres: new Set(selectedGenres || []),
        selectedDecades: new Set(selectedDecades || []),
        searchText: searchText || '',
        selectedNumber: posterNumber,
      }, () => {
        this.loadPosters();
      });
    }
  }
  


  async loadPosters() {
    try {
      const { selectedGenres, selectedDecades, searchText } = this.state;
      let posters;
  
      if (searchText !== "") {
        // If searchText exists, use queryFilterFromServer to fetch posters
        const response = await Query.queryFilterFromServer({ searchText: searchText });
        const allPosters = response && response.objects ? response.objects : [];
  
        // Filter posters based on selected genres and decades
        posters = this.filterPosters(allPosters, selectedGenres, selectedDecades);
      } else {
        // If no searchText, fetch all posters using fetchPosters
        const response = await Query.fetchPosters();
        posters = response && response.objects ? response.objects : [];
  
        // Filter posters based on selected genres and decades
        posters = this.filterPosters(posters, selectedGenres, selectedDecades);
      }
  
      this.setState({ posters });
    } catch (error) {
      console.error('Error fetching posters:', error);
    }
  }
  
  
  
  isYearInDecade(year, decadeRange) {
    const [start, end] = decadeRange.split('-');
    return year >= start && year <= end;
  }
  
  filterPosters(posters, selectedGenres, selectedDecades) {
    let filteredPosters = posters;
  
    if (selectedGenres.size > 0) {
      const selectedGenresArray = Array.from(selectedGenres);
      filteredPosters = filteredPosters.filter((poster) =>
        poster.metadata.details.metadata.genres.some((posterGenre) =>
          selectedGenresArray.includes(posterGenre.title)
        )
      );
  
      console.log(filteredPosters);
    }
  
    if (selectedDecades.size > 0) {
      const selectedDecadeArray = Array.from(selectedDecades);
      filteredPosters = filteredPosters.filter((poster) =>
        selectedDecadeArray.some((decade) =>
          this.isYearInDecade(poster.metadata.details.metadata.year, decade)
        )
      );
  
      console.log(filteredPosters);
    }
  
    return filteredPosters;
  }
  
  
  
  
  
  
  
  render() {
    const { view } = this.props;
    const { posters } = this.state;
    const columnCount = getColumnCount(this.state.selectedNumber);
  
    return (
      <div className={classes.page}>
        <div className={classes.collectionContainer}>
          {view ?
            <div>
              <Filter {...this.props}></Filter>
            </div>
            : <></>}
          {posters.length > 0 ? (
            <div className={classes.collectionGrid} style={{ gridTemplateColumns: `repeat(${view ? 3 : columnCount}, 1fr)` }}>
              {posters.map((poster) => (
                <a className={classes.collectionImage} key={poster.metadata.id} href={`/poster/${poster.metadata.id}`}>
                  <div className={classesImage.imageLink}>
                    <div className={classesImage.imageWrapper}>
                      <img className={classesImage.image} src={poster.metadata.image.metadata.default.url} alt="poster" />
                    </div>
                  </div>
                </a>
              ))}
            </div>
          ) : (
            <p>No posters match your search...</p>
          )}
        </div>
      </div>
    );
  }
  
}

function getColumnCount(posterNumber) {
  switch (posterNumber) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 3:
      return 3;
    default:
      return 2;
  }
}
