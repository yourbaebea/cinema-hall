import React, { Component, useParams} from "react";
import { useHistory } from 'react-router-dom';
import {BiLeftArrowAlt} from 'react-icons/bi';
import NotFound from "./NotFound";
import Image from "../components/Poster/Image"


import classes from '../styles/poster.module.css'


class PosterDetails extends Component {
  constructor(props) {
    super(props);
  }

  handleGoBack = () => {
    window.history.back();
  };

  render() {

    const { id, data, view} = this.props;
  
    const icon = view ? 50 : 40;
    const size= (view ? 40 : 100);


    return (
      <div className={classes.page}>
              
              <div className={`${view ? classes.lineWeb : classes.lineMobile}`} style={{height: `${icon}`,width: `${icon}` }}>
              <div className={classes.button} onClick={this.handleGoBack}>
                  <BiLeftArrowAlt size={icon} className={classes.arrow}/>
                </div>
              </div> 


              <div className={classes.posterContainer}>
              <div className={classes.posterImage} style={{width: `${size}%` }} >
                
                  <Image data={data.image} animate={true}></Image>

                </div>

                
                <div className={classes.posterText}>
                  <h1>{data.name}</h1>
                  {data.details == null ?
                    <div>No Details Available</div>
                    :
                    <div>
                      <div>
                        {Object.entries(data.details).map(([key, value]) => (
                          <div key={key}>
                            {(key !== "cast" && key !== "score") && (
                              <>
                                <p><strong>{`${key.charAt(0).toUpperCase() + key.slice(1)}:`}</strong> {Array.isArray(value) ? '' : `${value}`}</p>
                                {Array.isArray(value) ? (
                                  <div style={{ marginLeft: '20px' }}>
                                    {value.map((item, index) => (
                                      <p key={index}>{Object.entries(item).map(([subKey, subValue], subIndex) => (
                                        <span key={subIndex}><strong>{`${subKey.charAt(0).toUpperCase() + subKey.slice(1)}:`}</strong> {`${subValue}`} </span>
                                      )).join(', ')}</p>
                                    ))}
                                  </div>
                                ) : (
                                  <p></p>
                                )}
                              </>
                            )}
                          </div>
                        ))}
                      </div>
                      <div>
                      <h3><strong>Cast</strong></h3>
                      {data.details && data.details.cast && (
                        <ul>
                          {data.details.cast.map((actor, index) => (
                            <li key={index}>
                              <strong>{`${Object.keys(actor)[0].charAt(0).toUpperCase() + Object.keys(actor)[0].slice(1)}:`}</strong> {`${Object.values(actor)[0].charAt(0).toUpperCase() + Object.values(actor)[0].slice(1)}, `}
                              <strong>{`${Object.keys(actor)[1].charAt(0).toUpperCase() + Object.keys(actor)[1].slice(1)}:`}</strong> {`${Object.values(actor)[1].charAt(0).toUpperCase() + Object.values(actor)[1].slice(1)}`}
                            </li>
                          ))}
                        </ul>
                      )}

                      </div>
                      <div>
                      <h3><strong>Score</strong></h3>
                      <ul>
                        {data.details.score && data.details.score.map((score, index) => (
                          <li key={index}>
                            
                            {score.tomatometer ? 
                              <div>
                                <strong>{score.platform}:</strong> {score.value}
                                <span> ({score.tomatometer}% Tomatometer, {score.audienceScore}% Audience Score)</span>
                              </div> 
                            :
                            <div><strong>{score.platform}:</strong> {score.value}/{score.scale}</div>
                            }
                          </li>
                        ))}
                      </ul>







                      </div>
                    </div>
                  }

                <h3><strong>Description</strong></h3>
                
                <div>{data.description}</div>
              </div>
        </div>

        
      </div>

    );
  }
}

export default PosterDetails;
