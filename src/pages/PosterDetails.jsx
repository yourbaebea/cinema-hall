import React, { Component, useParams} from "react";
import { useHistory } from 'react-router-dom';
import {BiLeftArrowAlt} from 'react-icons/bi';
import NotFound from "./NotFound";
import Image from "../components/Poster/Image"


import classes from '../styles/poster.module.css'


class PosterDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isImageClicked: false,
      poster: null, // Add a state property to store the poster
    };
  }


  async componentDidMount() {
    try {
      const { data } = this.props;
      const response = await data;
  
      if (response && response.object) {
        const poster = response.object;
        this.setState({ poster: poster });
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  


  handleImageClick = () => {
    this.setState((prevState) => ({
      isImageClicked: !prevState.isImageClicked,
    }));
  };

  handleGoBack = () => {
    window.history.back();
  };

  render() {

    const { data, view} = this.props;
    const { poster } = this.state;
    const icon = view ? 50 : 40;
    const size= (view ? 50 : 100);


    if(poster==null || poster.metadata ==null){
      return (<></>);
    }

   





    return (
      <div className={classes.page}>
        <div className={`${view ? classes.lineWeb : classes.lineMobile}`} style={{ height: `${icon}`, width: `${icon}` }}>
          <div className={classes.button} onClick={this.handleGoBack}>
            <BiLeftArrowAlt size={icon} className={classes.arrow} />
          </div>
        </div>

        <div className={classes.posterContainer}>
          <div className={classes.posterImage} style={{ width: `${size}%` }} onClick={this.handleImageClick}>
            <Image data={poster.metadata.image} animate={false} alt={true} isImageClicked={this.state.isImageClicked} />
          </div>

          <div className={classes.posterText}>
            <h1>{poster.metadata.name}</h1>
            {poster.metadata.details == null ? (
              <div>No Details Available</div>
            ) : (
              <div>
                <div>
                  {Object.entries(poster.metadata.details.metadata).map(([key, value]) => (
                    <div key={key}>
                      {key !== "genres" ? (
                        <div>
                          {(key !== "cast" && key !== "score") && (
                            <>
                              <p><strong>{`${key.charAt(0).toUpperCase() + key.slice(1)}:`}</strong> {Array.isArray(value) ? '' : `${value}`}</p>
                              {Array.isArray(value) ? (
                                <div style={{ marginLeft: '20px' }}>
                                  {value.map((item, index) => (
                                    <p key={index}>
                                      {Object.entries(item.metadata).map(([subKey, subValue], subIndex) => (
                                        <span key={subIndex}><strong>{`${subKey.charAt(0).toUpperCase() + subKey.slice(1)}:`}</strong> {`${subValue}`} </span>
                                      )).join(', ')}
                                    </p>
                                  ))}
                                </div>
                              ) : (
                                <p></p>
                              )}
                            </>
                          )}
                        </div>
                      ) : (
                        <div>
                          <p>
                            <strong>{`${key.charAt(0).toUpperCase() + key.slice(1)}:`}</strong> {value.map(genre => genre.metadata.categories).join('/')}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                <div>
                  <h3><strong>Cast</strong></h3>
                  {poster.metadata.details.metadata.cast && (
                    <ul>
                      {poster.metadata.details.metadata.cast.map((actor, index) => (
                        <li key={index}>
                          <strong>{`${actor.metadata.actor.charAt(0).toUpperCase() + actor.metadata.actor.slice(1)}:`}</strong> {`${actor.metadata.role.charAt(0).toUpperCase() + actor.metadata.role.slice(1)}, `}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                <div>
                  <h3><strong>Score</strong></h3>
                  <ul>
                    {poster.metadata.details.metadata.score && poster.metadata.details.metadata.score.map((score, index) => (
                      <li key={index}>
                        {score.metadata.tomatometer ? (
                          <div>
                            <strong>{score.metadata.platform}:</strong> {score.metadata.value}
                            <span> ({score.metadata.tomatometer}% Tomatometer, {score.metadata.audiencescore}% Audience Score)</span>
                          </div>
                        ) : (
                          <div><strong>{score.metadata.platform}:</strong> {score.metadata.value}/{score.metadata.scale}</div>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            <h3><strong>Description</strong></h3>
            <div>{poster.metadata.description}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default PosterDetails;
