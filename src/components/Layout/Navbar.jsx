import React, { Component } from "react";
import classes from '../../styles/layout.module.css';

import navigation from '../../information/navigation.json';


export default class Navbar extends Component {
  
  render() {
    
    return (
      <div className={classes.navContainer}>


      
      <div className={classes.navbar}>{navigation.map((link, index) => (
        <div className={classes.navigation} key={index}>
          <a href={link.href}>{link.name}</a>
        </div>
      ))} 
      </div>
      </div>
    );
  }
}
        
