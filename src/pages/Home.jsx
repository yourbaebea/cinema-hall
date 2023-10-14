import React, { Component } from "react";
import classes from '../styles/page.module.css';
import navigation from '../information/navigation.json';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuVisible: false,
    };
  }

  toggleMenuVisibility = () => {
    this.setState((prevState) => ({
      isMenuVisible: !prevState.isMenuVisible,
    }));
  };

  handleGoBack = () => {
    window.history.back();
  };

  render() {
    const { isMenuVisible } = this.state;

    return (
      <div className={classes.page}>

        <div className={classes.menuButtonContainer}>
          <a className={classes.menuButton} onClick={this.toggleMenuVisibility}>
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
          
        <div>
          <div className={classes.imageHome}>icon dragable in the background</div>
        </div>


      </div>
    );
  }
}
