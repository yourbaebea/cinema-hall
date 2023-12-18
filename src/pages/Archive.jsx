import React, { Component } from "react";
import classes from '../styles/archive.module.css';
import Image from "../components/Poster/Image";
import Query from "../information/Query";

export default class Archive extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posters: [],
    };
  }

  async componentDidMount() {
    try {
      const response = await Query.fetchPosters();
      if (response && response.objects) {
        const posters = response.objects;
        this.setState({ posters });
      }
    } catch (error) {
      console.error('Error fetching posters:', error);
    }
  }

  render() {
    const { view } = this.props;
    const { posters } = this.state
  

    const size = view ? 20 : 100;
    
    return (
      <div className={classes.page}>
        <div className={classes.posterGrid}>
          {posters.map((poster, index) => (
            <div className={classes.posterContainer} key={index}>
              <div className={classes.posterImage} style={{ width: `${size}%` }}>
                <a className={classes.imageLink} key={index}href={`/poster/${poster.metadata.id}`}>
                  
                  <Image data={poster.metadata.image} animate={true}/>
                </a>
              </div>
              <div className={classes.posterText}>
                <h1>{poster.metadata.name}</h1>
                <p>{poster.metadata.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
