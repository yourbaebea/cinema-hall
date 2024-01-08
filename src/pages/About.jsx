import React, { Component } from "react";
import classes from '../styles/about.module.css';
import vars from '../styles/layout.module.css';
import Query from "../information/Query";
import Image from "../components/Image";
import classesImage from '../styles/poster.module.css'


export default class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      aboutText: null,
      loading: true,
      poster_image: [],
      error: null,
    };
  }

  componentDidMount() {
    this.loadData();
  }

  async loadData() {
    try {
      const response = await Query.aboutPosters();
      const responseText = await Query.aboutText();


      if (response && response.objects) {
        const posters = response.objects.map(
          (poster) => poster.metadata['about-poster']

        );

        this.setState({ poster_image: posters });
      }

    
      if (responseText && responseText.object) {
        this.setState({ aboutText:  responseText.object.metadata['text-about']});
      }


    } catch (error) {
      console.error('Error fetching data:', error);
      this.setState({ error: 'Error fetching data'});
    }
  }

  render() {
    const { view } = this.props;
    const { aboutText, poster_image } = this.state;


    return (
      <div className={classes.page}>
        <div className={classes.textBlock}>{aboutText}</div>
        <div className={classes.aboutContainer}>
          <div className={classes.madeBy} style={{ width: '50%', textAlign: 'end', marginRight: '2rem' }}>
            Made by:
          </div>
          <div className={view ? classes.aboutFlexRow : classes.aboutFlexColumn}>
            {poster_image.slice(0, 3).map((data, index) => (
              <a key={index} className={classes.aboutImage}>
                <div className={classesImage.imageLink}>
                  <div className={classesImage.imageWrapper}>
                    <img className={classesImage.image} src={data.imgix_url} alt="poster"/>
                    </div>
                  </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
