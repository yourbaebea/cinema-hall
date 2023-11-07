import React, { Component } from "react";

import classes from '../../styles/layout.module.css'
import Navbar from "./Navbar";
import Footer from "./Footer"

class Layout extends Component {
  render() {
    const { page } = this.props;

    let PageComponent = null;

    try {
      PageComponent = require(`../../pages/${page}`).default;
    } catch (error) {
      PageComponent = require(`../../pages/NotFound`).default;
    }


    return (

    <div className={classes.container}>
      
      <Navbar/>

      <div className={classes.PageComponent}>
        <PageComponent/>
      </div>
      
      

      <Footer/>


    </div>

    );
  }
}

export default Layout;
