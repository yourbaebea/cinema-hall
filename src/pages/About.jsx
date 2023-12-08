import React, { Component } from "react";
import classes from '../styles/about.module.css';
import vars from '../styles/layout.module.css';
import Query from "../information/Query";
import Image from "../components/Poster/Image";



export default class About extends Component {
  constructor(props) {
    super(props);
  }


  render() {

    const { view } = this.props;

    const aboutfromserver = Query.queryAbout();


    return (
        <div className={classes.page}>

          <div className={classes.textBlock}>{aboutfromserver.text}</div>
          
            {view ?

            <div className={classes.aboutContainer}>
              <div className={classes.madeBy} style={{width: "50%", textAlign: "end", marginRight: "2rem"}}>Made by:</div>
              <div className={classes.aboutFlexRow}>
                <a className={classes.aboutImage}>
                  <Image data={aboutfromserver.anab} animate={false}/>
                </a>
                <a className={classes.aboutImage}>
                <Image data={aboutfromserver.moura} animate={false}/>
                </a>
                <a className={classes.aboutImage}>
                <Image data={aboutfromserver.filipe} animate={false}/>
                </a>
              </div>
            </div>
            : 
            <div className={classes.aboutContainer} style={{flexDirection: "column"}}>
              <div className={classes.madeBy} style={{marginBottom: "2rem"}}> Made by:</div>
              <div className={classes.aboutFlexColumn}>
                <a className={classes.aboutImage}>
                <Image data={aboutfromserver.anab} animate={false}/>
                </a>
                <a className={classes.aboutImage}>
                <Image data={aboutfromserver.moura} animate={false}/>
                </a>
                <a className={classes.aboutImage}>
                <Image data={aboutfromserver.filipe} animate={false}/>
                </a>
              </div>
            </div>

           }




            
            

        </div>
    
    );
  }

}

