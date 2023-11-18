import React, { Component } from "react";
import Menu from '../components/Menu'
import home from '../styles/home.module.css';
import navigation from '../information/navigation.json';

export default class Home extends Component {

  render() {

    return (
      <div className={home.page}>

        <div>
          <div className={home.imageHome}>icon dragable in the background</div>
        </div>


      </div>
    );
  }
}
