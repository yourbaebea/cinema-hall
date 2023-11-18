import React, { Component } from "react";
import classes from '../styles/menu.module.css';
import navigation from '../information/navigation.json';

export default class Menu extends Component {


  render() {
    const { isMenuVisible, toggleMenuVisibility } = this.props;

    return (
      <div className={classes.menuContainer}>

        <div className={classes.menuButtonContainer}>
          <a className={classes.menuButton} onClick={toggleMenuVisibility}>
            menu
          </a>
        </div>

        <div className={`${classes.menu} ${isMenuVisible ? classes.visible : classes.hidden}`}>
          {navigation.map((link, index) => (
            <div className={classes.navigation} key={index}>
              <a href={link.href}>{link.name}</a>
            </div>
          ))}
          
        </div>
          
      </div>
    );
  }
}
