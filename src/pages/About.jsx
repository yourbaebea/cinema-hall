import React, { Component } from "react";
import classes from '../styles/about.module.css';
import vars from '../styles/layout.module.css';
import Query from "../information/Query";
import Image from "../components/Poster/Image";



export default class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      aboutText: null,
      aboutPosters: [],
      loading: true,
    };
  }


  async componentDidMount() {
    try {
      const response = await Query.aboutPosters();
      const responseText = await Query.aboutText()
      if (response && response.objects && responseText.object) {
        const aboutPosters = response.objects;
        this.setState({ aboutPosters });
        const aboutText = responseText.object;
        this.setState({ aboutText });
      }
    } catch (error) {
      console.error('Error fetching posters:', error);
    }

   
  }


  render() {

    const { view } = this.props;
    const { aboutText, aboutPosters, loading } = this.state;
    

    return (
        <div className={classes.page}>
          

          <div className={classes.textBlock}>{aboutText.metadata['text-about']}</div>
          
            {view ?

            <div className={classes.aboutContainer}>
              <div className={classes.madeBy} style={{width: "50%", textAlign: "end", marginRight: "2rem"}}>Made by:</div>
              <div className={classes.aboutFlexRow}>
                <a className={classes.aboutImage}>
                  <Image data={aboutPosters[0].metadata['about-poster'].imgix_url} animate={false}/>
                </a>
                <a className={classes.aboutImage}>
                <Image data={aboutPosters[0].metadata['about-poster'].imgix_url} animate={false}/>
                </a>
                <a className={classes.aboutImage}>
                <Image data={aboutPosters[0].metadata['about-poster'].imgix_url} animate={false}/>
                </a>
              </div>
            </div>
            : 
            <div className={classes.aboutContainer} style={{flexDirection: "column"}}>
              <div className={classes.madeBy} style={{marginBottom: "2rem"}}> Made by:</div>
              <div className={classes.aboutFlexColumn}>
                <a className={classes.aboutImage}>
                <Image data={aboutPosters[0].metadata['about-poster'].imgix_url} animate={false}/>
                </a>
                <a className={classes.aboutImage}>
                <Image data={aboutPosters[0].metadata['about-poster'].imgix_url} animate={false}/>
                </a>
                <a className={classes.aboutImage}>
                <Image data={aboutPosters[0].metadata['about-poster'].imgix_url} animate={false}/>
                </a>
              </div>
            </div>

           }




            
            

        </div>
    
    );
  }

}

