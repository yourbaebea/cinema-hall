import React, { Component } from "react";
import home from '../styles/home.module.css';
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
      <div className={home.page}>

        <div className={home.menuButtonContainer}>
          <a className={home.menuButton} onClick={this.toggleMenuVisibility}>
            menu
          </a>
        </div>

        <div className={`${home.menu} ${isMenuVisible ? home.visible : home.hidden}`}>
          {navigation.map((link, index) => (
            <div className={home.navigation} key={index}>
              <a href={link.href}>{link.name}</a>
            </div>
          ))}
          
        </div>
          
        <div>
          <div className={home.imageHome}>icon dragable in the background</div>
        </div>


      </div>
    );
  }
}
